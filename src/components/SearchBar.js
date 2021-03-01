import React, { Component } from 'react'

// export default class SearchBar extends Component {
//   state={
//       password:""
//   }
//     render() {
//         return (
//             <div className="ui sagment">
//                 <form className="ui form">
//                     <div className="field">
//                         <label>Type Here....</label>
//                     <input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
//                     </div>
//                     {this.state.password.length<4 ? "password must be atleast 4 characters" : ''}
//                 </form>
//             </div>
//         )
//     }
// }

export default class SearchBar extends Component {
    state={
        term:""
    }
    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
      render() {
          return (
              <div className="ui sagment">
                  <form onSubmit={this.onFormSubmit} className="ui form">
                      <div className="field">
                          <label>Type Here....</label>
                      <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
                      </div>
                     
                  </form>
              </div>
          )
      }
  }