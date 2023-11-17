import{ BrowserRouter,Route} from "react-router-dom"
import Header from './Component/Header'
import Homepage from "./Pages/Homepage";
import './App.css';
import CoinPage from "./Pages/CoinPage";
import {makeStyles} from "@material-ui/core"

function App() {

  const useStyles = makeStyles(() =>  ({
    App:{
       backgroundColor: "#14161a",
       minHeight:"100vh",
    },
  }));

const classes = useStyles()

  return (
    
  <BrowserRouter>
  <div className={classes.App}>
    <Header/>
    <Route path='/' Component={<Homepage />} exact />
    <Route path="/coins/:id" Component={<CoinPage/>} />
   </div>


  </BrowserRouter>
  
  );
}

export default App; 
