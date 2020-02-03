import React from "react";

import { Dropdown } from "react-bootstrap";
// import Scroll from "./Scroll";
import docPic121 from "../../assets/images/doctor_art_img.jpg";
import AdvancedSearch from "../../assets/images/advance_search_icon.png";
import femaleDoc from "../../assets/images/exp_panel11.jpg";
import tickmark from "../../assets/images/verify_tick_icon.png";

import "./searchdoctor.css";

class SearchDoctor extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="container cont1">
              <h1>
                {" "}
                Search <span style={{ fontSize: "1.4em" }}>Doctors</span>
              </h1>
            </div>
            <div class="container cont2">
              <h3>Filter by</h3>
            </div>

            <div class="container cont3">
              <h3 style={{ color: "red" }}>Specialities:</h3>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 1
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 2
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 1
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 2
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 1
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 2
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 1
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 2
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 1
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="" class="inp1" />
                  Option 2
                </label>
              </div>
            </div>

            <div class="container cont4">
              <h4 style={{ color: "white" }}>Consultation Fee</h4>
              <div
                style={{
                  display: "flex",
                  marginTop: "28px",
                  justifyContent: "center"
                }}
              >
                <h6 style={{ color: "white" }}>0 INR</h6>
                <br></br>
                <div class="slidecontainer">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    class="slider"
                    id="myRange"
                  />
                </div>
                <br></br>
                <h6 style={{ color: "white" }}>2000 INR</h6>
              </div>
            </div>
            <div class="container cont5">
              <h1 style={{ color: "red" }}>Gender:</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <label>
                  <input type="radio" name="option" class="card-input-radio" />
                  <div class="card1">Male Doctor</div>
                </label>

                <label>
                  <input type="radio" name="option" class="card-input-radio" />
                  <div class="card2">Female Doctor</div>
                </label>
              </div>
              <button type="reset" class="reset">
                <h3 style={{ borderBottom: "1px solid" }}>Reset filter</h3>
              </button>
              <img src={docPic121} alt="doc" class="docpic121"></img>
            </div>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-9 customCol1SearchPage">
            <div className="row1">
              <div
                class="row"
                style={{
                  marginBottom: "5%",
                  paddingTop: "5%",
                  paddingLeft: "2%",
                  paddingRight: "2%"
                }}
              >
                <div
                  style={{
                    marginLeft: "2%",
                    color: "#3938a0",
                    fontSize: "x-large"
                  }}
                >
                  Find your physician
                </div>
                <div className="sortbyPart" style={{ marginRight: "2%" }}>
                  <span className="sortbyPart1">Sort by :</span>
                  <span className="sortbyPart2">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Relevance
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </div>
              </div>
              <div className="inputSearch">
                <input
                  className="input1"
                  placeholder="Search Doctor, CLinic, Speciality"
                />
                <input className="input2" placeholder="Location" />
                <button className="findBtn">Find</button>
                <div className="advancedSearch">
                  <button
                    style={{
                      background: "transparent",
                      border: "none !important"
                    }}
                  >
                    <img src={AdvancedSearch} alt="advanced search"></img>
                  </button>
                  <span style={{ color: "red" }}>Advanced Search</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="row2">
                <span
                  style={{
                    color: "#000096",
                    fontSize: "3rem",
                    fontWeight: "800",
                    marginLeft: "5%"
                  }}
                >
                  Featured
                </span>
                <span
                  style={{
                    color: "red",
                    fontSize: "3rem",
                    fontWeight: "800",
                    marginLeft: "5px"
                  }}
                >
                  Doctors
                </span>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "5%"
                  }}
                >
                  <button class="arrowBtn">
                    <i class="fas fa-arrow-left"></i>
                  </button>
                  <button class="arrowBtn">
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="row row3">
              <div className="doctorCard">
                <div className="doctorCardInner">
                  <div className="imgContainerDoctorDP">
                    <img
                      className="femaledoc"
                      src={femaleDoc}
                      alt="femaleDoc"
                    ></img>
                  </div>
                  <div className="doctorNameAndType">
                    Dr. Emma Bunton
                    <br />
                    Orthosurgeon
                  </div>
                  <div className="verifiedAndRating">
                    <img src={tickmark} alt="verified"></img>
                    <span>4.8/5.0</span>
                  </div>
                </div>
                <div>
                  <button className="bookingButton">
                    Book an appointment <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="searchResults">
              <div class="container container1">
                <span className="sr1">Search Results...</span>
                <div className="sr2">
                  <span className="noResultsFound" style={{ color: "red" }}>
                    40
                  </span>
                  Results Found
                </div>
              </div>
            </div>
            <div class="cardDetailed">
              <div>
                <div>
                  <img
                    src={femaleDoc}
                    alt="docPic"
                    className="detailedImg"
                  ></img>
                  <div>
                    <div>Diagnostic Radiology</div>
                    <div>Sarah Chapman</div>
                    <div>MBBS,MRCS(Ortho UK)</div>
                    <div>
                      <span>Rating</span>
                      <span>4.8/5.0</span>
                      <span>
                        <span className="noFeedbacks">23</span> Feedbacks
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Kolkata, India</span>
                  </div>
                  <div>
                    <i class="far fa-calendar-alt"></i>
                    <span>Monday,Tuesday,Thursday,Saturday</span>
                  </div>
                  <div>
                    <i class="fas fa-wallet"></i>
                    <span>
                      Starting from <span>INR 700</span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <button>Apollo Medical Center</button>
                  <button>Hegde's Advanced Ultrasound Center</button>
                  <button>Apollo Medical Center</button>
                  <button>Hegde's Advanced Ultrasound Center</button>
                  <button>Apollo Medical Center</button>
                  <span>View All...</span>
                </div>
                <div>
                  <button>Schedule Appointment</button>
                  <button>Book an Appointment</button>
                </div>
              </div>
              <div>
                <span>
                  <i class="fas fa-tag"></i>
                  Tags
                </span>
                <span>Radiology</span>
                <span>Oncology</span>
                <span>Diagnostics</span>
                <span>View All</span>
              </div>
            </div>
            <div>Load More...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDoctor;
