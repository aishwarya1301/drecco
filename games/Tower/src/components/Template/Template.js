import React from "react";
import PropTypes from "prop-types";
import "./Template.css";

function Template(props) {
  const { testTubes, children } = props;
  return (
    <div className="Template">
      <div className="TestTubesWrapper">{testTubes}</div>
      <div className="SidepanelWrapper">{children}</div>
    </div>
  );
}

Template.propTypes = {
  testTubes: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Template;
