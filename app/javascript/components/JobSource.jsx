import React, {Component} from "react";
import { Link } from "react-router-dom";

class JobSource extends Component {
  render () {
    let jobSourceData = this.props.jbdata;
    return (
      <div classname="job-source-wrapper">
        <p>{jobSourceData.name}</p>
        <p>{jobSourceData.rating}</p>
        <p>{jobSourceData.description}</p>
        <img src={jobSourceData.logo_file}/>
      </div>
    )
  }
}

export default JobSource;