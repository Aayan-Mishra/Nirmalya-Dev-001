"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Users, Flower, Shield } from "lucide-react"

export default function Membership() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // External membership form URL
  const membershipFormUrl =
      "https://form.jotform.com/242472406835862"

  return (
      <div className={`bg-shell-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-100 overflow-hidden">
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
                Join Our Community
              </h1>
              <p
                  className="text-lg mb-0 transform transition-transform duration-700 ease-out translate-y-0"
                  style={{ transitionDelay: "400ms" }}
              >
                Become a member of Nirmalya Incorporated and be part of our journey to establish a temple for Lord
                Jagannath in Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-saffron mb-4">Membership Benefits</h2>
              <p className="max-w-3xl mx-auto">
                Join our growing community and enjoy these exclusive benefits as a member of Nirmalya Incorporated.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                    src="/placeholder.svg?height=800&width=600&text=Community+Gathering+Image"
                    alt="Community gathering"
                    fill
                    className="object-cover"
                />
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="h-6 w-6 text-saffron mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Community Connection</h3>
                      <p className="text-gray-600">
                        Connect with like-minded individuals who share your devotion to Lord Jagannath and cultural
                        heritage.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-saffron mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Special Events</h3>
                      <p className="text-gray-600">
                        Receive invitations to member-only events, ceremonies, and cultural celebrations throughout the
                        year.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-saffron mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Voting Rights</h3>
                      <p className="text-gray-600">
                        Participate in organizational decisions through voting rights at our annual general meetings.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-saffron mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Temple Updates</h3>
                      <p className="text-gray-600">
                        Receive regular updates on temple construction progress, community initiatives, and upcoming
                        events.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-saffron mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Volunteer Opportunities</h3>
                      <p className="text-gray-600">
                        Access exclusive volunteer opportunities to serve the community and contribute to our mission.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-saffron mb-4">Membership Options</h2>
              <p className="max-w-3xl mx-auto">Choose the membership type that best suits you and your family.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Individual Membership */}
              <div className="membership-card card border-2 border-transparent">
                <div className="text-center mb-6">
                  <div className="bg-saffron-light inline-flex p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Individual Membership</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-bold">$20</span>
                    <span className="text-gray-500">/year</span>
                  </div>
                  <p className="text-gray-600">
                    Perfect for individuals who want to support our mission and be part of our community.
                  </p>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>All standard membership benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Single voting right at general meetings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Regular email updates and newsletters</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Discounted entry to select paid events</span>
                  </li>
                </ul>
                <a
                    href={membershipFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full block text-center"
                >
                  Join Now
                </a>
              </div>

              {/* Family Membership */}
              <div className="membership-card card border-2 border-saffron">
                <div className="absolute top-0 right-0 bg-saffron text-white px-3 py-1 text-sm font-medium">Popular</div>
                <div className="text-center mb-6">
                  <div className="bg-saffron-light inline-flex p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Family Membership</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-bold">$50</span>
                    <span className="text-gray-500">/year</span>
                  </div>
                  <p className="text-gray-600">
                    Ideal for families who want to participate together in our community activities.
                  </p>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>All standard membership benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Two voting rights at general meetings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Covers up to 2 adults and children under 18</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Family-focused events and activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-saffron mr-2 shrink-0 mt-0.5" />
                    <span>Discounted entry to select paid events</span>
                  </li>
                </ul>
                <a
                    href={membershipFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full block text-center"
                >
                  Join Now
                </a>
              </div>

              {/* Lifetime Membership */}

            </div>
          </div>
        </section>

        {/* Decorative Rice Pattern Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-10 h-full">
              {[...Array(100)].map((_, i) => (
                  <div key={i} className="aspect-square border border-saffron rounded-full m-2"></div>
              ))}
            </div>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <h2 className="text-saffron mb-6">Join Our Sacred Community</h2>
              <p className="max-w-2xl mx-auto text-lg mb-8">
                Become a member today and be part of our journey to establish a temple for Lord Jagannath in Australia.
                Your membership supports our mission and connects you with our community.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                    href={membershipFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-10 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:scale-105"
                >
                  Join Now
                </a>
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

        {/* Member Testimonials */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-saffron mb-4">What Our Members Say</h2>
              <p className="max-w-3xl mx-auto">
                Hear from our community members about their experiences as part of Nirmalya Incorporated.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                  <div key={item} className="card">
                    <div className="flex items-center mb-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                        <Image
                            src={`/placeholder.svg?height=100&width=100&text=Member+${item}+Photo`}
                            alt={`Member ${item}`}
                            fill
                            className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Member Name</h4>
                        <p className="text-sm text-gray-500">Member since 2020</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "Being a member of Nirmalya has connected me with a wonderful community that shares my cultural values
                      and spiritual beliefs. The events and celebrations have become highlights of my year."
                    </p>
                    <div className="flex text-saffron">
                      {[...Array(5)].map((_, i) => (
                          <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                          >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                          </svg>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-saffron mb-4">Frequently Asked Questions</h2>
              <p>Find answers to common questions about membership with Nirmalya Incorporated.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long is my membership valid?",
                  answer:
                      "Individual and Family memberships are valid for one year from the date of approval. Lifetime memberships never expire.",
                },
                {
                  question: "Can I upgrade my membership?",
                  answer:
                      "Yes, you can upgrade from an Individual to a Family membership at any time by paying the difference in fees. You can also upgrade to a Lifetime membership from any other membership type.",
                },
                {
                  question: "What is the membership renewal process?",
                  answer:
                      "We'll send you a renewal reminder email one month before your membership expires. You can renew online through our website or in person at any of our events.",
                },
                {
                  question: "Are membership fees tax-deductible?",
                  answer:
                      "Membership fees are not tax-deductible as they provide benefits to members. However, any additional donations made to Nirmalya Incorporated beyond membership fees are tax-deductible.",
                },
                {
                  question: "Can I transfer my membership to someone else?",
                  answer:
                      "Memberships are non-transferable as they are associated with specific individuals or families. However, you can contact us if you have special circumstances that require consideration.",
                },
                {
                  question: "How can I get involved as a member?",
                  answer:
                      "There are many ways to get involved! You can volunteer at events, join committees, participate in cultural programs, or help with fundraising initiatives. Check our events calendar or contact us for current opportunities.",
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
              <h2 className="mb-4">Join Our Growing Community</h2>
              <p className="text-lg mb-8">
                Become a member today and be part of our journey to establish a temple for Lord Jagannath in Australia.
              </p>
              <a
                  href={membershipFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary bg-white text-saffron hover:bg-shell-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Become a Member
              </a>
            </div>
          </div>
        </section>
      </div>
  )
}
