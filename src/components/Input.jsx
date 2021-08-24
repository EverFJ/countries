import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <form className="form-group text-center">
          <label className="form-label">
            Enter country you're searching for :
          </label>
          <div className="row justify-content-center">
            <div className="col-4">
              <input
                className="form-control"
                type="text"
                value={this.props.value}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <button
            className="btn btn-primary mt-1"
            type="button"
            onClick={() => {
              //   console.log("input value", this.props.value);
              this.props.onClick(this.props.value);
            }}
          >
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Input;
