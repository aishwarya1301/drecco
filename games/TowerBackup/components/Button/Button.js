// import React from "react";
// import PropTypes from "prop-types";
// import ReactGA from "react-ga";
// import "./Button.css";
// require("./Button.css");

function Button(props) {
  // https://codepen.io/YusukeNakaya/pen/vYYzbGW
  const { disabled, onClick, text } = props;

  const onClickHandler = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: text,
    //   nonInteraction: false
    // });
    onClick();
  };

  return React.createElement(
    "button",
    {
      type: "button",
      className: "Button",
      disabled: disabled,
      onClick: onClickHandler
    },
    React.createElement(
      "span",
      null,
      text
    )
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {}
};

export default Button;

