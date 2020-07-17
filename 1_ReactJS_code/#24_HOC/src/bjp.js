import React from 'react';
import PMc from "./votingPoll";




class BJP extends React.Component{


  render(){
    return(
      <>
      <h1>BJP {this.props.voteFor} Candidate {this.props.candidate}</h1>
      <h2>Total Vote :{this.state.hocVotecount} </h2>
      <h3 onMouseOver={this.props.hocVoteHandler}>BJP_voter</h3>
      
      </>

    );
  }
}
//HOC is a function  so when we use it we should use it as a function after exporting

export default PMc(BJP,10);
