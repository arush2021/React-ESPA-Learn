import React, { Component } from 'react'
import img6 from '../images/amob.png'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.JPG'
import img5 from '../images/Detailc.png'

import sir from '../images/sir.JPG'
import img8 from '../images/img8.jpg'
export default class Homepage extends Component {
    render() {
        return (
            <>
    <div className="mlaheader  ">
    <div className="mla-slider  d-flex align-items-center justify-content-center slider_bg_1">
        <div className="container-fluid ">
            <div className="row align-items-center justify-content-center ">
               
            <div className="container slide_right  ">
            <h1 style={{ fontSize:'55px',fontFamily: 'Russo One', color:"#FFB900", letterSpacing:'5px',fontWeight:'bold', position: 'absolute',top: '27%'}} className=" Headingespa">
NEW-GEN <br/>
EDUCATION<br/>
ECOSYSTEM</h1>
<h3 className="espapara"  style={{ fontSize:'20px',marginTop:'25px', position: 'absolute',color:'white',top: '56%'}}> Around 6 Decades of Research in the field of Education starting from <br/> minimizing number of  dropouts to maximizing results up to 100%.<br/> Dedicated to social upliftment of commoners.  </h3>
<br/>
           <button style={{ position: 'absolute',top: '79%'}} className="registerbtn">About Us <i className="fa fa-arrow-right"/> </button>
            </div>
            </div>
        </div>
    </div>
</div>
<section className="showcaseimg mt-5 mb-5">

    <div className="container">
        <div className="row">
            <div className="col-xl-7 col-md-6">
  <img className="img-fluid img-responsive" src={img5} alt="img5"/>
            </div>
            <div className="col-xl-5 col-md-6">
            <img className="img-fluid mobimg img-responsive" src={img6} alt="img6"/>
            </div>
        </div>
        <div className="row mt-5 ">
        <div className="col-xl-4 col-md-6">
        <img className="img-fluid mobimg img-responsive" src={img2} alt="img2"/>
            </div>
            <div className="col-xl-4 col-md-6">
        <img className="img-fluid mobimg img-responsive" src={img3} alt="img2"/>
            </div>
            <div className="col-xl-4 col-md-6">
        <img className="img-fluid  mobimg img-responsive" src={img4} alt="img2"/>
            </div>
        </div>
    </div>
</section>
<section className="sharingout pt-5 pb-5  mb-3  text-center ">
    <div className="shout container">
        <h2 className="text-dark "> ESPA LEARN PVT LTD SHARING OUT</h2>
        <p className="text-dark"> We present an approach to capture group-level sharing out using legally binding capital and risk transfer instruments. The approach is used to quantify both group-level capital requirements and capital requirements for subsidiaries of such groups. Two major sharing out of ESPA LEARN PVT LTD are as follows:</p>
   
   <div className="row ">
<div className="col-md-6">
<button type="button" className="btn-lg btn-outline-primary ">MY LEARNAPP</button>
</div>
<div className="col-md-6">
<button type="button" className="btn-lg btn-outline-primary">SP SMART DIGITAL</button>
</div>

   </div>
    </div>
</section>

<section className="trainingsection container pt-5 mb-5">
    <div className="row">
        <div className="col-md-6">
            <img className="img-fluid mobimg" src={img8} alt="img8"/>

            
        </div>
        <div className="col-md-6 slide_right">
           <h4> TEACHERS TRAINING FOR ONLINE EDUCATION</h4>
           <p align="justify"> ESPA LEARN PVT LTD helping teachers to build their skills and advance their career by providing online teacher training. Teachers can find valuable resources in educational technology, teaching methods and more from leading institutions. Also teachers can explore variety of teaching courses from leading institutions that focus on the advancement of education through technology as well as innovative approaches to learning and development. Teacher training also provides key insight into how to empower students to learn on their own. Every teacher should know Science of Learning which is a self-paced online course designed to take teaching to the next level</p>

            
        </div>
        <div className="row container mt-4 pt-4">
            <div className="col-md-6 mt-5 text-center">
                <h2>My LearnApp</h2>
            <p align="justify" style={{fontSize:"22px"}}>A complete solution for achieving the goals of individuals learning. Let’s not restrict our learners in traditional teaching only using chalk and board methodologies. Provide your love-ones an opportunity, a platform of e-learning app where they can take lectures as per their choice, can review the lectures of their favorite facilitators having access to updated content with quick delivery of topics/lessons with no time restrictions.</p>
           
            </div>
            <div className="col-md-6 mt-4 text-center">
            <iframe className="responsive-iframe"  src="https://www.youtube.com/embed/4o9x2joI9UQ" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoPlay allowFullScreen></iframe>
           
            </div>
        </div>
    </div>


</section>
<section className="sharingout pt-5 pb-5   text-center ">
    <div className="shout container">
      
   <div className="row ">
<div className="col-md-6">
<img className="img-fluid " src={sir} alt="img8"/>
</div>
<div className="col-md-6">

           <h3> Shivang Satya Gupta</h3>
<h5>CEO & MD</h5>
            <h2>The CEO of ESPA LEARN PVT LTD is Sh. Shivang Satya Gupta, a proprietor of this organization </h2>
       <p>The CEO is experienced and very much enthusiastic and has done extensive research related to the field of teaching and more particularly to a system and method for measuring the efficiency and the effectiveness of the educational process and systems.</p>
</div>

   </div>
    </div>
</section>

</>

        )
    }
}
