class User{
    constructor(id, username, name,bio){
        this.id=id,
        this.username=username,
        this.name=name,
        this.bio=bio,
        this.dateCreate= new Date(),
        this.lastUpdate= new Date()
    }
}

module.exports= User