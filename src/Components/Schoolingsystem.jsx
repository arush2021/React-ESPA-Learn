import React, { Component } from 'react'
import am from '../images/assm.png'
import rep from '../images/rep.png'

import sp from '../images/sp.jpg'
import dcp from '../images/DCPc.png'
export default class Schoolingsystem extends Component {
    render() {
        return (
            <>
    <div className="mlaheader  ">
    <div className="mla-sliderschool  d-flex align-items-center justify-content-center slider_bg_1">
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
               
            <div className="container slide_right  ">
            <h1 style={{ fontSize:'55px',fontFamily: 'Russo One', color:"#00CCFF", letterSpacing:'5px',fontWeight:'bold', position: 'absolute',top: '28%'}} className=" Headingespa">
SP Smart <br/>
Schooling<br/>
system</h1>
<h3 className="espapara"  style={{ fontSize:'22px',marginTop:'25px', position: 'absolute',color:'white',top: '59%'}}> Proven Schooling System Which Has Already <br/> Benefited 1000s of students </h3>
    </div>
            </div>
        </div>
    </div>
</div>
<section className="assessment pt-5 mt-3 mb-5">

    <div className="container">
        <div className="row ">
            <div className="col-md-5 ">
                <img className="img-fluid"  src={am} alt="assessment"/>
            </div>
            <div className="col-md-7 col-sm-7 bg-points">
                <div className="points mt-2 ">
   <li  align='justify'> <strong> MCT</strong> (Monthly Competitive Test): It is an assessment program wherein students are given requisite knowledge about their ongoing preparations for competitive tests (i.e. tests conducted by NTA for JEE Main/Advance & NEET, NDA) on monthly basis.</li>
   <li align='justify'> <strong> MAT</strong>  (Monthly Assessment Test): It is an assessment program wherein students are given requisite knowledge about their ongoing preparations for eligibility exams (i.e. Exams conducted by Board/School for promotion to next class) on monthly basis.</li>
   <li align='justify'> <strong> ATUKT</strong>  (All That U Know Test): This test has been developed which has got very high potential for accessing learner preparation for any exams. This is the most potent preparation test and can help students in handling learning pressures in all subject sir respective of level of subjects.</li>
   <li align='justify'> <strong> D3 COMBO</strong> (3 tests daily all subject combination): D3 test prepares/evaluates important topics of units and COMBI prepares/evaluates complete unit. Also, this is to prepare students systematically and build confidence for the forthcoming Board Exams in positive way.</li>
   <li align='justify'> <strong> SWET</strong>  (Syllabi Wise Evaluation Test): SWET is exclusive revision program for ensuring better performance of students in board exam. SWET is exclusive preparation program designed by experts extensively for school students. This program includes extra coaching classes prior to tests. At the end feedback of the SWET would be shared with the students and their scope & area of improvement discussed individually.</li>
   <li align='justify'> <strong> PACE</strong>  (Preparation Analysis for Competitive Exams): This program is designed for the preparation of students who are aiming for professional courses in engineering and medical, this program reduces the stress of competitive preparation because of its practically designed academic architecture which accommodates time management, understanding levels, revision.</li>
   <li align='justify'> <strong> WAT/WAA</strong>  (Weekly Assessment Test & Weekly Assessment Assignment): This is an assessment program where a student is assessed on division of five days in a week.</li>
   <li align='justify'> <strong> MPES </strong>  (Examination Series): MPES covers most important and expected questions for Board Examination. MPES are exactly the same as the question papers of Board examination. MPES shows exact position of the Examinees for the forth coming board exams. MPES is designed according to the system and pattern of J&K board exams and covers full syllabus.</li>
   <li align='justify'> <strong> MLA </strong>  (Micro Level Assessment): MLA is a learning assessment system which gives accurate assessment of learning. This assessment proves significant for teachers & parents. The students gets objective in the process of learning with the help of this assessment. A student is updated with the short comings in his/her learning of content.</li>
   
                </div>
            </div>
        </div>
    </div>
</section>

<section className="assessment pt-5 mt-3 mb-5">

    <div className="container">
        <div className="row ">
            <div className="col-md-6 ">
                <img className="img-fluid"  src={rep} alt="assessment"/>
            </div>
            <div className="col-md-6 col-sm-6 ">
                <div className="reportpoints mt-2 ">
   <li align='justify'> <strong> TPWF</strong>  (Teachers Personal Working File):This program is designed for assuring the desired and healthy working in each class and in each subject.</li>
   <li align='justify'> <strong> DWP&R</strong>  DWP&R (Daily Working Profile/Performance Report): DWP&R report is for making the routine working of teachers accountable.</li>
   <li align='justify'> <strong> TJPR</strong>  form (Teachers Joint Performance Report): TJPR is a report designed for assessing the actual academic working of the school.  </li>
   
                </div>
            </div>
        </div>
    </div>
</section>
<section className="Daily pt-5 mt-3 mb-5">

    <div className="container text-center">
        <h1> DCP (Daily Class Program)</h1>
        <div className="row ">
            <div className="col-md-12 ">
                <img className="img-fluid"  src={dcp} alt="scp"/>
            </div>
           
        </div>
    </div>
</section>
<section className="Daily pt-5 mt-3 mb-5">

    <div className="container text-center">
      
        <div className="row ">
        <div className="col-md-6 ">
            <h2>ICP (Intensive Care Program)</h2>
                <p align="justify" className="spprog"> This program is designed to fulfill the gaps in the learning of a student which is caused due to any factor, this program specially Improves the student’s performance in examinations and in this process students didn’t get any extra tuition but will go on guided self-assessment and program study maintenance</p>
            </div>
            <div className="col-md-6 ">
                <img className="img-fluid"  src={sp} alt="sp"/>
            </div>
           
        </div>
    </div>
</section>

</>

        )
    }
}
