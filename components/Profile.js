import React,{Component} from 'react'
import Topbar from './Topbar'

class Profile extends Component{
    render(){
        var technologies = [{value:'ios',icon_name : 'apple',id:0},{value:'android',icon_name:'android' ,id:1},{value:'react-native',icon_name:'snowflake-o',id:2},{value:'reactJs',icon_name:'snowflake-o',id:3},{value:'elixir',icon_name:'tint',id:4}]
		var productCard=[{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'},{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'},
		{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'},{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'}]
        return(
            <div className="test-container">
                <div>
                    <Topbar />
                </div>
                <div>
						<h1 className="section-title-h1">We’re an App Design & Development Team</h1>
					</div>
					<div>
						<h2 className="section-title-h2">
        					Experts in mobile & web technologies.
        					We create beautiful, functional mobile apps and websites.
      					</h2>
      				</div>
      				<div>
      						<div>
      							<h1 className="section-title2-h1">let's build better product together</h1>
      						</div>
      						<div>
      							<h2 className="section-title2-h2">Our team of experienced designers and engineers have worked with many startups and businesses. We’ve been designing and developing software for over 10 years.</h2>
      						</div>
      				</div>
      				<div>
      					<div>
      							<div>
      							<h1 className="section-title2-h1">Technologies capabilities</h1>
      						</div>
      						<div>
      							<h2 className="section-title2-h2">We're constantly pushing our skills forward to provide our clients with the technology needed for modern applications.</h2>
      						</div>
   
      					</div>
      				
            </div>

            </div>
        )
    }
}
export default Profile