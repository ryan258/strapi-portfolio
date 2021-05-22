import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob(sort: { fields: created_at, order: ASC }) {
      nodes {
        company
        position
        date
        jd_val {
          id
          jd_bullet
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    allStrapiJob: { nodes: jobs },
  } = data

  // state for which job is selected and being displayed
  const [value, setValue] = React.useState(0)

  const { company, date, position, jd_val } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, i) => {
            return (
              <button
                key={i}
                className={i === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(i)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* jd container */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {jd_val.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" /> {item.jd_bullet}
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
