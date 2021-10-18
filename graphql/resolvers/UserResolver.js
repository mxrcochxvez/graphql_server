import User from '../../models/User.js';
import Authentication from '../../services/Authentication.js';

const UserResolver = {
    Query: {
        users: async () => await User.find(),
    },
    Mutation: {
        createUser: async (_, { username, email, password, firstName, lastName }) => {
            let hashedPassword = await Authentication.hashPassword(password);

            let userExists = await User.findOne({ username });
            if (userExists) {
                throw new Error('User already exists with that username');
            } else {
                return await User.create({
                    username,
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    createdAt: new Date().toISOString(),
                });
            }
        },
    }
}

function saveUser(user) {

}

export default UserResolver;