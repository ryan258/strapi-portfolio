const React = require("react")
const Layout = require("./src/components/Layout").default

// programmatically wrap all pages (aka element) in a <Layout> component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
