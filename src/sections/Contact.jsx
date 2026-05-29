// @/sections/Contact.jsx
import React, { useState } from "react";
import Section from "../components/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { units, contactPersons } from "../data/contactData";
import axios from "axios";

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  // Error messages state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  // Response message
  const [responseMsg, setResponseMsg] = useState("");

  // Validation function
  function validateField(name, value) {
    const validators = {
      name: () =>
        !value
          ? "Name is required"
          : value.length < 3
            ? "Name must be at least 3 characters"
            : "",
      email: () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !value
          ? "Email is required"
          : !emailRegex.test(value)
            ? "Invalid email address"
            : "";
      },
      subject: () => (!value ? "Subject is required" : ""),
      description: () =>
        !value
          ? "Description is required"
          : value.length < 10
            ? "Description must be at least 10 characters"
            : "",
    };

    return validators[name] ? validators[name]() : "";
  }

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate live
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    // Validate all fields before sending
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });
    setErrors(newErrors);

    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      setResponseMsg("Please fix the errors above before submitting");
      return;
    }

    // Send data if valid
    axios.post("http://localhost:5000/send-mail", formData)
      .then((res) => {
        setResponseMsg("Form submitted! ");
        setTimeout(() => setResponseMsg(""), 5000);

        setFormData({ name: "", email: "", subject: "", description: "" });
        setErrors({ name: "", email: "", subject: "", description: "" });
      })
      .catch((err) => {
        console.error(err);
        setTimeout(() => setResponseMsg(""), 5000);

        setResponseMsg("Something went wrong!");
      });
  }

  return (
    <Section className="scroll-mt-24 bg-industrial-950 py-24 relative" id="contact">
      <div className="text-center mb-12">
        <motion.span
          className="text-cyan-500 font-semibold tracking-widest uppercase mb-2 block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          get in touch
        </motion.span>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Contact Us
        </h2>
      </div>

      {/* UNITS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        {units.map((unit, idx) => (
          <div
            key={idx}
            className="bg-white/[0.03] backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col h-full"
          >
            <p className="text-cyan-400 text-sm font-semibold mb-3">
              {unit.unit}
            </p>

            <div className="mb-5">
              <div className="flex text-white font-semibold flex-col gap-1">
                {unit.companies.map((company, i) => (
                  <span
                    key={i}
                    className="text-slate-300 text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <MapPin className="text-cyan-500 mt-1 w-4 h-4" />
              <p className="text-slate-400 text-sm">{unit.address}</p>
            </div>

            <div className="flex gap-3 mb-4">
              <Phone className="text-cyan-500 mt-1 w-4 h-4" />

              <div className="flex flex-col gap-1">
                {unit.phone.map((p, i) => (
                  <a
                    key={i}
                    href={`tel:${p}`}
                    className="text-slate-400 text-sm hover:text-cyan-400"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mb-5">
              <Mail className="text-cyan-500 mt-1 w-4 h-4" />

              <div className="flex flex-col gap-1">
                {unit.email.map((e, i) => (
                  <a
                    key={i}
                    href={`mailto:${e}`}
                    className="text-slate-400 text-sm hover:text-cyan-400"
                  >
                    {e}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto w-full h-56 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title={unit.unit}
                src={unit.map}
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT PERSONS */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-white tracking-wide">
            Contact Persons
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Directly connect with our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactPersons?.length > 0 ? (
            contactPersons.map((person, idx) => (
              <div
                key={idx}
                className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10"
              >
                <div className="rounded-2xl bg-industrial-900/95 backdrop-blur-md p-6 h-full border border-white/10">
                  <p className="text-white text-lg font-semibold mb-1">
                    {person.name}
                  </p>
                  <p className="text-slate-400 text-xs mb-4">
                    {person.company}
                  </p>
                  {person?.phone && (
                    <a
                      href={`tel:${person.phone}`}
                      className="flex items-center gap-2 text-cyan-400 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {person.phone}
                    </a>
                  )}
                  {person?.mail && (
                    <a
                      href={`mailto:${person.mail}`}
                      className="text-slate-400 font-semibold text-xs mt-3 flex items-center gap-2 hover:text-blue-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {person.mail}
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-400">No contact data found</p>
          )}
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-semibold text-white mb-2 text-center">
            Start Your Project
          </h2>
          <p className="text-slate-400 text-sm text-center mb-6">
            Tell us about your requirement and we’ll respond quickly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" id="contactForm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-lg bg-industrial-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  required
                />
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-lg bg-industrial-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  required
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
                value={formData.subject}
                className="w-full px-4 py-3 rounded-lg bg-industrial-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                required
              />
              {errors.subject && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <textarea
                rows="4"
                placeholder="Describe your project..."
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="w-full px-4 py-3 rounded-lg bg-industrial-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                required
              />
              {errors.description && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.description}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          {/* Response Message */}
          {responseMsg && (
            <div className="text-center text-green-400 mt-4">{responseMsg}</div>
          )}

          <p className="text-xs text-slate-500 mt-6 text-center">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
