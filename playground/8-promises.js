const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([4,5,6]);
        reject("Things went wrong");
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch(err => {
    console.log("Error!", err);
});