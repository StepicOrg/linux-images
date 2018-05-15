const assert = require("assert")
const cheerio = require('cheerio')
const fs = require("fs")

describe("JQUERY", function() {
    it("Function", function(done) {
        fs.readFile("./index.html", "utf-8", (err, data)=>{
            if(err) {
                done(err)
                return
            }
            let $ = cheerio.load(data)
            let h3 = $("html > body > h3")
            assert(h3, "Exists h3")
            assert(h3.length > 0, "h3 array")
            assert(h3[0].children, "h3 has text")
            assert(h3[0].children[0].data.toLowerCase() == "заголовок", "h3 textvalue")

            let li = $("html > body > ul > li")
            assert(li, "Exists li")
            assert(li.length > 0, "li array")
            assert(li[0].children[0].data == "Item 1", "item 1 text")
            assert(li[1].children[0].data == "Item 2", "item 2 text")

            let index = require("../index.js")
            index.changes($)
            assert(h3, "Exists h3")
            assert(h3.length > 0, "h3 array")
            assert(h3[0].children, "h3 has text")
            assert(h3[0].children[0].data.toLowerCase() == "test", "h3 textvalue")

            assert(li, "Exists li")
            assert(li.length > 0, "li array")
            assert(li[0].children[0].data.toLowerCase() == "odd", "item 1 text")
            assert(li[1].children[0].data.toLowerCase() == "even", "item 2 text")
            done()
        })
    })
})