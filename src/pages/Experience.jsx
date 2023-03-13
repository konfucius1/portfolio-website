import ExperienceCard from '../components/ExperienceCard';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import { motion } from 'framer-motion';

import kotlin from '../assets/experience/icons8-kotlin.svg';
import springboot from '../assets/experience/icons8-spring-boot.svg';
import suncorp from '../assets/experience/suncorp-logo.svg';
import ares from '../assets/experience/ares-logo.svg';
import melbspace from '../assets/experience/msp-logo.svg';
import cissa from '../assets/experience/cissa.svg';
import cpp from '../assets/experience/icons8-c++.svg';
import linux from '../assets/experience/linux-svgrepo-com.svg';
import typescript from '../assets/experience/typescript-official-svgrepo-com.png';
import python from '../assets/experience/python-svgrepo-com.png';
import react from '../assets/experience/react-svgrepo-com.png';
import figma from '../assets/experience/figma-svgrepo-com.svg';

const Experience = () => {
  let experiences = [
    {
      id: 1,
      name: 'Suncorp Group',
      title: 'Software Engineer Intern',
      techStack: [kotlin, springboot],
      image: suncorp,
      start: 'Nov. 2022',
      end: 'Present',
      desc: [
        'Developed RESTful KTable lookup API for the Event Streaming Platform using Spring Boot and Kotlin.',
        'Utilised OkHttp for efficient HTTP requests to OpenShift V3 endpoints with exception handling and error logging.',
        'Wrote comprehensive documentation for the KTable lookup API, including design, usage, and capabilities.',
        'Designed and implemented data pipeline using ServiceNow integrated with cloud hosted MySQL to extract DevOps Research and Assessment (DORA) metrics and transformed the data for visualisation in Grafana.',
      ],
    },
    {
      id: 2,
      name: 'Melbourne Space Program',
      title: 'ACRUX-II On-Board Computer Co-Lead',
      techStack: [cpp, linux],
      image: melbspace,
      start: 'Aug. 2022',
      end: 'Present',
      desc: [
        'Leading development of the on-board computer subsystem for student research and designed imaging cube satellite.',
        'Crafting a low-level API endpoint, complete with an extensive interface and hardware requirements documentation.',
        'Integrated NASA FPrime software (C++) onto Raspberry Pi board for satellite flight applications.',
        'Extensive research into cross-compilation of FPrime onto FreeRTOS on a STM32 processing board for CubeSat.',
      ],
    },
    {
      id: 3,
      name: 'ARES - Aerospace & Rocketry Engineering Society',
      title: 'Project Phobos Software Engineer',
      techStack: [react, typescript, python],
      image: ares,
      start: 'Aug. 2022',
      end: 'Present',
      desc: [
        'Building a rocketry flight simulation software Astra providing engineers the ability to run CAD models through atmospheric simulations for high precision.',
        'Porting RocketPy simulation library into backend of the web application',

        'Developing client side pop-up window displaying image response from the simulation server',
      ],
    },
    {
      id: 4,
      name: 'CISSA - Computing Information System Students Association',
      title: 'Publicity Director',
      techStack: [figma],
      image: cissa,
      start: 'Sep. 2021',
      end: 'Sep. 2022',
      desc: [
        "Managed club's social presence of over 1200 members and over 4000 online followers. Led a subcommittee of three teams comprised of 7 students.",
        'Coordinated the publicity schedule for over 80 events during the year, creating over 200 graphics with Figma.',
        "Boosted the club's main average total followings by 63%",
        'Generated over $7,000 in revenue through successful event planning and management, selling 700+ flagship event tickets.',
      ],
    },
  ];

  return (
    <div className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
      <LeftBar />

      <div>
        <h3 className="sm:flex sm:justify-center sm:items-center pt-16 absolute top-0 left-1/2 transform -translate-x-1/2 uppercase tracking-[6px] text-gray-500 text-sm sm:text-2xl">
          Experience
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-2 justify-evenly mx-auto items-center mb-8 mt-16"
      >
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-off-white/80">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              name={experience.name}
              title={experience.title}
              techStack={experience.techStack}
              image={experience.image}
              start={experience.start}
              end={experience.end}
              desc={experience.desc}
            />
          ))}
        </div>
      </motion.div>

      <RightBar />
    </div>
  );
};

export default Experience;
