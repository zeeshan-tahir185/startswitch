import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Media = () => {
    return (
        <section className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col gap-[25px] md:gap-[67px] w-full items-center justify-center' id='freetoolkit'>
            <div className='w-full flex flex-col lg:flex-row gap-3 md:gap-[50px] items-center justify-center text-center'>
                <div className='flex flex-col gap-[13px] md:gap-[23px] w-full lg:w-[700px] items-center justify-center'>
                    <div className='flex flex-col gap-[13px] lg:gap-[10px]'>
                        <h2 className='text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[106px] playfair font-medium'>In The
                            <span className='text-[#CD623B]'> Media</span>
                        </h2>
                    </div>
                    <p className='text-lg leading-[27px] lato text-[#262A34] font-medium' style={{ letterSpacing: "0.18px" }}>Anil’s story has been featured in <b>Bloomberg, Schwab Network</b>, and other leading
                        platforms. He has appeared on podcasts such as <b>Absolute Return</b>, where he shared
                        lessons from building and scaling global companies.
                    </p>

                    <Link href="/about-anil-mathews" >
                        <button className='hover:bg-[#CD623B] transition w-[292px] h-[50px] cursor-pointer md:w-[350px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] md:border-none playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'>
                            Learn more about the author
                            <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Media
