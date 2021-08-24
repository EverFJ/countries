import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <button
          className="btn btn-primary border m-1"
          onClick={() => {
            this.props.onClick(this.props.children.toLowerCase());
          }}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
