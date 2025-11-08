'use client'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Toolkit = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    setSuccess(false)

    if (!email) {
      setError('Please enter your email.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setEmail('')
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
    <section
      className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col gap-[25px] md:gap-[67px] w-full items-center justify-center'
      id='freetoolkit'
    >
      <div className='w-full flex flex-col lg:flex-row gap-3 md:gap-[50px] items-center justify-between'>
        <div className='flex flex-col gap-[13px] md:gap-[23px] w-full lg:w-[570px]'>
          <div className='flex flex-col gap-[13px] lg:gap-[10px]'>
            <h2 className='text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[106px] playfair font-medium text-center md:text-left'>
              Your free Start <span className='text-[#CD623B]'> Switch Toolkit</span>
            </h2>
            <p
              className=' hidden lg:block text-lg leading-[27px] md:text-[22px] lato text-[#0C0407] font-bold'
              style={{ letterSpacing: '0.18px' }}
            >
              Don’t just read. Start.
            </p>
          </div>
          <p
            className='text-lg hidden lg:block leading-[27px] lato text-[#262A34] font-medium'
            style={{ letterSpacing: '0.18px' }}
          >
            The Start Switch Toolkit is your free companion to take action fast —before the overthinking creeps back in.
          </p>
          <p
            className='text-lg hidden lg:block leading-[27px] lato text-[#262A34] font-semibold'
            style={{ letterSpacing: '0.18px' }}
          >
            Included with every book. Or download it free now.
          </p>
        </div>

        {/* Email form - same layout */}
        <div className='w-full lg:w-[539px] bg-white rounded-[24px] py-[24px] px-[15px] sm:px-[25px] lg:py-[34px] lg:px-[41px] flex flex-col gap-[34px] '>
          <h2 className='text-[28px] lg:text-[35px] 2xl:text-[42px] playfair font-medium text-[#151515] text-center md:text-left'>
            Email in. Toolkit out. That simple.
          </h2>
          <div className='flex flex-col gap-[12px] '>
            <p className='text-base lato font-medium'>Email</p>
            <div className='bg-[#262A340D] border border-[#3032441C] w-full min-h-[88px] px-[22px] py-[16px] lg:p-[22px] rounded-xl flex items-center justify-between '>
              <div className='flex items-center gap-[12px] '>
                <img src='/images/email.png' alt=''  />
                <input
                  type='email'
                  placeholder='you@example.com'
                  className='border-none outline-none bg-transparent text-sm placeholder:text-[#151515] placeholder: mt-[-5px]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className='font-medium lato w-[75px] h-[44px] rounded-[90px] bg-[#CD623B] text-white cursor-pointer disabled:opacity-50'
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? '...' : 'Send'}
              </button>
            </div>

            {/* ✅ Error or Success message below box */}
            {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
            {success && (
              <div className='flex items-center gap-2 text-green-600 text-sm mt-1'>
                <FaCheckCircle />
                <span>Toolkit unlocked. Check your inbox.</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile text (same as your layout) */}
        <div className='flex flex-col gap-[13px] md:gap-[23px] w-full lg:w-[570px] lg:hidden'>
          <div className='flex flex-col gap-[13px] lg:gap-[10px] '>
            <p
              className='text-lg leading-[27px] md:text-[22px] lato text-[#0C0407] font-bold'
              style={{ letterSpacing: '0.18px' }}
            >
              Don’t just read. Start.
            </p>
          </div>
          <p
            className='text-lg lg:hidden leading-[27px] lato text-[#262A34] font-medium'
            style={{ letterSpacing: '0.18px' }}
          >
            The Start Switch Toolkit is your free companion to take action fast —before the overthinking creeps back in.
          </p>
          <p
            className='text-lg lg:hidden leading-[27px] lato text-[#262A34] font-semibold'
            style={{ letterSpacing: '0.18px' }}
          >
            Included with every book. Or download it free now.
          </p>
        </div>
      </div>

      {/* Rest content untouched */}
      <div className='flex flex-col gap-[13px] lg:gap-[23px] mx-auto'>
        <h3 className='text-lg md:text-[22px] font-bold lato text-[#0C0407]'>What’s inside:</h3>
        <div className='flex flex-wrap items-center gap-[2px] md:gap-[44px]'>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px] '>
            <img src='/images/check.png' alt='' />
            <p>Start checklist</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>Action menu</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>The Switch Curve™ guide</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>Momentum map</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>Launch copy templates</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>Founder reflection prompts</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>Tools that move you fast</p>
          </div>
          <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px] w-full sm:w-[280px]'>
            <img src='/images/check.png' alt='' />
            <p>Exit conditions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Toolkit
