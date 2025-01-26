const SkillsComponent = () => {
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

  return (
    <div className='flex items-center justify-center'>
      <div className='grid grid-cols-2 sm:grid-cols-5 gap-6 mt-5'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='w-full mx-auto rounded-lg shadow-xl text-center bg-white/30 border border-white/10 px-7 py-8 transform transition-all duration-300 hover:scale-105 hover:border-emerald-400'>
            <div className='flex items-center justify-center mt-7'>
              <img
                src={skill.image}
                alt={skill.title}
                className='h-24 w-24 object-contain'
              />
            </div>
            <h3 className='flex justify-center mt-7 text-center text-lg font-semibold text-gray-900'>
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
