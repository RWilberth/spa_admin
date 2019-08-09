const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.scripts([
        'node_modules/jquery-validation/dist/jquery.validate.js',
        'node_modules/jquery-validation/dist/addtional-methods.js'
    ],  'public/js/jquery-validation.js');
 mix.scripts([
        'node_modules/popper.js/dist/popper.js'
    ],  'public/js/popper.js');
 mix.scripts([
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ],  'public/js/bootstrap.js');
 mix.scripts([
        'node_modules/datatables.net/js/jquery.dataTables.js',
        'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js'
    ],  'public/js/jquery.dataTables.js')
    .styles([
        //'node_modules/datatables.net-dt/css/jquery.dataTables.css',
        'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css'
    ],
    'public/css/jquery.dataTables.css');
mix.scripts([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery/dist/jquery-loading.js'
    ],  'public/js/libraries.js')
	.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/@fortawesome/fontawesome-free/css/all.css'
    ],  'public/css/libraries.css');

//mix.scripts(['resources/js/plugins/combodate/combodate.js'], 'public/js/combodate.js');
mix.scripts([
    'node_modules/moment/moment.js',
    'node_modules/moment/locale/es.js'
    ], 'public/js/moment.js');
mix.sass('resources/sass/app.scss', 'public/css');