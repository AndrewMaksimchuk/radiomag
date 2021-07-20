const { src, dest, series, watch } = require("gulp"),
  fileinclude = require("gulp-file-include"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  clean = require("gulp-clean"),
  autoprefixer = require("gulp-autoprefixer"),
  csso = require("gulp-csso");
sass.compiler = require("node-sass");
const browserSync = require("browser-sync").create();

function html() {
  return src("./src/index.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dist"));
}

function scss() {
  return src("./src/style.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(
      rename({
        basename: "style",
        extname: ".min.css",
      })
    )
    .pipe(dest("dist"));
}

function copy(from, to) {
  return src(from).pipe(dest(to));
}

function copyImgs() {
  copy("./src/images/**/*.*", "./dist/images/");
}

function cleanFolder(folder) {
  return src(folder, { read: false }).pipe(clean());
}

function cleanFolderDist() {
  return cleanFolder('./dist');
}

exports.default = function () {
  html();
  scss();
  browserSync.init({
    server: "./dist",
  });
  watch("./src/**/*.html", html).on("change", browserSync.reload);
  watch("./src/**/*.scss", scss).on("change", browserSync.reload);
};

exports.scss = scss;
exports.html = html;
exports.copy = copyImgs;
exports.clear = cleanFolderDist;
