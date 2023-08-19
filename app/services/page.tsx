import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Import',
    icon: '/logod-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Export',
    icon: '/logod-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Locate',
    icon: '/logod-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

const Services = () => {
  return (
    <div className="bg-[url('/bg.jpg')] min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center text-white mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <div className="text-center">
              <div className="mb-4">
                <Image className="rounded-lg" src={service.icon} alt={service.title} height={250} width={250} />
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
            <p className="text-gray-600 mt-4">{service.description}</p>
            <div className="text-center mt-6">
              <a
                href="#"
                className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

