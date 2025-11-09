import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const StartSwitch = () => {
    return (
        <section className='sm:mx-4 md:mx-[30px] 2xl:mx-[87px] relative'>
            <section className='max-w-[1746px] rounded-3xl md:rounded-[90px] mx-auto bg-white md:min-h-[968px] flex flex-col lg:flex-row gap-3 md:gap-[50px] justify-center items-center pt-[40px] px-[15px] p-[20px]'>
                <div className='flex flex-col gap-[13px] md:gap-[23px] w-full lg:w-[568px]'>
                    <div className='flex flex-col gap-[13px] lg:gap-[10px]'>
                        <h2 className='text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[106px] playfair font-medium'>The Start <br />
                            <span className=' text-[#CD623B]'>Switch</span>
                        </h2>
                        <p className='text-base leading-[27px] md:text-lg lato text-[#0C0407] font-medium' style={{ letterSpacing: "0.18px" }}>
                            Anil’s first book, The Start Switch, explores what it really takes to begin meaningful change—not
                            just in work, but in life. It introduces the five-phase <b>Switch Curve: Drift, Bend, Switch, Stack,
                            Breakthrough</b>, and shows how small, consistent actions compound into breakthroughs that
                            last.

                        </p>
                        <p className='text-base leading-[27px] md:text-lg lato text-[#0C0407] font-medium' style={{ letterSpacing: "0.18px" }}>
                            Through research and lived experience, the book challenges the myth of motivation and
                            replaces it with a framework for momentum. It helps readers move from overthinking to action,
                            and from distraction to measurable progress.

                        </p>
                    </div>
                    
                    <div className='flex justify-start items-center gap-2.5 md:gap-3 flex-wrap'>
                        <Link href="/#graph">
                            <button className='hover:bg-[#CD623B] transition cursor-pointer w-[163px] h-[50px] md:w-[196px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'>
                                Switch Curve
                                <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                            </button>
                        </Link>
                        <Link href="/#freetoolkit">
                            <button className='hover:bg-[#CD623B] transition hover:text-white cursor-pointer w-[156px] h-[50px] md:w-[187px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#FFFFFF] border border-[#CD623B] playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#0C0407] flex justify-between items-center'>
                                Free toolkit
                                <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                            </button></Link>
                    </div>
                </div>
                <Image src="/images/flip.png" width={721} height={721} alt="start switch image" className='w-full lg:w-[600px] 2xl:w-[800]' />
            </section>

        </section>
    )
}


export default StartSwitch
