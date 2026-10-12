"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending your message...");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      _hp: formData.get("_hp"), // Honeypot field for bot trapping
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult(data.message || "Message sent successfully! I will reply to your email shortly.");
        form.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Could not deliver message. Please try again later.");
      }
    } catch {
      setStatus("error");
      setResult("A network issue occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo text-gray-700 dark:text-gray-300">
        I&apos;d love to hear from you! If you have any opportunities, questions, or
        would like to collaborate, send a message below and I&apos;ll get back to you directly.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        {/* Hidden Honeypot field for anti-bot protection */}
        <input
          type="text"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            maxLength={100}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            maxLength={150}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
          minLength={5}
          maxLength={5000}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90 resize-none"
        />

        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover font-Outfit text-sm cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Submit now"}{" "}
            <Image
              src="/assets/right-arrow-white.png"
              alt=""
              width={16}
              height={16}
              className="w-4"
            />
          </button>
        </div>

        {result && (
          <div
            className={`mt-5 p-3 rounded-md text-center font-Outfit text-sm max-w-lg mx-auto ${
              status === "success"
                ? "bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-300 border border-green-300 dark:border-green-800"
                : status === "error"
                ? "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300 border border-red-300 dark:border-red-800"
                : "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-200"
            }`}
          >
            {result}
          </div>
        )}
      </form>
    </div>
  );
}
