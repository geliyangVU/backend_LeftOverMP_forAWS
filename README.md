# backend_LeftOverMP_heroku
link:
https://leftoverbackend.herokuapp.com/


# Collection #1 User
The documents within this collection are structured as follows:

```

User{
  "_id": ObjectId,
  "userame": String,
  "email": String,
  "password": String,
  "creationDate": Date,
  "imageLink": String,
  "posts": [String],
  "followings": [String],
  "followers": [String],
  "description": String,
  "city": String,
  "from": String,
  "isAdmin": Boolean,
}


```

# Collection #2 Post
The documents within this collection are structured as follows:
```
Post{
  "_id": ObjectId,
  "userId": String,
  "description": String,
  "itemType": String,
  "bestBy": Date,
  "name": String,
  "price": String,
  "pictureURL": String,  
}

```

# Collection #3 Message
The documents within this collection are structured as follows:
```

Message{
  "_id": ObjectId,
  "conversationId": String,
  "sender": String,
  "text": String,
  "timestamps": true,
}

```



# Collection #4 Conversation
The documents within this collection are structured as follows:
```

Conversation{
  "_id": ObjectId,
  "members":[String],
  "timestamps": true,
}

```
