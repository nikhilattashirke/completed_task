import React,{Component} from 'react'
import Topbar from '../components/Topbar'
import AboutUsComponent from '../components/AboutUsComponent'

class AboutUs extends Component{
    render(){
        return(
            <div style={{'height':'100vh','width':'100%'}}>
                <div>
                <Topbar />
                </div>
                <div>
                    <AboutUsComponent />
                </div>
             </div>
        )
    }
}
export default AboutUs;