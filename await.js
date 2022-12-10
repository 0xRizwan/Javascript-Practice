
// async....await working (Basic understanding)

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

async function authenticate(){
    await register();
    await sendWelcomeEmail();
    await login();
    await getUserData();
    await displayUserData();
}

authenticate().then(() => {
    console.log("All operations are successful");
});



// async....await working 
// Lets consider some error....or using reject function

function register(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return reject ("Error is occured");
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

// async function authenticate(){
//     await register();
//     await sendWelcomeEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
// }

// authenticate().then(() => {
//     console.log("All operations are successful");
// })
// .catch((err) =>{
//     console.log(err)
// });


// Try catch error ....block... very normal method
async function authenticate(){

    try {
        await register();
        await sendWelcomeEmail();
        await login();
        await getUserData();
        await displayUserData();
        }catch(err){
         console.log(err);
         throw new Error();             // To avoid the running of next function error means...will show error of this function only.
}
}

authenticate().then(() => {
    console.log("All operations are successful");
}).catch((err) => {
    console.log(err);
})





// async....await working 
// Lets consider passing some value in resolve function and store await in const.

function register(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
           return  resolve("success");
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

async function authenticate(){

    const message = await register();
                    await sendWelcomeEmail();
                    await login();
                    await getUserData();
                    await displayUserData();
                    console.log(message)        
}

authenticate().then(() => {
    console.log("All operations are successful");
})
.catch((err) =>{
    console.log(err)
});


