import Image from 'next/image'
import React from 'react'

const MotivationTalk = () => {
    return (
        <section className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col lg:flex-row gap-[25px] md:gap-[60px] w-full'>
            <Image width={541} height={679} alt='motivation image' src="/images/motivation.png" className='w-full lg:w-[541px] order-2 lg:order-1' />
            <div className='flex flex-col gap-[21px] md:gap-[31px] w-full lg:w-[580px] order-1 md:order-2'>
                <h2 className='text-[38px] leading-[49px] md:text-[100px] md:leading-[106px] playfair font-medium'>This isn’t a <br />
                    <span className='italic font-semibold'>motivational</span><span className='italic font-semibold text-[#CD623B]'> pep talk.</span>
                </h2>
                <p className='text-lg leading-[27px] lato text-[#262A34] font-medium' style={{ letterSpacing: "0.18px" }}>It’s a no-fluff guide to help you finally start the thing you’ve been sitting on —
                    without needing more time, more clarity, or more confidence.</p>
                <p className='text-lg leading-[27px] lato text-[#262A34] font-bold' style={{ letterSpacing: "0.18px" }}>If you’ve been stuck in planning mode, perfectionism, or second-guessing... <br />
                    The Start Switch was written for you.
                </p>
                <div className='flex flex-col gap-[2px] pb-3'>
                    <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                        <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                        <p>Trusted by 2,500+ early readers</p>
                    </div>
                    <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                        <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                        <p>Includes the 7-day Start Sprint</p>
                    </div>
                    <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                        <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                        <p>Toolkit, templates, and a movement</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MotivationTalk
