import React from 'react';

class CadastroPet extends React.Component {

    render() {
        return (
            <div className="card">
                <h2 className="cadastre">Cadastre seu Amigo</h2>
                <form>
                    <input id="nome" type="text" className="form-control" name="nome" placeholder="Nome" />
                    <input id="especie" type="text" className="form-control" name="especie" placeholder="Espécie" />
                    <input id="raca" type="text" className="form-control" name="raca" placeholder="Raça" />
                    <input id="data_nascimento" type="date" className="form-control" name="data_nascimento" placeholder="Data Nascimento" />
                    <input id="data_vacinacao" type="date" className="form-control" name="data_vacinacao" placeholder="Data de Vacinação" />
                    <input className="btn btn-primary" type="file" accept="image/gif, image/jpeg, image/png" /><br />
                    <input className="btn btn-primary" type="submit" value="Cadastrar" /><br />
                </form>
            </div>
        )
    }
}

export default CadastroPet;
