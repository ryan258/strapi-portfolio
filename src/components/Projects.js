import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink }) => {
  // console.log(props)
  // console.log(project)
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, i) => {
          return <Project key={project.id} index={i + 1} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          More Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
