import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
  }
  state = {
    showPopup:false,
  };

  componentDidMount() {
    //window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  toggleClick(val){
    this.setState(state => ({showPopup: val}));
  }

  render() {
    return (
        <div className="navdiv">
          {this.state.showPopup &&
            <div className="popup">
              <div className="topp">
                <span>
                  <img alt="metamask_logo" src={'assets/metamask_logo.svg'}/>
                  <img alt="trust_logo" src={'assets/trust_logo.png'}/>
                </span>
                <h3>Minigames</h3>
                <span className="closebtn" onClick={() => this.toggleClick(false)}>&#10006;</span>
              </div><br/><br/>
              <div className="row justify-content-center" style={{margin:0}}>
                <div className="col-lg-9 col-md-10">
                  <button className="btn btn-primary w-100 connect">connect wallet</button><br/><br/><br/>
                  <ul>
                    <li className="active">table games</li>
                    <li>arcade</li>
                    <li>lottery</li>
                    <li>slots</li>
                    <li>5 different slots</li>
                    <li>sport</li>
                  </ul><br/>
                  <div>
                    <h1 className="text-center">support</h1>
                  </div>
                </div>
              </div>
            </div>
          }
          <nav className="navbar navbar-expand-lg navbar-dark fst_nav">
            <div className="container">
              <Link to="/" className="navbar-brand header_logo">
                {/* <img alt="header_logo" style={{verticalAlign:'super'}} src={'assets/logo.png'}/> */}
                Minigames
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse nav_collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 d-flex navul1" style={{marginLeft:'auto'}}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link login">
                      <span>Login</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link signup">
                      <span>Sign up</span>
                    </Link>
                  </li>                  
                </ul>
              </div>
              <div className="hamicon" onClick={() => this.toggleClick(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>          
        </div>
    );
  }
}

export default Navbar;