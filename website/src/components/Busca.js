import React from 'react';
import { Button, Card, CardBody, Input }  from 'mdbreact';
import './../App.css';

class Busca extends React.Component {
    render(){
        return(
            <Card>
                <CardBody>
                    <form>
                    <p className="h4 text-center py-4 cadastre">Busca</p>
                    <div className="grey-text">
                    <Input label="Raça" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Nome" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="data" icon="phone" group type="date" validate error="wrong" success="right"/>
                    </div>
                    <div className="text-center py-4 mt-3">
                        <Button color="red">Cancelar</Button>
                        <Button color="cyan" type="submit">Buscar</Button>
                    </div>
                </form>
                </CardBody>
            </Card>
        )
    }
}

export default Busca;