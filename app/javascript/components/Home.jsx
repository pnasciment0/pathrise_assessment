import React, {Component} from "react";
import JobSource from "./JobSource.jsx";
import { Link } from "react-router-dom";

import jobSourceData from '../../../lib/assets/jobBoards.json'

class Home extends Component {
  render () {
    let sources = [];
    jobSourceData.job_boards.forEach(function(jb) {
      sources.push(jb);
    });
    return (
      <div className="all-job-boards">
        {sources.map(item => <JobSource key={item.name} jbdata ={item}/>)}
      </div>
    )
  }

}

export default Home;

