"use client";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Building the Future of <span className="text-blue-600">Travel</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Vayro is redefining trip planning with AI-powered, traveler-first
          recommendations. No bias. No commissions. Just seamless, smart
          journeys built around you.
        </p>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Story
          </h2>
          <p className="mt-8 text-lg text-gray-600 leading-relaxed text-justify">
            Travel planning has always been messy. Between flights, hotels,
            rides, and activities, travelers spend hours bouncing between apps,
            comparing endless tabs, and juggling spreadsheets. I experienced
            that firsthand during one of my trips — what should have been a
            relaxing adventure turned into a logistical nightmare. That
            frustration sparked a realization:
            <span className="font-semibold text-gray-800">
              {" "}
              there had to be a smarter way to plan travel.
            </span>
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
            That&apos;s how{" "}
            <span className="font-semibold text-blue-600">Vayro</span> was born,
            an AI-native platform designed to eliminate travel stress. Instead
            of searching through dozens of sites, Vayro brings everything
            together: flights, lodging, transport, and personalized itineraries,
            all intelligently curated just for you.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
            Every decision behind Vayro follows a simple principle:
            <span className="font-semibold text-gray-800">
              {" "}
              put the traveler first.
            </span>{" "}
            No hidden agendas, no affiliate priorities, and no paid placements.
            We&apos;re building a product that listens, learns, and adapts to
            your style of travel — whether you&apos;re an explorer, dreamer, or
            digital nomad.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
            Vayro is not just another travel tool. It&apos;s a movement toward
            unbiased, effortless, and human-centered trip planning — where your
            journey begins with inspiration, not frustration.
          </p>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-900">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Traveler First",
                desc: "Every feature we design starts with one question — how does this make travel easier, smoother, and more personal for the traveler?",
              },
              {
                icon: "🔍",
                title: "Transparency",
                desc: "No hidden fees, no commissions. Vayro shows honest results that put your experience before any affiliate deal.",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "We constantly explore new ways AI can simplify the travel experience — from real-time adjustments to proactive recommendations.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md p-8 transition"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-base">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR MISSION ===== */}
      <section className="py-24 text-center text-white bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-blue-50">
            To build the world&apos;s first AI-native, traveler-first planning
            platform — one that makes personalized, unbiased, and accessible
            trip planning a reality for everyone.
          </p>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
            Meet the Founder
          </h2>

          <div className="max-w-md mx-auto bg-gray-50 border border-gray-100 rounded-2xl shadow-sm p-10">
            <img
              src="/Dagmawi.jpg"
              alt="Founder"
              className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-100 shadow-md"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Dagmawi Abera
            </h3>
            <p className="text-blue-600 font-medium">
              Founder &amp; Builder of Vayro
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              Passionate about using technology to simplify the way people
              experience the world. With a background in computer engineering
              and a lifelong love for exploration, Dagmawi built Vayro to bridge
              the gap between inspiration and real-world travel — making it
              smarter, easier, and deeply personal.
            </p>
          </div>

          {/* ===== FOUNDER STORY ===== */}
          <div className="max-w-4xl mx-auto mt-20 text-left px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8">
              The Founder&apos;s Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The idea for Vayro came to me during my third trip to Las Vegas.
              My first two visits were for conferences, but this time, I wanted
              to truly explore — to see the city beyond the bright lights and
              hotel halls. Vegas has endless things to do, but without an
              organized, personalized plan, I found myself overwhelmed. I spent
              hours scrolling through YouTube videos, TikToks, and random blogs,
              trying to piece together the perfect trip, only to realize I was
              spending more time planning than living the experience itself.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              What should have been a fun adventure turned into a frustrating
              puzzle. I jumped between apps, compared flights and hotels,
              checked a dozen restaurant reviews, and kept switching between
              tabs. By the time I finished organizing my day, the excitement was
              gone. When I finally returned home, I couldn&apos;t stop thinking
              — travel is supposed to be freeing, not stressful. There had to be
              a better way.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That&apos;s when the seed for Vayro was planted. I imagined an app
              that could do what no platform truly did — understand the
              traveler. An app that could take your preferences, your time, your
              budget, and your mood, and turn them into a trip that feels made
              for you. Even its name, &quot;Vayro,&quot; — a blend of
              &quot;Voyage&quot; and &quot;Aero&quot; — symbolizes exploration
              powered by intelligence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              From the start, I promised myself one thing: Vayro would never be
              just another travel app chasing affiliate links or commissions. It
              would be built for people like me — explorers, dreamers, planners,
              and wanderers who want to experience the world without the
              headache. Travel should be about the moments you create, not the
              tabs you keep open. That&apos;s what Vayro is about: helping
              people spend less time planning, and more time living.
            </p>
          </div>

          {/* ===== CTA ===== */}
          <div className="mt-20 bg-blue-50 py-10 px-8 rounded-2xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Join Our Mission
            </h3>
            <p className="text-gray-600">
              Interested in collaborating or joining Vayro&apos;s early team?
              We&apos;re looking for passionate builders, designers, and
              dreamers.
            </p>
            <a
              href="mailto:contact@vayro.org"
              className="inline-block mt-5 text-blue-600 font-semibold hover:underline"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


