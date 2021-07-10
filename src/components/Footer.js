import React from "react";

class Footer extends React.Component {
  
  render() {
    return (
        <div style={{background:'black',textTransform:'uppercase'}}>
            <div className="footer_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>minigames</h1>
                            <ul className="footer_ul_new justify-content-center">
                                <li className="dott">table games</li>
                                <li className="dott">arcade</li>
                                <li className="dott">lottery</li>
                                <li className="dott">slots</li>
                                <br/>
                                <li className="">About Us</li>
                                <li className="">privacy</li>
                                <li className="">contacts</li>
                                <li className="">responsible gaming</li>
                                <li className="">terms & conditions</li>
                                <li>refund policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_div">
                <p style={{margin:0}}>copyright &copy; 2021 minigames. all rights reserved.</p>  
            </div>          
        </div>
    );
  }
}

export default Footer;