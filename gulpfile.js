// stimpleport gulpfile
//
// by @ponchofreedo
//
//
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

const postcss = require('gulp-postcss');
const advancedVars = require('postcss-advanced-variables');
const apply = require('postcss-apply');
const calc = require('postcss-calc');
const partials = require('postcss-import');
const cssnano = require('cssnano');
const nestedProps = require('postcss-nested-props');
const presetEnv = require('postcss-preset-env');

// to switch between src and public
let dev = true;

gulp.task('scripts', function () {
});

gulp.task('gzip', function() {
});

gulp.task('postcss', function (cb) {
  return gulp.src('src/**/*.css')
    .pipe($.sourcemaps.init())
    .pipe(postcss([
      partials({
        'skipDuplicates': true
      }),
      apply({
        preserve: true
      }),
      nestedProps(),
      presetEnv({
        browsers: [
          'last 2 versions',
          'ie >= 8',
          'dead'
        ],
        stage: 3,
        features: {
          'custom-properties': {
            preserve: false,
            warnings: true
          },
          'nesting-rules': true
        },
        autoprefixer: ({
          grid: true
        })
      }),
      calc({
        warnWhenCannotResolve: true
      }),
      /*cssnano({
        autoprefixer: false,
        preset: 'default',
        safe: true
      })*/
    ]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('public/'))
    .pipe($.size({ title : 'css' }));
});

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe($.size({ title : 'html' }));
});

gulp.task('images', function (cb) {
});

gulp.task('fonts', function () {
});

gulp.task('test', function () {
});

gulp.task('clean', function () {
});

gulp.task('watch', function () {
});

// just test to make sure the file is alive
gulp.task('default', function () {
  runSequence('postcss')
});

// spin a server
gulp.task('serve', function () {
});

// put a bow on it
gulp.task('build', function () {
});

// ['build', 'watch']
