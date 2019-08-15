var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from learning so much!"
    },
    {
        username: "Sally",
        timeline:"Javascript is so cool!"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
               return true;
            }
        }
    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
};

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

signIn(userNamePrompt, passwordPrompt);











