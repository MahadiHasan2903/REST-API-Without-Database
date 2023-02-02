const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "MD. Mahadi Hasan",
        email: "20103206@iubat.edu"
    },
    {
        id: uuidv4(),
        username: "Shahriar Ahmed Fahim",
        email: "shahriar21@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Abdur Rafi",
        email: "rafi29@gmail.com"
    },
];
module.exports= users;