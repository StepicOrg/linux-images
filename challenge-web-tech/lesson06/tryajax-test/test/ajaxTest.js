const http = require("http")
const url = require('url')
const assert = require("assert")
const index = require("../index")

describe("AJAX", function() {
    let server
    let value = "test"
    let query
    let finish = {
        done() {

        },
        commit() {
            server.close()
            if(!query.path.endsWith(value))
                this.done(new Error("Different values"))
            else
                this.done()
        }
    }
    before(function() {
        server = http.createServer((req, res) => {
            query = url.parse(req.url, true)
            res.statusCode = 200
            if(req.method.toLowerCase() == "get") {
                res.end(value)
            } else {
                res.end(`Ok`)
                finish.commit()
            }
        }).listen(3000)
    })
    after(function(){
        server.close()
    })
    it("GET-POST", function(done){
        try {
            finish.done = done
            index.request()
        } catch(e) {
            done(e)
        }
    })
})
