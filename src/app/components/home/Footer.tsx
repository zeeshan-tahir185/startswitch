'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => {
    setIsModalOpen(false)
    setSuccess(false)
    setError('')
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = async () => {
    setError('')
    setSuccess(false)

    if (!name || !email || !message) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError('Failed to send message. Try again.')
      }
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <footer className="bg-[#262A34] text-gray-300 py-12 px-6 mt-4 md:mt-[100px]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-2xl font-semibold mb-10 playfair">
            Make progress inevitable.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 lato">
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Explore</h3>
              <ul className="space-y-2">
                <li><Link href="/#" className="hover:text-white transition">The Start Switch</Link></li>
                <li><Link href="/#graph" className="hover:text-white transition">The Switch Curve™</Link></li>
                <li><Link href="/#freetoolkit" className="hover:text-white transition">The Toolkit</Link></li>
                <li><Link href="https://www.amazon.com/dp/B0FH41DL25" rel="noopener" target='_blank' className="hover:text-white transition">Buy the Book</Link></li>
                <li><Link href="/about-anil-mathews" className="hover:text-white transition">About the Author</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li><Link rel="noopener" target='_blank' href="https://www.amazon.com/stores/Anil-Mathews/author/B0FH51DZ18" className="hover:text-white transition">Amazon Author Page</Link></li>
                <li><Link rel="noopener" target='_blank' href="https://www.goodreads.com/author/show/57597604.Anil_Mathews" className="hover:text-white transition">Goodreads</Link></li>
                {/* <li><Link href="#" rel="noopener" target='_blank' className="hover:text-white transition">YouTube Trailer </Link></li> */}
                <li><Link href="https://www.anilmathews.com/" rel="noopener" target='_blank' className="hover:text-white transition">AnilMathews.com</Link></li>
                <li><button onClick={openModal} className="hover:text-white transition cursor-pointer">Contact</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-12 text-sm text-gray-400 lato">
            <p>© 2025 Anil Mathews. All rights reserved.</p>
            <p className="mt-1">
              The Start Switch is a work by{' '}
              <Link href="https://anilmathews.com" rel="noopener" target='_blank' className="underline hover:text-white">
                AnilMathews.com
              </Link>, author and entrepreneur.
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-[600px] w-full mx-4 p-8"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              >
                <X size={22} className="cursor-pointer" />
              </button>

              <h2 className="text-2xl font-semibold text-[#151515] mb-6 playfair text-center">
                Get in Touch
              </h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD623B]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input
                    id='email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD623B]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD623B]"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#CD623B] text-white py-2 rounded-lg font-medium hover:bg-[#b65531] transition cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-3 text-center">Message sent successfully!</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
