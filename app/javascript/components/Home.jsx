import React, {Component} from "react";
import JobSource from "./JobSource.jsx";

import jobSourceData from '../../../lib/assets/jobBoards.json'

class Home extends Component {
  render () {
    let sources = [];
    jobSourceData.job_boards.forEach(function(jb) {
      sources.push(jb);
    });
    generateJobsByBoardTally();
    return (
      <div className="job-boards-master-wrapper">
        <h1>Job Sources</h1>
        <div className="all-job-boards">
          {sources.map(item => <JobSource key={item.name} jbdata ={item}/>)}
        </div>
      </div>
      
    )
  }
}

async function generateJobsByBoardTally() { // generates the table of job sources and counts
  for (let i = 0; i < jobSourceData.job_boards.length; i++) {
    let jb = jobSourceData.job_boards[i];
    let url = `/api/v1/job_opps/${jb.name}`;
    let numJobs = await fetch(url)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error("Error with fetching job opportunities.");
      })
      .then(json => {
        return json.length;
      });
    console.log(`"${jb.name}" => ${numJobs},`);
  };
}

export default Home;

