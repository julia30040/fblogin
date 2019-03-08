// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import FacebookLogin from 'react-facebook-login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MemberActions from '../../actions/member.js';

const styles = {
  wrapper: {
    backgroundColor: '#8f755e',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffca31',
  },
  fbLoginBtn: {
    color: '#ffffff',
    fontSize: 15,
    ':hover': {
      color: 'rgb(222, 214, 103)',
    },
    display: 'none',
  },
};

class HomePage extends PureComponent {
  // askManagePagesPermission() {
  //   return fetch('graph.facebook.com/me/accounts HTTP/1.1', {
  //     // body: JSON.stringify(data), // must match 'Content-Type' header
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, same-origin, *omit
  //     headers: {
  //       'user-agent': 'Mozilla/4.0 MDN Example',
  //       'content-type': 'application/json'
  //     },
  //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, cors, *same-origin
  //     redirect: 'follow', // manual, *follow, error
  //     referrer: 'no-referrer', // *client, no-referrer
  //   })
  //   .then(response => console.log(response.data)) // 輸出成 json
  // }

  loginWithFacebook(res) {
    const {
      history,
      storeLoginMemberData,
    } = this.props;

    if (res.email) {
      alert('成功登入');

      console.log(res);

      // localStorage.setItem('accessToken', res.accessToken);
      // localStorage.setItem('name', res.name);
      // localStorage.setItem('email', res.email);
      // localStorage.setItem('id', res.id);

      storeLoginMemberData({
        id: res.id,
        name: res.name,
        email: res.email,
        accessToken: res.accessToken,
      });

      history.push('candidates');
    }
  }

  render() {
    console.log(this.props);
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.title}>登入投票指南</h1>
        <FacebookLogin
          appId="126909908010825"
          autoLoad={true}
          fields="name,email,picture"
          callback={(res) => this.loginWithFacebook(res)} />
      </div>
    );
  }
}

const reduxHook = connect(
  state => state,
  dispatch => bindActionCreators({
    ...MemberActions,
  }, dispatch),
);

export default reduxHook(
  radium(
    HomePage
  )
);
