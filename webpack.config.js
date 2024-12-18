const path = require('path');

module.exports = {
    entry: './staticfiles/js/index.js', // Adjust this to the correct path for your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/js'),
    },
    mode: 'development', // Set to 'production' for production builds
};
