import React from 'react';
import { Col, Card, CardBody, CardImage, CardTitle, CardText }  from 'mdbreact';
import './../App.css';

class DogCard extends React.Component {
    render() {
        return(
            <Col md="6" className='component-content'>
                <Card>
                    <CardBody>
                        <CardImage className="img-fluid" src={this.props.image? this.props.image : "https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale"}/>
                        <br />
                        <CardTitle className='cadastro'>{this.props.name}</CardTitle>
                        <CardText>{this.props.idade}</CardText>
                        <CardText>{this.props.vacinacao}</CardText>
                    </CardBody>
                </Card>
                <br />
            </Col>
        )
    }
}

export default DogCard;