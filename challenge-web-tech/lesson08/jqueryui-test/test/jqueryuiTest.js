const assert = require("assert")
const fs = require("fs")
const html = fs.readFileSync("./index.html", "utf-8")
const { JSDOM } = require('jsdom')

const window  = (new JSDOM(html)).window;
const { document } = window
global.document = document;

global.$ = require("jquery")(window);
global.jQuery = $

window.navigator = {
    userAgent: 'node.js',
}
global.navigator = window.navigator
global.window = window

require("../jquery-ui")

describe("JQUERY UI", function() {
    it("Resizable", function() {
        let index = require("../index")
        index.changes($)
        let handle = $("button")
        let target = $("#resizable")
        assert(target.width() == 100, "initial size == 100")
        handle.trigger("click")
        assert(target.width() == 200, "click size == 200")
        handle.trigger("click")
        assert(target.width() == 100, "csecond lick size == 100")
    })
})
