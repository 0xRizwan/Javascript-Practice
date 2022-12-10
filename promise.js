/* 
// Promise and .then working (Basic for understanding)
// New feature introduced to overcome CALLBACK HELL .
// Lets consider all functions are getting executed step by step with defined time.

function register(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        },3000);
    })  
}

function sendWelcomeEmail(){
    setTimeout(() => {
        console.log("email end");
    }, 1000);
}

function login(){
    setTimeout(() => {
        console.log("login end");
    }, 1000)
}

function getUserData(){
    setTimeout(() => {
        console.log("getData end");
    },1000);
}

function displayUserData(){
    setTimeout(() => {
        console.log("displayData end");
    },1000);
}

register().then(sendWelcomeEmail).then(login).then(getUserData).then(displayUserData);  */ 

/* 
// Promise and .then working 
// Lets consider different functions are getting executed step by step with different time.

function register(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        },3000);
    })  
}

function sendWelcomeEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email end");
            resolve();
        }, 2000);
    })  
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 1000)
    })
}

function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getData end");
            resolve();
        },1000);
    })
}

function displayUserData(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("displayData end");
            resolve();
        },1000);
    })
}

register().then(sendWelcomeEmail).then(login).then(getUserData).then(displayUserData); 


// Promise and .then working 
// Lets consider reject scenario

function register(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return reject ("Error while registering...");
            console.log("register end");
        },3000);
    })  
}

function sendWelcomeEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email end");
            resolve();
        }, 2000);
    })  
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 1000)
    })
}

function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getData end");
            resolve();
        },1000);
    })
}

function displayUserData(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("displayData end");
            resolve();
        },1000);
    })
}

register()                                                // Resolve.....> .then
.then(sendWelcomeEmail)                                    
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((err) => {                                            // Reject.......> .catch
         console.log('Error:', err)
})

*/