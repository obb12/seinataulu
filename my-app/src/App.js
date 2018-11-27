import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import moment from 'moment'
class App extends Component {
  constructor(props) {
    super(props);
    var x = this;
    x.state = {lunch:[]}

    axios.get('list').then(function (response) {
      // handle success
      x.setState({ lunch: response.data.courses })
    })
  }
  render() {
    return (
      <div className="App">
      
      <table class="table">
      <thead>
    <tr>
      <th scope="col">Ruoka</th>
      <th scope="col">Hinta</th>
      <th scope="col">Kuvaus</th>

    </tr>
  </thead>
  <tbody>
        {this.state.lunch.map(function(object, i){
        return <tr>
          <th>          {object.title_fi} {object.title_en}
</th>
<th>          {object.price}
</th>
<th>          {object.desc_fi}
</th>
        </tr>;
    })}
    </tbody>
    </table>
      </div>
    );
  }
}

export default App;
