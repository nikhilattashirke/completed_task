import React,{Component} from 'react'
import Topbar from './Topbar'
class Contact extends Component{
    render(){
        var workPlace=[{source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',location:'USA',pin:'360-450-2922'},
        {source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',location:'Banglore',pin:'360-450-2922'},
        {source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',location:'PUNE',pin:'360-450-2922'}
    ]
        return(
                <div className="contact-container">
                    <div>
                        <Topbar />
                    </div>
                    <div className="contact-section-title">
                        <h1 className="contact-title-h1">Contact Us</h1>
                        <p className="contact-title-h2">We know every project is unique. That's why our founders will take the time to learn about your company, how you work, and what exactly you are looking for in a custom website, web app, Android or iOS app. We'll work closely with you to make sure your project is a success.</p>
                    </div>
                    <div className="contact-form">
                        <div>
                        <label>WHAT'S YOUR NAME ?</label>
                        <input className="input-box" type="text" placeholder="Full Name (First & Last)" />
                        </div>
                        <div>
                        <label>WHAT EMAIL CAN WE REACH YOU AT?*</label>
                        <input className="input-box" type="text" placeholder="ie.shirkenikhil123@gmail.com" />
                        </div>
                        <div>
                        <label>TELL US A BIT ABOUT YOUR PROJECT</label>
                        </div>
                        <div><textarea className="contact-textarea" placeholder="what are you looking to build?whats the deadline?dou you have specific budget range"></textarea></div>
                        <div>
                        <button className="form-submit-button">send a message</button>
                        </div>    
                    </div>
                    <div className="contact-section-title">
                        <h1 className="contact-title-h1">Where you can find Us</h1>
                        <p className="contact-title-h2">We’re a distributed team in many cities worldwide, but we have headquarters in a few key places</p>
                    </div>
                    <div >
                        {
                            workPlace.map((item,index)=>(
                                <li className="workplace-list" key={index}>
                                    <div className="workplace">
                                    <div><img className="workplace-image" src={item.source} /></div>
                                    <div className="workplace-title">
                                        <div className="workplace-location">{item.location}</div>
                                        <div className="workplace-pin">{item.pin}</div>
                                    </div>
                                    </div>
                                </li>
                            ))
                        }
                    </div>
                    
                </div>
        )
    }
}
export default Contact;


