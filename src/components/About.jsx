import React from "react";

const About = () => {
  return (
    <div className="mb-8 px-4 md:px-0">
      <h1 className="text-2xl font-bold text-gray-900">About</h1>
      <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed ">
        Full-stack engineer specialising in the MERN stack with TypeScript,
        currently going deep into applied AI — building{" "}
        <a href="https://dev-onboard.vercel.app" className="text-gray-900 font-medium underline">
          DevOnboard
        </a>
        , a workflow automation platform with React Flow, and Node.js,.
        I care about shipping real products, not just writing code.
        Currently exploring agentic AI, RAG, Fine Tuning, Langchain, LangGraph.
      </p>
    </div>
  );
};

export default About;
