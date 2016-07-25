var gulp = require('gulp'),
    eslint = require('gulp-eslint'), // lint JS
    sass = require('gulp-sass'), // compile SASS
    uglify = require('gulp-uglify'), // minify JS
    cleanCSS = require('gulp-clean-css'), // minify CSS
    imagemin = require('gulp-imagemin'), // minify images
    watch = require('gulp-watch'), // watcher
    csslint = require('gulp-csslint'); // lint JS

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jslint', function() {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint({
            extends: 'eslint:recommended',
            "env": {
                "browser": 1
            },

            "globals": {
                "angular": 1,
                "require": true,
                "__dirname": true,
                "module": true,
                "$": true
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('csslint', function() {
    gulp.src('./assets/src/css/*.css')
        .pipe(csslint({
            'ids' : false,
            'important' : false
        }))
        .pipe(csslint.reporter());
});

gulp.task('sass', function () {
    gulp.src('sass/materialize-src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('minifycss', function() {
    return gulp.src('./assets/src/css/*.css')
        //.pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets/dist/css/'));
});
gulp.task('minifyjs', function() {
    return gulp.src('./assets/src/js/**/*.js')
        .pipe(uglify())
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/dist/js/'));
});

gulp.task('imagemin', function() {
    return gulp.src('./assets/src/img/**/**.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./assets/dist/img/'))
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('./assets/src/css/*.css', ['minifycss']);
    gulp.watch('./assets/src/js/**/*.js', ['minifyjs']);
});