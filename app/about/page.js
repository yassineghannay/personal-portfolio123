'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function About() {
  const projects = [
    {
      title: "CalcMachine",
      description: "A Command-Line Calculator written in C# that proposes to be more potent than the old embedded calculators.",
      link: "https://github.com/yassineghannay/CalcMachine",
    },
    {
      title: "PyLivestream",
      description: "Pure Python FFmpeg-based live video / audio streaming to YouTube, Facebook, Periscope, Twitch, and more.",
      link: "https://github.com/yassineghannay/PyLivestream",
    },
    {
      title: "MonsterMakerC",
      description: "Simple C# program where you can create your own monster!!.",
      link: "https://github.com/yassineghannay/MonsterMakerC",
    },
    {
      title: "MortgageAndBanK",
      description: "Mortgage Calculator using simple Python concepts.",
      link: "https://github.com/yassineghannay/MortgageAndBankV6",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-blue-600">About Me</h1>
        <section className="mt-4 text-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/WIN_20241210_17_53_11_Pro.jpg"
              alt="Picture of Yassine Ghannay"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <p className="text-lg">
              Hello! My name is Yassine Ghannay, a second-year Software Development student at
              Southern Alberta Institute of Technology. I'm passionate about coding and have skills
              in various technologies like JavaScript, Python, C#, and more. I enjoy working on
              projects that challenge me to grow and expand my knowledge.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-600">My Projects</h2>
          <div className="mt-4 space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
