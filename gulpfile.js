// Dependencies
var gulp      = require('gulp');
var jshint    = require('gulp-jshint');
var uglify    = require('gulp-uglify');
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');
var sass      = require('gulp-ruby-sass');
var maps      = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var imagemin  = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');
var paths     = {
  scripts: 'src/js/*.js',
  styles:  'src/sass/*.s*ss',
  images:  'src/img/*'
};

// Convert, minify and sourcemap the styles
gulp.task('styles', function () {
  return sass(paths.styles, {
    style: 'expanded',
    sourcemap: true })
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest('pub/css'));
  }
);

// Join and minify the scripts
gulp.task('scripts', function() {
  gulp.src(paths.scripts)
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('indice.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('pub/js'));
});

// Minify images
gulp.task('images', function() {
  return gulp.src(paths.images)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('pub/img'));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// Serve
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 3455,
      livereload: true,
      directoryListing: false,
      fallback: 'index.html',
      open: true
    }));
});

// Default task: run all at once
gulp.task('default', ['styles','scripts', 'images', 'watch']);
gulp.task('serve', [ 'default', 'webserver']);
