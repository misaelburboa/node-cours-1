require('../src/db/mongoose');
const Task = require('../src/models/task');

/*
Task.findByIdAndDelete('5e8b2a3fe1acf71ce72e8d75')
    .then(task => {
        console.log(task);
        return Task.countDocuments({ completed: false});
    }).then((result) => {
        console.log(result);
    }).catch(e => {
        console.log(e);
    });
*/

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const incompletedTasksCount = Task.countDocuments({ completed: false});
    return incompletedTasksCount;
};

deleteTaskAndCount('5e8b2aadefedca1d372256f4').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});