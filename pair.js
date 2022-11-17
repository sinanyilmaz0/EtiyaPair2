import { users } from './users.js'
import { UserService } from './userService.js';

let userList = users;
let user=new UserService(userList);

console.log(user.getAll());
console.log(user.getById(5));
user.add({id:7, firstName: 'lale', lastName: "Deniz", city: "ankara", age: 33, salary: 456454, type: "customer"});

user.delete(5);
console.log(user.getAll());

/*

// 4 adet fonksiyon oluşturucaz

// getAll
// getById
// add
// delete => id parametresi ile yapılacak

// her fonksiyonu test ediniz.

let getAll = () => {
    return userList;
}
console.log(getAll());

let getById = (id) => {
    // filter
    // identifier 
    let userToFind = userList.find(user => user.id === id);
    return userToFind ?? null;
}
console.log(getById(500))

let add = (user) => {
   // userList.push(user);
}

let add2 = (id, firstName, lastName, city, age, salary, type) => {
    userList.push({ id, firstName, lastName, city, age, salary, type })
}

add({ id: 101, firstName: "Halit", lastName: "Kalaycı", city: "Istanbul", age: 23, salary: 1, type: "employee" })
add2(1002, "İrem", "Balcı", "İzmir", 23, 1, "customer");

console.log(getAll())

function deleteById(id) {
    userList = userList.filter(user => user.id !== id);
}

function deleteByIdSplice(id) {
    let userToDelete = getById(id);
    let index = userList.indexOf(userToDelete);
    userList.splice(index, 1);
}

deleteById(1002);
console.log(getAll())

deleteByIdSplice(101);
deleteByIdSplice(5);
console.log(getAll())


// instance
// nesne ve obje
let userService = new UserService("employee");
userService.getAll();
userService.add({ id: 1 })
/*
function deleteUsers(id){

let user1= getById(id)
let index = users.indexOf(user1)
users.splice(index, 1)
}
deleteUsers(5);
console.log(users);
*/


