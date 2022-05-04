const User=require("./../models/User")

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }
    static getInfo(user){
        return [user.id,user.username,user.name,user.bio]
    }
    static updateUserUsername (user,newUsername){
        return user.setUsername=newUsername
    }
    static getAllUsernames(users){
        return  users.map(function(usuarios){return usuarios.username})
        
    }
}

module.exports = UserService