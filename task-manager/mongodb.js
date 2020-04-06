/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;*/

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

 /*   
    // C SETTING DATA

    db.collection('users').insertOne({
        _id: id,
        name: 'Ana Emilia',
        age: 2
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert the user');
        }
        console.log(result.ops);
    });

    db.collection('tasks').insertMany([
        {
            description: 'wash the car',
            completed: false,
        },{
            description: 'shower dog',
            completed: false,
        },{
            description: 'study today\'s course lesson',
            completed: true,
        }
    ], (error, result) => {
        if (error) {
            return console.log('There was an error inserting stuff');
        }

        console.log(result.ops);
    });

    // R FETCHING DATA
    db.collection('users').findOne({ _id: new ObjectID("5e85e40e2569ca7510cb1b55") }, (error, user) => {
        if (error) {
            console.log('Unable to fetch');
        }

        console.log(user);
    });

    db.collection('users').find({ age: 31 }).toArray((error, users) => {
        console.log(users);
    });

    db.collection('users').find({ age: 31 }).count((error, count) => {
        console.log(count);
    });
    
   db.collection('tasks').findOne({ _id: new ObjectID('5e85e11005e9d673e3a815ca') }, (error, task) => {
       if (error) {
           console.log('There was an error');
       }

       console.log(task);
   });

   db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
       if (error) {
           console.log("there was an error");
       }

       console.log(tasks);
   })


   // U UPDATE DATA
   db.collection('users').updateOne({
       _id: new ObjectID('5e85db7d3415026f6fba7dc5')
   }, {
       $set: {
           name: 'Caleb'
       },
       $inc: {
           age: 1
       }
   }).then((result) => {
        console.log(result);
   }).catch(error => {
       console.log(error);
   });
   

   db.collection('tasks').updateMany({
       completed: false
   }, {
       $set: {
           completed: true
       }
   }).then((result) => {
       console.log(result);
   }).catch(e => {
       console.log(e);
   });


   // D DELETE DATA
   db.collection('users').deleteMany({
       age: 31
   }).then(result => {
       console.log(result);
   }).catch(error => {
       console.log(error);
   });*/

   db.collection('tasks').deleteOne({
       description: 'shower dog'
   }).then((result) => {
       console.log(result);
   }).catch((error) => {
       console.log(error);
   });
});