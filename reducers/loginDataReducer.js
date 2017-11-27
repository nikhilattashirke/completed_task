import credentials from '../containers/credentials.json'
export default function(state={login:false},action){

    switch(action.type){
        case 'LOGIN_DATA':
        
        const validUser =  credentials.filter((item)=>{
            return item.email===action.payload.email && item.password===action.payload.password
        })

        if(validUser.length!=0){
          
            return Object.assign({},{state,login:true})
        }
        else{
          
            return Object.assign({},{state,login:false,error:'wrong credentials'})
        } 

        default:
        return state

    }
}