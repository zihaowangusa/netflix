import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mylist: [],
      recommendation: []
    };
    this.handleRemove=this.handleRemove.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
  }
  
  componentDidMount(){
    //axios.get('').then(res=>res.data).then(data=>{});
    let data={'mylist' : [{'title': 'Futurama','id': 1,'img': 'https://cdn1.nflximg.net/webp/7621/3787621.webp'},{'title': 'The Interview','id': 2,'img': 'https://cdn1.nflximg.net/webp/1381/11971381.webp'},
    {'title': 'Gilmore Girls','id': 3,'img': 'https://cdn1.nflximg.net/webp/7451/11317451.webp'}],
    'recommendations' : [{'title': 'Family Guy','id': 4,'img': 'https://cdn5.nflximg.net/webp/5815/2515815.webp'},{'title': 'The Croods','id': 5,'img': 'https://cdn3.nflximg.net/webp/2353/3862353.webp'},
    {'title': 'Friends','id': 6,'img': 'https://cdn0.nflximg.net/webp/3200/9163200.webp'}]}

    this.setState({mylist:data['mylist'],
                   recommendation:data['recommendations']})
  }

  handleRemove(id){
      let newlist=this.state.mylist.filter(item=>item.id !== id);
      this.setState({mylist:newlist});
  }

  handleAdd(id){
      let newlist=[...this.state.mylist,...this.state.recommendation.filter(item=>item.id === id)];
      this.setState({mylist:newlist});
  }

  render() {
    return (
      <div className="container">
         <h3>My Lists:</h3>
         <div className="mylist">
            {this.state.mylist.map(item=>{
                return (
                  <div className="image-wrapper">
                  <img src={item.img} alt="Image" key={item.id}/>
                  <button className="btn"  onClick={()=>this.handleRemove(item.id)}>Remove</button>
                  </div>
                    )  
            })}
         </div>

         <h3>Recommendations:</h3>
         <div className="recommendation">
             {this.state.recommendation.map(item=>{   
                return (
                  <div className="image-wrapper">
                  <img src={item.img} alt="Image" key={item.id}/>  
                  <button className="btn" onClick={()=>this.handleAdd(item.id)}>Add</button>
                  </div>
                  )
            })}
         </div>
        
         <h3>Titles:</h3>
         <div className="title">  
            <ul>
              {this.state.mylist.map(item=>{
                return <li>{item.title}</li>
              })}
            </ul>
         </div> 
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
