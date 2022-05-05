const UserView= require("./../../app/view/UserView")

describe("Test for Userview",()=>{
    test("View: Rewuerimiento 1: Return an erro objects qhuen try to create a new user with an null payload",()=>{
        const payload= null
        const result= UserView.createUser(payload)
        //htpps://jest.io/doc/using-matchers#strings
        expect(result.error).toMatch('/payload no existe/')
    })

    test("View: requerimiento 2: Return an error object when try to create a new user with a payload with invalid properties",()=>{
        const payload ={username:null,name:12,id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch("/necesitan tener un valor valido/")
    })
})