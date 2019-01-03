import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Components */
import SideNav from './sidenav/SideNav';
import TopNav from './topnav/TopNav';

/* Other pages */
import NotFound from './otherpages/NotFound';

/* Header Animation */
import HeaderAnimation from './common/particles/Particles';

import './App.css';
import "react-jinke-music-player/assets/index.css";

class App extends Component {
    constructor(props) {
        super(props);
        if (this.props.router.location.pathname === '/login') {
            this.props.history.push('/');
        }
    }

    render() {

        const PrivateRoute = ({ component: Component, isAuthenticated, typeAccount, ...rest }) => (
            <Route
                {...rest}

                render={props => (isAuthenticated ?
                    <div className="contentWrapper"><Component {...props} /></div>
                    :
                    (<Redirect to="/login" />)
                )}
            />
        );

        const pathName = this.props.router.location.pathname;

        const classMainContent = (pathName !== '/login') ? 'mainContent mainContentDefault' : 'mainContent';
        const headerAnimate = (window.innerWidth > 768) ? <HeaderAnimation /> : "";

        return (
            <div className="App">
                {
                    (this.props.router.location.pathname !== '/login') ?

                        <div>
                            <SideNav />
                            <TopNav />
                            <div className="backdropHeader"><div className="content">{headerAnimate}</div></div>

                        </div>
                        :
                        ""
                }


                <div className={classMainContent}>
                    <Switch>
                        {/* <Route path="/login" component={Login} /> */}

                        <PrivateRoute exact path="/" component={NotFound} isAuthenticated={this.props.isAuthenticated} />



                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    router: state.router,
    isAuthenticated: true

});

export default withRouter(connect(mapStateToProps)(App));
