const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const changed = require("gulp-changed");

gulp.task("clean:dev", function (done) {
  if (fs.existsSync("./build/")) {
    return gulp.src("./build/", { read: false }).pipe(clean({ force: true }));
  }
  done();
});

const fileIncludeSetting = {
  prefix: "@@",
  basepath: "@file",
};

const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "Error <%= error.message %>",
      sound: false,
    }),
  };
};

gulp.task("html:dev", function () {
  return gulp
    .src(["./src/html/**/*.html", "!./src/html/blocks/*.html"])
    .pipe(changed("./build/", { hasChanged: changed.compareContents }))
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(gulp.dest("./build/"))
    .pipe(browserSync.stream());
});

gulp.task("css:dev", function () {
  return gulp
    .src(["./src/css/**/*.css", "!./src/css/input.css"])
    .pipe(changed("./build/css/"))
    .pipe(plumber(plumberNotify("CSS")))
    .pipe(sourceMaps.init())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream());
});

gulp.task("images:dev", function () {
  return gulp
    .src("./src/img/**/*")
    .pipe(changed("./build/img/"))
    .pipe(gulp.dest("./build/img/"))
    .pipe(browserSync.stream());
});

gulp.task("fonts:dev", function () {
  return gulp
    .src("./src/fonts/**/*")
    .pipe(changed("./build/fonts/"))
    .pipe(gulp.dest("./build/fonts/"))
    .pipe(browserSync.stream());
});

gulp.task("files:dev", function () {
  return gulp
    .src("./src/files/**/*")
    .pipe(changed("./build/files/"))
    .pipe(gulp.dest("./build/files/"))
    .pipe(browserSync.stream());
});

gulp.task("js:dev", function () {
  return gulp
    .src("./src/js/*.js")
    .pipe(changed("./build/js/"))
    .pipe(plumber(plumberNotify("JS")))
    .pipe(webpack(require("./../webpack.config.js")))
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
});

gulp.task("browsersync:dev", function () {
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  });
});

gulp.task("watch:dev", function () {
  gulp.watch("./src/css/**/*.css", gulp.parallel("css:dev"));
  gulp.watch("./src/**/*.html", gulp.parallel("html:dev"));
  gulp.watch("./src/img/**/*", gulp.parallel("images:dev"));
  gulp.watch("./src/fonts/**/*", gulp.parallel("fonts:dev"));
  gulp.watch("./src/files/**/*", gulp.parallel("files:dev"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("js:dev"));
});
