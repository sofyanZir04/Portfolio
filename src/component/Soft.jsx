import React from "react";
import Fade from 'react-reveal/Fade';

export default function Soft() {
  // Define your language proficiency and soft skills
  const skills = [
    { name: "Arabic", percentage: 90 },
    { name: "French", percentage: 60 },
    { name: "English", percentage: 75 },
    { name: "Communication", percentage: 90 },
    { name: "Leadership", percentage: 80 },
    { name: "Flexibility", percentage: 85 },
  ];

  return (
    <div className="p-10 text-xl font-mono bg-white text-black" id="Soft">
      <div className="mx-auto md:mx-44">
        <div className="p-8 my-4 text-4xl text-center">
          <h2 className="font-mono font-black">
            My Language Proficiency and Soft Skills
          </h2>
          <span className="border-b mx-auto w-24 mt-2"></span>
        </div>
        <Fade bottom>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
                <div key={index} className="bg-black text-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold">{skill.name}</h3>
                <svg width="100%" height="16">
                    <rect
                    width={`${skill.percentage}%`}
                    height="100%"
                    fill="white"
                    ></rect>
                </svg>
                <div className="text-right mt-2">{skill.percentage}%</div>
                </div>
            ))}
            </div>
        </Fade>
      </div>
    </div>
  );
}
