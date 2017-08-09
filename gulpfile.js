let gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon')

let assets = 'app/assets/'
let dist = 'public/assets/'

gulp.task('sass', function(){
  return gulp.src(assets + 'stylesheets/' + '*.scss')
  .pipe(sass())
  .pipe(gulp.dest(dist + 'stylesheets'))
})

gulp.task('watch', function(){
  return gulp.watch(assets + 'stylesheets/' + '*.scss', ['sass'])
})

gulp.task('serve', ['watch'], function(){
  return nodemon({
    script: 'server.js',
  })
  .on('restart', function(){
    console.log('restarted')
  })
})

gulp.task('default', ['serve'], function(){

})
