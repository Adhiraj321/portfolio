"use client";

import { useState } from "react";
import ContactStepper, { Step } from "./ContactStepper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (success: boolean, message: string) => void;
}

export function ContactModal({ isOpen, onClose, onSubmit }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        onSubmit(true, result.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Close modal after successful submission
        setTimeout(() => {
          onClose();
        }, 500);
      } else {
        onSubmit(false, result.message || "Failed to send message. Please try again.");
        // Close modal even on error
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      onSubmit(false, "Something went wrong. Please try again later.");
      // Close modal on error
      setTimeout(() => {
        onClose();
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl pointer-events-none">
        {/* Stepper Content */}
        <div className="pointer-events-auto">
          <ContactStepper
            initialStep={1}
            onStepChange={(step) => {
              console.log("Current step:", step);
            }}
            onFinalStepCompleted={handleFinalSubmit}
            backButtonText="Back"
            nextButtonText="Continue"
            onClose={onClose}
            stepCircleContainerClassName="dark:bg-black bg-white backdrop-blur-xl border dark:border-white/10 border-black/10"
            contentClassName="dark:bg-black/90 bg-white/90 p-6 rounded-b-lg border-x border-b dark:border-white/10 border-black/10"
            footerClassName="dark:bg-black/90 bg-white/90 p-4 rounded-b-lg border-x border-b dark:border-white/10 border-black/10"
            backButtonProps={{
              className: "px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-colors border dark:border-white/10 border-black/10"
            }}
            nextButtonProps={{
              className: "px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 rounded-md transition-colors"
            }}
          >
            {/* Step 1: Name */}
            <Step>
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold dark:text-white text-black">
                  What's your name?
                </h3>
                <p className="text-xs sm:text-sm dark:text-white/70 text-black/70">
                  Let's get to know each other. How should I address you?
                </p>
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full mb-2 dark:bg-black dark:border-white/10 border-black/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
                  />
                </div>
              </div>
            </Step>

            {/* Step 2: Email */}
            <Step>
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold dark:text-white text-black">
                  How can I reach you?
                </h3>
                <p className="text-xs sm:text-sm dark:text-white/70 text-black/70">
                  Please provide your email address
                </p>
                <div>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full mb-2 dark:bg-black dark:border-white/10 border-black/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
                  />
                </div>
              </div>
            </Step>

            {/* Step 3: Subject */}
            <Step>
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold dark:text-white text-black">
                  What's this about?
                </h3>
                <p className="text-xs sm:text-sm dark:text-white/70 text-black/70">
                  A short subject line helps me understand your message better.
                </p>
                <div>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full mb-2 dark:bg-black dark:border-white/10 border-black/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
                  />
                </div>
              </div>
            </Step>

            {/* Step 4: Message */}
            <Step>
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold dark:text-white text-black">
                  Your message
                </h3>
                <p className="text-xs sm:text-sm dark:text-white/70 text-black/70">
                  What would you like to discuss?
                </p>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    rows={5}
                    className="w-full mb-2 dark:bg-black dark:border-white/10 border-black/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
                  />
                </div>
              </div>
            </Step>
          </ContactStepper>
        </div>
      </div>
    </div>
  );
}