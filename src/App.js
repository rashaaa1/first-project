
import React, { Component } from 'react';
import './App.css';
import Button  from '@material-ui/core/Button';
import  AppBar  from '@material-ui/core/AppBar';
import  ToolBar  from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@material-ui/core';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
class App extends Component{
  render(){
  return (
    <Container>
    <div > 
    <AppBar>
  <ToolBar>
  
  <MenuIcon>
    <IconButton> 
   </IconButton>
    </MenuIcon> 
    <Typography variant="h3">choose List</Typography>
  </ToolBar>
      </AppBar> 
<h2> welcome </h2>
<h1 className="navpar bg-primary rounded" > <i>flowers in chinase</i> </h1>
<img  style={{maxWidth:'70in'}}src= {"https://images.unsplash.com/11/sky-rose.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=190&q=10"}/>
    
   
       <Button  variant="outlined" color="primary" className="d-flex flex-column"
  onClick={() => {
    alert('clicked');
  }}>
  next page 
</Button>

     <Button variant="contained" color="secondary">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>

       {/* <ul className="list-group">*/}
       <Button   className="d-flex align-items-end"> 

        <HomeIcon color="success" fontSize="large">  Home </HomeIcon> </Button>
        
    </div>

    </Container>
  )
  }
  }
export default App;