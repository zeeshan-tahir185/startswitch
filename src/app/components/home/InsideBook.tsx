import Image from 'next/image'
import React from 'react'

const InsideBook = () => {
    return (
        <section className='sm:mx-4 md:mx-[30px] 2xl:mx-[87px] relative'>
            <section className='max-w-[1746px] rounded-3xl md:rounded-[90px] mx-auto bg-white min-h-[1000px] flex flex-col lg:flex-row gap-3 md:gap-[50px] justify-center items-center pt-[40px] px-[15px] p-[20px]'>
                <div className='flex flex-col gap-[13px] md:gap-[23px] w-full lg:w-[650px]'>
                    <div className='flex flex-col gap-[13px] lg:gap-[10px]'>
                        <h2 className='text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[106px] playfair font-medium'>What’s inside<br />
                            <span className='italic font-semibold text-[#CD623B]'>the book</span>
                        </h2>
                        <p className='text-lg leading-[27px] md:text-[22px] lato text-[#0C0407] font-bold' style={{ letterSpacing: "0.18px" }}>
                            A roadmap for finally starting—and sticking.
                        </p>
                    </div>
                    <p className='text-lg leading-[27px] lato text-[#262A34] font-medium' style={{ letterSpacing: "0.18px" }}>Inside The Start Switch, you’ll learn how to:</p>
                    <div className='flex flex-col gap-[2px] pb-3'>
                        <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                            <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                            <p>Rewire your mindset to move through fear</p>
                        </div>
                        <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                            <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                            <p>Escape the traps that keep most people frozen</p>
                        </div>
                        <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                            <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                            <p>Use The Switch Curve™ to stay in the game</p>
                        </div>
                        <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                            <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                            <p>Run the 7-Day Start Sprint and launch fast</p>
                        </div>
                        <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                            <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                            <p>Build momentum from small visible wins</p>
                        </div>
                        <div className='flex text-base lato leading-6 font-medium text-[#000000] py-[8px] items-center gap-[22px]'>
                            <Image width={24} height={24} src="/images/check.png" alt="check icon" />
                            <p>Keep going after Day 1—when most people quit</p>
                        </div>
                    </div>
                </div>
                <Image src="/images/inside.png" alt="inside section image" width={672} height={750} className='w-full lg:w-[470px] 2xl:w-[587px] hidden lg:block' />
                <Image width={314} height={412} src="/images/inside_mob.svg" alt="inside mobile image" className='w-full md:w-[587px] lg:hidden' />
            </section>
            <section className='max-w-[1167px] w-full bg-[#262A34] rounded-3xl h-[166px] md:h-[213px] flex justify-center items-center py-[31px] px-[14px] mt-4 md:mt-0 mx-auto lg:absolute bottom-[-100px] left-0 right-0 '>
                <h3 className='playfair text-[32px] leading-[52px] md:text-[42px] md:leading-[62px] font-semibold text-[#FFFFFF] text-center'>Read it in a weekend. <br />
                    <span className='text-[#EB7347]'>Apply it for life.</span></h3>
            </section>
        </section>
    )
}

export default InsideBook
