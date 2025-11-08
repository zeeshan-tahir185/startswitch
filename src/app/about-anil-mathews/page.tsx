import React from 'react'
import Head from 'next/head'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import AboutMathews from '../components/about/AboutMathews'
import StartSwitch from '../components/about/StartSwitch'
import Today from '../components/about/Today'
import Media from '../components/about/Media'

export const metadata = {
  title: 'About Anil Mathews | The Start Switch',
   icons: {
    icon: '/images/favicon.png',
  },
  description:
    'Entrepreneur and author Anil Mathews, founder of Alphabyte Ventures and author of The Start Switch. Principles behind progress, momentum, and measurable change.',
  alternates: {
    canonical: 'https://thestartswitch.com/about-anil-mathews',
  },
  openGraph: {
    title: 'About Anil Mathews | The Start Switch',
    description:
      'Entrepreneur and author Anil Mathews, founder of Alphabyte Ventures and author of The Start Switch. Principles behind progress, momentum, and measurable change.',
    url: 'https://thestartswitch.com/about-anil-mathews',
    siteName: 'The Start Switch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero_desk.png',
        width: 1200,
        height: 630,
        alt: 'Portrait of Anil Mathews and The Start Switch branding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Anil Mathews | The Start Switch',
    description:
      'Entrepreneur and author Anil Mathews, founder of Alphabyte Ventures and author of The Start Switch. Principles behind progress, momentum, and measurable change.',
    images: ['/images/hero_desk.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const Page = () => {
  return (
    <>
      <Head>
        {/* JSON-LD Structured Data */}
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
                  '@type': 'AboutPage',
                  '@id': 'https://thestartswitch.com/about-anil-mathews#about',
                  url: 'https://thestartswitch.com/about-anil-mathews',
                  name: 'About Anil Mathews | The Start Switch',
                  isPartOf: {
                    '@id': 'https://thestartswitch.com/#website',
                  },
                  inLanguage: 'en-US',
                  datePublished: '2025-11-04',
                  dateModified: '2025-11-04',
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: '/images/hero_desk.png',
                    width: 1200,
                    height: 630,
                  },
                  breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'The Start Switch',
                        item: 'https://thestartswitch.com/',
                      },
                      {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'About Anil Mathews',
                        item: 'https://thestartswitch.com/about-anil-mathews',
                      },
                    ],
                  },
                  description:
                    'Entrepreneur and author Anil Mathews, founder of Alphabyte Ventures and author of The Start Switch. Principles behind progress, momentum, and measurable change.',
                },
                {
                  '@type': 'Person',
                  '@id': 'https://anilmathews.com/#person',
                  name: 'Anil Mathews',
                  url: 'https://anilmathews.com',
                  jobTitle: 'Entrepreneur and Author',
                  affiliation: {
                    '@type': 'Organization',
                    name: 'Alphabyte Ventures',
                    url: 'https://alphabyte.com',
                  },
                  sameAs: [
                    'https://anilmathews.com',
                    'https://thestartswitch.com',
                    'https://alphabyte.com',
                    'https://www.amazon.com/author/anilmathews',
                    'https://www.goodreads.com/author/show/57597604.Anil_Mathews',
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <section>
        <Header />
        <AboutMathews />
        <StartSwitch />
        <Today />
        <Media />
        <Footer />
      </section>
    </>
  )
}

export default Page
