import React from 'react';
import { Code, Palette, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'React, JavaScript, TypeScript, HTML5, CSS3'
    },
    {
      icon: <Palette size={24} />,
      title: 'Web Design',
      description: 'Responsive design, UI/UX, Tailwind CSS'
    },
    {
      icon: <Zap size={24} />,
      title: 'Programming',
      description: 'C, C++, Data Structures, Algorithms'
    },
    {
      icon: <Target size={24} />,
      title: 'Full Stack',
      description: 'Node.js, MySQL, Database design'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Charan Bendalam</span>, a passionate Frontend Developer and Web Designer with a strong foundation in both software development and user experience.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in creating responsive, interactive web interfaces using modern technologies. With experience in C, C++, and full-stack development, I enjoy solving complex problems and building seamless digital experiences.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always exploring new tools and frameworks to stay ahead in the fast-paced world of web development. My goal is to create beautiful, functional applications that provide exceptional user experiences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Based in Kaviti, India</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Frontend & Web Development Focus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Always Learning New Technologies</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;