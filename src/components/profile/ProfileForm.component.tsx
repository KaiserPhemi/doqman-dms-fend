// react libraries
import * as React from 'react';

// interface
import { IProfileFormProps } from '../../interfaces/profile';

/**
 * Form to handle user details update
 * 
 * @return {any}
 */
const ProfileForm: React.SFC<IProfileFormProps> = ({ userProps, onChange, onSubmit }) => {
  return (
    <div>
        <div className="center">
          <form className="col container profile-form s12" method="post" onSubmit={onSubmit}>
            <h5 className="header2">Edit Profile</h5>
            <div className="row">
              <div className="input-field col s6">
                <input id="firstName" type="text"
                value={userProps.firstName}
                onChange={onChange}
                required />
                <label className="active" htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="lastName" type="text"
                value={userProps.lastName}
                onChange={onChange}
                required />
                <label className="active" htmlFor="last_name">Last Name</label>
              </div>
            </div>
             <div className="row">
              <div className="input-field col s6">
                <input id="username" type="text"
                  value={userProps.username}
                  onChange={onChange}
                  required />
                <label className="active" htmlFor="username">Username</label>
              </div>
              <div className="input-field col s6">
                <input id="email" type="email"
                  value={userProps.email}
                  onChange={onChange}
                  required />
                <label className="active" htmlFor="email">Email</label>
              </div>
            </div>
            <button
              type="submit"
              onClick={onSubmit} className="btn blue btn-waves-effect">
            Update Account
            </button>
          </form>
        </div>
    </div>
  );
};

export default ProfileForm;
