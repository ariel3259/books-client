export class User{
    
    #name = "";
    #lastName = "";
    #dni = "";
    #email = "";
    #password = "";

    constructor(_name, _lastName, _dni, _email, _password){
       this.#name = _name;
       this.#lastName = _lastName;
       this.#dni = _dni;
       this.#email = _email;
       this.#password = _password;
    }

    //getter and setter of name
    get Name(){
        return this.#name;
    }

    set Name(_name){
        this.#name = _name;
    }

    //getter and setter of lastName
    get LastName(){
        return this.#lastName;
    }

    set LastName(_lastName){
        this.#lastName = _lastName;
    }

    //getter and setter of dni
    get Dni(){
        return this.#dni;
    }

    set Dni(_dni){
        this.#dni = _dni;
    }

    //getter and setter of email
    get Email(){
        return this.#email;
    }

    set Email(_email){
        this.#email = _email;
    }

    //getter and setter of password
    get Password(){
        return this.#password;
    }

    set Password(_password){
        this.#password = _password;
    }

    isEmpty(){
        return !this.#name || !this.#lastName || !this.#dni || !this.#email || !this.#password;
    }

    isAValidEmail(){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.#email)
    }
}
