import React,{Component} from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'


class Topbar extends Component{
    render(){
        return(
                
                    <div>
                        <div className="tobbar-container">
                            <div className="tobbar-container">
                            <div className="topbar-link"><Link to="/aboutus/profile">Profile</Link></div>
                            <div className="topbar-link"><Link to="/aboutus/team">Team</Link></div>
                            <div className="topbar-link"><Link to="/aboutus/contact">Contact</Link></div>
                            </div>
                        </div>    
                    </div> 
                
                   
         
            

            
        )
    }
}
export default Topbar;