import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import { HomePage } from './pages/homepage/homePage';
import ShopPage from './pages/shoppage/shopPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

            if (user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                this.setState({ currentUser: user })
            }
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path={'/shop'} component={ShopPage} />
                    <Route exact path={'/signin'} component={SignInSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
