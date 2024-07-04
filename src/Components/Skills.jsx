import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="p-20 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Skills</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded shadow">React</div>
        <div className="bg-white p-6 rounded shadow">Tailwind CSS</div>
        <div className="bg-white p-6 rounded shadow">JavaScript</div>
        <div className="bg-white p-6 rounded shadow">HTML</div>
      </div>
    </section>
  );
};

export default Skills;
