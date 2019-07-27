import React,{Component} from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class AboutUS extends Component{
    
    

      render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Group C</h2>
                <hr/>
                <img
                            src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/032_girl_avatar_profile_woman_blouse-512.png"
                            alt="ava"
                            className="ava-img"
                            
                            
                        />
                        
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/professions-1-1/128/14-512.png"
                            alt="avat"
                            className="avat-img"
                            
                           
                        /> 
                        
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/032_girl_avatar_profile_woman_blouse-512.png"
                            alt="ava"
                            className="ava-img"
                            
                            
                        />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> 
                 <br></br>Our group consists of 3 members: Hind, Zahra and Mohmmed.<br></br>
                  We are trainees in "Forty Days" and this is our first project in web design.<br></br>
                  Our website designed specifically for the business community. The goal of the site is to allow registered members to establish 
                  their CV and then publish it. Which will make finding the job easier. </p> 

                  
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton' }}>
                        
                  
                  <hr/>
                  
                      </ListItemContent>
              </Cell>
              <Cell col={6}>
                <h2>Contact Us</h2>
                <hr/>
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        
                        <br></br> <br></br>
                          hi.alayed@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        
                        alowisheer1zahra@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        
                        mohammed.alhomaidi121@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        
                        
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>

                <ListItemContent style={{fontSize: '45px', fontFamily: 'Anton' }}>
                        
                  
                  <hr/>
                  
                      </ListItemContent>
              </Cell>
            </Grid>
          </div>
        )
      }
}
export default AboutUS;