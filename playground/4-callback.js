const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined);
        callback(undefined, [1,2,3]);
    }, 2000);
};

doWorkCallback((err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log(result);
});