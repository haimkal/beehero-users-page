export class UserService {

    static async getUsers() {
        let users = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await users.json();
        if (users) {
            users = users.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                coordinates: user.address.geo,
                company: user.company.name
            }))
        }
        return users;


    }
}