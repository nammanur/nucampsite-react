import React from 'react';
import { Card, CardImg, CardText, CardBody, Button, Modal, ModalHeader, ModalBody, Breadcrumb, BreadcrumbItem, Row, Col, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


function RenderCampsite({ campsite }) {
    if (campsite) {
        return (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name}></CardImg>
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>

            </Card>);
    }
    return <div />;
}

function RenderComments({ comments }) {
    if (comments) {
        return (<div className="col-md-5 m-1">
            <h4>Comments</h4>
            <div>
                {comments.map((comment) => <div key={comment.id}><p>{comment.text}<br />--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p></div>)}
            </div>
            <CommentForm/>
        </div>);
    }
    return (<div />);
}

class CommentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        // event.preventDefault();
        console.log(JSON.stringify(values));
        // alert((JSON.stringify(event)));
    }


    render() {
        return (
            <React.Fragment>
                <Button outline className="fa-lg"  onClick={this.toggleModal}><i class="fa fa-pencil"></i> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Coment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select name="rating"
                                        id="rating"
                                        model=".rating" className="form-control" defaultValue={5}
                                        >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    /</Control.select>
                                    <Errors className="text-danger" model=".rating" show="touched" component="div"
                                    messages={{isNumber:'Select a Rating'}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={
                                            {
                                                required,
                                                minLength: minLength(2),
                                                maxLength:maxLength(15)
                                            }
                                    }/>
                                    <Errors className="text-danger" model=".author" show="touched" component="div"
                                    messages={{required:'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be at 15 characters or less'}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea id="comment" name="comment" className="form-control" model=".comment"
                                            rows="6"/>
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary" >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>);
    }

}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">

                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/directory'>Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>

                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;