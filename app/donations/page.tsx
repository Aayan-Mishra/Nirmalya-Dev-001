"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Check, Heart, Building, Users, Landmark, Flower, Copy, X } from "lucide-react"

export default function Donations() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [copyMessage, setCopyMessage] = useState("")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Bank details
  const bankDetails = {
    bsb: "062-711",
    accountNumber: "10030571",
    accountName: "Nirmalya Incorporated",
    payId: "42760631934",
  }

  // External donation form URL (kept as fallback)
  const donationFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfCxI5K6_BqQSEkp1vXxYBgTJHbV9J9-4l6_pOzS-qewGxIrQ/viewform"

  const handleDonateClick = (e) => {
    e.preventDefault()
    setShowDonationModal(true)
  }

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage(`${field} copied!`)
      setTimeout(() => setCopyMessage(""), 2000)
    })
  }

  return (
      <div className={`bg-shell-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Modal */}
        {showDonationModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-fadeIn">
                <button
                    onClick={() => setShowDonationModal(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <Heart className="h-12 w-12 text-saffron mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Make a Donation</h3>
                    <p className="text-gray-600">Support our temple with a direct bank transfer</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">BSB</h4>
                        <button
                            onClick={() => copyToClipboard(bankDetails.bsb, "BSB")}
                            className="text-saffron hover:text-saffron-dark flex items-center gap-1"
                        >
                          <Copy className="h-4 w-4" />
                          <span className="text-xs">Copy</span>
                        </button>
                      </div>
                      <p className="text-lg font-medium">{bankDetails.bsb}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Account Number</h4>
                        <button
                            onClick={() => copyToClipboard(bankDetails.accountNumber, "Account Number")}
                            className="text-saffron hover:text-saffron-dark flex items-center gap-1"
                        >
                          <Copy className="h-4 w-4" />
                          <span className="text-xs">Copy</span>
                        </button>
                      </div>
                      <p className="text-lg font-medium">{bankDetails.accountNumber}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Account Name</h4>
                        <button
                            onClick={() => copyToClipboard(bankDetails.accountName, "Account Name")}
                            className="text-saffron hover:text-saffron-dark flex items-center gap-1"
                        >
                          <Copy className="h-4 w-4" />
                          <span className="text-xs">Copy</span>
                        </button>
                      </div>
                      <p className="text-lg font-medium">{bankDetails.accountName}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">PayID (ABN)</h4>
                        <button
                            onClick={() => copyToClipboard(bankDetails.payId, "PayID")}
                            className="text-saffron hover:text-saffron-dark flex items-center gap-1"
                        >
                          <Copy className="h-4 w-4" />
                          <span className="text-xs">Copy</span>
                        </button>
                      </div>
                      <p className="text-lg font-medium">{bankDetails.payId}</p>
                    </div>
                  </div>

                  {copyMessage && (
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded text-center mb-4">
                        {copyMessage}
                      </div>
                  )}

                  <p className="text-sm text-gray-500 text-center">
                    Please include your name in the reference field. For tax receipt purposes, please email your
                    donation details to <span className="text-saffron">donations@nirmalya.org.au</span>
                  </p>
                </div>

                <div className="bg-gray-50 py-4 px-6 rounded-b-lg flex justify-between">
                  <button
                      onClick={() => setShowDonationModal(false)}
                      className="text-gray-600 hover:text-gray-800"
                  >
                    Close
                  </button>
                  <a
                      href={donationFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-saffron hover:text-saffron-dark"
                  >
                    Alternative Donation Options
                  </a>
                </div>
              </div>
            </div>
        )}

        {/* Hero Section */}
        <section className="relative py-20 bg-gray-100 overflow-hidden">
          {/* Hero content remains the same */}
          <div className="absolute -right-20 -top-20 opacity-10">
            <Flower className="h-80 w-80 text-saffron rotate-45" />
          </div>
          <div className="absolute -left-20 -bottom-20 opacity-10">
            <Flower className="h-80 w-80 text-saffron -rotate-45" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1
                  className="text-saffron mb-6 transform transition-transform duration-700 ease-out translate-y-0"
                  style={{ transitionDelay: "200ms" }}
              >
                Support Our Temple
              </h1>
              <p
                  className="text-lg mb-0 transform transition-transform duration-700 ease-out translate-y-0"
                  style={{ transitionDelay: "400ms" }}
              >
                Your generous contributions help us establish a temple dedicated to Lord Jagannath in Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same, just update the donation button handlers */}
        {/* Update the "Donate Now" button in Rice Pattern Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Same content as before */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-10 h-full">
              {[...Array(100)].map((_, i) => (
                  <div key={i} className="aspect-square border border-saffron rounded-full m-2"></div>
              ))}
            </div>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <h2 className="text-saffron mb-6">Support Our Sacred Mission</h2>
              <p className="max-w-2xl mx-auto text-lg mb-8">
                Your generous contribution will help us establish a beautiful temple dedicated to Lord Jagannath in
                Australia. Every donation brings us closer to our goal.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button
                    onClick={handleDonateClick}
                    className="btn-primary px-10 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:scale-105"
                >
                  Donate Now
                </button>
                <Link
                    href="/contact"
                    className="btn-secondary px-10 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Update the "Make a Donation" button in Praying Silhouettes Section */}

        {/* Rest of the content remains the same */}
        {/* ... */}

        {/* Update the "Donate Now" button in CTA Section */}
        <section className="section-padding bg-saffron text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 h-full">
              {[...Array(64)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <svg width="50" height="50" viewBox="0 0 100 100" className="text-white fill-current">
                      <path d="M50 0L61 35H97L68 57L79 91L50 70L21 91L32 57L3 35H39L50 0Z" />
                    </svg>
                  </div>
              ))}
            </div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">Join Us in Building a Legacy</h2>
              <p className="text-lg mb-8">
                Your contribution today will help create a spiritual home for generations to come. Every donation,
                regardless of size, brings us closer to our goal.
              </p>
              <button
                  onClick={handleDonateClick}
                  className="btn-secondary bg-white text-saffron hover:bg-shell-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Donate Now
              </button>
            </div>
          </div>
        </section>
      </div>
  )
}
