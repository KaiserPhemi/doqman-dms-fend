// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logout } from '../../actions/Authentication';

// interface
import { INavigationBarProps, INavigationBarState } from '../interfaces/navigationBar';
/**
 * Handles all element within the navigation bar
 * 
 * @class NavigationBar
 * @return {any}
 */
export class NavigationBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  /**
   * Handles logout events
   * 
   * @member NavigationBar
   * @param {Object} event - Event trigered
   */
  public logout = (event) => {
    event.preventDefault();
    this.props.logout();
    this.context.router.push('/');
  }

  /**
   * Renders to the DOM
   * 
   * @return {Object}
   */
  public render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <header>
        <nav role="navigation" className="nav-bar blue darken-4">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              doqMan
            </Link>
            <Link to="#" data-activates="mobile-menu"
            className="button-collapse">
            <i className="material-icons">menu</i></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  {isAuthenticated ? <span>Documents</span> : <span>Home</span>}
                </Link>
              </li>
              <li><Link to="/about">About</Link></li>
              <li>
                {!isAuthenticated
                  && <Link id="login" to="/login">Login</Link>}
              </li>
              {user.roleId === 1
                && <li><Link to="/user"><span>Users</span></Link></li>
              }
              {isAuthenticated
                && <li><Link id="profile" to="/editprofile">Profile</Link></li>
              }
              <li>
                {isAuthenticated
                    ? <Link to="/" onClick={this.logout}>Logout</Link>
                    : <Link to="/signup">Sign Up</Link>
                }
              </li>
            </ul>
            <ul id="mobile-menu" className="blue side-nav">
              <li>
                <Link to="/">
                  {isAuthenticated ? <span>Documents</span> : <span>Home</span>}
                </Link>
              </li>
              <li><Link to="/about">About</Link></li>
              <li>
                {!isAuthenticated
                  && <Link to="/login">Login</Link>
                }
              </li>
              {user.roleId === 1
                && <li><Link to="/user" id="users-list"><span>Users</span></Link></li>
              }
              {isAuthenticated
                && <li><Link id="profile" to="/editprofile">Profile</Link></li>
              }
              <li>
                {isAuthenticated
                    ? <Link to="/" onClick={this.logout}>Logout</Link>
                    : <Link to="/signup">Sign Up</Link>
                }
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

// NavigationBar.propTypes = {
//   auth: React.PropTypes.object.isRequired,
//   logout: React.PropTypes.func.isRequired,
// };

// NavigationBar.contextTypes = {
//   router: React.PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, null)(NavigationBar);
