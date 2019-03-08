// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';
import avatarImage from '../../media/img/avatar.png';

const styles = {
  wrapper: {
    width: 300,
    height: 300,
    backgroundSize: 'cover',
    borderRadius: '50%',
    flexShrink: 0,
    backgroundColor: 'rgba(255, 216, 73, 0.38)',
    '@media screen and (max-width: 767px)': {
      width: 200,
      height: 200,
    },
  },
};

class Avatar extends PureComponent {
  render() {
    return (
      <div style={[
          styles.wrapper,
          {
            backgroundImage: `url(${avatarImage})`,
          },
        ]}>
      </div>
    );
  }
}

export default radium(Avatar);
