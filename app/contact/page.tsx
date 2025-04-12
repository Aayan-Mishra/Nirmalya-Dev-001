import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SaffronDivider, MandalaSVG } from "@/components/decorative-elements";

export default function Contact() {
  return (
    <div className="bg-shell-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute top-10 right-10 opacity-10">
          <MandalaSVG
            size={120}
            color="var(--saffron)"
            className="spinning-element"
          />
        </div>
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-saffron mb-6">Contact Us</h1>
            <p className="text-lg mb-0">
              Get in touch with Nirmalya Incorporated. We'd love to hear from
              you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-saffron mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions about our temple project, membership, donations,
                or upcoming events? We're here to help. Reach out to us using
                any of the contact methods below.
              </p>

              <div className="space-y-6">

                <div className="flex items-start">
                  <div className="bg-saffron-light p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:info@nirmalya.org.au"
                        className="hover:text-saffron transition-colors"
                      >
                        info@nirmalya.org.au
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a
                        href="mailto:membership@nirmalya.org.au"
                        className="hover:text-saffron transition-colors"
                      >
                        membership@nirmalya.org.au
                      </a>{" "}
                      (For membership inquiries)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-saffron-light p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+61212345678"
                        className="hover:text-saffron transition-colors"
                      >
                        +61 2 1234 5678
                      </a>{" "}
                      (General Inquiries)
                    </p>
                    <p className="text-gray-600">
                      <a
                        href="tel:+61287654321"
                        className="hover:text-saffron transition-colors"
                      >
                        +61 2 8765 4321
                      </a>{" "}
                      (Temple Office)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-saffron-light p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-gray-600">
                      Sunday: Closed (Except for special events)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-saffron-light text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-saffron-light text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-saffron-light text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-saffron-light text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <div className="embedded-form-container rounded-md overflow-hidden">
                <iframe
                  src="https://tally.so/r/w5OGdM"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="bg-white"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Frequently Asked Questions</h2>
            <p>
              Find answers to common questions about contacting and visiting us.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "What are the visiting hours for the community center?",
                answer:
                  "Our community center is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 10:00 AM to 2:00 PM. We are closed on Sundays except for special events and ceremonies.",
              },
              {
                question: "Do I need to make an appointment to visit?",
                answer:
                  "For general visits, no appointment is necessary during our regular hours. However, if you'd like to meet with a specific staff member or have a detailed discussion about membership or donations, we recommend scheduling an appointment.",
              },
              {
                question: "Is there parking available at the community center?",
                answer:
                  "Yes, we have limited parking available on-site. There is also street parking and a public parking lot within a 5-minute walk from our location.",
              },
              {
                question: "How can I volunteer with Nirmalya Incorporated?",
                answer:
                  "We welcome volunteers! Please fill out our contact form and select 'Volunteering' as the subject, or email us directly at volunteer@nirmalya.org.au with your interests and availability.",
              },
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer:
                  "We strive to respond to all inquiries within 1-2 business days. For urgent matters, please call our office directly.",
              },
              {
                question:
                  "Are there regular religious services at the community center?",
                answer:
                  "Yes, we hold regular puja ceremonies and spiritual gatherings. Please check our events calendar on the website for the schedule, or sign up for our newsletter to receive updates.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-saffron text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Join Our Community</h2>
            <p className="text-lg mb-8">
              Become a member today and be part of our journey to establish a
              temple for Lord Jagannath in Australia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership"
                className="btn-secondary bg-white text-saffron hover:bg-shell-white"
              >
                Become a Member
              </Link>
              <Link
                href="/donations"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-saffron"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
