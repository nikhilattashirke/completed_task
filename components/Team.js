import React,{Component} from 'react'
import Topbar from './Topbar'
class Team extends Component{
	render(){
		var founderTeam = [{source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png', name:'ABC',position:'CEO'},
		{source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png', name:'ABC',position:'CEO'},
		{source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png', name:'ABC',position:'CEO'},
		{source:'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png', name:'ABC',position:'CEO'}]
		return(
				<div className="team-container-main">
					<div>
                    	<Topbar />
                	</div>
					<div>
						<div className="team-page-header"><h1>Meet Our Team</h1></div>
						<div><h2 className="team-page-header-h2">Meet the team behind the magic at our company We're very proud of our team of designers, engineers, and support staff.</h2></div>
					</div>
					<div className="team-container">
						{
							founderTeam.map((item,index)=>{
								return (
								<div key={index}>
									<div >
										<img className="team-card-image" src={item.source} />
									</div>
									<div className="co-founder-name">{item.name}</div>
									<div className= "co-founder-position">{item.position}</div>
								</div>
							)
							}
							
								)
						}
					</div>
				</div>
			)
	}
}
export default Team;