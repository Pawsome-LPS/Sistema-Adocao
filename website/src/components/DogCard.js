import React from 'react';
import { Col, Card, CardBody, CardImage, CardTitle, CardText }  from 'mdbreact';
import './../App.css';

class DogCard extends React.Component {
    render() {
        
        return(
            <Col md="6" className='component-content'>
                <Card>
                    <CardBody>
                        <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/>
                        <CardTitle className='cadastro'>{this.props.name}</CardTitle>
                        <CardText>{this.props.idade}</CardText>
                        <CardText>{this.props.vacinacao}</CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default DogCard;