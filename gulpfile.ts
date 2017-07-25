"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require("gulp-tslint");
const uglify = require("gulp-uglify");
const run = require("run-sequence");
const restEmulator = require("gulp-rest-emulator");
const tar = require("gulp-tar");
const gzip = require("gulp-gzip");
const rename = require("gulp-rename");
const argv = require('yargs').argv;
const replace = require('gulp-replace')

let deploymentDistFolder = "dist";
let isMock = false;
let env = "dev";
let version = "1.0";

/**
 * Remove build directory.
 */
gulp.task("cleanall", () => {
    return del([deploymentDistFolder + "/*.*", deploymentDistFolder + "/app", deploymentDistFolder + "/lib"], { force: true });
});

gulp.task("clean", () => {
    return del([deploymentDistFolder + "/*.*", deploymentDistFolder + "/app"], { force: true });
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task("tslint", () => {
    return gulp.src(["src/**/*.ts", "!src/app/external/**/*.ts"])
        .pipe(tslint({
            configuration: {
                rules: {
                    "adjacent-overload-signatures": true,
                    "class-name": true,
                    "member-access": [true, "check-accessor"],
                    "no-internal-module": true,
                    "no-var-requires": true,
                    "curly": true,
                    "forin": true,
                    "label-position": true,
                    "no-arg": true,
                    "no-conditional-assignment": true,
                    "no-construct": true,
                    "no-debugger": true,
                    "no-duplicate-key": true,
                    "no-duplicate-variable": true,
                    "no-eval": true,
                    "no-empty": true,
                    "no-invalid-this": [true],
                    "no-shadowed-variable": true,
                    "no-switch-case-fall-through": true,
                    "no-unreachable": true,
                    "no-unused-new": true,
                    "no-use-before-declare": true,
                    "no-var-keyword": true,
                    "switch-default": true,
                    "use-isnan": true,
                    "indent": [true, "spaces"],
                    "no-default-export": true,
                    "no-require-imports": true,
                    "no-unsafe-finally": true,
                    "no-unused-expression": true,
                    "no-consecutive-blank-lines": true,                  
                    "one-variable-per-declaration": true,
                    "quotemark": [true, "double", "avoid-escape"],
                    "semicolon": [true, "always"],
                    "whitespace": [true, "check-branch", "check-operator", "check-decl", "check-module", "check-separator", "check-type"],
                    "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore"],
                    "member-ordering": [true, { "order": "fields-first" }],
                    "no-reference": true,
                    "radix": true,
                    "eofline": true,
                    "max-line-length": [true, 300],
                    "no-mergeable-namespace": true,
                    "trailing-comma": [true, { "multiline": "never", "singleline": "never" }],                  
                    "arrow-parens": true,
                    "comment-format": [true, "check-space"],
                    "interface-name": [true, "always-prefix"],
                    "jsdoc-format": true,
                    "new-parens": true,
                    "no-angle-bracket-type-assertion": true,
                    "one-line": [true, "check-catch", "check-finally", "check-else", "check-open-brace", "check-whitespace"],
                    "only-arrow-functions": true
                }
            }
        }))
        .pipe(tslint.report("prose"));
});

/**
 * Compile TypeScript sources and create sourcemaps in dist directory.
 */
gulp.task("compile", () => {
// gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(deploymentDistFolder));
});

/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest(deploymentDistFolder));
});

/**
 * Copy all required libraries into dist directory.
 */
gulp.task("lib", ["lib-js", "lib-css"], () => {
});

gulp.task("lib-js", ["lib-compressJs"], () => {
    return gulp.src([
        "@angular/common/bundles/common.umd.min.js",
        "@angular/compiler/bundles/compiler.umd.min.js",
        "@angular/core/bundles/core.umd.min.js",
        "@angular/forms/bundles/forms.umd.min.js",
        "@angular/http/bundles/http.umd.min.js",
        "@angular/platform-browser/bundles/platform-browser.umd.min.js",
        "@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js",
        "@angular/router/bundles/router.umd.min.js",
        "@angular/router-deprecated/bundles/router-deprecated.umd.min.js",
        "@angular/upgrade/bundles/upgrade.umd.min.js",
        "rxjs/**/*",
        "core-js/client/shim.min.js",
        "zone.js/dist/zone.js",
        "reflect-metadata/Reflect.js",
        "systemjs/dist/system.src.js",
        "jquery/dist/jquery.min.js",
        "bootstrap/dist/js/bootstrap.min.js",
        "bootstrap-notify/bootstrap-notify.min.js"
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest(deploymentDistFolder + "/lib"));
});

gulp.task("lib-compressJs", () => {
    return gulp.src([
        "typescript/lib/typescript.js"
    ], { cwd: "node_modules/**" })
        .pipe(uglify())
        .pipe(gulp.dest(deploymentDistFolder + "/lib"));
});


gulp.task("lib-css", () => {
    return gulp.src([
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap/dist/css/bootstrap-theme.min.css",
        "bootstrap/dist/fonts/*"
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest(deploymentDistFolder + "/lib"));
});


gulp.task("load-modules", () => {
    return gulp.src([
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest(deploymentDistFolder + "/node_modules"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task("watch", () => {
    gulp.watch(["src/**/*.ts", "src/systemjs.config.js"]).on("change", function (e) {
        console.log("TypeScript file " + e.path + " has been changed. Compiling.");
        let tsResult = gulp.src(e.path, { base: 'src/' })
            .pipe(sourcemaps.init())
            .pipe(tsc(tsProject));
        return tsResult.js
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(deploymentDistFolder));
    });

    gulp.watch(["src/**/*.html", "src/**/*.css", "src/**/*.js"]).on("change", function (e) {
        console.log("Resource file " + e.path + " has been changed. Updating.");
        gulp.src(e.path, { base: 'src/' })
            .pipe(gulp.dest(deploymentDistFolder));
    });

    // gulp.watch("mocks/**/*.js", ["mock"]).on("change", function (e) {
    //     console.log("Mock file " + e.path + " has been changed. Updating.");
    // });
});

/**
 * Build the project.
 */
gulp.task("buildall", () => {
    console.log("Building the project ...");
    return run(["compile", "resources", "lib"]);
});

gulp.task("build", () => {
    console.log("Building the project...");
    return run(["compile", "resources"]);
});
