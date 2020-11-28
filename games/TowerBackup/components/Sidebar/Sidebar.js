// import React from "react";
// import PropTypes from "prop-types";
// import "./Sidebar.css";
// require("./Sidebar.css");

function Sidebar(props) {
  const { children } = props;
  return React.createElement(
    "div",
    { className: "Sidebar" },
    children
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Sidebar;


