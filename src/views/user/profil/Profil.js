import React from 'react';
import {
  CImg
}from '@coreui/react'
import picture from "../../../images/orlaine.jpeg"
import "../../../styles/profil.css"
import {Tabs, Tab, TabContent} from "react-bootstrap";

/**
 * @author
 * @function Profil
 **/


const Profil = (props) => {
    return(
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="pofile-img">
                <img  class="img" src={picture} alt="pic" style={{width:200, height:200}} />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file"/>
                </div>
              </div>
            </div> 

            <div className="col-md-6">
              <div className="profile-head">
                <h5>John DOE</h5>
                <h6>Consommateur de services</h6>
                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p> 
              </div>
              {/* <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" id="home-tab" data-toogle="tab" href="#home" role="tab">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="profile-tab" data-toogle="tab" href="#profile" role="tab">Profile</a>
                </li>
              </ul> */}
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                  {/* <Sonnet /> */}
                  <TabContent >
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Username</label>
                    </div>
                    <div class="col-md-6">
                      <p>Kshiti123</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Nom</label>
                    </div>
                    <div class="col-md-6">
                      <p>Kshiti Ghelani</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>kshitighelani@gmail.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Téléphone</label>
                    </div>
                    <div class="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Statut</label>
                    </div>
                    <div class="col-md-6">
                      <p>Consommateur de service</p>
                    </div>
                  </div>
                </div>
                  </TabContent>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  {/* <Sonnet /> */}
                  <TabContent>
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div class="col-md-6">
                        <p>230</p>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
                </TabContent>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  {/* <Sonnet /> */}
                  <TabContent />
                </Tab>
              </Tabs>
            </div> 
            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Editer Profil"/>
            </div>
          </div>
          <div className="row">
            {/* Left side URL*/}
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href ="#link" target="target">Réseaux sociaux</a> <br />
                <a href ="#link" target="target">Website</a> <br />
                <a href ="#link" target="target">Réseaux sociaux</a> <br />
                <p>COMPETENCES</p>
                <a href ="#link" target="target">Réseaux sociaux</a> <br />
                <a href ="#link" target="target">Website</a> <br />
                <a href ="#link" target="target">Réseaux sociaux</a> <br />

              </div>
            </div>
            {/* Right side URL*/}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent" >
                {/* <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Username</label>
                    </div>
                    <div class="col-md-6">
                      <p>Kshiti123</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Nom</label>
                    </div>
                    <div class="col-md-6">
                      <p>Kshiti Ghelani</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>kshitighelani@gmail.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Téléphone</label>
                    </div>
                    <div class="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Statut</label>
                    </div>
                    <div class="col-md-6">
                      <p>Consommateur de service</p>
                    </div>
                  </div>
                </div> */}
{/*                 <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                </div> */}

              </div>
                
            </div>
          </div>

        </form>
      </div>
    ) 
  };


export default Profil;