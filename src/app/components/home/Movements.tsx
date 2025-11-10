import Image from 'next/image'
import React from 'react'

const Movements = () => {
    return (
        <section className='sm:mx-4 md:mx-[30px] 2xl:mx-[87px] ' id='movement'>
            <section className='max-w-[1746px] movements_bg rounded-3xl md:rounded-[90px] mx-auto bg-white min-h-[935px] flex flex-col lg:flex-row gap-3 md:gap-[50px] justify-center items-center pt-[38px] px-[15px] p-[20px]'>
                <div className='flex flex-col gap-[21px] md:gap-[31px] w-full lg:w-[616px] text-center md:text-left'>
                    <h2 className='text-[38px] leading-[49px] md:text-[70px] 2xl:text-[80px] md:leading-[106px] playfair font-medium text-white'>Join the movement → <br />
                        <span className=' text-[#CD623B]'>#TheStartSwitch</span>
                    </h2>
                    <p className='text-lg leading-[27px] lato text-white font-medium' style={{ letterSpacing: "0.18px" }}>Started something because of this book?
                        Took your first bold step this week?</p>
                    <p className='text-lg leading-[27px] lato text-white font-bold' style={{ letterSpacing: "0.18px" }}>Post your Day 1, your idea wall, or your biggest shift.
                        Tag it with <span className='text-[#CD623B]'> #TheStartSwitch</span> and help someone else begin.
                    </p>
                    <p className='text-lg leading-[27px] lato text-white font-medium' style={{ letterSpacing: "0.18px" }}>This isn’t just a book. <br />
                        It’s a decision. <br />
                        The more you show, the more others start</p>
                </div>
                <Image width={522} height={567} src="/images/movement.png" alt="movements image" className='w-full mr-[50px] lg:w-[450px] 2xl:w-[522px] ' />
            </section>

        </section>
    )
}

export default Movements
