'use client'

import Image from "next/image"
import Link from "next/link"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

export default function Media() {
  return (
    <>
      <div className="bg-shell-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-100">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-saffron mb-6">Media Gallery</h1>
              <p className="text-lg mb-0">
                Explore photos and videos from our events, celebrations, and community gatherings.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center mb-12 border-b">
            <button className="px-6 py-3 font-medium text-saffron border-b-2 border-saffron">All</button>
            <button className="px-6 py-3 font-medium text-gray-600 hover:text-saffron">Events</button>
            <button className="px-6 py-3 font-medium text-gray-600 hover:text-saffron">Ceremonies</button>
            <button className="px-6 py-3 font-medium text-gray-600 hover:text-saffron">Community</button>
            <button className="px-6 py-3 font-medium text-gray-600 hover:text-saffron">Temple Progress</button>
          </div>
        </div>
      </section>
    </>
  );
}


          {/* Photo Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Photo Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/ratha-yatra-celebration.jpg"
                  alt="Ratha Yatra celebration"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/diwali-celebration.jpg"
                  alt="Diwali celebration"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/janmashtami-celebration.jpg"
                  alt="Janmashtami celebration"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/community-gathering.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/temple-architecture.jpg"
                  alt="Temple architecture"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/cultural-dance.jpg"
                  alt="Cultural dance performance"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/puja-ceremony.jpg"
                  alt="Puja ceremony"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/cdn/gallery/community-meal.jpg"
                  alt="Community meal"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="btn-secondary">Load More Photos</button>
            </div>
          </div>

          {/* Video Gallery */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Video Gallery</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/cdn/videos/ratha-yatra-festival.jpg"
                  alt="Ratha Yatra Festival video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-saffron rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium">Ratha Yatra Festival 2023</h3>
                  <p className="text-white/80 text-sm">June 15, 2023</p>
                </div>
              </div>

              <div className="group relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/cdn/videos/diwali-celebration.jpg"
                  alt="Diwali Celebration video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-saffron rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium">Diwali Celebration 2023</h3>
                  <p className="text-white/80 text-sm">November 12, 2023</p>
                </div>
              </div>

              <div className="group relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/cdn/videos/janmashtami-festival.jpg"
                  alt="Janmashtami Festival video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-saffron rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium">Janmashtami Festival 2023</h3>
                  <p className="text-white/80 text-sm">August 19, 2023</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="btn-secondary">Load More Videos</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Featured Albums</h2>
            <p className="max-w-3xl mx-auto">
              Browse through our curated collections of photos from special events and celebrations.
            </p>
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
              <div className="card overflow-hidden group">
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image
                    src="/cdn/albums/ratha-yatra-festival.jpg"
                    alt="Ratha Yatra Festival album"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ratha Yatra Festival 2023</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">42 Photos</p>
                  <p className="text-gray-600">June 15, 2023</p>
                </div>
              </div>

              <div className="card overflow-hidden group">
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image
                    src="/cdn/albums/diwali-celebration.jpg"
                    alt="Diwali Celebration album"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diwali Celebration 2023</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">36 Photos</p>
                  <p className="text-gray-600">November 12, 2023</p>
                </div>
              </div>

              <div className="card overflow-hidden group">
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image
                    src="/cdn/albums/janmashtami-festival.jpg"
                    alt="Janmashtami Festival album"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Janmashtami Festival 2023</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">28 Photos</p>
                  <p className="text-gray-600">August 19, 2023</p>
                </div>
              </div>
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/media/albums" className="btn-secondary">
              View All Albums
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Follow Us on Instagram</h2>
            <p className="max-w-3xl mx-auto">Stay connected with our community through our Instagram feed.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src="/cdn/instagram/post1.jpg"
                alt="Instagram post 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src="/cdn/instagram/post2.jpg"
                alt="Instagram post 2"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src="/cdn/instagram/post3.jpg"
                alt="Instagram post 3"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6\
