import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  let [categories] = useState({
    Frontend: [
      {
        id: 1,
        title: 'HTML/CSS/JavaScript',
        date: 'Building simple websites the classic way',
      },
      {
        id: 2,
        title: 'ReactJS/TailwindCSS',
        date: '',
      },
      {
        id: 3,
        title: 'ReactJS/TypeScript/Redux',
        date: 'Creating innovative wep applications on the client side',
      },
    ],
    Backend: [
      {
        id: 1,
        title: 'Spring Boot/Kotlin',
        date: 'Building elegant and scalable server side applications with Java',
      },
      {
        id: 2,
        title: 'MySQL/PostgreSQL',
        date: 'Simple relational database management solutions',
      },
    ],
    Embedded: [
      {
        id: 2,
        title: 'NASA FPrime (C++)/FreeRTOS',
        date: 'Developing real-time On-Board computer for Cube Satellite',
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
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
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
