import React from 'react';
import './App.css';
import axios from 'axios';
import CityResult from './CityResult';
import './App.css';
 
class Getcity extends React.Component {
 
constructor(props){
 
super(props)
this.state = {
 
 zipcodes:[]
}
}
 searchCity = ( event ) => {
 
   
 
   event.preventDefault();
   let userInput = event.target[0].value;
   userInput = userInput.toUpperCase();
   console.log(userInput);
 
   axios.get('http://ctp-zip-api.herokuapp.com/city/'+userInput)
   .then( (resolve) => {   // Called when data is returned
     this.setState( {zipcodes: resolve.data} );
     console.log(resolve.data);
   })
   .catch( (err)=> console.log(err));
 }
 
 render() {
   let elems = [];     // container
   // for(let zip of this.state.zipcodes) {
   //   elems.push(<ZipResult key={index++} {...zip}/>);
   // }
    elems = this.state.zipcodes.map((elem) => <CityResult zip= {elem} />)
 
   return (
     <div className="search">
       <form onSubmit={this.searchCity}> 
         <h1>Search City</h1>
         <input type="text" />
       </form>
 
       {elems}
     </div>
   );
 }
}
 
export default Getcity;