const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
module.exports.request = function() {
    let req = new XMLHttpRequest()
    req.open('GET', 'http://localhost:3000', true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if(req.status == 200) {
                const text = this.responseText
                let nextReq = new XMLHttpRequest()
                nextReq.open('POST', 'http://localhost:3000/' + text, true)
                nextReq.send()
            }
        }
    }
    req.send()
}