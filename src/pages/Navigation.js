import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
    <div>
        <nav style={{   width:"100vw", position:"fixed" , zIndex:"20"  }}>

        {/* <div style={{   display: "flex", 
                        flexDirection:"row", 
                        alignItems:"flex", 
                        justifyContent:"space-between",
                        fontSize:"1.4rem",

                        paddingTop: "1rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                    }}
                        > 


                    <div>
                    <Link to="/">Home</Link>
                    </div>

                    <div>
                    <Link to="/SpaceCraft">SpaceCraft</Link>
                    </div>

                    <div>
                    <Link to="/Bennu"> Bennu</Link>
                    </div> */}

          {/* </div> */}

            </nav>
      </div>



      <Outlet />
    </>

   
  )
}

export default Navigation;