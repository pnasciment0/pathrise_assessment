import React, {Component} from "react";

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            boardName: ""
        }
    }
    componentDidMount() {
        let jobBoardName = this.props.match.params.jobboard;
        let url = `/api/v1/job_opps/${jobBoardName}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Error with fetching job opportunities.");
            })
            .then(response => this.setState({jobs: response, boardName: jobBoardName}));
            // .catch(() => this.props.history.push("/"));
    }
    render () {
        // const { jobs } = this.state;
        return (
            <div className="job-list-master-wrapper">
                <h1>Job Source: {this.state.boardName}</h1>
                <div className="jobs-table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Company Name</th>
                                <th>Job Title</th>
                                <th>Job URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.jobs.map(j => 
                                <tr key={j.id}>
                                    <td>{j.id}</td>
                                    <td>{j.company_name}</td>
                                    <td>{j.job_title}</td> 
                                    <td><a href={j.url}>{j.url.substring(0, 100) + "..."}</a></td>
                                </tr>   
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

export default JobList;
