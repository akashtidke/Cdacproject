import React from 'react';
import bg from "./bg.jpg";
const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>We are a company dedicated to...</p>
      <div style={{ backgroundImage: `url(${bg})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h1 class="text-black"  >About Us </h1>
                <br />
                <p class=" text-red">We are giving platform for maids and users </p>
                <h2 >Our Team</h2>
                <hr />
                <div class="row">
                    <div class="column" >
                        <div >
                            <div >
                                <h2>Akash Tidke</h2>
                                <p class="title">INFOWAY CDAC</p>

                            </div>
                        </div>

                        <div class="column">
                            <div >
                                <div >
                                    <h2>Mukund Khilare</h2>
                                    <p class="title">INFOWAY CDAC</p>
                                </div>
                            </div>
                        </div>



                        <div class="column">
                            <div >

                                <div>
                                    <h2>Hanmant Nature</h2>
                                    <p class="title">INFOWAY CDAC</p>

                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div >
                                    <h2>Aditya Nikam </h2>
                                    <p class="title">INFOWAY CDAC</p>

                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div >
                                    <h2>Pradip Chavan</h2>
                                    <p class="title">INFOWAY CDAC</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        )
    
  
};

export default About;
