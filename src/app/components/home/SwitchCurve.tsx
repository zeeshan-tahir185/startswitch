import React from 'react'

const SwitchCurve = () => {
    return (
        <section id='graph' className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col gap-[25px] md:gap-[60px] w-full items-center justify-center md:mt-[100px]'>
            <h3 className='text-[38px] leading-[38px] md:text-[70px] md:leading-[80px] 2xl:text-[100px] 2xl:leading-[97px] font-medium playfair text-center'>The Switch <span className='text-[#CD623B]'>Curve™</span></h3>
            <div className='flex flex-col lg:flex-row w-full border-y border-[#D5D5D59E]'>
                <div className='w-full lg:w-[600px] min-h-[165px] md:h-[225px] py-[25px] px-[28px] lg:p-[36px] '>
                    <h3 className='text-lg font-bold text-[#CD623B] mb-[27px]'>01</h3>
                    <h3 className='text-xl lg:text-[22px] font-bold text-[#0C0407] lato mb-[5px] lg:mb-3' style={{ letterSpacing: "1px" }}>Most people don’t fail at the start</h3>
                    <h3 className='text-lg lg:text-[20px] font-normal text-[#0C0407] lato' style={{ letterSpacing: "1px" }}>Most people don’t fail at the start</h3>
                </div>
                <div className='w-full lg:w-[600px] min-h-[165px] md:h-[225px] py-[25px] px-[28px] lg:p-[36px] bg-[#FFFFFFBD] rounded-xl'>
                    <h3 className='text-lg font-bold text-[#CD623B] mb-[27px]'>02</h3>
                    <h3 className='text-xl lg:text-[22px] font-bold text-[#0C0407] lato mb-[5px] lg:mb-3' style={{ letterSpacing: "1px" }}>That moment where progress stalls, belief dips, and doubt creeps in?
                    </h3>
                    <h3 className='text-lg lg:text-[20px] font-normal text-[#0C0407] lato' style={{ letterSpacing: "1px" }}>That’s where The Switch Curve™ comes in.
                    </h3>
                </div>
            </div>
            <img src="/images/graph.svg" alt="" className='' />
            <div className='flex flex-wrap justify-center items-center gap-[12px] md:gap-[14px] flex-col sm:flex-row'>
                <div className='w-full sm:w-[390px] h-[126px] p-[23px] flex flex-col gap-[2px] bg-[#FFFFFF] rounded-[16px]'>
                    <div className='flex  items-center gap-[12px] '>
                        <img src="/images/check.png" alt="" />
                        <h3 className='text-xl text-[#151515] font-semibold playfair'>Drift:</h3>
                    </div>
                    <p className='lato text-base font-medium text-[#52555B]'>You’re thinking, researching, planning— but
                        not acting</p>
                </div>
                 <div className='w-full sm:w-[390px] h-[126px] p-[23px] flex flex-col gap-[2px] bg-[#FFFFFF] rounded-[16px]'>
                    <div className='flex  items-center gap-[12px] '>
                        <img src="/images/check.png" alt="" />
                        <h3 className='text-xl text-[#151515] font-semibold playfair'>Bend:</h3>
                    </div>
                    <p className='lato text-base font-medium text-[#52555B]'>You’ve started, but momentum hasn’t kicked in</p>
                </div>
                 <div className='w-full sm:w-[390px] h-[126px] p-[23px] flex flex-col gap-[2px] bg-[#FFFFFF] rounded-[16px]'>
                    <div className='flex  items-center gap-[12px] '>
                        <img src="/images/check.png" alt="" />
                        <h3 className='text-xl text-[#151515] font-semibold playfair'>Switch:</h3>
                    </div>
                    <p className='lato text-base font-medium text-[#52555B]'>You go visible. You commit.</p>
                </div>
                 <div className='w-full sm:w-[390px] h-[126px] p-[23px] flex flex-col gap-[2px] bg-[#FFFFFF] rounded-[16px]'>
                    <div className='flex  items-center gap-[12px] '>
                        <img src="/images/check.png" alt="" />
                        <h3 className='text-xl text-[#151515] font-semibold playfair'>Stack:</h3>
                    </div>
                    <p className='lato text-base font-medium text-[#52555B]'>Small wins build. Identity shifts.</p>
                </div>
                 <div className='w-full sm:w-[390px] h-[126px] p-[23px] flex flex-col gap-[2px] bg-[#FFFFFF] rounded-[16px]'>
                    <div className='flex  items-center gap-[12px] '>
                        <img src="/images/check.png" alt="" />
                        <h3 className='text-xl text-[#151515] font-semibold playfair'>Breakthrough:</h3>
                    </div>
                    <p className='lato text-base font-medium text-[#52555B]'>You finally feel it. Traction, belief, and flow</p>
                </div>
            </div>
        </section>
    )
}

export default SwitchCurve
