"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Copy, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const bankDetails = {
    bsb: "062-711",
    accountNumber: "1003-0571",
    accountName: "Nirmalya Incorporated",
    payId: "42760631934",
    payIdType: "ABN",
  }

  // External donation form URL (kept as fallback)
  const donationFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfCxI5K6_BqQSEkp1vXxYBgTJHbV9J9-4l6_pOzS-qewGxIrQ/viewform";

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowDonationModal(true);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage(`${field} copied!`);
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Donations", href: "/donations" },
    { name: "Membership", href: "/membership" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  return (
      <header className="bg-shell-white sticky top-0 z-50 shadow-sm">
        {/* Donation Modal */}
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
                        <h4 className="text-sm font-medium text-gray-500">
                          PayID ({bankDetails.payIdType})
                        </h4>
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

        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                  src="/cdn/main/nirmalya-web.png"
                  alt="Nirmalya Incorporated Logo"
                  width={180}
                  height={80}
                  className="h-16 w-auto"
                  priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                  <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 text-text-dark hover:text-saffron font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
              ))}
              <button onClick={handleDonateClick} className="ml-2 btn-primary">
                Donate Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-text-dark"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                  <X className="h-6 w-6" />
              ) : (
                  <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <nav className="md:hidden py-4 bg-shell-white">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                      <Link
                          key={link.name}
                          href={link.href}
                          className="px-4 py-2 text-text-dark hover:text-saffron font-medium transition-colors duration-300"
                          onClick={toggleMenu}
                      >
                        {link.name}
                      </Link>
                  ))}
                  <button
                      onClick={(e) => {
                        toggleMenu();
                        handleDonateClick(e);
                      }}
                      className="mx-4 mt-4 btn-primary text-center"
                  >
                    Donate Now
                  </button>
                </div>
              </nav>
          )}
        </div>
      </header>
  );
};

export default Navbar;