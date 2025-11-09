import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Today = () => {
    return (
        <section className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col gap-[25px] md:gap-[67px] w-full items-center justify-center' id='freetoolkit'>
            <div className='w-full flex flex-col lg:flex-row gap-3 md:gap-[50px] items-center justify-between'>
                <div className='flex flex-col gap-[13px] md:gap-[23px] w-full lg:w-[570px]'>
                    <div className='flex flex-col gap-[13px] lg:gap-[10px]'>
                        <h2 className='text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[106px] playfair font-medium'>Today
                        </h2>
                    </div>
                    <p className='text-lg leading-[27px] lato text-[#262A34] font-medium' style={{ letterSpacing: "0.18px" }}>Today, Anil leads Alphabyte Ventures, bringing the same principles from The <span className='italic'>Start Switch</span> into
                        the companies he builds. Each venture starts with intent, scales with clarity, and stays anchored
                        in impact.

                    </p>
                    <p className='text-lg hidden lg:block leading-[27px] lato text-[#262A34] font-semibold' style={{ letterSpacing: "0.18px" }}>His work bridges business and behavior, showing how systems and psychology combine to
                        make progress inevitable.

                    </p>
                    <Link href="https://www.alphabyte.com/" target='_blank' rel="noopener">
                        <button className='hover:bg-[#CD623B] transition cursor-pointer w-[200px] h-[50px] md:w-[240px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'>
                            Alphabyte Ventures
                            <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                        </button>
                    </Link>
                </div>
                <Image src="/images/today.png"  alt="" width={600} height={350} className='rounded-[15px] w-full lg:w-[600px]' />
            </div>
        </section>
    )
}

export default Today
