import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import Scene from "../Scene";
import SimpleSlide from "../SimpleSlide";

// We add a CSS file here so we can style components
import "../App.css";
import { CameraTimeline } from "../AnimatedCamera";

/**
 * This function will calculate how much the user has scrolled (0-1)
 * @returns {number} The percentage of how much the user has scrolled (0-1)
 */
function getScrollProgress() {
    // This will calculate how many pixels the page is vertically
    const winScroll = window.document.documentElement.scrollTop;
  
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  
    // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
    return winScroll / height;
  }

function App() {
    // Set the animation to play based on scroll position
    useEffect(() => {
      // We then register a callback that executes every time the user scrolls
      window.onscroll = (e) => {
        const scrolled = getScrollProgress();
        CameraTimeline.progress(scrolled);
        console.log(
          ((scrolled * 25000) / document.documentElement.clientHeight) * 100
        );
  
        return () => {
          // We unregister the callback when the component unmounts
          window.onscroll = null;
        };
      };
    }, []);
  
    return (
      <div id="article_wrapper">
        {/* HTML slides are nested here and we use vh values to specify where they are */}
  
        <SimpleSlide viewportPosition={10}>
          <div class={"section1"}>
            A long-awaited sample from a near-Earth asteroid is about to land in
            the US
          </div>
        </SimpleSlide>
  
        <SimpleSlide viewportPosition={200}>
          <div class={"section2"} style={{}}>
            <div style={{ width: "50%", paddingLeft: "5rem",lineHeight:"2.5rem" , wordSpacing:"0.1rem"}}>
              An asteroid sample stowed inside a NASA spacecraft (Osiris-Rex) is about to reach
              Earth after traveling for nearly 2½ years across space. It’s NASA’s
              first time collecting and returning an asteroid sample from space.
            </div>
          </div>
        </SimpleSlide>
  
        <SimpleSlide viewportPosition={400}>
          <div class={"section3"} style={{}}>
            <div style={{ width: "50%", padding: "2rem", margin: "auto",lineHeight:"2.5rem" , wordSpacing:"0.1rem" }}>
              The asteroid called Bennu, which is a rubble-pile asteroid shaped like a spinning top, composed
              of rocks bound together by gravity. It's about one-third of a mile
              (500 meters) wide.
            </div>
          </div>
        </SimpleSlide>



 

  
        <SimpleSlide viewportPosition={600}>
        <div class={"section4"} style={{ background: "black", color: "white" }}>
          <div style={{ padding: "2rem", width: "60%", margin: "auto", }}>
            <div
              style={{
                fontSize: "2rem",
                fontFamily: "Lora",
                fontWeight: "medium",
                lineHeight:"2.5rem" , wordSpacing:"0.1rem"
              }}
            >
             How did the Osiris-Rex spacecraft collect the samples?
            </div>
            <br />
            <br />
            <img src="landing.gif" width="100%" />

            <br /> <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
            <div style={{ width:"100%"  }}>
              <img
                src="touch-and-go-osiris-rex-bennu-2.webp"
                width="100%"
                style={{ paddingTop: "0.5rem" }}
                />
              <p style={{
                  fontSize: "0.8rem",
                  fontFamily: "Lora",
                  fontWeight: "200",
                  paddingTop: "0rem",
            
                  
                  
                  }}>
              
              Credit: NASA/Goddard/University of Arizona, Public Domain
              </p>
              </div>

              <div
                style={{
                  width:"50%",
                  fontSize: "1.2rem",
                  fontFamily: "Lora",
                  fontWeight: "400",
                  paddingTop: "0rem",
                  paddingRight: "1rem",
                  paddingLeft: "1.5rem",
                  lineHeight:"1.7rem" , 
                  wordSpacing:"0.1rem"
                }}
              >

                When the OSIRIS-REx spacecraft closely approached Bennu, it
                extended a Touch-and-Go Sample Acquisition Mechanism head
                (TAGSAM), toward the asteroid and fired a blast of nitrogen gas.
                The burst of gas lifted rocks and dust all the way from 19
                inches (50 centimeters) beneath the space rock's surface.

                
              </div>
            </div>


          </div>
          
        </div>
      </SimpleSlide>








  



        <SimpleSlide viewportPosition={1180}>
          <div class={"section5"} style={{}}>
            <div style={{ width: "90%", 
                          padding: "4rem",
                          textAlign:"center",    
                          lineHeight:"2.5rem" , 
                          wordSpacing:"0.1rem" }}>
            Between January 2013 and December 2100,  <br/>
            the closest distance of Asteroid Bennu to Earth will be<br/> <br/> <br/>

            0.00500815 Astronomical Units = 749,209 kilometers<br/>

            </div>
          </div>
        </SimpleSlide>

        
        <SimpleSlide viewportPosition={1800}>
          <div class={"section6"} style={{}}>
            <div style={{ width: "40%", paddingLeft: "5rem",lineHeight:"2.5rem" , wordSpacing:"0.1rem"}}>
              The capsule will be released when OSIRIS-REx is 63,000 miles
              (102,000 kilometers) from Earth, headed for an area spanning 250
              square miles (647.5 square kilometers) 
              <br/><br/>
              — “the equivalent of throwing
              a dart across the length of a basketball court and hitting the
              bull’s-eye,” Burns said.
            </div>
          </div>
        </SimpleSlide>


        <SimpleSlide viewportPosition={2250}>
          <div class={"section7"} style={{display:"flex", width:"100%", margin: "auto", }}>
            <div style={{ width: "100%", padding: "2rem", margin: "auto", textAlign:"center",fontSize:"2rem", lineHeight:"2.8rem" , wordSpacing:"0.1rem" }}>
            SAMPLE DELIVERED<br/>
            Sept. 24, 2023
            </div>
          </div>
        </SimpleSlide>


  
        <SimpleSlide viewportPosition={2350}>
        <div class={"section8"} style={{ background: "black", color: "white" }}>
          {/* samples now */}
          <div style={{ padding: "2rem", width: "60%", margin: "auto", lineHeight:"2rem" , wordSpacing:"0.1rem" }}>
            <div
              style={{
                fontSize: "2rem",
                fontFamily: "Lora",
                fontWeight: "medium",
              }}
            >
              How about the samples now?
            </div>
            <br />

            <div
              style={{
                fontSize: "1.2rem",
                fontFamily: "Lora",
                fontWeight: "400",
              }}
            >
              On Sunday, September 24, 2023, the OSIRIS-REx spacecraft placed
              the pristine sample of asteroid Bennu's surface material in the
              Utah desert. This marked a pivotal moment in space exploration.
              Now housed in a meticulously designed clean room at NASA's Johnson
              Space Center in Houston, the sample undergoes careful curation,
              poised to unveil its secrets to researchers worldwide and endure
              as a valuable study artifact for future generations.
              <br />
              <br />
              Within this ancient sample, dating back billions of years
              scientists are set to unravel the mysteries surrounding the origin
              of our solar system.
              <br />
              <br />
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/230906122923-04-nasa-osiris-rex-sample-training-rehearsal.jpg?q=w_1110,c_fill/f_webp"
                width="100%"
              />
              <br />
              <br />
              <br />
            </div>
            <br />

            {/* explore more */}
            <div
              style={{
                fontSize: "2rem",
                fontFamily: "Lora",
                fontWeight: "medium",
              }}
            >
              Explore More
            </div>
            <br />
            <div
              style={{
                display: "flex",
                margin:"auto",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div style={{width:"100%",
                display:"flex",flexDirection:"column",paddingLeft:"0",alignItems:"center" }}>
                <div>
                  <img
                    src="rex.png"
                    width="100%"
                  />
                </div>
                <br/>
                <div >
                <Link to="/SpaceCraft"  className="hover"
                style={{
                  padding:"0.8rem 1rem",
                  margin: "2rem",
                 
                  fontFamily: "Lora",
                  fontWeight: "500",
                  border: "1px solid",
                  borderColor:"white",
                  borderRadius:"2rem",

                }  }               >
                  SpaceCraft
                </Link>
                </div>
              </div>

              <div style={{width:"100%",
                display:"flex",flexDirection:"column",paddingLeft:"0",alignItems:"center" }}>
                <div>
                  <img
                    src="bennu.png"
                    width="100%"
                  />
                </div>
                <br />
                <div >
                <Link to="/Bennu" className="hover"
                                style={{
                                  padding:"0.8rem 1rem",
                                  margin: "2rem",
                                 
                                  fontFamily: "Lora",
                                  fontWeight: "500",
                                  border: "1px solid",
                                  borderColor:"white",
                                  borderRadius:"2rem",
                                }}>
                  Bennu
                </Link>
                </div>
              </div>

            </div>
            <br />
            <div style={{     
                        display: 'block',
                        fontSize:"0.9rem",
                        fontWeight:"400",
                        color:"white", 
                        

                        width:"100%",
                        margin:"auto",
                        paddingTop:"5rem",
                        textAlign:"center",
                        bottom:"2rem",
                        
                     }}>
                      ✦ website made by Keyi & <a href="https://yichunlan.com">Lan</a> ✦
                     
    </div>
          </div>
        </div>


      </SimpleSlide>

       


        <Scene />
      </div>
    );
  }
  
  export default App;
  