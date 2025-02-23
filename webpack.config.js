const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

    .addEntry('app', './assets/bundles/morgenbordcore/app.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    .enableVueLoader()

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/bundles/morgenbordcore/controllers.json')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    .enablePostCssLoader()
    .enableVueLoader(() => {}, { runtimeCompilerBuild: false, version: 3 })
    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .copyFiles({
        from: './assets/bundles/morgenbordcore/images',
        // optional target path, relative to the output dir
        to: 'images/[path][name].[ext]',
        // if versioning is enabled, add the file hash too
        //to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
    })

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.38';
    })
;

module.exports = Encore.getWebpackConfig();
