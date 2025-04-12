"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Heart, Clock, MapPin } from "lucide-react";
import { SaffronDivider, MandalaSVG } from "@/components/decorative-elements";
import EventModal from "@/components/event-modal";

// Define event data
const events = [
  {
    id: 1,
    title: "Nirmalya Community gathering and fundrasing",
    date: "July 6, 2025",
    time: "12:30 PM - 4:00 PM",
    location: "45 Riverbank Dr, The Ponds NSW 2769, Australia",
    description:
      "Join us with your family and friends by booking your free tickets today. Be a part of this joyous occasion filled with spirituality, community spirit, and fun activities designed for all age groups. Let's make this a day to remember!",
    image: "/cdn/events/event-photo.jpg",
    bookingUrl: "https://events.humanitix.com/nirmalya-quarterly-get-together",
  },
];

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null,
  );

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

  const openEventModal = (event: (typeof events)[0]) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-shell-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cdn/main/nirmalya-hero-bg.png"
            alt="Temple Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Nirmalya Incorporated
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join us in our mission to establish a temple dedicated to Lord
              Jagannath in Australia, fostering spiritual growth and cultural
              heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donations"
                className="btn-primary bg-saffron hover:bg-saffron-dark"
              >
                Donate Now
              </Link>
              <Link
                href="/membership"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-saffron"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Nirmalya Incorporated is dedicated to establishing a temple for
              Lord Jagannath in Australia, creating a spiritual home for
              devotees and preserving our rich cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-saffron-light inline-flex p-4 rounded-full mb-4 mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">
                Fostering spiritual development through devotion to Lord
                Jagannath and the teachings of ancient wisdom.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-saffron-light inline-flex p-4 rounded-full mb-4 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">
                Creating a vibrant community that celebrates our shared cultural
                heritage and supports each other.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-saffron-light inline-flex p-4 rounded-full mb-4 mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Temple Establishment
              </h3>
              <p className="text-gray-600">
                Building a sacred space dedicated to Lord Jagannath that serves
                as a spiritual landmark in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SaffronDivider />

      {/* Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-10">
          <MandalaSVG
            size={120}
            color="var(--saffron)"
            className="spinning-element"
          />
        </div>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Upcoming Events</h2>
            <p className="max-w-3xl mx-auto">
              Join us for these special events and celebrations to connect with
              our community and honor Lord Jagannath.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="card hover:scale-[1.02] cursor-pointer transition-all duration-300"
                onClick={() => openEventModal(event)}
              >
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center text-saffron mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                  <MapPin className="h-4 w-4 ml-4 mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section-padding bg-saffron text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Support Our Temple Project</h2>
            <p className="text-lg mb-8">
              Your generous contribution will help us establish a beautiful
              temple dedicated to Lord Jagannath in Australia. Every donation,
              big or small, brings us closer to our goal.
            </p>
            <Link
              href="/donations"
              className="btn-secondary bg-white text-saffron hover:bg-shell-white"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      <SaffronDivider />

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Community Voices</h2>
            <p className="max-w-3xl mx-auto">
              Hear from our community members about their experiences with
              Nirmalya Incorporated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/cdn/testimonials/anita-sharma.jpg"
                    alt="Anita Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Anita Sharma</h4>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Being part of Nirmalya has been a transformative experience for
                me and my family. The community events and spiritual teachings
                have brought us closer to our cultural roots."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/cdn/testimonials/raj-patel.jpg"
                    alt="Raj Patel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Raj Patel</h4>
                  <p className="text-sm text-gray-500">Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Volunteering with Nirmalya has given me a sense of purpose and
                connection to my heritage. The dedication of everyone involved
                in building this temple is truly inspiring."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/cdn/testimonials/priya-mehta.jpg"
                    alt="Priya Mehta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Priya Mehta</h4>
                  <p className="text-sm text-gray-500">Member since 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The festivals and cultural programs organized by Nirmalya have
                helped my children connect with our traditions in a meaningful
                way. I'm grateful for this community."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-saffron mb-4">Stay Connected</h2>
            <p className="mb-8">
              Subscribe to our newsletter to receive updates on temple
              activities, upcoming events, and community news.
            </p>
            <form
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="input-field flex-grow"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <div
              className={`text-red-500 text-sm mt-4 transition-opacity duration-500 ${isErrorVisible ? "opacity-100" : "opacity-0"}`}
              aria-live="polite"
            >
              {errorMessage}
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          isOpen={!!selectedEvent}
          onClose={closeEventModal}
          event={selectedEvent}
        />
      )}
    </div>
  );
}
