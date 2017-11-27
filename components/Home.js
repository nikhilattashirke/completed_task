import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap'

class Home extends Component{
    render(){
        var technologies = [{source:"http://geekycentral.com/wp-content/uploads/2017/09/react-native.png", name:'react-native'},
		{source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png', name:'react'}]
        return(
            // <div>
            //     <div>
            //     <Link to="/aboutus">About Us</Link>
            //     </div>
            //     <div>
                
  
            //     </div>
            // </div>
            <div className="home-main-container">
            <div className="homepage-header">
                    <h1>We're an App Design & Developement Team</h1>
                    <h4>expert in web and mobile technologies.we create beautiful,functional mobile app and websites</h4>
                    <div className="aboutus-link"><Link to="/aboutus">to know more about us click here</Link></div>
                </div>
            <div className="home-container">
                
                    {
                        technologies.map((item,index)=>{
                            return (
                             <div className="tech-card">
                                 <div >
                                 <img className="card-image" src={item.source} />
                                 </div>
                                 <div className="card-name">
                                     <h1>{item.name}</h1>
                                     </div>
                             </div>
                            )		
                    })
                    }
                
            </div>
            </div>
        )
    }
}
export default Home;