'use client'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'

const Review = () => {
  const [email, setEmail] = useState<string>('')
  const [fileName, setFileName] = useState<string>('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement

    // ✅ Native validation
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    try {
      const res = await fetch('/api/sendReview', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setError(null)
        setEmail('')
        setFileName('')
        // reset after few seconds
        setTimeout(() => setSuccess(false), 4000)
      } else {
        setError('Failed to send. Try again.')
        setSuccess(false)
      }
    } catch (err) {
      setError('Something went wrong.')
      setSuccess(false)
    }
  }

  return (
    <section className='max-w-[1300px] w-[95%] mx-auto px-[16px] sm:px-[39px] py-[50px] md:py-[99px] flex flex-col md:w-full items-center rounded-[24px] md:rounded-none justify-start review_bg min-h-[550px] md:min-h-[750px]'>
      <div className='flex flex-col gap-[16px] md:gap-[32px]'>
        <h2 className='text-[26px] sm:text-[32px] leading-[42px] text-center md:text-[64px] md:leading-[75px] font-medium playfair text-white'>
          Leave a review → <br />
          Get my next book free
        </h2>
        <p className='text-center text-base md:text-lg font-normal lato text-[#FFFFFF]'>
          If The Start Switch helped you, leave a short honest review and send me proof.
        </p>
        <p className='text-center text-lg font-bold lato text-[#FFFFFF]'>
          I'll personally send you a free early copy of my next book - The Hustle Delusion - before it launches.
        </p>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center gap-4'
        >
          {/* Email input */}
          <div className='w-full md:w-[566px] bg-white mx-auto py-[16px] px-[32px] md:py-[20px] h-[56px] md:h-[64px] flex items-center gap-[10px] rounded-[90px]'>
            <Image width={24} height={24} src='/images/email.png' alt='email icon' />
            <input
              type='email'
              name='email'
              placeholder='you@example.com'
              className='border-none outline-none bg-transparent w-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='flex justify-center items-center gap-2.5 md:gap-3 flex-wrap relative'>
            {/* Send Proof button */}
            <button
              type='submit'
              className='w-[120px] sm:w-[153px] h-[50px] md:w-[183px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] md:border-none playfair text-[10px] sm:text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'
            >
              Send Proof
              <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'>
                <GoArrowUpRight />
              </span>
            </button>

            {/* Select file button */}
            <div className='relative w-[130px] sm:w-[154px] h-[50px] md:w-[185px] md:h-[60px]'>
              <button
                type='button'
                className='absolute inset-0 w-full h-full rounded-[28px] md:rounded-[30px] bg-[#FFFFFF] border border-[#CD623B] md:border-none playfair text-[10px] sm:text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#0C0407] flex justify-between items-center p-2.5 pl-[22px] md:p-3 md:pl-[26px]'
                onClick={() => fileInputRef.current?.click()}
              >
                {fileName ? fileName.slice(0, 10) + '...' : 'Select a file'}
                <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'>
                  <Image width={11} height={14} src='/images/file.png' alt='file icon' />
                </span>
              </button>

              {/* ✅ File input (invisible but validated) */}
              <input
                ref={fileInputRef}
                type='file'
                name='file'
                required
                accept='.jpeg,.jpg,.png,.pdf'
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  setFileName(file ? file.name : '')
                }}
                className='absolute inset-0 w-full h-full cursor-pointer opacity-0'
              />
            </div>
          </div>

          {/* ✅ Messages */}
          {error && (
            <p className='text-red-400 text-center text-sm mt-3'>{error}</p>
          )}
          {success && (
            <div className='flex items-center gap-2 text-green-600 text-sm mt-1 mx-auto'>
              <FaCheckCircle className='text-white' />
              <p className='text-white text-center text-sm'>
                Review sent successfully!
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Review
