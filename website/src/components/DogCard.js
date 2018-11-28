import React from 'react';
import { Col, Card, CardBody, CardImage, CardTitle, CardText }  from 'mdbreact';
import './../App.css';

class DogCard extends React.Component {
    render() {
        
        return(
            <Col md="6" className='component-content'>
                <Card>
                    <CardBody>
                        <CardImage className="img-fluid" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi"/>
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