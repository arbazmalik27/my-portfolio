import React from 'react'
import { motion as Motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const certifications = [
  {
    title: 'JAVA FULL STACK DEVELOPMENT',
    subtitle: 'Udemy',
  },
  {
    title: 'DATA	ANALYTICS	JOB	SIMULATION',
    subtitle: 'Deloitte',
  },
]

const platforms = [
  {
    value: '150+',
    label: 'LeetCode',
    accent: 'text-orange-400',
  },
  {
    value: '50+',
    label: 'GeeksforGeeks',
    accent: 'text-emerald-400',
  },
  // {
  //   value: '100+',
  //   label: 'HackerEarth',
  //   accent: 'text-sky-400',
  // },
  {
    value: '50+',
    label: 'Codeforces',
    accent: 'text-cyan-400',
  },
]

const CertificationCard = ({ title, subtitle, index }) => (
  <Motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    className="rounded-2xl border border-gray-700 bg-[#111827]/80 p-6 shadow-md"
  >
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-white font-semibold text-lg sm:text-xl">{title}</p>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">{subtitle}</p>
      </div>
    </div>
  </Motion.div>
)

const PlatformCard = ({ value, label, accent, index }) => (
  <Motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    className="rounded-2xl border border-gray-700 bg-[#111827]/80 p-6 shadow-md"
  >
    <p className={`font-bold ${accent} text-3xl sm:text-4xl`}>{value}</p>
    <p className="mt-4 text-gray-300 text-sm sm:text-base">{label}</p>
  </Motion.div>
)

const Certifications = () => {
  return (
    <div className="relative mt-12 rounded-[20px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-2xl overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.12),transparent)] pointer-events-none" />

      <div className={`${styles.padding} rounded-2xl min-h-[300px] relative z-10`}>
        <Motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gray-300`}>Achievements & Platforms</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>Certifications</h2>
        </Motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} index={index} {...cert} />
          ))}
        </div>

        <div className="mt-16">
          <Motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-gray-300`}>Competitive Programming Platforms</p>
          </Motion.div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.label} index={index} {...platform} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const WrappedCertifications = SectionWrapper(Certifications, 'testimonials')
export default WrappedCertifications
