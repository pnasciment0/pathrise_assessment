import React, {Component} from "react";
import { HashRouter, Link } from "react-router-dom";

class JobSource extends Component {
  render () {
    let jobSourceData = this.props.jbdata;
    let name = jobSourceData.name;
    let rating = jobSourceData.rating;
    let imgUrl = jobSourceData.logo_file;
    let description = jobSourceData.description;

    return (
      <HashRouter>
        <div className="job-board"> 
          <Link className="card link-to-jb" to={name}> {/* Use job name as URL to match database */}
              <p className= {rating.toLowerCase() + " rating"}>{rating}</p>
              <div className="info-wrapper">
               <img className="logo" src={imgUrl}/> 
                <p className="description">{description}</p>
              </div>
          </Link>  
        </div>
      </HashRouter>
    )
  }
}

export default JobSource;