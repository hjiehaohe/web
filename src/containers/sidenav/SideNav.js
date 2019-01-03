import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import Ink from 'react-ink';

import './sidenav.css';

import HeaderLogo from '../common/headerlogo/HeaderLogo';


import profile from '../static/profile.png';

// import {
// 	userLogout,
// 	// userSideNav
// } from '../../modules/user';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // onLogout() {
    // 	this.props.userLogout();
    // 	this.props.history.push('/login');
    // }
    render() {

        // const { userProfile } = this.props;
        const { location } = this.props;




        return (
            <div className="sideNavWrapper">
                <HeaderLogo size="small" />
                <div className="profileHolder">
                    <img src={profile} alt="profile default" />
                    <div className="details">
                        <p className="username">Admin</p>
                        <p className="type">
                            Admin
                                {/* <a onClick={() => this.onLogout()}>signout</a> */}
                        </p>
                    </div>
                </div>
                <ul className="navHolder">

                    <li className={(location.pathname === '/') ? 'active' : ''}><Link to="/"><Ink /><Icon type="area-chart" /> Homepage</Link></li>
                </ul>


                <span className="copyright">Copyright &copy; <br /> Onwards Media Group Pte. Ltd. 2018 <br /> All rights reserved.</span>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    router: state.router,
    userAuthenticated: true,
    // userProfile: state.user.userProfile,
    // userNav: false
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // userLogout,
            // userSideNav
        },
        dispatch
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
