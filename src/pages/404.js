import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>This is not the page you have been looking for...</h1>
          <Link to="/" className="btn">
            Go back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
