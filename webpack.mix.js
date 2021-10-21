const mix = require('laravel-mix')
require('laravel-mix-sri')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/css/ie9.scss', 'public/css/ie9.css').generateIntegrityHash();

mix.scripts([
    'node_modules/jquery/dist/jquery.js',
    'bower_components/handlebars/handlebars.js',
], 'public/js/app.js').generateIntegrityHash();