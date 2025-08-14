import React from "react";

class Reactforms extends React.Component{
  constructor(){
    super()
    this.state={username:""}
  }
  uservalue = (event) =>
  {
    this.setState({username:event.target.value});
  }
    render()
  {
    return(
      <form>
        <h1>Hello {this.state.username}!</h1>
        Enter your name : <input type="text" onChange={this.uservalue}/>
        <h3>Thank You !</h3>
        </form>
    )  
}
}
export default Reactforms
