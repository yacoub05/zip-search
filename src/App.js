import React from 'react';
import './App.css';
import axios from 'axios';
import ZipResult from './ZipResult';
import { Card } from 'semantic-ui-react'
import './App.css';
 
class App extends React.Component {
 
 constructor(props) {
   super(props);
 
   this.state = {
     zipcodes: []
   }
 }
 
 searchZip = ( event ) => {
   event.preventDefault();
   let userInput = event.target[0].value;
   console.log(userInput);
 
   axios.get('http://ctp-zip-api.herokuapp.com/zip/'+userInput)
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
   elems = this.state.zipcodes.map((elem, i) => <ZipResult key={i} {...elem} />)
   return (
     <div className="search">
       <form onSubmit={this.searchZip}> 
         <h1>Search Zip Codes</h1>
         <input type="text" />
       </form>
      <Card> {elems} </Card>
      
     </div>
   );
 }
}
 
export default App;
