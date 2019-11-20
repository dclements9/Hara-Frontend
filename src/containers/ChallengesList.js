import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { getChallenges } from '.././actions/challenges'
import Spinner from 'react-bootstrap/Spinner'

class ChallengesList extends Component {

    componentDidMount() {
        this.props.getChallenges();
    }

    render() {
        if (this.props.challenges.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
        }
        return (
            <div>
                <h1> Challenges List </h1>
                
                {this.props.challenges.map( challenge => 
                    <div>
                        <Link to={`/challenges/${challenge.id}`}><h2>{challenge.title}</h2></Link>
                        <p>{challenge.description}</p>
                    </div>
                )}
                <br />
                <br />
                <div>
                    <Button href="/challenges/new"><h3>Create New Challenge</h3></Button>
                </div>
            </div>
        )
    }

}

export default connect(state => ({ challenges: state.challenges }), { getChallenges })(ChallengesList)