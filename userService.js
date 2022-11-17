import { users } from "./users.js"

export class UserService {


    constructor() {

        this.userList = users;
    }

    add(user) {
        this.userList.push(user);
    }

    getAll() {
        return this.userList;

    }

    getById(id) {
        let userToFind = this.userList.find(user => user.id === id);
        return userToFind ?? null;
    }

    delete(id) {
        this.userList = this.userList.filter(user => user.id !== id);
    }

}