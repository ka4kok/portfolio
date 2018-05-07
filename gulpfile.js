let gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    del = require('del'),
    cache = require('gulp-cache'),
    concatCss = require('gulp-concat-css');
    concat = require('gulp-concat');
    uglify = require('gulp-uglifyjs');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('sass', function(){
    return gulp.src('app/static/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function () {
    return gulp.src('app/static/js/common.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/headhesive/dist/headhesive.min.js',
        'app/static/js/libs/wow.min.js',
        'app/static/js/libs/particles.js'
    ])
        .pipe(gulp.dest('app/js/libs'))
});

gulp.task('styles', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/slick-carousel/slick/slick-theme.css',
        'app/static/libs-css/animate.css'
    ])
        .pipe(gulp.dest('app/css'))
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('dev', ['browserSync', 'scripts', 'styles','sass', 'js'], function() {
    gulp.watch('app/static/scss/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/static/js/**/*.js', ['js']);
});

gulp.task('build', ['clean', 'sass'], function() {

    let buildCss = gulp.src([
        'app/css/main.css',
    ])
        .pipe(gulp.dest('dist/css'));

    let buildFonts = gulp.src('app/static/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    let buildJs = gulp.src('app/static/js/**/*')
        .pipe(gulp.dest('dist/static/js'));

    let buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

    let buildImages = gulp.src('app/static/content/**/*')
        .pipe(gulp.dest('dist/content'));

});

gulp.task('clear', function () {
    return cache.clearAll();
});



