import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9kasif6",     
        "template_q3qrnkp",    
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "vupH9WHAU40IzSGQF"      
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <section className="contact-container" id="contact">
      <h1>Get In Touch</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;

