import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const HeroSedtion = () => {
    return (
        <section className='hero_section_bg w-full pt-[40px]'>
            <div className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col gap-[25px] md:gap-[50px] w-full'>
                <h2 className='text-center uppercase text-xl leading-5 md:text-2xl font-semibold playfair md:mb-[55px]'>Every failure had one thing in common: <span className='text-[#CD623B]'> it never started.</span></h2>
                <h1 className='text-center main_heading_spacing playfair font-medium text-[38px] leading-[47px] md:text-[142px] md:leading-[152px]'>You’ve had the idea. <br />
                    <span className='text-[#CD623B] ubuntu'>But it never launched</span></h1>
                <div className='flex justify-center items-center gap-2.5 md:gap-3 flex-wrap'>
                    <Link href="https://www.amazon.com/dp/B0FH41DL25" target='_blank' rel="noopener">
                        <button className='hover:bg-[#CD623B] transition w-[150px] sm:w-[185px] cursor-pointer h-[50px] md:w-[221px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] playfair text-[10px] font-bold sm:text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'>
                        Read the book
                        <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                    </button>
                    </Link>
                    <Link href="/#freetoolkit" >
                        <button className='hover:bg-[#CD623B] transition hover:text-white cursor-pointer w-[160px] sm:w-[205px] h-[50px] md:w-[246px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#FFFFFF] border border-[#CD623B] playfair text-[10px] font-bold sm:text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#0C0407] flex justify-between items-center'>
                        Get the free toolkit
                        <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                    </button>
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row gap-[30px] justify-between items-center relative'>
                    <Image src="/images/hero_mob_img.png" width={277} height={397} alt='hero_mob_img' className='md:hidden' style={{ boxShadow: "-40.94px 40.94px 81.88px 0px #00000080"
}} />
                    <div className='flex flex-col border-y border-[#FFFFFF9E] w-full md:w-[496px] '>
                        <div className='py-[25px] px-7 md:p-9 rounded-xl flex flex-col gap-[27px]!'>
                            <h3 className='text-lg font-bold text-[#CD623B] '>01</h3>
                            <p className='text-lg md:text-xl leading-7 font-semibold text-[#0C0407] one_letter_space'>Not because it wasn’t good— <br />
                                but because you waited too long or walked away too early.
                            </p>
                        </div>
                        <div className='py-[25px] px-7 md:p-9 rounded-xl flex flex-col gap-[27px] bg-[#FFFFFF52]'>
                            <h3 className='text-lg font-bold text-[#CD623B] '>02</h3>
                            <p className='text-lg md:text-xl leading-7 font-semibold text-[#0C0407] one_letter_space'><span className='text-[#CD623B]'>The Start Switch</span> is the guide to finally <br /> doing the thing you’ve been thinking about
                            </p>
                        </div>
                        <div className='py-[25px] px-7 md:p-9 rounded-xl flex flex-col gap-[27px]'>
                            <h3 className='text-lg font-bold text-[#CD623B] '>03</h3>
                            <p className='text-lg md:text-xl leading-7 font-semibold text-[#0C0407] one_letter_space'>It’s not about being ready. It’s <br /> about flipping the switch.
                            </p>
                        </div>
                    </div>
                    <Image src="/images/hero_desk.png" width={694} height={759} alt='hero_mob_img' className='hidden md:block' />
                </div>
            </div>
        </section>
    )
}

export default HeroSedtion
