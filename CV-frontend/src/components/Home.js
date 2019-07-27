import React,{Component}from 'react';
import {Grid,Cell} from 'react-mdl';

class Home extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Home-grid">
                    <Cell col={12}>
                        <img
                            src="https://jimdo-lc-assets-www-prod.global.ssl.fastly.net/u1HsECsauweGqaXT-ViZbAZbk.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>
                                welcome to our  social networking site.
                                
                            </h1>
                            <hr/>
                            <p>
                            Our website designed specifically for the business community.
                            The goal of the site is to allow registered members to establish their CV and then publish it.
                            Which will make finding the job easier.
                                </p>
                        </div>

                    </Cell>

                </Grid>

                
                  </div>
        )
    }
}

export default Home;