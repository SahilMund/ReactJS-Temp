import React from 'react';
import PMc from "./votingPoll";


class BJD extends React.Component{


  render(){
    return(
      <>
      <h1>BJD {this.props.voteFor} Candidate {this.props.candidate}</h1>
      <h2>Total Vote :{this.state.hocVotecount} </h2>
      <h3 onMouseOver={this.props.hocVoteHandler}>BJD_voter</h3>
      
      </>

    );
  }
}

//HOC is a function  so when we use it we should use it as a function  after exporting also

export default PMc(BJD,10);
