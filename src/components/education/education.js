import React from "react";
import { Animated } from "react-animated-css";
import "./education.css";
const Education = () => {
 return (
   <section className="education" id="Education">
     <div className="timeline">
       <ul>
         <li>
           <Animated animationIn="bounceInUp" isVisible={true}>
             <div className="content">
               <h3> CVR College of Engineering, Hyderabad</h3>
               <p>
                 Completed my Bachelor Degree in Information Technology
                 with an aggregate of 60%
               </p>
             </div>
           </Animated>
           <Animated>
             <div className="time">
               <h4>2014-2018</h4>
             </div>
           </Animated>
         </li>
         <li>
           <Animated animationIn="bounceInRight" isVisible={true}>
             <div className="content">
               <h3>Narayana Junior College</h3>
               <p>Completed my intermediate with an aggregate of 86.4% </p>
             </div>
           </Animated>
           <Animated isVisible={true}>
             <div className="time">
               <h4>2012-14</h4>
             </div>
           </Animated>
         </li>
         <li>
           <Animated animationIn="bounceInLeft" isVisible={true}>
             <div className="content">
               <h3>Vamakshi Vidyaniketanam High School</h3>
               <p>Completed my 10th with an aggregate of 8.6</p>
             </div>
           </Animated>
           <Animated>
             <div className="time">
               <h4>2011-2012</h4>
             </div>
           </Animated>
         </li>
         <div style={{ clear: "both" }}></div>
       </ul>
     </div>
   </section>
 );
};

export default Education;