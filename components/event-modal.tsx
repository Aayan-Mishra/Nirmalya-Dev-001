"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    description: string
    image: string
    bookingUrl: string
  }
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover rounded-t-lg" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold text-saffron mb-2">{event.title}</h3>

          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Date:</span> {event.date}
            </div>
            <div>
              <span className="font-medium">Time:</span> {event.time}
            </div>
            <div>
              <span className="font-medium">Location:</span> {event.location}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">{event.description}</p>
          </div>

          <div className="flex justify-end">
            <a
              href={event.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2 transition-transform hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
