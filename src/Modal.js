import React from "react";

class Modal extends React.Component {
  componentWillUnmount() {
    console.log("Component is about to unmount.");
  }

  render(props) {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>{this.props.info.cityName}</h4>
          <p>
            High: {this.props.info.high} - Low: {this.props.info.low}
          </p>
          <p>
            {this.props.info.weather}{" "}
            <img src={this.props.iconUrl} alt="visual" />
          </p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Return
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
