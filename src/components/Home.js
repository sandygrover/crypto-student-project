import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this)
  }
  state= {    
    livechat:false,
    responsive:{
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  }
  componentDidMount() {
    //window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  startChat(val) {
    this.setState(state => ({
      livechat: val,
    }));
  }

  render() {
    return (
      <div style={{position:'relative'}}>
        <div style={{color:'white'}}>
          <div className="topbannernavdiv" style={{background: 'url(assets/4.png)'}}>
            <Navbar/>
            {/* banner */}
            <div style={{height:'100%'}}>
              <div style={{position:'relative',height:'100%'}}>
                {/* <img alt="Banner" className="w-100" src={'assets/4.png'} style={{height:'470px',objectFit:'cover'}}/> */}
                <div className="top_side_banner_left">
                  <h1>Prize pool 60 000 Euro</h1>
                  <span>Time for an exciting journey with a prize fund</span><br/>
                  <button className="btn btn-primary">Lets play</button>
                </div>
                <div className="top_side_banner_right">
                  <img alt="banner_cartoon" src={'assets/banner_cartoon.png'}/>
                </div>
              </div><br/><br/><br/><br/>
            </div>
            {/* banner */}
          </div>
          {/* partner logos */}
          <div style={{background:'black',paddingTop:'90px'}}>
            <div className="container">
              <div className="row partnersdiv" style={{padding:'40px 0'}}>
                <div className="col-sm">
                  <img alt="partner1" src={'assets/5.png'}/>
                </div>
                <div className="col-sm">
                  <img alt="partner2" src={'assets/6.png'}/>
                </div>
                <div className="col-sm">
                  <img alt="partner3" src={'assets/7.png'}/>
                </div>
                <div className="col-sm">
                  <img alt="partner4" src={'assets/8.png'}/>
                </div>
                <div className="col-sm">
                  <img alt="partner5" src={'assets/9.png'}/>
                </div>
              </div>
            </div>
            <br/><br/>
          </div>
          {/* partner logos */}

          {/* new releases */}
          <div className="home-four-area-bg">
            <div className="bg" style={{backgroundImage: 'url(assets/24.png)'}}></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h2 className="heading1">New releases</h2><br/><br/>
                </div>
                <div className="col-lg-11 col-md-12">
                  <OwlCarousel style={{position:'relative'}} className='owl-theme releases' loop margin={60} nav responsive={this.state.responsive}>
                    <div className='item text-center'>
                      <img alt="new release1" src={'assets/11.png'}/><br/>
                      <div className="outer_layer">
                        <div className="lg_tag">
                          <span>racing</span>
                        </div>
                        <h5 className="text-white">Bingo blitz</h5>
                        <h5>play</h5>
                      </div>
                    </div>
                    <div className='item text-center'>
                      <img alt="new release1" src={'assets/12.png'}/><br/>
                      <div className="outer_layer">
                        <div className="lg_tag">
                          <span>racing</span>
                        </div>
                        <h5 className="text-white">Bingo blitz</h5>
                        <h5>play</h5>
                      </div>
                    </div>
                    <div className='item text-center'>
                      <img alt="new release1" src={'assets/13.png'}/><br/>
                      <div className="outer_layer">
                        <div className="lg_tag">
                          <span>racing</span>
                        </div>
                        <h5 className="text-white">Bingo blitz</h5>
                        <h5>play</h5>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div><br/><br/><br/>
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8 col-sm-9">
                  <h1 style={{fontWeight: 800,textTransform: 'uppercase'}}>How it <span style={{color:'#d755f9'}}>works?</span></h1><br/>
                  <img alt="videoimg" className="w-100" src={'assets/14.png'}/>
                </div>
              </div><br/><br/><br/>
            </div>
          </div>
          {/* new releases */}

          {/* popular games */}
          <div style={{background:'black',padding:'45px 12px'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="popu_h2">popular
                    <button className="btn bnt-primary">view all</button>
                  </h2>
                </div>
              </div><br/><br/>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame1" className="w-100 pp" src={'assets/15.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame2" className="w-100 pp" src={'assets/19.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame3" className="w-100 pp" src={'assets/17.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame4" className="w-100 pp" src={'assets/18.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame5" className="w-100 pp" src={'assets/15.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame6" className="w-100 pp" src={'assets/19.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame7" className="w-100 pp" src={'assets/17.png'}/>
                  </div><br/><br/>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="popgame_imgs">
                    <img alt="populargame8" className="w-100 pp" src={'assets/18.png'}/>
                  </div>
                </div>
              </div>
            </div><br/><br/>
          </div>
          {/* popular games */}

          {/* footer info area */}
          <div style={{background:'black',padding:'45px 12px'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p className="footinfotxt" style={{fontWeight: 800,textTransform: 'uppercase'}}>it provides egaming services and it is officially licensed by atlantic management b.u. c1% master gaming license nr.5536/- jaz. this website is owned and operated by atlantic management b.u., (company number: 139089) registered and regulated in turacad with address in emancipatie bquluard dominico f. "don" martina 29, turacao. billing services are provided by a.t. atlantic ltd (he 412985) registered at katalandu, 1, flat/office 101, aglantzia, 2121, nicosia, cyprus, under billine agent agreement #1, dated 15.10.2020.</p><br/>
                  <div className="text-center infoimgdiv">
                    <img alt="info1" src={'assets/20.png'}/>
                    <img alt="info2" src={'assets/21.png'}/>
                    <img alt="info3" src={'assets/22.png'}/>
                    <img alt="info4" src={'assets/23.png'}/>
                  </div>
                </div>
              </div>
            </div><br/><br/>
          </div>
          {/* footer info area */}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;