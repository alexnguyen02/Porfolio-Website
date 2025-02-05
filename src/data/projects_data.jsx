// Project data containting descriptions & external links to Github source code. 
const projectsData = [
  {
    id: 1,
    projectName: "Porfolio Website",
    description: (
      <>
        Designed and developed a porfolio website using <b>React</b>,{" "}
        <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b>, demonstrating front-end
        and project management skills.
      </>
    ),
    imageURL: "porfolio.png",
    techStack: "JavaScript, HTML, CSS, React, Git",
    githubLink: "https://github.com/alexnguyen02/Porfolio-Website",
  },
  {
    id: 2,
    projectName: "Comprehensive Obstacle Map",
    description: (
      <>
        Collaborated in a team of four to develop a web application{" "}
        <b>within 24 hours</b> using <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>{" "}
        and <b>Svelte</b>, helping pedestrians navigate Toronto safely. Implemented <b>user authentication</b> using <b>Auth0</b>.  
      </>
    ),
    imageURL: "newhacks.png",
    techStack: "JavaScript, HTML, CSS, Svelte, Auth0, Git",
    githubLink:
      "https://github.com/alexnguyen02/Comprehensive-Obstacle-Mapping",
  },
  {
    id: 3,
    projectName: "Totally Trivia",
    description: (
      <>
        Led a team of four to develop a trivia game application with <b>user
        authentication</b> and APIs using <b>Java</b>. Achieved over{" "}
        <b>60% test coverage</b> by resolving critical bugs and ensuring code
        structure aligned with the <b>Clean Architecture</b> principles.
      </>
    ),
    imageURL: "trivia.png",
    techStack: "Java, APIs, Git",
    githubLink: "https://github.com/alexnguyen02/Totally-Trivia",
  },
  {
    id: 4,
    projectName: "Post COVID-19: An Interactive Guide",
    description: (
      <>
        Implemented a recommendation system using <b>Python</b> to generate top
        safest layover countries based on the COVID-19 case report API.
        Developed the <b>front-end </b> of the app using <b>Flask</b> library.
      </>
    ),
    imageURL: "guide.png",
    techStack: "Python, Flask, APIs, Git",
    githubLink:
      "https://github.com/alexnguyen02/Post-Covid19-An-Interactive-Travel-Guide",
  },
];

export default projectsData;
