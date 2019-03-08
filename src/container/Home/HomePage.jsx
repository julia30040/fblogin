// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import FacebookLogin from 'react-facebook-login';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as MemberActions from '../../actions/member.js';

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
  loginWithFacebook(res) {
    const {
      history,
      storeLoginMemberData,
    } = this.props;

    if (res.email) {
      alert('成功登入');

      console.log(res);

      // storeLoginMemberData({
      //   id: res.id,
      //   name: res.name,
      //   email: res.email,
      //   accessToken: res.accessToken,
      // });

      history.push('candidates');
    }
  }

  render() {
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

export default radium(HomePage);
