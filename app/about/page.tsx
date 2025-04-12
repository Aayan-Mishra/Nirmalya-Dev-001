import Image from "next/image"
import Link from "next/link"
import { Target, Award } from "lucide-react"
import { SaffronDivider, LotusSVG, MandalaSVG } from "@/components/decorative-elements"

export default function About() {
  return (
    <div className="bg-shell-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute top-10 right-10 opacity-10">
          <MandalaSVG size={120} color="var(--saffron)" className="spinning-element" />
        </div>
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-saffron mb-6">About Nirmalya Incorporated</h1>
            <p className="text-lg mb-0">
              Learn about our mission, vision, and the journey to establish a temple dedicated to Lord Jagannath in
              Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-saffron mb-6">Our Story</h2>
              <p className="mb-4">
                Nirmalya Incorporated was founded in 2018 by a group of devoted followers of Lord Jagannath who
                recognized the need for a dedicated temple in Australia. What began as small gatherings in community
                halls has now grown into a vibrant organization with hundreds of members.
              </p>
              <p className="mb-4">
                The name "Nirmalya" refers to the sacred offerings made to Lord Jagannath, symbolizing our dedication
                and service to the divine. Our community has been steadily growing, bringing together people who share a
                common spiritual heritage and a desire to preserve and celebrate our cultural traditions.
              </p>
              <p>
                Today, we are working diligently towards our goal of establishing a permanent temple that will serve as
                a spiritual home for devotees and a cultural landmark in Australia.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute -top-5 -left-5 z-10 opacity-20">
                <LotusSVG size={60} color="var(--saffron)" />
              </div>
              <div className="absolute -bottom-5 -right-5 z-10 opacity-20">
                <LotusSVG size={60} color="var(--saffron)" />
              </div>
              <Image
                src="/cdn/about/community-gathering.jpg"
                alt="Nirmalya community gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SaffronDivider />

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-10">
          <MandalaSVG size={150} color="var(--saffron)" className="spinning-element" />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-10">
          <MandalaSVG size={150} color="var(--saffron)" className="spinning-element" />
        </div>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Our Mission & Vision</h2>
            <p className="max-w-3xl mx-auto">
              Guided by spiritual principles and community values, we work towards creating a lasting legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-saffron/5 rounded-full -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center mb-4 relative z-10">
                <div className="bg-saffron-light p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-600 relative z-10">
                To establish and maintain a temple dedicated to Lord Jagannath in Australia that serves as a center for
                spiritual growth, cultural preservation, and community service. We aim to create a sacred space where
                devotees can connect with their spiritual heritage and pass down traditions to future generations.
              </p>
            </div>

            <div className="card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-saffron/5 rounded-full -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center mb-4 relative z-10">
                <div className="bg-saffron-light p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-600 relative z-10">
                To create a vibrant spiritual community centered around the teachings and traditions of Lord Jagannath,
                fostering unity, compassion, and service. We envision a temple that not only serves as a place of
                worship but also as an educational and cultural hub that promotes understanding and appreciation of our
                rich heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SaffronDivider />

      {/* Core Values */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxjaXJjbGUgc3Ryb2tlPSIjZmY3NzIyIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBjeD0iMjAiIGN5PSIyMCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -top-6 -left-6 opacity-10">
                <LotusSVG size={40} color="var(--saffron)" className="spinning-element" />
              </div>
              <h2 className="text-saffron mb-4">Our Core Values</h2>
              <div className="absolute -bottom-6 -right-6 opacity-10">
                <LotusSVG size={40} color="var(--saffron)" className="spinning-element" />
              </div>
            </div>
            <p className="max-w-3xl mx-auto">
              These principles guide our actions and decisions as we work towards our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Devotion",
                description: "Cultivating sincere devotion to Lord Jagannath through prayer, service, and celebration.",
                icon: "🙏",
              },
              {
                title: "Community",
                description: "Building a supportive and inclusive community that welcomes all who wish to participate.",
                icon: "👥",
              },
              {
                title: "Service",
                description:
                  "Engaging in selfless service (seva) to benefit both our community and the broader society.",
                icon: "🤲",
              },
              {
                title: "Preservation",
                description: "Preserving and sharing our cultural and spiritual traditions with future generations.",
                icon: "🏛️",
              },
              {
                title: "Education",
                description: "Promoting understanding of our spiritual teachings, practices, and cultural heritage.",
                icon: "📚",
              },
              {
                title: "Inclusivity",
                description:
                  "Creating a welcoming environment for people of all backgrounds who are drawn to Lord Jagannath.",
                icon: "🌏",
              },
              {
                title: "Integrity",
                description:
                  "Operating with transparency, accountability, and ethical standards in all our activities.",
                icon: "⚖️",
              },
              {
                title: "Sustainability",
                description:
                  "Ensuring the long-term sustainability of our temple and community through responsible stewardship.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <div key={index} className="value-card group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-full -mt-12 -mr-12 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-saffron group-hover:text-saffron-dark transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SaffronDivider />

      {/* Milestones */}
      <section className="section-padding relative">
        <div className="absolute top-20 left-10 opacity-10">
          <MandalaSVG size={100} color="var(--saffron)" className="spinning-element" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <MandalaSVG size={100} color="var(--saffron)" className="spinning-element" />
        </div>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-saffron mb-4">Our Journey</h2>
            <p className="max-w-3xl mx-auto">
              Key milestones in our path to establishing a temple for Lord Jagannath in Australia.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-saffron-light"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "Foundation",
                  description:
                    "Nirmalya Incorporated was officially registered as a non-profit organization in Australia.",
                },
                {
                  year: "2019",
                  title: "First Community Gathering",
                  description: "Organized our first major community celebration with over 100 devotees in attendance.",
                },
                {
                  year: "2020",
                  title: "Virtual Programs",
                  description: "Adapted to the pandemic by launching virtual prayer sessions and cultural programs.",
                },
                {
                  year: "2021",
                  title: "Membership Growth",
                  description: "Reached 250 registered members and established regular community events.",
                },
                {
                  year: "2022",
                  title: "Land Fund Initiated",
                  description: "Started a dedicated fund for purchasing land for the future temple.",
                },
                {
                  year: "2023",
                  title: "Community Center",
                  description: "Secured a temporary community center for regular gatherings and services.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-saffron flex items-center justify-center text-white font-bold z-10 shadow-lg">
                    {milestone.year}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <div className="card group hover:border-saffron border-2 border-transparent transition-colors duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-saffron/5 rounded-full -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-500"></div>
                      <h3 className="text-xl font-semibold mb-2 relative z-10">{milestone.title}</h3>
                      <p className="text-gray-600 relative z-10">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <h2 className="mb-4">Join Our Community</h2>
            <p className="text-lg mb-8">
              Be part of our growing community and contribute to the establishment of Lord Jagannath's temple in
              Australia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/membership" className="btn-secondary bg-white text-saffron hover:bg-shell-white">
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
  )
}
