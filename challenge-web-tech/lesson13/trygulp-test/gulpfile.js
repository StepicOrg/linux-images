const gulp = require("gulp4")
const babel = require("gulp-babel")
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const del = require("del")

const clean = ()=>del(["assets"])

function scripts() {
    return gulp.src('src/**/*.js', { sourcemaps: true })
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('assets/scripts/'))
}
function jsons() {
    return gulp.src('src/**/*.json')
        .pipe(gulp.dest('assets/jsons/'))
}

gulp.task("default", gulp.series(clean, scripts, jsons))
