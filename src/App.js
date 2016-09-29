import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
        Button,
        ButtonGroup,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Checkbox,
        Radio,
        Grid,
        Row,
        Col
        } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    com:"",
    songs:[],
    browser:"",
    
  };
  
  onChange = (fieldName)=>{
    return(event)=> {
      var state = this.state;
      state[fieldName] = event.target.value;
      this.setState(state);
    }
  };
  
   checkboxChange = (fieldName)=>{
     return (event)=> {
       var targetArray = this.state[fieldName];
       if(targetArray.indexOf(event.target.value) >=0 )
       targetArray.splice(
         targetArray.indexOf(event.target.value),
         1
       );
       else
       targetArray.push(event.target.value);
       
       var state=this.state;
       state[fieldName]=targetArray;
       this.setState(state);
     }
   }
   
   
   
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Student Survey</h2>
        </div>
        <p className="jumbotron">
        <Grid>
        <Row>
          <Col md={6}>
          <Form>
          
        <FormGroup>
          <ControlLabel>Your name please . . . .</ControlLabel>
          <FormControl type ="text" 
          placeholder = "Enter your name here" 
          value = {this.state.name} 
          onChange = {this.onChange('name')}/>
          <HelpBlock>This is to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
          <ControlLabel>Choose your favorite color</ControlLabel>
          <FormControl componentClass ="select" 
                       placeholder = "Choose color here"
                       value = {this.state.color} 
                       onChange = {this.onChange('color')}>
            <option value ="Red">Red</option>
            <option value ="Green">Green</option>
            <option value ="Blue">Blue</option>
            <option value ="White">White</option>
            <option value ="Black">Black</option>
          </FormControl>
          <HelpBlock>Pick one (ex. Green)</HelpBlock>
        </FormGroup>
        
        <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
            <Checkbox 
            value ="Harry Potter" 
            checked = {this.state.movies.indexOf('Harry Potter')>=0 ? true:false} 
            onChange = {this.checkboxChange('movies')}>Harry Potter Series</Checkbox>
            <Checkbox 
            value ="Game of Thrones" 
            checked = {this.state.movies.indexOf('Game of Thrones')>=0 ? true:false} 
            onChange = {this.checkboxChange('movies')}>Game Of Thrones</Checkbox>
            <Checkbox 
            value ="Twilight Series" 
            checked = {this.state.movies.indexOf('Twilight Series')>=0 ? true:false} 
            onChange = {this.checkboxChange('movies')}>Twilight Series</Checkbox>
        </FormGroup>
        
        <FormGroup>
          <ControlLabel>Gender</ControlLabel>
            <Radio name ="gender"
            value="Male"
            onChange={this.onChange('gender')}>Male</Radio>
            <Radio name ="gender"
             value="Female"
            onChange={this.onChange('gender')}>Female</Radio>
           
        </FormGroup>
        
         <br/> <br/> <br/>
 { /*--------------------------------------------------Act-----------------------------------------------------------------------*/  }    
         <FormGroup>
          <ControlLabel>Anything ??</ControlLabel>
          <FormControl type ="text" 
          placeholder = "Enter your comments here" 
          value = {this.state.com} 
          onChange = {this.onChange('com')}/>
          <HelpBlock>This is to identify you</HelpBlock>
        </FormGroup>
        
         <FormGroup>
          <ControlLabel>Favorite songs</ControlLabel>
            <Checkbox 
            value ="Closer" 
            checked = {this.state.songs.indexOf('Closer')>=0 ? true:false} 
            onChange = {this.checkboxChange('songs')}>Closer</Checkbox>
            <Checkbox 
            value ="Treat you better" 
            checked = {this.state.songs.indexOf('Treat you better')>=0 ? true:false} 
            onChange = {this.checkboxChange('songs')}>Treat you better</Checkbox>
            <Checkbox 
            value ="Stitches" 
            checked = {this.state.songs.indexOf('Stitches')>=0 ? true:false} 
            onChange = {this.checkboxChange('songs')}>Stitches</Checkbox>
            <Checkbox 
            value ="Heaven" 
            checked = {this.state.songs.indexOf('Heaven')>=0 ? true:false} 
            onChange = {this.checkboxChange('songs')}>Heaven</Checkbox>
        </FormGroup>
        
        <FormGroup>
          <ControlLabel>Browser</ControlLabel>
            <Radio name ="browser"
            value="Google Chrome"
            onChange={this.onChange('browser')}>Google Chrome</Radio>
            <Radio name ="browser"
             value="Mozilla Firefox"
            onChange={this.onChange('browser')}>Mozilla Firefox</Radio>
            <Radio name ="browser"
            value="Internet Explorer"
            onChange={this.onChange('browser')}>Internet Explorer</Radio>
           
        </FormGroup>
        
        
          <ButtonGroup>
            <Button bsStyle ="info">Info Button
            </Button>
          <Button bsStyle ="primary">Primary Button
          </Button>
          <Button bsStyle ="warning">Warning Button
          </Button>
          <Button bsStyle ="danger">Error Button
          </Button>
         
         
         
         
         
          </ButtonGroup>
          </Form>
          
          
          </Col>
          <Col md={6}>
          
          
          
          
          Your name is: <strong>{this.state.name}</strong><br/><br/>
          Your favorite color is: <strong>{this.state.color}</strong><br/><br/>
          Your favorite movies is/are: <strong>{
            this.state.movies.map((item,i)=>{
              return <div>
              <span className="label label-info">{item}</span>
              </div>
              
    })
          }</strong><br/><br/>
          Your gender: <strong>{this.state.gender}</strong> <br/> <br/>
           
          
          <br/>
          
          Youve Written: <strong>{this.state.com}</strong><br/><br/>
           Your favorite songs is/are: <strong>{
            this.state.songs.map((item,i)=>{
              return <div>
              <span className="label label-info">{item}</span>
              </div>
              })
          }</strong><br/><br/>
          Your browser is: <strong>{this.state.browser}</strong>
          
              
              
    
          
          
          </Col>
        </Row>
        </Grid>
        
        </p>
      </div>
    );
  }
}

export default App;
