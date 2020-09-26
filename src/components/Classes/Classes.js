import React from 'react';
import './Classes.css';

const classes = (props) => {
  return (
    <div className="classes">
      <ul >
        {Object.keys(props.classes).map((key, index) => {
          return (
            <li key={index}>Class: {key}
              <ul>
                {Object.keys(props.classes[key]).sort().map((secondItem, index) => {
                  return (
                    <li key={index}>
                      Section: {secondItem}
                      <div style={{ display: 'flex' }}>
                        {props.classes[key][secondItem].map(thirdItem => {
                          return (
                            <div key={thirdItem.rollNumber} className="tooltip">
                              <button onClick={() => {
                                if (thirdItem.name === props.itemDetails.name) {
                                  props.handleNav({}, false)
                                }
                                else {
                                  props.handleNav(thirdItem, true)
                                }

                              }} >{thirdItem.name}</button>
                              <span className="tooltiptext">
                                Name: {thirdItem.name},
                                Age: {thirdItem.age},
                                Gender: {thirdItem.gender},
                                Sports:
                                    {thirdItem.sports.map((item, index) => {
                                  return <span key={index}> {item}{index !== (thirdItem.sports.length - 1) ? "," : null}</span>
                                })}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default classes;