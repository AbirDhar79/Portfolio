import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AIAGENT from "../../Assets/Projects/AIAGENT.png";
import Backend from "../../Assets/Projects/Backend.png";
import Entertainment from "../../Assets/Projects/Entertainment.png";
import EZYEV from "../../Assets/Projects/EZYEV.png";
import LeadBot from "../../Assets/Projects/LeadBot.png";
import RAG from "../../Assets/Projects/RAG.png";
import Resume from "../../Assets/Projects/resumebuilder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Entertainment}
              isBlog={false}
              title="Entertainment App"
              description="The Entertainment App is a web application that allows users to browse, search, and bookmark movies and TV series, powered by The Movie Database (TMDb) API. With a responsive design and secure user authentication, it provides a seamless experience for discovering entertainment content."
              ghLink="https://github.com/AbirDhar79/Entertainment_App"
             demoLink="entertainment-app-bice.vercel.app"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Backend}
              isBlog={false}
              title="bookMyShow backend"
              description="A fullstack movie booking application inspired by BookMyShow, built with React frontend and Express.js backend."
              ghLink="https://github.com/AbirDhar79/bookMyShow_backendcapstone"
             demoLink="https://book-my-show-backendcapstone.vercel.app"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeadBot}
              isBlog={false}
              title="LeadBot"
              description="An automated bot to monitor and extract relevant posts from social media platforms, notify clients about the latest posts related to specified keywords, and gather contact details of the poster"
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EZYEV}
              isBlog={false}
              title="ezyev-authpage"
              description="This Next.js project demonstrates a basic authentication system using ShadCN UI. Users can log in with a hardcoded username and password. Upon successful login, the user is redirected to a protected page. The project uses React Context for state management to persist the authentication state across page reloads. The authentication form is styled us"
              ghLink="https://github.com/AbirDhar79/ezyev-authpage"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIAGENT}
              isBlog={false}
              title="CrewAI linkedin Agents
"
              description="aA multi-agent AI system that automatically transforms YouTube video content into polished, engaging LinkedIn posts, optimizing them for maximum reach and professional impact."
              ghLink="https://github.com/AbirDhar79/CrewAI_linkedinAgents"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RAG}
              isBlog={false}
              title="RAG application with DeepSeek in Local
"
              description="This project reflects my commitment to hands-on learning and my drive to explore cutting-edge AI technologies like RAG and DeepSeek. This project is also built on my previous experience working on an RAG chatbot, using similar LLM and Langchain technologies."
              ghLink="https://github.com/AbirDhar79/RAG-application-with-DeepSeek-in-Local"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="resume-builder-2.0"
              description="Resume builder is a web application where anyone can create a resume with ease and choose from different available templates."
              ghLink="https://github.com/AbirDhar79/resume-builder-2.0"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
