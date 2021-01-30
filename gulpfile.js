/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");

gulp.task("svgOptimize", require("./gulp/svgOptimize")(gulp));
gulp.task("svgVueInline", require("./gulp/svgVueInline")(gulp));

// In gulp 4 you have to declare your tasks and dependencies.
// Remember you can work with tasks in series and parallel.
gulp.task("svg", gulp.series("svgOptimize", "svgVueInline"));
