import React from 'react';

export const About = (props) => {
  return (
    <div>
      <br/><br/><br/>
      <div className="card" style={{width:"96rem",borderRadius:"40px", height:"400px", textAlign:"center", fontSize:"20px"}}>
        <div className="card-body">
          <br/><br/>
          <p className="card-text">Founded in 1960 by Mr.Hiranandani,this institute is one of the oldest education colleges in Maharashtra.The Institution has also pioneered engineering education by being the First in the state to start degree courses in Mining, Metallurgy,Ceramic Engineering and Pharmaceutics with the establishment of the College of Mining and Metallurgy and the College of Technology in the year 1963 and 1972 respectively. In 1969 these three colleges were amalgamated to form the Institute of Technology.The institute aspires to be a harbinger of modern interdisciplinary technological advancement in the country and at a forefront of imparting quality education by use of innovative pedagogy culminating traditional with contemporary methods. We believe in integrity,unity and harmony and try our best to provide the finest and up-to-date knowledge about the subjects enrolled. To keep growing and improving is our motto and we follow it everyday in the quest of achieving "The Best" title.The university has graduate or professional schools of medicine, law, business, divinity, education, government, dental medicine, design, and public health. The schools of law, medicine, and business are particularly prestigious.</p>
        </div>
      </div>
      <br/><br/><br/>
      <div style={{textAlign:"center"}}>
       <b><u><h1>Current Board:</h1></u></b> 
       <h2>Trustee: {props.Greet}</h2>
       <h2>Principal: {props.Principal}</h2>
       <h2>HOD: {props.HOD}</h2>
       <h2>Chairman: {props.Chairman}</h2>
       </div>
    </div>
  )
}
