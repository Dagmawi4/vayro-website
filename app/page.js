"use client";

import { useState } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main className="bg-white text-gray-900">
      {/* ===== Hero / Home ===== */}
      <section id="home" className="relative pt-28 md:pt-32">
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              AI-Powered Travel Planner
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Your Gateway to <span className="text-blue-600">Smarter Travel</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Vayro plans end-to-end trips — flights, lodging, transport, and
              personalized itineraries — all in one place. No more juggling apps.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700"
              >
                Join the Waitlist
              </a>
              <a
                href="#demo"
                className="rounded-xl border border-blue-200 text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50"
              >
                Watch Demo
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Built with OpenAI, Amadeus, Google Places, and more.
            </div>
          </div>

          {/* iPhone Mockup */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative rounded-[3rem] border-8 border-black bg-black shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20"></div>
              <img
                src="/homepage-phone.jpg"
                alt="Vayro App Screenshot"
                className="w-full h-[760px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Why choose <span className="text-blue-600">Vayro</span>
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Traveler-first and AI-native. Hyper-personalized plans without affiliate bias.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Hyper-Personalized", body: "Unlike other travel apps, Vayro doesn’t just show generic results. It asks smart questions about your preferences, budget, and trip goals — then tailors suggestions exactly for you." },
              { icon: "⚡", title: "Fast & Intelligent", body: "Behind the scenes, Vayro compares thousands of flights, hotels, activities, and transport options instantly. It delivers only the top matches based on your priorities." },
              { icon: "🌍", title: "All-in-One", body: "No more jumping between apps for flights, hotels, rides, and itineraries. Vayro brings every aspect of travel into a single seamless platform." },
              { icon: "🤖", title: "Vira Assistant", body: "Vira is your personal AI travel companion — answering questions, giving local tips, and adjusting your trip when plans change." },
              { icon: "✈️", title: "Flights", body: "No more juggling multiple sites to find a flight. Enter your dates, budget, and preferences — Vayro finds the best balance of price, timing, and convenience." },
              { icon: "🏨", title: "Lodging", body: "Hotels and stays matched to your priorities: ratings, location, budget, or luxury. Vayro makes sure you rest easy." },
              { icon: "🚖", title: "Transport", body: "Arriving at a new airport? Vayro guides you to the right pickup spot — Uber, shuttle, rental, or family pickup — with costs and directions." },
              { icon: "🗓️", title: "Itinerary", body: "Put in your trip details and commitments — Vayro creates a structured plan with times, directions, budgets, and offline export." }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Demo ===== */}
      <section id="demo" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">See it in action</h2>
            <p className="mt-3 text-gray-600">
              Watch Vayro build a personalized trip plan in seconds — from flights to a day-by-day itinerary. 
              <span className="block mt-1 text-sm text-gray-500">
                Updated demo with new features and improved AI recommendations.
              </span>
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://youtu.be/O2mRxSni3Xo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700 transition-colors"
              >
                Watch Extended Demo on YouTube
              </a>
              <a
                href="#waitlist"
                className="inline-flex rounded-xl border border-blue-200 text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Early Access
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl shadow-xl overflow-hidden aspect-[9/16] max-w-sm mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HEC-FXxMO7o"
              title="Vayro 1-Minute Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {[
              { q: "What is Vayro?", a: "Vayro is an AI-powered travel planner that builds personalized itineraries, compares flights, finds lodging, and recommends activities—all in one place."},
              { q: "What does Vayro mean?", a: "The name comes from 'Voyage + Aero,' symbolizing intelligent, seamless travel and exploration."},
              { q: "Is Vayro free?", a: "During early access, Vayro will be free. Later, premium features (like advanced AI personalization, offline itineraries, and calendar sync) will be available on paid plans." },
              { q: "How does Vayro create itineraries?", a: "We combine your inputs with real-time data from Amadeus, Google Places, and more — then AI builds a day-by-day tailored plan with budgets and schedules." },
              { q: "Can I book flights and hotels directly in Vayro?", a: "Currently, Vayro provides personalized recommendations with direct links to airlines and hotels. The ability to book directly in the app is coming soon."},
              { q: "Does Vayro work for group trips?", a: "Absolutely. You can add multiple travelers, and Vayro will create itineraries tailored to the entire group’s preferences."},
              { q: "Can Vayro handle special requirements like dietary needs or accessibility?", a: "Yes. You can specify preferences and restrictions, and Vayro will prioritize options that match your needs."},
              { q: "Do I need an internet connection to use Vayro?", a: "Core features require internet, but you can download your full itinerary as a PDF for offline access."},
              { q: "Will Vayro sync with my calendar?", a: "Yes. Integration with Google Calendar, Outlook, and others will be supported soon."},
              { q: "What happens to my data?", a: "Your data is private and only used to improve your travel recommendations. We never sell your personal data."},
              { q: "Do you track my location?", a: "Only if you allow it. Location access helps improve transport suggestions and nearby activity recommendations."},
              { q: "When is the launch?", a: "Private beta is coming soon. Join the waitlist to get invited first."},
              { q: "What makes Vayro different than other travel apps like expedia, hopper or Google Flights?", a: "Unlike traditional platforms that push affiliate deals, Vayro only generates recommendations based on your preferences—making it hyper-personalized and unbiased." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <span className="text-blue-600">{openFAQ === i ? "−" : "+"}</span>
                </button>
                {openFAQ === i && (
                  <div className="px-5 pb-4 text-gray-600">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Coming Soon ===== */}
      <section id="coming-soon" className="py-24 relative bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Coming Soon
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Even more features to make Vayro the only travel tool you’ll ever need.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📅", title: "Calendar Sync", body: "Google & Outlook calendar integration so trips auto-sync with your schedule. Additionally, Vayro will include its own in-app calendar module with smart notifications for flights, activities, and personal commitments — ensuring you never miss a moment of your journey." },
              { icon: "🏨", title: "Direct Booking", body: "Besides offering personalized recommendations, Vayro will soon introduce the ability to book flights and hotels directly inside the app. This feature is under development and will allow one-click reservations without leaving the platform." },
              { icon: "🧑‍💼", title: "Deep Onboarding", body: "When setting up your account, Vayro will ask about your preferences — from budget and travel style to favorite activities and dietary needs. These details will help generate more accurate itineraries and power future recommendations, making each trip smarter and more personalized." },
              { icon: "💳", title: "Buy-Now-Pay-Later", body: "We are working on integrating flexible payment solutions, allowing you to book your trip now, travel, and pay later in installments. This will make dream vacations more accessible without upfront stress." },
              { icon: "🧠", title: "Advanced AI Model", body: "Currently, Vayro leverages APIs from trusted providers, but our long-term vision is to build a proprietary large language model (LLM) designed specifically for travel planning. This next-gen AI will understand your unique needs deeply and provide hyper-personalized, real-time trip planning experiences." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow hover:shadow-md transition">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Waitlist / Early Access ===== */}
      <section id="waitlist" className="py-24 bg-white relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Be the first to travel smarter</h2>
          <p className="mt-3 text-gray-600">
            Join our waitlist and we’ll notify you as soon as Vayro beta launches.
          </p>
          <form
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
            method="POST"
            action="https://formspree.io/f/mldpnynw"
          >
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            We’ll only use your email for Vayro updates. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}



       



