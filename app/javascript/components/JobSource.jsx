import React, {Component} from "react";
import { HashRouter, Link } from "react-router-dom";

class JobSource extends Component {
  render () {
    let jobSourceData = this.props.jbdata;
    let name = jobSourceData.name;
    let toUrl = name;
    // let toUrl = name.toLowerCase().replace(/ /g, "-"); //turns "Google" into "google", in order to view jobs at /google
    return (
      <HashRouter>
        <Link to={toUrl}>
          <div className="job-source-wrapper">
            <p>{jobSourceData.name}</p>
            <p>{jobSourceData.rating}</p>
            <p>{jobSourceData.description}</p>
            <img src={jobSourceData.logo_file}/>
          </div>
        </Link>  
      </HashRouter>
    )
  }
}

export default JobSource;