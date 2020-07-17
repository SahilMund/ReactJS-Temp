import React ,{useState,useEffect} from 'react';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "./App.css";
import Axios from "axios"


function App(){
  
   
  const [search,setSearch] = useState("chicken");
  const [recipes,setRecipe] = useState([]);

  const APP_ID="16d51f73"
  const APP_KEY="854bdd0cd7974d9f40bfaf873b574303"

  useEffect(  () =>{
    getRecipes();
  },[]);

  const  getRecipes = async () =>{
    const res =await Axios.get(`https://api.edamam.com/search?q=${search}&
    app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories
    =591-722&health=alcohol-free`);
   
    setRecipe(res.data.hits)
  }

  const onInputChange=(e) =>{
  setSearch(e.target.value)
  }

  const onSearchClick =() =>{
    getRecipes();
  }
   return(
     <div className="App">
      
      <Header search={search} onInputChange={onInputChange}
        onSearchClick={onSearchClick}/>
      <div className="container">
      <Recipes recipes={recipes}/>
      </div>
     </div>
   )
}
 
export default App;