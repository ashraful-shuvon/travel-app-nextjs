"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        {/* Navbar */}
        <header className="px-6 py-4 shadow bg-blue-600 dark:bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">TravelGo</h1>
            <div className="flex gap-4 items-center">
              <nav className="hidden md:flex gap-6 text-sm font-medium">
                <ul className="flex gap-6 font-medium">
                  <li>
                    <a href="/about" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/explore" className="hover:underline">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <Button
                variant="outline"
                onClick={() => setDark(!dark)}
                className="text-black"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Adventure Awaits</h2>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              Discover top destinations and travel like never before.
            </p>
            <Button className="text-lg">Start Your Journey</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/rome.jpg"
              alt="Hero"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="px-6 py-16 bg-gray-100 dark:bg-gray-800"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-10">Why Choose TravelGo?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Best Deals</h4>
                <p>Access unbeatable offers on flights and hotels.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Global Support</h4>
                <p>24/7 customer care wherever you are.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Custom Packages</h4>
                <p>Personalize your trip with flexible itineraries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="px-6 py-16 bg-white dark:bg-gray-900"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-10">What Our Travelers Say</h3>
            <div className="space-y-8">
              <blockquote>
                <p className="italic">
                  “The best travel experience I've ever had. Everything was
                  seamless!”
                </p>
                <footer className="mt-2 font-semibold">— Sarah A.</footer>
              </blockquote>
              <blockquote>
                <p className="italic">
                  “TravelGo made my honeymoon unforgettable. Highly
                  recommended.”
                </p>
                <footer className="mt-2 font-semibold">— Mark & Nina</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="bg-blue-600 dark:bg-blue-800 text-white px-6 py-10 mt-12"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="mb-2">Contact us: hello@travelgo.com</p>
            <p>
              &copy; {new Date().getFullYear()} TravelGo. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
