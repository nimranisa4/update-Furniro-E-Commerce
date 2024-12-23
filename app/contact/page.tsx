'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormData } from "@/types/ComponentsTypes";


// Define the validation schema using Yup
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().optional(),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set up React Hook Form with Yup validation
  const { register, handleSubmit,reset,formState: { errors }, } = useForm<FormData>({ resolver:yupResolver(validationSchema),
  });

  // Update the onSubmit function with the correct type for data
  const onSubmit = (data: FormData) => {
    // On successful form submission, show a success message
    console.log("Form Data: ", data); // You can send this data to an API or email service
    setFormSubmitted(true);

    // Reset the form fields
    reset();

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[316px] flex items-center justify-center text-center text-4xl font-semibold text-black">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1440}
          height={316}
          alt="Background"
          src="/images/rectangle-2.png"
        />
        <div className="relative">
          <Image
            className="mx-auto mb-4"
            width={77}
            height={77}
            alt="Logo"
            src="/images/Meubel House_Logos-05 (1).png"
          />
          <h1 className="text-5xl">Contact</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <FiArrowRight className="text-lg" />
            <span className="font-light">Contact</span>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Get In Touch With Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We’re here to help! Drop us a message for inquiries about our
              products or services. Our team will get back to you promptly.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
              <FaMapMarkerAlt className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-center text-gray-600 mt-2">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
            {/* Working Time */}
            <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
              <FaRegClock className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Working Time
              </h3>
              <p className="text-center text-gray-600 mt-2">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
            {/* Phone */}
            <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
              <FaPhoneAlt className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-center text-gray-600 mt-2">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
              <p className="text-sm text-gray-600">Fill out the form below, and we&apos;ll get back to you shortly.</p>
            </div>
            <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: "Invalid email address" } })}
                  placeholder="Abc@def.com"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  placeholder="Optional subject"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Hi! I’d like to ask about..."
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows={4}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <Button label="Send Message" />
            </form>

            {/* Success Message */}
            {formSubmitted && (
              <p className="mt-4 text-center text-green-500">Your message has been sent successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
