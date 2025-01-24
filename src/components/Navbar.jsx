import { Button, Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import PacmanToggle from './PacmanToggle';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="sr-only">Hunt Tynch</span>
              <p className="text-emerald-400 font-Inter font-bold text-3xl">
                Hunt Tynch
              </p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black bg-emerald-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-Inter text-md font-semibold dark:text-gray-200 text-gray-700">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            {/* Pacman Toggle - Always visible */}
            <PacmanToggle onChange={setShowPacman} />
            
            {/* Resume Button - Visible only on large screens */}
            <a
              href="/Hunt_Tynch_Resume.pdf"
              download
              className="lg:block"
            >
              <Button className="min-w-[150px] font-Inter hover:to-cyan-600 hover:from-emerald-700 justify-center from-emerald-500 to-cyan-500 bg-gradient-to-br text-black relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 shadow-sm shadow-gray-800">
                Resume
              </Button>
            </a>
          </div>
          <div className="fixed right-20 z-50 top-8 lg:hidden">
            <PacmanToggle onChange={setShowPacman} />
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <FaHome className="h-10 w-auto text-emerald-400"/>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-black bg-emerald-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-emerald-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a 
                    href="/Hunt_Tynch_Resume.pdf" 
                    download 
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-emerald-400"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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

        {/* Main Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" id="home">
          <div className="text-center">
            <div className="flex justify-center items-center mb-10">
            <img 
              src="/centered_pic.jpeg"
              className="h-[250px] w-[250px] lg:w-[500px] lg:h-[500px] object-cover object-top shadow-xl rounded-full"
            />
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              Hi, I am Hunt Tynch!
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium light:text-gray-500 dark:text-gray-400 sm:text-xl/8">
              A senior graduating from North Carolina State University with a bachelor's degree in Computer Science.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:py-20" id="about">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              About
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium light:text-gray-500 dark:text-gray-400 sm:text-xl/8">
              Hi, I’m Hunt Tynch; A Software Engineer passionate about backend development and building robust, scalable systems. With expertise in Java, C, and frameworks like Spring, I specialize in creating efficient APIs, data-driven applications, and server-side solutions that power seamless user experiences.
              I earned my Bachelor’s in Computer Science from NC State University, where I honed my skills in software design, algorithms, and system architecture. My academic projects and hands-on experience have deepened my understanding of creating clean, maintainable code for real-world applications.
              When I’m not solving coding challenges, I enjoy gaming and playing basketball, which keeps me energized and focused. I’m always excited to collaborate, tackle new technologies, and deliver impactful software solutions.
              Check out my projects below or reach out to start a conversation—I’d love to connect!
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:py-20" id="skills">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              Skills
            </h1>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
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
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:py-20" id="projects">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
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
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:py-20" id="experience">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-emerald-500 sm:text-7xl">
              Experience
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
              {experience.map((experience, index) => (
                <div
                key={index}
                className="w-full mx-auto rounded-lg shadow-xl bg-gray-300 p-6 transform transition-transform duration-300 hover:scale-110"  
                >
                  <h2 className="text-gray-900 font-bold font-mono text-[20px]">
                    {experience.title}
                  </h2>
                  <h2 className="text-gray-900 font-bold font-mono">
                    {experience.dates}
                  </h2>
                  <img
                    src={experience.image}
                    className="shadow-sm shadow-black rounded-xl"
                  />
                  <h2 className="text-gray-900 font-bold font-mono">
                    {experience.company}
                  </h2>
                  <h2 className="text-gray-900 font-bold font-mono">
                    {experience.location}
                  </h2>
                  <ul style={{ listStyleType: 'disc'}}>
                    {experience.description.map((descrip, index) => (
                      <li
                        key={index}
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
        <div className="fixed bottom-2 left-2 lg:top-1/2 lg:-translate-y-20 lg:left-6 z-50">
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
          </div>
        </div>
      </div>
      {showPacman && <PacmanWithGhost/>}
    </div>
  )
}
