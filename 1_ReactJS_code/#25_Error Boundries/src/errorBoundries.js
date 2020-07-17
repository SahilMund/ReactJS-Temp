import React,{Component} from 'react';

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError:false
        }

    }
    //this is used for error handling
    static getDerivedStateFromError(err){
        // Update state so the next render will show the fallback UI
        return {hasError : true};
    }
    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     this.setState({
    //         error: error,
    //         errorInfo: errorInfo
    //       })
    //       // You can also log error messages to an error reporting service here
    //     }

  render(){
      if(this.state.hasError){
        return(
            <>
            <h1>Errors </h1>
      
           
            </>
          );
      }
     return this.props.children;
  }
}

export default ErrorBoundary;