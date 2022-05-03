const User = require("./../../app/models/User");

describe("Unit Test for User Class",()=>{
    test("1) Create an User object",()=>{
        //Aquí invocamos el código que vas a usar en tu app
        const user = new User(1,"carlogilmar","Carlo","Bio","dateCreate","lastUpdate")

        // Aquí validas los resultado de ese codigo
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valro esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreate).toBe("dateCreate")
        expect(user.lastUpdate).toBe("lastUpdate")
    });
})