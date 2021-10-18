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
    validatePassword(input, password) {
        let validation = bcrypt.compare(input, password, (err, result) => {
            if (err) {
                return err;
            }
            return result;
        });
        return validation;
    }
}

export default Authentication;