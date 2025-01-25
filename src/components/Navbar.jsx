import { Button } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import PacmanToggle from '../components/PacmanToggle.jsx';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience'},
]

const skills = [
  { title: 'Java', image: '/java-original.svg' },
  { title: 'C', image: '/c-original.svg' },
  { title: 'Spring', image: '/spring-original.svg' },
  { title: 'Docker', image: '/docker-original.svg' },
  { title: 'Git', image: '/git-original.svg' },
  { title: 'React', image: '/react-original.svg' },
  { title: 'MySql', image: '/mysql-original.svg' },
  { title: 'Linux', image: '/linux-original.svg' },
  { title: 'Node.js', image: '/nodejs-original-wordmark.svg' },
  { title: 'HTML', image: '/html5-original.svg' },
];

const experience = [
  { title: 'R&D Summer Employee', company: 'Avoca LLC.', location: 'Merry Hill, NC', dates: 'May-Jun 2023', description: ['Worked in the R&D Department of Ashland’s specialty extraction division, Avoca LLC.', 'Researched DNA sequencing of transgenic sage plants to achieve higher sclareol yields.', 'Collected and organized data into Excel.', 'Worked in the greenhouse and multiple farming plots to upkeep crops, gather samples, etc.'], image: '/sage.jpg'},
  { title: 'R&D Summer Employee', company: 'Avoca LLC.', location: 'Merry Hill, NC', dates: 'May-Jun 2024', description: ['Worked in the R&D Department of Ashland’s specialty extraction division, Avoca LLC.', 'Researched DNA sequencing of transgenic sage plants to achieve higher sclareol yields.', 'Collected and organized data into Excel.', 'Worked in the greenhouse and multiple farming plots to upkeep crops, gather samples, etc.'], image: '/sage.jpg'}
];

const projects = [
  { title: 'Portfolio Website', description: ['Created this personal portfolio using React, Vite, and TailwindCSS.', 'Utilizes github actions to redeploy updated build to github pages upon commit.'], tools: 'React, Vite, TailwindCSS, Github, Github Actions', href: 'https://github.com/hctynch/hctynch.github.io'},
  { title: 'Foxhound Scoring Software', description: ['Created an updated score tracking software for foxhound field trials.', 'Stores dog crosses and information throughout the hunt, and displays point totals as well as other various details.'], tools: 'Java, Spring Boot, Docker, MySQL, React', href: 'https://github.com/hctynch/mastersgtp'},
  { title: 'Upcoming Project (ML Routing System)', description: [], tools: '...', href: '#'},
];

export default function Example() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleScroll = () => {
    const windowCenter = window.innerHeight / 2 + window.scrollY;

    // Find the section closest to the center of the viewport
    const closestIndex = sectionRefs.current.reduce((closest, section, index) => {
      if (!section) return closest;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionCenter = sectionTop + sectionHeight / 2;
      const distanceToCenter = Math.abs(windowCenter - sectionCenter);

      return distanceToCenter < closest.distance
        ? { index, distance: distanceToCenter }
        : closest;
    }, { index: null, distance: Infinity }).index;

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load to set the active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showPacman, setShowPacman] = useState(false);

  const PacmanWithGhost = () => {
    // Start Pac-Man and ghost in the bottom-left corner
    const [pacmanPosition, setPacmanPosition] = useState({
      top: window.innerHeight - 60,
      left: 0,
    });
    const [ghostPosition, setGhostPosition] = useState({
      top: window.innerHeight - 60,
      left: 75,
    });
  
    // Recalculate positions on resize
    useEffect(() => {
      const handleResize = () => {
        setPacmanPosition((prev) => ({
          ...prev,
          top: window.innerHeight - 60,
        }));
        setGhostPosition((prev) => ({
          ...prev,
          top: window.innerHeight - 60,
        }));
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      const pacmanInterval = setInterval(() => {
        setPacmanPosition((prev) => {
          let newLeft = prev.left;
          const screenWidth = window.innerWidth; // Full screen width
  
          // Move Pac-Man to the right and reset to the left when off-screen
          if (newLeft > screenWidth) {
            newLeft = -60; // Reset to just off the left-hand side
          } else {
            newLeft += 3; // Movement speed
          }
  
          return { ...prev, left: newLeft };
        });
      }, 50);
  
      return () => clearInterval(pacmanInterval);
    }, []);
  
    useEffect(() => {
      const ghostInterval = setInterval(() => {
        setGhostPosition((prev) => {
          let newLeft = prev.left;
          const screenWidth = window.innerWidth; // Full screen width
  
          // Move Ghost to the right and reset to the left when off-screen
          if (newLeft > screenWidth) {
            newLeft = -60; // Reset to just off the left-hand side
          } else {
            newLeft += 3; // Movement speed
          }
  
          return { ...prev, left: newLeft };
        });
      }, 50);
  
      return () => clearInterval(ghostInterval);
    }, []);
  
    return (
      <div>
        {/* Pac-Man */}
        <div
          className="absolute z-[51]"
          style={{
            top: `${pacmanPosition.top}px`,
            left: `${pacmanPosition.left}px`,
          }}
        >
          <img
            src="/XOsf.gif"
            alt="Pac-Man"
            className="fixed h-12 w-12"
          />
        </div>
  
        {/* Ghost */}
        <div
          className="absolute z-[51]"
          style={{
            top: `${ghostPosition.top}px`,
            left: `${ghostPosition.left}px`,
          }}
        >
          <img
            src="/iHG.gif"
            alt="Ghost"
            className="fixed h-12 w-12"
          />
        </div>
      </div>
    );
  };
  

  return (
    <div className="max-h-max">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 sm:px-8">
          <div className="flex sm:flex-1">
            <a href="#home" className="absolute -m-1.5 p-1.5 left-2 top-8 sm:left-6">
              <span className="sr-only">Hunt Tynch</span>
              <p className="text-emerald-400 font-Inter font-bold text-xl sm:text-3xl text-shadow-sm">
                Hunt Tynch
              </p>
            </a>
          </div>
          <div className="flex-col flex items-start absolute  top-16 left-2 sm:left-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-Inter sm:text-lg text-sm font-semibold relative transform transition-all duration-500 hover:text-emerald-400 my-1 ${
                  activeIndex === index
                    ? "scale-125 text-shadow-sm text-emerald-400"
                    : "scale-100 dark:text-gray-200 text-gray-700"
                }`}
              >
                {item.name}
                {/* Line to the left */}
                <span
                  className={`flex h-[2px] bg-emerald-400 transition-all duration-500 ${
                    activeIndex === index ? "w-full" : "w-0"
                  }`}
                  style={{
                    transform: "translateY(-50%)",
                  }}
                ></span>
              </a>
            ))}
          </div>
        </nav>
      </header>
      <div className="fixed bottom-20 left-6">
            {/* Pacman Toggle - Always visible */}
            <PacmanToggle onChange={setShowPacman} />
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* First Polygon */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Second Polygon */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Third Polygon */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(50%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(30% 40%, 70% 50%, 100% 70%, 80% 100%, 20% 80%, 10% 50%, 30% 40%)',
            }}
            className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[24.125rem] -translate-x-1/2 rotate-45 bg-gradient-to-bl from-[#34d399] to-[#10b981] opacity-25 sm:left-[calc(50%-20rem)] sm:w-[48.1875rem]"
          />
        </div>

        {/* Fourth Polygon */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(25%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(40% 30%, 90% 40%, 100% 80%, 70% 100%, 30% 90%, 10% 50%, 40% 30%)',
            }}
            className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[28.125rem] -translate-x-1/2 rotate-[-30deg] bg-gradient-to-br from-[#facc15] to-[#f59e0b] opacity-25 sm:left-[calc(50%+25rem)] sm:w-[56.1875rem]"
          />
        </div>
        <div className="flex flex-col items-end mx-20 -my-32 min-w-60 sm:mx-0 sm:max-w-full sm:items-center">
        {/* Main Content */}
        <div className="sm:max-w-2xl py-32 sm:py-44" id="home" ref={(el) => (sectionRefs.current[4] = el)}>
          <div className="flex flex-col text-start sm:justify-center sm:text-center sm:items-center">
            <div className="flex justify-end sm:justify-center items-center mb-10">
            <img 
              src="/centered_pic.jpeg"
              className="h-[200px] w-[200px] sm:w-[500px] sm:h-[500px] object-cover object-top shadow-xl rounded-full"
            />
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-500 lg:text-7xl">
              Hi, I am Hunt Tynch!
            </h1>
            <p className="mt-4 text-pretty text-lg font-medium light:text-gray-500 dark:text-gray-400 sm:text-xl/8">
              A senior graduating from North Carolina State University with a bachelor's degree in Computer Science.
            </p>
          </div>
        </div>
          <div className="max-w-60 md:max-w-2xl -my-8 sm:-my-0 sm:py-44" id="about" href="#about" ref={(el) => (sectionRefs.current[0] = el)}>
            <div className="flex flex-col text-start sm:justify-center sm:text-center sm:items-center">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-500 md:text-7xl">
                About
              </h1>
                <p className="mt-4 text-balance sm:text-center text-md font-medium light:text-gray-500 dark:text-gray-400 sm:text-xl/8">
                  Hi, I’m Hunt Tynch; A Software Engineer passionate about backend development and building robust, scalable systems. With expertise in Java, C, and frameworks like Spring, I specialize in creating efficient APIs, data-driven applications, and server-side solutions that power seamless user experiences.
                  I earned my Bachelor’s in Computer Science from NC State University, where I honed my skills in software design, algorithms, and system architecture. My academic projects and hands-on experience have deepened my understanding of creating clean, maintainable code for real-world applications.
                  When I’m not solving coding challenges, I enjoy gaming and playing basketball, which keeps me energized and focused. I’m always excited to collaborate, tackle new technologies, and deliver impactful software solutions.
                  Check out my projects below or reach out to start a conversation—I’d love to connect!
                </p>
        </div>
        </div>
        <div className="max-w-60 sm:max-w-2xl my-32 sm:-my-0 sm:py-44" id="skills" href="#skills" ref={(el) => (sectionRefs.current[1] = el)}>
          <div className="flex flex-col text-start sm:justify-center sm:text-center sm:items-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              Skills
            </h1>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-full mx-auto rounded-lg shadow-xl bg-gray-300 p-6 transform transition-transform duration-300 hover:scale-110"
                  >
                    <div className="flex items-center justify-center mt-7">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                    <h3 className="mt-7 text-center text-lg font-semibold text-gray-900">
                      {skill.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-60 sm:max-w-2xl sm:-my-0 sm:py-44" id="projects" href="#projects" ref={(el) => (sectionRefs.current[2] = el)}>
          <div className="flex flex-col text-start sm:justify-center sm:text-center sm:items-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
              {projects.map((project, index) => (
                <div
                key={index}
                className="w-full mx-auto rounded-lg shadow-xl bg-gray-300 p-6 transform transition-transform duration-300 hover:scale-110"  
                >
                  <h2 className="text-gray-900 font-bold font-mono text-[20px]">
                    {project.title}
                  </h2>
                  <h2 className="text-gray-900 font-semibold font-mono italic mt-2">
                    Stack: [{project.tools}]
                  </h2>
                  <ul style={{ listStyleType: 'disc'}}>
                    {project.description.map((descrip, index) => (
                      <li
                        key={index}
                        className="mt-5 text-pretty text-lg font-mono text-gray-900"
                      >
                        {descrip}
                      </li>
                    ))}
                  </ul>
                  <Button className='mt-5  hover:bg-blue-600 bg-blue-500 rounded-full shadow-sm shadow-gray-600'>
                    <a href={project.href} className="text-white hover:text-white">
                      Go to repo &rarr;
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="my-24 sm:px-0 max-w-full sm:max-w-2xl"
          id="experience"
          href="#experience"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div className="flex flex-col text-start sm:justify-center sm:text-center sm:items-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              Experience
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="w-full sm:max-w-none mx-auto rounded-lg shadow-xl bg-gray-300 p-6 transform transition-transform duration-300 hover:scale-110"
                >
                  <h2 className="text-gray-900 font-bold font-mono text-[20px]">
                    {exp.title}
                  </h2>
                  <h2 className="text-gray-900 font-bold font-mono">
                    {exp.dates}
                  </h2>
                  <img
                    src={exp.image}
                    className="shadow-sm shadow-black rounded-xl h-[200px] w-[200px] sm:h-auto sm:w-auto"
                  />
                  <h2 className="text-gray-900 font-bold font-mono">
                    {exp.company}
                  </h2>
                  <h2 className="text-gray-900 font-bold font-mono">
                    {exp.location}
                  </h2>
                  <ul style={{ listStyleType: 'disc' }}>
                    {exp.description.map((descrip, idx) => (
                      <li
                        key={idx}
                        className="mt-5 text-pretty text-lg font-mono text-gray-900"
                      >
                        {descrip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed bottom-1/3 left-8 z-50">
          <div className="flex flex-col items-center gap-6">
            {/* Email */}
            <a href="mailto:tynchhunt@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail className="text-3xl lg:text-5xl opacity-70 hover:opacity-100 text-gray-500 hover:text-emerald-400 transition-all" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hunt-tynch" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-3xl lg:text-5xl opacity-70 hover:opacity-100 text-gray-500 hover:text-emerald-400 transition-all" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/h.tynch04" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-3xl lg:text-5xl opacity-70 hover:opacity-100 text-gray-500 hover:text-emerald-400 transition-all" />
            </a>
            <a href="/Hunt_Tynch_Resume.pdf" download className="flex flex-col items-center text-3xl lg:text-5xl opacity-70 hover:opacity-100 text-gray-500 hover:text-emerald-400 transition-all">
                <FaFileDownload />
                <span className="text-xs sm:text-lg">Resume</span>
            </a>
          </div>
        </div>
        </div>
      </div>
      {showPacman && <PacmanWithGhost/>}
      </div>
  )
}
