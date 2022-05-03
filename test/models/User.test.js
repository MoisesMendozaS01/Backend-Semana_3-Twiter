const User = require("./../../app/models/User");

describe("Unit Test for User Class",()=>{
    test("1) Requerimiento 1: Create an User object",()=>{
        //Aquí invocamos el código que vas a usar en tu app
        const user = new User(1,"carlogilmar","Carlo","Bio")

        // Aquí validas los resultado de ese codigo
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valro esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
    });
    test("2) Requerimiento 2: Fechas de atributos de User",()=>{
        const user = new User(1,"carlogilmar","Carlo","Bio")

        expect(user.dateCreate).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    });
    test("3) Requerimiento 3: Agregando getters",()=>{
        const user = new User(1,"carlogilmar","Carlo","Bio")

        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreate).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()
    });
    test("4) Requerimiento 4: Agregando setters",()=>{
        const user = new User(1,"carlogilmar","Carlo","Bio")
        user.setUsername="Gilmar"
        expect(user.username).toBe("Gilmar")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})