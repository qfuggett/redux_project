import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteJob, getJobs } from '../actions/jobs'
import JobStatus from '../components/JobStatus'

class JobList extends Component {

    componentDidMount(){
        this.props.onGet()
    }

    render(){
        return(
            <>
            <h1>Jobs Applied To: </h1>
                {this.props.jobs.map((job, index) => {
                    return (
                            <ul className="jobs">
                                <li key={index.uniqueId}>
                                    {job.title} - {job.company} 
                                    <JobStatus job={job}/> 
                                </li>
                                <button key={job.id} onClick={() => this.props.onDelete(job.id)}>Delete</button>
                            </ul>
                        )
                    })
                }
            </>
            )
    }
}

const mapStateToProps = state => {
    console.log("jobs state testing", state)
    return {
      jobs: state.job.jobs,
      loading: state.job.loading
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            dispatch(getJobs());
        },

        onDelete: (id) => {
            dispatch(deleteJob(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);