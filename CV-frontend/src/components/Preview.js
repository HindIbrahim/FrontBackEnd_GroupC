import React, { Component } from "react";
import {
  Grid,
  Cell,
  Content,
  Layout,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";
const BSON = require("bson");

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { CVs: [] };
    fetch('http://localhost:5000/api/items/')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ CVs: data })
      });
  }

  toggleCategories() {
    return (
      <div >
                
        {this.state.CVs.map(function (cv) {
          return (
            
            
            <Grid>
              
            <Card shadow={0} style={{width: '220px', margin: 'auto'}}>
              <CardTitle
                style={{
                  height: "176px",
                  background:
                    "url(https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/032_girl_avatar_profile_woman_blouse-512.png) center / cover"
                }}
              >
              </CardTitle>
              <CardText>
                Name: {cv.name}

              </CardText>
              <CardText>
                University: {cv.University}
              </CardText>
              <CardText>Major: {cv.Major}</CardText>
              <Grid>
                <CardActions border>
                  <a href={BSON.deserialize(Buffer.from(cv.file.data)).name} download>Download</a>
                </CardActions>
              </Grid>
            </Card>
            </Grid>
          );
        })}
      
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "300px", position: "relative" }}>
      
          
        <p> 
                <div className="preview-text">
                            <h1>
                                Here is the posted CVs.
                                </h1>  </div>

                </p>
                
                
            <div className="content">{this.toggleCategories()}</div>
            
      </div>
      
    );
  }
}

export default Preview;