const bcrypt = require('bcrypt')

const hashPassword = async(pw) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashPw) => {
    const result = await bcrypt.compare(pw, hashPw)
    if (result) {
        console.log('Logged You In! Successful Match!')
    } else {
        console.log('Inocrrect')
    }
}

hashPassword('monkey')
hashPassword('monkey!')
login('monkey', '$2b$12$Q2TqgYrNLOPfdYrEpRwohOif46U.CVUhL.T0royIBVtuAvywLAHJq')
