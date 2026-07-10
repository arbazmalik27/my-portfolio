import { motion as Motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ project, index }) => {
  const {
    name,
    subtitle,
    description,
    features,
    tags,
    image,
    source_code_link,
    demo_link,
  } = project
  const isEven = index % 2 !== 0

  return (
    <Motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)} className="w-full">
      <div
        className={`grid gap-8 items-center rounded-[30px] border border-[#112240] bg-[#0b1428] p-6 shadow-2xl shadow-[#040c18]/40 lg:p-10 ${
          isEven ? 'lg:grid-cols-[0.9fr,1.1fr]' : 'lg:grid-cols-[1.1fr,0.9fr]'
        }`}
      >
        <div className={`overflow-hidden rounded-[28px] ${isEven ? 'lg:order-2' : ''}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-[320px] object-cover sm:h-[420px]"
          />
        </div>

        <div className={`flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
          <div>
            <h3 className="text-[32px] font-bold text-white sm:text-[42px] leading-[1.05]">
              {name}
            </h3>
            {subtitle && (
              <span className="mt-4 inline-flex rounded-full border border-[#1f3255] bg-[#071224] px-4 py-2 text-[12px] uppercase tracking-[0.3em] text-[#56ccf2]">
                {subtitle}
              </span>
            )}
            <p className="mt-6 text-[16px] leading-[28px] text-secondary sm:text-[17px] max-w-3xl">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {features?.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-[#1f3255] bg-[#08182f] px-4 py-2 text-[13px] text-white"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {tags?.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="rounded-full border border-[#1b2f4a] bg-[#071527] px-3 py-2 text-[13px] text-secondary"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {source_code_link && (
                <button
                  type="button"
                  onClick={() => window.open(source_code_link, '_blank')}
                  className="rounded-full border border-[#1f3255] bg-[#112240] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16325a]"
                >
                  GitHub
                </button>
              )}
              {demo_link && (
                <button
                  type="button"
                  onClick={() => window.open(demo_link, '_blank')}
                  className="rounded-full bg-[#0f6ff6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d5cd5]"
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}

const Works = () => {
  return (
    <>
      <Motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've built</p>
        <h2 className={styles.sectionHeadText}>
          Featured <span className="blue-text-gradient">Projects</span>
        </h2>
      </Motion.div>

      <div className="w-full flex">
        <Motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase my journey as a Frontend Developer and highlight my skills in React.js, JavaScript, Tailwind CSS, and modern frontend development. Each project reflects my ability to build responsive user interfaces, create seamless user experiences, solve real-world problems, and continuously learn new technologies.
        </Motion.p>
      </div>

      <div className="mt-16 flex w-full flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>
    </>
  )
}

const WrappedWorks = SectionWrapper(Works, 'work')
export default WrappedWorks