/*const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([4,5,6]);
        reject("Things went wrong");
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch(err => {
    console.log("Error!", err);
});*/

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
};


/*add(1,2).then(sum => {
    console.log(sum);
    add(sum, 4).then(sum2 => {
        console.log(sum2);
    }).catch(e => {
        console.log(e);
    });
}).catch(err => {
    console.log(err);
});*/

add(1, 1)
.then(sum => {
    console.log(sum);
    return add(sum, 4);
})
.then((sum2) => {
    console.log(sum2);
}).catch((err) => {
    console.log(err);
})