import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_xyl21wi',
        'template_rvsxw72',
        {
          from_name: form.name,
          to_name: 'Vivek Kumar',
          from_email: form.email,
          to_email: 'thetechzion@gmail.com',
          message: form.message,
        },
        'ZJFxPFaeLNESyQdX8'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* About Me Card */}
  <motion.div
  variants={slideIn('right', 'tween', 0.2, 1)}
  className="flex-1 w-full bg-black-200 rounded-2xl justify-center items-center p-6 sm:p-8 flex flex-col items-center text-white text-center shadow-lg"
>
  <img
    src="/avtar.jpeg"
    alt="Vivek Kumar"
    className="w-24 h-24 sm:w-40 sm:h-40 rounded-full object-cover mb-4 border-2 border-pink-500"
  />

  <h4 className="text-xl sm:text-2xl font-bold">Vivek Kumar</h4>
  <p className="text-sm sm:text-base text-gray-400 mb-2">Full-Stack Developer & Problem Solver</p>

  <p className="text-gray-300 text-xs sm:text-sm max-w-sm leading-relaxed">
    I'm passionate about building modern web applications using the MERN stack and solving real-world problems through clean, efficient code. Let’s connect and collaborate!
  </p>

  <div className="flex gap-5 mt-5 text-xl sm:text-2xl justify-center flex-wrap">
    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
      <FaGithub className="hover:text-pink-400" />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
      <FaLinkedin className="hover:text-blue-400" />
    </a>
    <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
      <FaInstagram className="hover:text-rose-500" />
    </a>
    <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
      <FaFacebook className="hover:text-blue-600" />
    </a>
    <a href="mailto:thetechzion@gmail.com">
      <FaEnvelope className="hover:text-green-400" />
    </a>
  </div>
</motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
