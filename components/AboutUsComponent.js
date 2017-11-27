import React,{Component} from 'react'

class AboutUsComponent extends Component{
    render(){

        var technologies = [{value:'ios',icon_name : 'apple',id:0},{value:'android',icon_name:'android' ,id:1},{value:'react-native',icon_name:'snowflake-o',id:2},{value:'reactJs',icon_name:'snowflake-o',id:3},{value:'elixir',icon_name:'tint',id:4}]
		var productCard=[{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'},{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'},
		{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'},{source:'https://facebook.github.io/react/img/logo.svg',title:'abc',description:'xyz'}]
        return(
            <div className="aboutuscomponent-container">
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
            <div className={"tech-list"}>
            {
                technologies.map((item,index)=>(

                        <li key={index} className="technologies-list">
                        <div >
                        <i className={`fa fa-${item.icon_name}`} aria-hidden="true"></i>
                        </div>
                        <div>
                        {item.value}
                        </div>
                        </li>
                    ))
            }
      					</div>                
                </div>
                
            
        )
    }
}
export default AboutUsComponent;