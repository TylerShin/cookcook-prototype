import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class HelloWorld extends React.Component {
  clickFB = () => {
    Meteor.loginWithFacebook({ requestPermissions: ['public_profile', 'email'] }, function(err) {
      if (err) {
        console.log('Handle errors here: ', err);
      }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickFB}>Login with Facebook</button>
      </div>
    );
  }
}
