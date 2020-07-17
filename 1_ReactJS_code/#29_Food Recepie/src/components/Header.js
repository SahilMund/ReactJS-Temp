import React from 'react';

function Header(props){
    const {search,onInputChange,onSearchClick}=props;
    return(

    <div className="jumbotron">
        <h1 className="display-1"><span className="material-icons  brand-icons">
        fastfood
        </span>Food Recipe </h1>

        <div className="input-group w-50 mx-auto">
        <input type="text" className="form-control"
         placeholder="Enetr Your Recipe"  value={search}
        onChange={onInputChange}
         />
        
        <div className="input-group-append">
            <button className="btn btn-secondary" type="button" 
            onClick={onSearchClick}>Search</button>
        </div>
        
        </div>


    </div>
    )
  }

export default Header;