import React from 'react'
import {AppBar,Container,Toolbar,Typography,Select,MenuItem,makeStyles} from "@material-ui/core"
import {useHistory} from "react-router-dom"

const useStyles = makeStyles(() => ({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Monteserrat",
        fontWeight:"bold",
        cursor:"pointer",
    }
}))

const Header = () => {

    const history = useHistory();

const classes=useStyles()

  return  (
    <AppBar color = "transparent" position='static'>
<Container>
<Toolbar>
<Typography className={classes.title}> Crypto Hunter</Typography>

<Select variant="outlined"
style={{
    width:100,
    height:40,
    marginLeft:15,
}}>
    <MenuItem value={'USD'}>USED</MenuItem>
    <MenuItem value={'INR'}>INR</MenuItem>
</Select>
</Toolbar>
</Container>
    </AppBar>
  )
};

export default Header;
