import { useState } from 'react';
import { Tab } from '@headlessui/react';

// frontend
import html from '../assets/skills/frontend/brand-html5-svgrepo-com.svg';
import css from '../assets/skills/frontend/css-3-svgrepo-com.svg';
import javascript from '../assets/skills/frontend/javascript-svgrepo-com.svg';
import react from '../assets/skills/frontend/react-javascript-js-framework-facebook-svgrepo-com.svg';
import tailwind from '../assets/skills/frontend/tailwind-svgrepo-com.svg';
import typescript from '../assets/skills/frontend/typescript-official-svgrepo-com.svg';

// backend
import java from '../assets/skills/backend/java-svgrepo-com.svg';
import spring from '../assets/skills/backend/spring-icon-svgrepo-com.svg';
import kotlin from '../assets/skills/backend/kotlin-svgrepo-com.svg';
import mysql from '../assets/skills/backend/mysql-logo-svgrepo-com.svg';
import postgre from '../assets/skills/backend/postgresql-svgrepo-com.svg';
import python from '../assets/skills/backend/python-svgrepo-com.svg';
import cpp from '../assets/skills/embedded/c-plus-plus-svgrepo-com.svg';
import linux from '../assets/skills/embedded/linux-svgrepo-com.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  let [categories] = useState({
    Frontend: [
      {
        id: 1,
        techStack: [html, css, javascript, react, tailwind, typescript],
        nameTech: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Tailwind',
          'Typescript',
        ],
      },
    ],
    Backend: [
      {
        id: 2,
        techStack: [java, spring, kotlin, mysql, postgre, python],
        nameTech: [
          'Java',
          'Spring Boot',
          'Kotlin',
          'MySQL',
          'PostgreSQL',
          'Python',
        ],
      },
    ],
    Embedded: [
      {
        id: 3,
        techStack: [cpp, linux],
        nameTech: ['C++', 'Linux'],
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 pb-16 sm:max-w-2xl sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'bg-primary-blue hover:bg-[#4704AF] w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-primary-blue ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-primary-blue shadow'
                    : 'text-blue-100 hover:bg-primary-blue/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category) => (
            <Tab.Panel key={category[0].id}>
              <ul className="grid grid-cols-3 gap-4 mt-4">
                {category[0].techStack.map((tech, index) => (
                  <li
                    key={tech}
                    className="pt-4 flex flex-col justify-center items-center focus:outline-none transition duration-300 ease-in-out transform hover:scale-150"
                  >
                    <img src={tech} alt="tech icon" className="h-12 w-12" />
                    <p className="text-sm font-medium leading-5 pt-2 text-gray-700">
                      {category[0].nameTech[index]}
                    </p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
