module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: '/node_modules/'
            }
        ]
    }
}