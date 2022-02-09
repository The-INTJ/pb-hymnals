import React from "react";

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1>Purchase the Old School Hymnal</h1>
          <button>
            <em>P U R C H A S E</em>
          </button>
        </div>
      </div>
    );
  }
}

export default PaypalButton;
