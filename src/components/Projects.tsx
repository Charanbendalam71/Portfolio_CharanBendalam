import React from 'react';
import { Github, Code, Database, Gamepad2, Building } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Computer Man Into The Computer Verse',
      description: 'Text-based adventure game built using modular C functions, control structures, and random number generation for dynamic gameplay.',
      icon: <Gamepad2 size={32} />,
      tech: ['C', 'Algorithms', 'Game Logic', 'Random Generation', 'Modular Programming'],
      color: 'from-purple-500 to-pink-500',
      githubUrl: 'https://github.com/Charanbendalam71/Computer-Man-Into-The-Computer-Verse.git',
      features: [
        'Interactive branching storyline with multiple endings',
        'Modular function-based architecture',
        'Random number generation for mini-games',
        'Memory loss simulation with recursive loops',
        'Creative narrative with humor and pop culture references',
        'Binary guessing game integration',
        'Multiple story paths and decision trees'
      ]
    },
    {
      title: 'Hotel Management System',
      description: 'Developed a robust system using OOP principles, handling room bookings, customer data, and billing with efficient STL use.',
      icon: <Building size={32} />,
      tech: ['C++', 'OOP', 'STL', 'Data Management'],
      color: 'from-blue-500 to-cyan-500',
      githubUrl: 'https://github.com/Charanbendalam71/Hotel-Management-System.git',
      features: [
        'Object-oriented design with classes for rooms, customers, and bookings',
        'STL containers for efficient data storage and retrieval',
        'Automated billing system with tax calculations',
        'Room availability tracking and management',
        'Customer check-in/check-out functionality',
        'Report generation for management insights'
      ]
    },
    {
      title: 'Blooms Level',
      description: 'A management system in C++ featuring CRUD operations and sorting/search algorithms for organized academic performance tracking.',
      icon: <Database size={32} />,
      tech: ['C++', 'CRUD', 'Algorithms', 'Data Structures'],
      color: 'from-green-500 to-emerald-500',
      githubUrl: 'https://github.com/Charanbendalam71/BloomsLevel.git',
      features: [
        'Complete CRUD operations for student data management',
        'Advanced sorting algorithms for performance ranking',
        'Binary search implementation for quick data retrieval',
        'Academic performance analytics and reporting',
        'Grade calculation and GPA tracking',
        'Data persistence with file handling'
      ]
    },
    {
      title: 'Siggwy',
      description: 'A responsive food ordering platform built with HTML, CSS, JS, Node.js, and MySQL. Features include real-time order tracking, payments, restaurant dashboards, and user authentication.',
      icon: <Code size={32} />,
      tech: ['Full Stack', 'Node.js', 'MySQL', 'Real-time', 'Authentication'],
      color: 'from-orange-500 to-red-500',
      githubUrl: 'https://github.com/Charanbendalam71/SIGGWY-Delivehry-app.git',
      features: [
        'Real-time order tracking with WebSocket integration',
        'Secure payment gateway integration',
        'Restaurant dashboard for order management',
        'User authentication and authorization system',
        'Responsive design for mobile and desktop',
        'MySQL database with optimized queries',
        'RESTful API architecture'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in various technologies and problem-solving approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${project.color} text-white p-3 rounded-xl mr-4`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    {project.features && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                              +{project.features.length - 3} more features...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-4">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                        >
                          <Github size={18} />
                          Code
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300">
                          <Github size={18} />
                          Code
                        </button>
                      )}
          
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;