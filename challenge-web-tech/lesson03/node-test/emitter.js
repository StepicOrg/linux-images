const EventEmitter = require("events").EventEmitter
// manager.response =
let manager = new EventEmitter()
manager.on("request", (request)=>{
    request.data = "data"
    manager.response = request
    //console.log(manager.response)
})
manager.emit("request", {test:"data"})

module.exports.manager = manager