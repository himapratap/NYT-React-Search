var path = require('path');

// build_dir represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'public');
// app_dir holds the directory path of the react application's codebase
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /.jsx?/,
                exclude: /(node_modules|bower_components)/,
                include: APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['react', ['es2015', { "modules": false  }]]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        contentBase: "public",
        hot: true
    }
};

module.exports = config;