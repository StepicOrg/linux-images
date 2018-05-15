module.exports.changes = function($) {
    $("button").on("click", ()=> {
        if($("#resizable").width() == 100)
            $("#resizable").width(200)
        else
            $("#resizable").width(100)
    })
}