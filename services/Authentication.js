import bcrypt from 'bcrypt';

const Authentication = {
    saltRounds: 10,
    hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, this.saltRounds, (err, hash) => {
                if (err) reject(err);
                else resolve(hash);
            });
        })
    },
    comparePassword(input, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(input, password, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }
}

export default Authentication;