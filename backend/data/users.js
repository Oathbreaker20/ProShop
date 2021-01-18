import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Hrishikesh Shinde',
        email: 'hrishi@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jurgen Klopp',
        email: 'jurgen@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users