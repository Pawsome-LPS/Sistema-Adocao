import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText }  from 'mdbreact';

class DogCard extends React.Component {
    render() {
        
        return(
            <Card>
                <CardBody>
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/>
                    <CardTitle className="cadastro">{this.props.name}</CardTitle>
                    <CardText>{this.props.idade}</CardText>
                    <CardText>{this.props.vacinacao}</CardText>
                </CardBody>
            </Card>
        )
    }


}

export default DogCard;