import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { checked: false };
  handleClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">eventsit</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.checked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.checked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
 <Link to="/">
        <button className="hi">log out</button>
      </Link>        </ul>
      </nav>
    );
  }
}

export default Navbar;
