import React from 'react'

function Table(props) {
    return (
      <table>
        <thead> 
          <tr>
            <th>Chore Description</th>
            <th>Name</th>
            <th>Date</th>
           
          </tr>
          </thead> 
              {/* //displays it to the dom and return JSX from callback function */}
              {props.test.map((v, i) => {
          return <tr>
            <th>{v[0]}</th>
            <th>{v[1]}</th>
            <th>{v[2]}</th>
            
          </tr>
        })}
      </table>
    );
  }


export default Table