import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, disabled = false, style, children }) {
  return (
    <button
      style={{
        fontSize: "16px",
        padding: "8px 16px",
        border: "1px solid black",
        borderRadius: "4px",
        cursor: "pointer",
        background: "inherit",
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Button;
