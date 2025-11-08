'use client'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'

const Review = () => {
    const [email, setEmail] = useState<string>('')
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleFileSelect = () => {
        const input = document.getElementById('fileInput') as HTMLInputElement | null
        if (input) {
            input.click()
        }
    }

    const handleSubmit = async () => {
        setError('')
        setSuccess(false)

        if (!email) return setError('Please enter your email.')
        if (!file) return setError('Please select a file.')

        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('email', email)
            formData.append('file', file)

            const res = await fetch('/api/sendReview', {
                method: 'POST',
                body: formData,
            })
            const data = await res.json()

            if (data.success) {
                setSuccess(true)
                setEmail('')
                setFile(null)
            } else {
                setError('Failed to send. Try again.')
            }
        } catch (err) {
            setError('Something went wrong.')
        } finally {
            setLoading(false)
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

                <div className='w-full md:w-[566px] bg-white mx-auto py-[16px] px-[32px] md:py-[20px] h-[56px] md:h-[64px] flex items-center gap-[10px] rounded-[90px]'>
                    <img src='/images/email.png' alt='' />
                    <input
                        type='email'
                        placeholder='Qwerty99@gmail.com'
                        className='border-none outline-none bg-transparent w-full'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex justify-center items-center gap-2.5 md:gap-3 flex-wrap'>
                    <button
                        onClick={handleSubmit}
                        disabled={loading || !email || !file}
                        className='w-[120px] sm:w-[153px] h-[50px] md:w-[183px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] md:border-none playfair text-[10px] sm:text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center disabled:opacity-50'
                    >
                        {loading ? 'Sending...' : 'Send Proof'}
                        <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'>
                            <GoArrowUpRight />
                        </span>
                    </button>

                    <button
                        type='button'
                        onClick={handleFileSelect}
                        className='w-[130px] sm:w-[154px] h-[50px] md:w-[185px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#FFFFFF] border border-[#CD623B] md:border-none playfair text-[10px] sm:text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#0C0407] flex justify-between items-center'
                    >
                        {file ? file.name.slice(0, 10) + '...' : 'Select a file'}
                        <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'>
                            <img src='/images/file.png' alt='' />
                        </span>
                    </button>

                    <input
                        type='file'
                        id='fileInput'
                        className='hidden'
                        onChange={(e) => {
                            const selectedFile = e.target.files?.[0] || null
                            setFile(selectedFile)
                        }}
                    />
                </div>

                {error && (
                    <p className='text-red-400 text-center text-sm mt-3'>{error}</p>
                )}
                {success && (
                    <div className='flex items-center gap-2 text-green-600 text-sm mt-1 mx-auto '>
                        <FaCheckCircle className='text-white' />
                        <p className='text-white text-center text-sm '>
                            Review sent successfully!
                        </p>
                    </div>

                )}
            </div>
        </section>
    )
}

export default Review
