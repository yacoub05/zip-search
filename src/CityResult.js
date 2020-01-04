import React from 'react';
import './App.css';

class CityResult extends React.Component {
 
 render() {
   return (
     <div className= "App-header">
  
            <label>{this.props.zip}</label>

    
     </div>
   );
 }
}
 
export default CityResult;
