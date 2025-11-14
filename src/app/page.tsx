import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Header = dynamic(()=>import('@/app/components/home/Header'))
const Footer = dynamic(()=>import('@/app/components/home/Footer'))
const FlipSwitch = dynamic(()=>import('@/app/components/home/FlipSwitch'))
const AboutAuthor = dynamic(()=>import('@/app/components/home/AboutAuthor'))
const Review = dynamic(()=>import('@/app/components/home/Review'))
const Testimonials = dynamic(()=>import('@/app/components/home/Testimonials'))
const Movements = dynamic(()=>import('@/app/components/home/Movements'))
const Toolkit = dynamic(()=>import('@/app/components/home/Toolkit'))
const SwitchCurve = dynamic(()=>import('@/app/components/home/SwitchCurve'))
const InsideBook = dynamic(()=>import('@/app/components/home/InsideBook'))
const MotivationTalk = dynamic(()=>import('@/app/components/home/MotivationTalk'))
const HeroSedtion = dynamic(()=>import('@/app/components/home/HeroSedtion'))
export const metadata = {
  title: 'The Start Switch | Make progress inevitable',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96' }
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
  description:
    'A practical book and toolkit to help you stop overthinking, start small, and build momentum that lasts.',
  alternates: {
    canonical: 'https://thestartswitch.com',
  },
  openGraph: {
    title: 'The Start Switch | Make progress inevitable',
    description:
      'A practical book and toolkit to help you stop overthinking, start small, and build momentum that lasts.',
    url: 'https://thestartswitch.com',
    siteName: 'The Start Switch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero_desk.png',
        width: 1200,
        height: 630,
        alt: 'The Start Switch — book cover and brand artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Start Switch | Make progress inevitable',
    description:
      'A practical book and toolkit to help you stop overthinking, start small, and build momentum that lasts.',
    images: ['/images/hero_desk.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const page = () => {
  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://thestartswitch.com/#website',
                  url: 'https://thestartswitch.com/',
                  name: 'The Start Switch',
                  inLanguage: 'en-US',
                  publisher: {
                    '@id': 'https://thestartswitch.com/#organization',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://thestartswitch.com/#organization',
                  name: 'The Start Switch',
                  url: 'https://thestartswitch.com/',
                  parentOrganization: {
                    '@type': 'Organization',
                    name: 'Alphabyte Ventures',
                    url: 'https://alphabyte.com',
                  },
                  sameAs: [
                    'https://www.amazon.com/author/anilmathews',
                    'https://www.goodreads.com/author/show/57597604.Anil_Mathews',
                  ],
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://thestartswitch.com/#homepage',
                  url: 'https://thestartswitch.com/',
                  name: 'The Start Switch | Make progress inevitable',
                  isPartOf: { '@id': 'https://thestartswitch.com/#website' },
                  inLanguage: 'en-US',
                  datePublished: '2025-11-04',
                  dateModified: '2025-11-04',
                  description:
                    'A practical book and toolkit to help you stop overthinking, start small, and build momentum that lasts.',
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: '/images/hero_desk.png',
                    width: 1200,
                    height: 630,
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <Header />
      <HeroSedtion />
      <MotivationTalk />
      <InsideBook />
      <SwitchCurve />
      <Toolkit />
      <Movements />
      <Testimonials />
      <Review />
      <AboutAuthor />
      <FlipSwitch />
      <Footer />
    </main>
  )
}

export default page
