import gulp from 'gulp';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import uglify from 'gulp-uglify-es';
import javascriptObfuscator from 'gulp-javascript-obfuscator';
import sourcemaps from 'gulp-sourcemaps';
import * as nodeSass from 'sass';

// Configurar gulp-sass para usar o sass
const sassCompiler = sass(nodeSass);

function compress_sass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init()) // Iniciar sourcemaps
        .pipe(sassCompiler({ outputStyle: "compressed" })) // Usar o compilador de Sass
        .pipe(sourcemaps.write('.')) // Escrever sourcemaps
        .pipe(gulp.dest("./dist/styles"));
}

function compress_img() {
    return gulp.src('./src/imgs/**/*')
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            verbose: true // Para mais detalhes durante a execução
        }))
        .pipe(gulp.dest('./dist/imgs'));
}

function compress_html() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function compress_JS() {
    return gulp.src('./src/scripts/main.js')
        .pipe(sourcemaps.init()) // Iniciar sourcemaps
        .pipe(uglify.default()) // Usar o gulp-uglify-es
        .pipe(javascriptObfuscator())
        .pipe(sourcemaps.write('.')) // Escrever sourcemaps
        .pipe(gulp.dest('./dist/scripts'));
}

// Exportar a tarefa build como a tarefa padrão
const build = gulp.parallel(compress_img, compress_sass, compress_html, compress_JS);
export default build; // Definir a tarefa padrão

export const watch = function () {
    gulp.watch('./src/styles/*.scss', compress_sass);
    gulp.watch('./src/imgs/**/*', compress_img);
    gulp.watch('./src/index.html', compress_html);
    gulp.watch('./src/scripts/*.js', compress_JS);
}
