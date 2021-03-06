import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  handleSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
  }

  render(){
    const { handleSubmit, fields: {email, password}} = this.props;
    return(
      <form onSubmit={handleSubmit(this,handleSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" />
          </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
