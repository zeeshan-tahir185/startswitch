import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const AboutAuthor = () => {
    return (
        <section className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col lg:flex-row gap-[30px] w-full items-center justify-between ' id='about'>
            <Image  src="/images/about.png" width={491} height={695} alt="about image" className='w-full h-[400px] lg:h-auto lg:w-[491px] object-cover object-top rounded-[24px]' />
            <div className='flex flex-col gap-[21px] md:gap-[31px] w-full lg:w-[620px]'>
                <h2 className='text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[106px] font-medium playfair text-[#151515]'>About the <span className='text-[#CD623B]'>author</span></h2>
                <div className='flex flex-col gap-[21px] md:gap-[18px]'>
                    <p className='text-[#262A34] text-lg font-medium lato '>Anil Mathews is a serial entrepreneur and startup mentor who’s built 18 ventures over 25
                        years—with a couple of wins, plenty of near misses, and one unforgettable ride.
                    </p>
                    <p className='text-[#262A34] text-lg font-medium lato '>He’s raised over $100 million in venture capital, including from Sequoia Capital, and built
                        companies with a global presence across the U.S., U.K., Singapore, Japan, India, and Australia.
                    </p>
                    <p className='text-[#262A34] text-lg font-medium lato '>His work has been featured in TechCrunch, Forbes, and on stage at CES. </p>
                    <p className='text-[#0C0407] text-lg font-bold lato '>Anil writes for anyone who’s waited too long—or walked away too early.</p>
                </div>
                <Link href="/about-anil-mathews" >
                <button className='hover:bg-[#CD623B] transition w-[292px] h-[50px] cursor-pointer md:w-[350px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] md:border-none playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'>
                    Learn more about the author
                    <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                </button>
                </Link>
            </div>
        </section>
    )
}

export default AboutAuthor
