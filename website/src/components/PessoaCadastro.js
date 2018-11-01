import React from 'react';

class PessoaCadastro extends React.Component {

    render() {
        return(
            <div className="card">
                <h2 className="cadastre">Cadastre-se</h2>
                <form>
                    <input id="nome" type="text" className="form-control" name="nome" placeholder="Nome" />
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                    <input id="telefone" type="number" className="form-control" name="telefone" placeholder="Telefone" />
                    <input id="password" type="password" className="form-control" name="password" placeholder="Senha" />
                    <input id="confirm-password" type="password" className="form-control" name="confirm-password" placeholder="Confirme a Senha" />
                    <input className="btn btn-primary" type="file" accept="image/gif, image/jpeg, image/png" /><br />
                    <input className="btn btn-primary" type="submit" value="Cadastrar" /><br />
                </form>
            </div>
        )
    }
}

export default PessoaCadastro;
