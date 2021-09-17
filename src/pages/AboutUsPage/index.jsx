import React from "react";


import AboutUsCard from "./AboutUsCard";

const AboutUsPage = () => {
  const Julian = {
    name: "Julián Pérez Hincapié",
    linkdin:
      "https://www.linkedin.com/in/juli%C3%A1n-david-p%C3%A9rez-hincapi%C3%A9-04b121167/",
    description:
      "Especialista en Inteligencia Artificial, automatización de procesos, entusiasta por facilitar la manera en que las personas interactuan con el mundo.",
    email: "jdph852@gmail.com",
  };

  const Steven = {
    name: "Steven Salgado González",
    description:
      "Ingeniero en Analítica, conocimiento avanzado en desarrollo web y analítica de datos, entusiasta por la Inteligencia Artificial y la creación de modelos de Machine Learning que faciliten el trabajo humano",
    linkdin: "https://www.linkedin.com/in/stevensalgadogonzalez/",
    email: "stevensalgado0197@gmail.com",
  };

  return (
    <div>
      <AboutUsCard user={Julian} /> <AboutUsCard user={Steven} />
    </div>
  );
};

export default AboutUsPage;
