import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {COMMENTS} from '../shared/comments';

class CampsiteInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: props.campsite,
            comments:COMMENTS
        };
    }

    renderCampsite(campsite) {
        if ( campsite) {
            console.log(campsite);
            return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name}></CardImg>
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>

            </Card>);
        }
        return <div/>;
    }

    renderComments(comments) {
        if ( comments ) {
            return (<div className="col-md-5 m-1">
                <h4>Comments</h4>
                <div>
                {comments.map((comment)=><div key={comment.id}><p>{comment.text}<br/>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div>)}
                </div>
            </div>);
        }
        return (<div/>);
    }

    render() {
        return (<div>
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.state.comments)}
            </div>);
    }

}

export default CampsiteInfo;