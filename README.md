![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name

### Author: Student/Group Name

### Links and Resources
* [Client CodeSandbox](https://codesandbox.io/s/62op2o3w8z)


### Modules
#### `server.js`
##### Handle socket.io on / emit calls

###### `text`
- push the values into the history array.
- emit the imcoming method and send it with the payload

###### `delete`
- emit the history method with the history array saved in server.

###### `history`
- update the history array and emit back to history with the new updated history.

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db


#### UML
Link to an image of the UML for your application and response to events