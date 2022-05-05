const UserService=require("./../services/UserService");

class UserView{
    static createUser(payload){
        if (payload === null){
            console.log("Error es null")
            return {error:'/payload no existe/'}
        }else if(payload.username === null || payload.name === null || payload.id === null){
            console.log(`necesitan tener un valor válido`)
            return {error:"/necesitan tener un valor valido/"}
        }
    }

}


module.exports= UserView