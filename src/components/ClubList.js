import React from "react";
import Club from "./Club";
import "../App.css";
class ClubList extends React.Component {
  render() {
    console.log(this.props.clubs);
    const item = this.props.clubs.map((clubItem, i) => {
      return (
        <li className="clubList" key={i}>
          <Club clubProp={clubItem} />
        </li>
      );
    });
    return (
      <div className="container">
        <ul>{item}</ul>
      </div>
    );
  }
}
export default ClubList;
