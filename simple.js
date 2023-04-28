var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({posts:[]}).write();
// add post
// ----------------------------
// db.get('posts')
// .push({"id": 3, "title": "awesome", published: false })
// .write()
// db.get('posts')
// .push({"id": 4, "title": "random", published: false })
// .write()
// db.get('posts')
// .push({"id": 5, "title": "lowdb is awesome", published: true })
// .write()

// console.log(db.get("posts").value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
