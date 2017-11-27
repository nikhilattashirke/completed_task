export function loginData(data){
    console.log('what is in login data',data);
    return{
        type:'LOGIN_DATA',
        payload:data
    }
}