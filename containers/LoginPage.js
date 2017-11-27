import React,{Component} from 'react'
import credentials from './credentials.json'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginData} from '../actions/loginData'
import {Link,Redirect} from 'react-router-dom'


class LoginPage extends Component{
    constructor(props){
        super(props);
            this.state =
            {
                email:'',
                password:''
            }   
    }
    handleChange(field,event){
            this.setState({
                [field]:event.target.value
            })
    }
    handleSubmit(event){
        event.preventDefault();
        var {email,password}=this.state
        this.props.loginData({email,password})
        this.ValidateEmail(email)
    }
    ValidateEmail(email)   
    {  
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))  
      {
       
        return (true)  
      }  
     else{
        alert("You have entered an invalid email address!")  
        return (false)  
      }

    } 
    
    render(){
        return(
            <div className="loginpage-container">
                {this.props.login && <Redirect to="/home"/> }
              
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="login-field">
                        <div style={{"color":"white"}}>Email:</div>
                        <div>
                            <input type="text" onChange={this.handleChange.bind(this,'email')}
                            className="form-control"
                            placeholder="Enter register email"
                            />
                        </div>
                        <div style={{"color":"white"}}>Password:</div>
                        <div>
                            <input type="password" onChange={this.handleChange.bind(this,'password')}
                            className="form-control"
                            placeholder="Enter your password"
                            />
                        </div>
                        {this.props.error && <div className="credential-error">{this.props.error}</div>}
                        <div className="submit-button-field">
                           <button className="submit-buuton" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
             </div>
        )
    }
}

function mapStateToProps(state){
    return state.data
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({loginData:loginData},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);