import React from 'react';
import './Sidenav.css';

const sidenav = (props) => {
    return (
        <div className="sidenav" id="slide">
              <div style={{margin: "2%"}}>
                <button onClick={() => props.handleNav({},false)}>Close</button>
              </div>
              <div style={{padding: "5%"}}>
              <ul>
                <li>
                  <h4>Name: <span className="text">{props.itemDetails.name}</span></h4>
                </li>
                <li>
                <h4>Age: <span className="text">{props.itemDetails.age}</span></h4>
                </li>
                <li>
                <h4>Gender: <span className="text">{props.itemDetails.gender}</span></h4>
                </li>
                <li>
                <h4>
                  Sports: 
                  {props.itemDetails.sports.map((item,index) => {
                    return <span className="text" key={index}> {item}{index!==(props.itemDetails.sports.length - 1) ? "," : null }</span>
                  })}
                </h4>
                </li>
              </ul>
              </div>
          </div>
    );
};

export default sidenav;