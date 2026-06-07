import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_NAME = import.meta.env.VITE_EMAILJS_TO_NAME || 'Arbaz Malik';
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'malikarbaz084@gmail.com';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validateForm = (form) => {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required.';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    errors.integration =
      'EmailJS is not configured correctly. Check your environment variables.';
  }

  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const validation = validateForm(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setStatus({
        type: 'error',
        message:
          validation.integration ||
          'Please complete all required fields before sending.',
      });
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        time: new Date().toISOString(),
        reply_to: form.email.trim(),
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        to_name: TO_NAME,
        to_email: TO_EMAIL,
      };

      console.log('EmailJS send called with:', {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        public_key: PUBLIC_KEY,
        templateParams,
      });

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS send success:', response);

      setStatus({
        type: 'success',
        message: 'Your message was sent successfully. I will get back to you soon.',
      });
      setForm(initialFormState);
      setErrors({});
    } catch (error) {
      console.error('EmailJS send error:', error);
      const errMsg = error?.text || error?.message || 'Unknown error';
      const errorStatus = error?.status ? ` [status: ${error.status}]` : '';
      const guidance = errMsg.includes('scopes')
        ? 'This usually means your Gmail service in EmailJS needs reauthorization or expanded OAuth scopes.'
        : 'Please check EmailJS dashboard and confirm your Gmail service configuration.';

      setStatus({
        type: 'error',
        message: `Email sending failed: ${errMsg}${errorStatus}. ${guidance}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Form */}
      <Motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {status.message && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-6 rounded-2xl p-4 text-sm ${
              status.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-200'
                : status.type === 'error'
                ? 'bg-rose-500/10 text-rose-200'
                : 'bg-sky-500/10 text-sky-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.name ? 'border border-rose-500' : ''
              }`}
            />
            {errors.name && (
              <span id="name-error" className="mt-2 text-rose-300 text-sm">
                {errors.name}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.email ? 'border border-rose-500' : ''
              }`}
            />
            {errors.email && (
              <span id="email-error" className="mt-2 text-rose-300 text-sm">
                {errors.email}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.subject ? 'border border-rose-500' : ''
              }`}
            />
            {errors.subject && (
              <span id="subject-error" className="mt-2 text-rose-300 text-sm">
                {errors.subject}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.message ? 'border border-rose-500' : ''
              }`}
            />
            {errors.message && (
              <span id="message-error" className="mt-2 text-rose-300 text-sm">
                {errors.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-tertiary/80'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Sending...
              </span>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </Motion.div>

      {/* About Me Card */}

      {/* This section is about the hero section and has  */}
      <Motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-1 w-full bg-black-200 rounded-2xl justify-center items-center p-6 sm:p-8 flex flex-col text-white text-center shadow-lg"
>
  <img
    src="/planet/avatar.jpeg"
    alt="arbaz malik"
    className="w-24 h-24 sm:w-40 sm:h-40 rounded-full object-cover mb-4 border-2 border-pink-500"
  />

  <h4 className="text-xl sm:text-2xl font-bold">Arbaz Malik</h4>
  <p className="text-sm sm:text-base text-gray-400 mb-2">Full-Stack Developer & Problem Solver</p>

  <p className="text-gray-300 text-xs sm:text-sm max-w-sm leading-relaxed">
    I'm passionate about building modern web applications using the MERN stack and solving real-world problems through clean, efficient code. Let’s connect and collaborate!
  </p>

  <div className="flex gap-5 mt-5 text-xl sm:text-2xl justify-center flex-wrap">
    <a href="https://github.com/arbazmalik27" target="_blank" rel="noreferrer">
      <FaGithub className="hover:text-pink-400" />
    </a>
    <a href="https://www.linkedin.com/in/arbaz-malik-91817a337/" target="_blank" rel="noreferrer">
      <FaLinkedin className="hover:text-blue-400" />
    </a>
    <a href="https://www.instagram.com/arbaz_m4lik/" target="_blank" rel="noreferrer">
      <FaInstagram className="hover:text-rose-500" />
    </a>
    <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
      <FaFacebook className="hover:text-blue-600" />
    </a>
    <a href="mailto:thetechzion@gmail.com">
      <FaEnvelope className="hover:text-green-400" />
    </a>
  </div>
</Motion.div>

    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, 'contact');
export default WrappedContact;
