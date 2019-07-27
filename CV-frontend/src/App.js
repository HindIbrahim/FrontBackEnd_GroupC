import React, { Component } from "react";
import "./App.css";
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Footer,FooterSection,FooterLinkList} from "react-mdl";

class App extends Component {
  render() {
    return (
      <div>
        
      <Footer className="header-color" size="mini">
      <FooterSection type="left" logo="CV WEBSITE">
          <FooterLinkList>

          
          <Link to="/Home">Home</Link>
          <Link to="/Preview">Preview CVs </Link>
          <Link to="/Upload">Upload CV</Link>
          <Link to="/AboutUs">About Us</Link>
              
          

          </FooterLinkList>
      </FooterSection>
  </Footer>
  
  <Main/>
  </div>
    );
  }
}

export default App;