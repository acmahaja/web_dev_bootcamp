const bcrypt = require("bcrypt")


const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(pw, salt)
    console.log("salt: " + salt);
    console.log("hash: " + hash);
    return hash
}

const login = async (pw, hashPassword) => {
    const result = await bcrypt.compare(pw, hashPassword)
    if(result){
        console.log("LOGGED IN");
    } else {
        console.log("WRONG PASSWORD DENIED");
    }
}

// const monkeyPassword = hashPassword('monkey')
login('monkey', '$2b$12$TFw6I2DcrTUwuF7FdLZ.IOYRFZMXsjKpCAoRnKrPUMdG8dpAlpBMW')
