class User{
    constructor(id, username, name,bio){
        this.id=id,
        this.username=username,
        this.name=name,
        this.bio=bio,
        this.dateCreate= new Date(),
        this.lastUpdate= new Date()
    }
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreate(){
        return this.dateCreate
    }
    get getLastUpdate(){
        return this.lastUpdate
    }
    set setUsername(newUsername){
        this.username=newUsername
    }
    set setBio(nwebio){
        this.bio=nwebio
    }
}

module.exports= User