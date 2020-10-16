import React from 'react'

import emailjs from 'emailjs-com';
function  Contactus() {
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_yrvck2o', e.target, 'user_4cmGLI3xttQnLbMJs1JGP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Sent Succesfully');
          e.target.reset();
      }
  
        return (
           <>
         <div className="mlaheader  ">
        <div className="mla-sliderpartner  d-flex align-items-center justify-content-center slider_bg_1">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                   
                <div className="container slide_right  ">
                <h1 style={{ fontSize:'50px',fontFamily: 'Russo One', color:"#2EFEF7", letterSpacing:'5px',fontWeight:'bold', position: 'absolute',top: '28%'}} className=" Headingespa">
                Partner with us, <br/>
Progress with us 
 
    </h1>
        <h3 className="espapara"  style={{ fontSize:'20px',marginTop:'25px', position: 'absolute',color:'white',top: '50%'}}>Need to start a School, 
    We have a proven SP Smart Hybrid Schooling System for you,<br/>
    which has already benefited 1.26,000+ students. </h3>
            </div>
                    </div>
            </div>
        </div>
    </div>
           <div class="bg-light ">
              
    <div class="container bg-light">
        <div class="row justify justify-content-center">
            <div class="col-12 col-md-9 col-lg-8 col-xl-8">
                <form autoComplete="off" class="" onSubmit={sendEmail} >
                    <div class="card bg-dark text-light">
                        <div class="row mt-0">
                            <div class="col-md-12 ">
                                
                                <p>Fill Your Details</p>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6 mb-0">
                                <p class="mb-1">Name</p> <input id="e-mail" type="text" placeholder="Enter your Name" name="name" class="form-control input-box rm-border"/>
                            </div>
                            <div class="col-md-6 mb-0">
                                <p class="mb-1">Address</p> <input id="e-mail" type="text" placeholder="Enter your Name" name="address" class="form-control input-box rm-border" required/>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6 mb-0">
                                <p class="mb-1">Email</p> <input id="e-mail" type="text" placeholder="Enter your email" name="email" class="form-control input-box rm-border" required/>
                            </div>
                            <div class="col-md-6 mb-0">
                                <p class="mb-1">Mobile</p> <input id="e-mail" type="number" placeholder="Enter your Number" name="phone" class="form-control input-box rm-border" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12 mb-2">
                                <p class="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" class="form-control input-box rm-border"></textarea>
                            </div>
                        </div>
                        <div class="form-group row justify-content-center mb-0">
                            <div class="col-md-4 px-2"> <input type="submit" value="Submit" class="btn btn-block btn-purple rm-border"/> </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
           </>
        )
    }


export default Contactus
