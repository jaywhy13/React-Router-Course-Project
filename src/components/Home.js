import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1>Hash History</h1>
          <br />
          <h1>Basketball League</h1>
        </div>

        <div className="team-selection">
          <h3>Select a team</h3>
          <div className="list-of-teams">Teams go here</div>
        </div>
      </div>
    );
  }
}
