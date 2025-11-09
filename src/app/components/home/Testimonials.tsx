'use client'
import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      author: 'Solopreneur, first-time founder',
      quote: '“Made me start before I felt ready. And I’m glad I did“',
      width: 'lg:w-[390px]',
    },
    {
      author: 'Early reader',
      quote: '“If Atomic Habits and Rework had a scrappy cousin, this is it.”',
      width: 'lg:w-[784px]',
    },
    {
      author: 'Marketing lead, Series A startup',
      quote: '“It’s not just inspiration - it’s frictionless action.”',
      width: 'lg:w-[506px]',
    },
    {
      author: 'Indie hacker',
      quote: 'This book slapped my excuses in the face',
      width: 'lg:w-[297px]',
    },
    {
      author: 'Builder with a full-time job',
      quote: 'Made me start before I felt ready. And I’m glad I did',
      width: 'lg:w-[363px]',
    },
  ]

  // ✅ Type-safe ref
  const sliderRef = useRef<Slider | null>(null)

  const next = () => {
    sliderRef.current?.slickNext()
  }
  const previous = () => {
    sliderRef.current?.slickPrev()
  }

  // ✅ Type-safe settings
  const settings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  }

  return (
    <section className='max-w-[1300px] mx-auto px-[15px] md:px-6 py-[26px] md:py-[99px] flex flex-col gap-[18px] md:gap-[30px] w-full items-center justify-center md:mt-[100px]'>
      <h2 className='text-center text-[38px] leading-[49px] md:text-[80px] 2xl:text-[100px] md:leading-[100px] playfair font-medium text-[#151515]'>
        What readers <span className='text-[#CD623B]'>are saying</span>
      </h2>

      <div className='flex items-center gap-[30px]'>
        <h4 className='hidden md:block text-[22px] font-vbold playfair text-[#151515]'>5 Stars</h4>
        <Image width={170} height={27} src='/images/stars.png' alt='stars image' />
      </div>

      {/* ✅ Desktop View */}
      <div className='hidden md:flex flex-wrap items-start justify-center gap-[21px]'>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`w-full ${t.width} py-[29px] px-[27px] bg-[#FFFFFF] border border-[#F0F0F0] rounded-[24px] flex flex-col gap-[30px]`}
          >
            <p className='lato font-bold text-base'>{t.author}</p>
            <p className='italic font-semibold playfair text-[22px] text-[#151515]'>{t.quote}</p>
          </div>
        ))}
      </div>

      {/* ✅ Mobile Carousel */}
      <div className='relative md:hidden w-full mt-6'>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div className='min-w-full py-[29px] px-[27px] bg-[#FFFFFF] border border-[#F0F0F0] rounded-[24px] flex flex-col gap-[22px] text-left mx-auto min-h-[200px]'>
                <p className='lato font-bold text-base text-[#453030]'>{t.author}</p>
                <p className='italic font-semibold playfair text-[20px] text-[#151515]'>{t.quote}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className='flex justify-between items-center gap-6 mt-[18px]'>
          <button
            onClick={previous}
            className='w-[65px] h-[65px] flex items-center justify-center rounded-[12px] bg-[#262A34] text-white'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className='w-[65px] h-[65px] flex items-center justify-center rounded-[12px] bg-[#CD623B] text-white'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
