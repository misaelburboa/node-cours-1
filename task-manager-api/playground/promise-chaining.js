require('../src/db/mongoose');
const User = require('../src/models/user');

/*
User.findByIdAndUpdate('5e8b2ab2efedca1d372256f5', { age: 1})
    .then((user) => {
        console.log(user);
        return User.countDocuments({ age: 31});
    }).then((result) => {
        console.log(result);
    }).catch((e) => {
        console.log(e);
    });
*/

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
};

updateAgeAndCount('5e8b2ab2efedca1d372256f5', 31).then((count) => {
    console.log(count);
}).catch(e => {
    console.log(e);
})