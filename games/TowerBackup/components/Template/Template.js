// import React from "react";
// import PropTypes from "prop-types";
// import "./Template.css";
// require("./Template.css");

function Template(props) {
  const { testTubes, children } = props;
  return React.createElement(
    "div",
    { className: "Template" },
    React.createElement(
      "div",
      { className: "TestTubesWrapper" },
      testTubes
    ),
    React.createElement(
      "div",
      { className: "SidepanelWrapper" },
      children
    )
  );
}

Template.propTypes = {
  testTubes: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default Template;

