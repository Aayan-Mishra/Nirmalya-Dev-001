"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setIsErrorVisible(true);
      const timer = setTimeout(() => {
        setIsErrorVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("Uh oh, We haven't set this up yet!");
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/cdn/main/nirmalya-web.png"
                alt="Nirmalya Incorporated Logo"
                width={150}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 mt-4">
              Nirmalya Incorporated is dedicated to establishing a temple for
              Lord Jagannath in Australia, fostering community and spiritual
              growth.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://facebook.com/nirmalyaaus"
                className="text-gray-600 hover:text-saffron transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/nirmalyaaus"
                className="text-gray-600 hover:text-saffron transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-600 hover:text-saffron transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                  href="https://youtube.com/nirmalyaaus"
                  className="text-gray-600 hover:text-saffron transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donations"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  Donations
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-saffron shrink-0" />
                <span className="text-gray-600">+61 434 477 837</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-saffron shrink-0" />
                <a
                  href="mailto:info@nirmalya.org.au"
                  className="text-gray-600 hover:text-saffron transition-colors"
                >
                  info@nirmalya.org.au
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates on temple
              activities and events.
            </p>
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="input-field"
                required
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
              <div
                className={`text-red-500 text-sm mt-2 transition-opacity duration-500 ${isErrorVisible ? "opacity-100" : "opacity-0"}`}
                aria-live="polite"
              >
                {errorMessage}
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Nirmalya Incorporated. All
              rights reserved. | ABN: 42760631934 | Developed by Aayan Mishra
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-saffron transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-600 hover:text-saffron transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
