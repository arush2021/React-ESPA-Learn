import React from 'react'
import aboutimg from '../images/aboutimg.jpg'
import logo from '../images/logo.jpeg'
import digitalvid from '../images/digitalvid.jpg'

import industrial from '../images/industrial.jpg'
import news from '../images/news.jpg'
import edu from '../images/Banner5.jpeg'
import digitalimg from '../images/digital.jpg'
const service=[{
   name: 'News video', imgsrc:news },
  { name: 'Education video',imgsrc:edu },
  { name: 'Digital content',imgsrc:digitalvid },
 
  { name: 'Portfolio shoot',imgsrc:industrial 

}];
function Digitalstudio() {
    return (
        <>
        <div className="mlaheader  ">
        <div className="mla-sliderstudio  d-flex align-items-center justify-content-center slider_bg_1">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                   
                <div className="container slide_right  ">
                <h1 style={{ fontSize:'55px',fontFamily: 'Russo One', color:"#00CCFF", letterSpacing:'5px',fontWeight:'bold', position: 'absolute',top: '28%'}} className=" Headingespa">
  ESPA  <br/>
  <img width='270' className="img-fluid" src={logo}/>
    </h1>
    <h3 className="espapara"  style={{ fontSize:'24px',marginTop:'25px', position: 'absolute',color:'white',top: '50%'}}>Welcome to Espa Digital Studio!  <br/> Digital Agency with Excellent Services. </h3>
        </div>
                </div>
            </div>
        </div>
    </div>


<div className="aboutespadigital container mt-5 pt-2 pb-4">
    <div class="container-fluid">
        <div class="row">
            <div className="col-md-5">
                <img className="img-fluid" src={aboutimg} />
            </div>
            <div className="col-md-7 quot">
             
              <h4>About us</h4>
               <p style={{fontSize:25}}>At Espa Digital Studio, we provide a wide range of creative, professional video & photography services to meet our customer's requirement.We take pride in being a leading digital agency and among the few independent digital outfits in India with a vast and reputed clientele of well-known brands.</p>
           
            </div>
        </div>
    </div>
</div>
<div class="espaservices mt-5  ">
    <div class="serviceespalearn text-center">
        <h1>Our Services</h1>
        <div className="row p-2">
        {service.map(servicedata => 
<div  key={servicedata} className="col-md-3 ">
            <div class="card bg-light" style={{width: '18rem'}}>
  <img src={servicedata.imgsrc} class=" img-fluid" alt="services"/>
  <div class="card-body">
      <h4 class="mt-2">{servicedata.name}</h4>
   
  </div>
</div>
            </div>
        )}
            </div>
       
        </div>
      
    </div>
    <div className="aboutespadigital container mt-5 pt-2 pb-4">
    <div class="container-fluid">
        <div class="row">
            
            <div className="col-md-7 quot">
             
              <h4>Why choose us</h4>
               <p style={{fontSize:25}}> What makes us one of the best digital marketing agencies in India? It’s our legacy of being one of India’s largest independent digital agencies. Our team works closely with our extended network across the globe to develop and execute clever online and digital solutions to bring our clients users,</p>
           
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={digitalimg} />
            </div>
        </div>
    </div>
</div>

</>
    
    )
}

export default Digitalstudio
