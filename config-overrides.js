const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/")
    };

    return config;
};
