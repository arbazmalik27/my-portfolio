import React from 'react'
import { motion as Motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <Motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="inline-block w-full max-w-sm"
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="bg-[#111827]/80 backdrop-blur-md border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-md transition duration-300 ease-in-out">
      <p className="text-white font-black text-3xl sm:text-4xl">"</p>
      <div className="mt-2">
        <p className="text-gray-200 tracking-wide text-sm sm:text-base">{testimonial}</p>
        <div className="mt-6 flex justify-between items-center gap-3">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-sm sm:text-base">
              <span className="text-pink-400">@</span> {name}
            </p>
            <p className="mt-1 text-gray-400 text-xs sm:text-sm">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`Photo of ${name}`}
            aria-label={`Image of ${name}`}
            className="w-10 h-10 rounded-full object-cover border border-gray-700"
          />
        </div>
      </div>
    </div>
  </Motion.div>
)


const Feedbacks = () => {
  return (
    <div className="relative mt-12 rounded-[20px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-2xl overflow-hidden">

      {/* Radial Gradient Background Bubbles */}
      <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)] pointer-events-none" />

      {/* Section Heading */}
      <div className={`${styles.padding} rounded-2xl min-h-[300px] relative z-10`}>
        <Motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gray-300`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>Testimonials.</h2>
        </Motion.div>
      </div>

      {/* Responsive Grid for Cards */}
      <div className={`${styles.paddingX} -mt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center relative z-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

const WrappedFeedbacks = SectionWrapper(Feedbacks, 'testimonials')
export default WrappedFeedbacks
