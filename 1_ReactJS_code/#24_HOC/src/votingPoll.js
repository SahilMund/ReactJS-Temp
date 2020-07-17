import React from 'react';

//Higher Order Component function  i.e. PM here
//HOC is a function  so when we use it we should use it as a function 
const PM =(Party,vote)=>{
    class NewPM extends  React.Component{

        
    state={
        voteCount:0,
    }

    voteHandler=() =>{
        this.setState({
            voteCount:this.state.voteCount+vote
        });
    }
        render(){
            return(
                
                <Party
                 voteFor="Prime Minister"
                hocVotecount={this.state.voteCount}
                hocVoteHandler={this.voteHandler}
                    {...this.props}//here desturcturing is done
                />
                
            )
        }
    }
    return NewPM;  //here retuning the wrap component of HOC
}


export default PM;