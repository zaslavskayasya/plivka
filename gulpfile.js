const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create('Main');
const { pugTask } = require('./tasks/pug');
const { scssTask } = require('./tasks/scss');
const { jsTask } = require('./tasks/javascript');
const { imgTask } = require('./tasks/image');
const { copyFile } = require('./tasks/copyFile');
const { cleanImg, cleanFolder, cleanMap } = require('./tasks/clean');

const path = require('./tasks/path.js');

const serveTask = (done) => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000,
    open: false,
    notify: false
  });
  done();
};

const watchTask = (done) => {
  watch(path.src.pug[0], pugTask);
  watch(path.src.scss, scssTask);
  watch(path.src.js, jsTask);
  watch(['src/*.*'], copyFile);

  done();
};

exports.default = series(parallel(copyFile, pugTask, jsTask, scssTask), serveTask, watchTask);
exports.watch = series(serveTask, watchTask);
exports.build = series(cleanFolder, parallel(copyFile, pugTask, scssTask, jsTask, imgTask), cleanMap);
exports.buildimg = imgTask;
exports.clean = cleanFolder;
exports.cleanImg = cleanImg;
