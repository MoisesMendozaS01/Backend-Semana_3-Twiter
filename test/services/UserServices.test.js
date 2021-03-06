const UserService = require("./../../app/services/UserService")

describe("Test for UserService",()=>{
    test("Servicios: Requerimiento 1: Create a new user using the UserService",()=>{
        const user= UserService.create(1,"carlogilmar","Carlo")

        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test("Servicios: Requerimiento 2: Get all user data in a list",()=>{
        const user= UserService.create(1,"carlogilmar","Carlo")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlogilmar")
        expect(userInfoInList[2]).toBe("Carlo")
        expect(userInfoInList[3]).toBe("Sin bio")
    });
    test("Servicios: Requerimiento 3: Update username",()=>{
        const user= UserService.create(1,"carlogilmar","Carlo")
        UserService.updateUserUsername(user,"carlog")

        expect(user.username).toBe("carlog")
    })
    test("Servicios: Requerimiento 4: username list",()=>{
        const user1 = UserService.create(1,"carlogilmar","Carlo")
        const user2 = UserService.create(2,"MoisesMendozaS01","Moises")
        const user3 = UserService.create(3,"romarpla","Rodrigo")

        const usernames = UserService.getAllUsernames([user1,user2,user3])
        console.log(usernames)
        expect(usernames).toContain("carlogilmar")
        expect(usernames).toContain("MoisesMendozaS01")
        expect(usernames).toContain("romarpla")
    })
})