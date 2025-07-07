"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending message...", form);

    // Simulate sending to backend or API
    try {
      await new Promise((res) => setTimeout(res, 1000)); // simulate delay
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We’d love to hear from you! Send us a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ Your message has been sent!
          </p>
        )}
      </div>
    </main>
  );
}
