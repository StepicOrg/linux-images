const gulp = require("gulp4")

let clean

function scripts() {

}
function jsons() {

}

gulp.task("default", gulp.series(clean, scripts, jsons))