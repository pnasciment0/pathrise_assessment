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
                <table>
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
                                <th>{j.id}</th>
                                <th>{j.company_name}</th>
                                <th>{j.job_title}</th> 
                                <th>{j.url}</th>
                            </tr>   
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default JobList;
