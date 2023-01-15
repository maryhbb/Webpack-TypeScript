class User {
    firstname: String;
    lastname:String;
    age: number;

    public constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

const myUser = new User("Mary", "HBB", 20);
const myUser2 = new User("Mani", "HBB", 17);
const myUser3 = new User("JOJO", "JD", 40);

console.log(myUser);
console.log(myUser2);
console.log(myUser3);
