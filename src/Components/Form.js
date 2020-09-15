import React from 'react';
import './Form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            validCredentials: false,
            invalidCredentials: false
        }
    }

    onChange(event){
        switch (event.target.name) {
            case 'email':
                this.setState({ email: event.target.value })
                break;
            case 'password':
                this.setState({ password: event.target.value })
                break;
            default:
                break;
        }
    }

    onSubmit(event){
        event.preventDefault()
        let results = this.verifyCredentials(this.state.email, this.state.password)
        this.setState({ validCredentials : results, invalidCredentials : !results  })
        return false
    }

    verifyCredentials(email, password){
        if(email === "demo@myunisoft.fr" &&  password === "myunisoft"){
            return true
        }
        else {
            return false
        }
    }

    render(){
        return (
            <div id="app">
                <form id="form" onSubmit={(event) => this.onSubmit(event)}>
                    <h1>Connectez vous à MyUnisoft</h1>

                    <div id="inputEmail">
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email" name="email" onChange={(event) => this.onChange(event)}/>
                    </div>

                    <div id="inputPassword">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" onChange={(event) => this.onChange(event)}/>
                    </div>

                    <div id="link">
                        <a href="/reset-password">Mot de passe oublié ?</a>
                    </div>

                    <input type="submit" value="Se connecter" />

                    {this.state.validCredentials && <p>Vous etes maintenant connecté</p>}
                    {this.state.invalidCredentials && <p>Adresse mail ou mot de passe incorect</p>}
                </form>
            </div>
        );
    }
}

export default Form
