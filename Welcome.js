import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Welcome extends Component{

  arrObj = (data) =>{

    return <option>{data.zip}</option>
  }

  arrObj1 = (data1) =>{

    return <option>{data1.city}</option>
  }


  render() {

     const myObj = [

     {

        city : 'Dhaka',
        zip :6000
     },
     {

      city : 'Chittagong',
      zip : 5000
     },
     {

      city : 'Rangpur',
      zip : 4000
     },
     {

      city : 'Rajshahi',
      zip : 3000
     }
   
     ]
     const myInfo = myObj.map(this.arrObj)
     const myInfo1 = myObj.map(this.arrObj1)
     
    return (
      <div>
      
        <select>{myInfo}</select> 
        <select>{myInfo1}</select>

      </div>
    )
  }
}
export default Welcome;


