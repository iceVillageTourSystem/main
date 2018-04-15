const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // context: path.resolve(__dirname, 'views'),
  entry: "./views/jsx/app.jsx", // string | object | array

  output: {
    path: path.resolve(__dirname, "dist"), // string

    // 打包后的文件名
    filename: "bundle.js", // string

    // publicPath: "/assets/", // 会将: src="picture.jpg" 重写 => src="/assets/picture.jpg"
    // 常配合 css/style/html-loader 使用

    library: "MyLibrary", // string,

    libraryTarget: "umd", // 决定模块以何种规范输出 var | assign | this | window | global | commonjs | commonjs2 | amd | umd
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // 需要进行babel-loader
        include: [
          path.resolve(__dirname, "views/")
          
        ],
        // 不需要进行babel-loader
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react","es2015","stage-0"],
          plugins: [
            ['import', {
              libraryName: 'antd',
              style: 'css'
            }]
          ]
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: "css-loader?modules&localIdentName=[local]-[hash:base64:5]"},
          {loader: "less-loader" , options: {
            javascriptEnabled: true,
            inlineJavaScript: true
          }} // 允许less 内写js脚本
        ]
      },
    //   {
    //     test: /\.html$/,

    //     use: [
    //       // apply multiple loaders and options
    //       "htmllint-loader",
    //       {
    //         loader: "html-loader",
    //         options: {
    //           /* ... */
    //         }
    //       }
    //     ]
    //   },

      { oneOf: [ /* rules */ ] },
      // only use one of these nested rules

      { resource: { and: [ /* conditions */ ] } },
      // matches only if all conditions are matched

      { resource: { or: [ /* conditions */ ] } },
      { resource: [ /* conditions */ ] },
      // matches if any condition is matched (default for arrays)

    //   { resource: { not: /* condition */ } }
      // matches if the condition is not matched
    ],

    /* Advanced module configuration (click to show) */
  },

  resolve: {
    modules: [
      "node_modules"
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used

    alias: {
      // a list of module name aliases

    //   "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

    //   "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"

    //   "module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // modules aliases are imported relative to the current context
    },
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  // 处理外部资源包裹使用：将外部变量或者模块加载进来

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed

//   devServer: {
//     proxy: { // proxy URLs to backend development server
//       '/api': 'http://localhost:3000'
//     },
//     contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
//     compress: true, // enable gzip compression
//     historyApiFallback: true, // true for index.html upon 404, object for multiple paths
//     hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
//     https: false, // true for self-signed, object for cert authority
//     noInfo: true, // only errors & warns on hot reload
//     // ...
//   },

  plugins: [],

  resolveLoader: { /* same as resolve */ },
  // separate resolve options for loaders

  parallelism: 1, // number
  // limit the number of parallel processed modules

  profile: true, // boolean
  // capture timing information

  bail: true, //boolean
  // fail out on the first error instead of tolerating it.

  cache: false, // boolean
  // disable/enable caching

  watch: true, // boolean
  // enables watching

  watchOptions: {
    aggregateTimeout: 1000, // in ms
    // aggregates multiple changes to a single rebuild

    poll: true,
    poll: 500, // intervall in ms
    // enables polling mode for watching
    // must be used on filesystems that doesn't notify on change
    // i. e. nfs shares
  },

  node: {
    // Polyfills and mocks to run Node.js-
    // environment code in non-Node environments.

    console: false, // boolean | "mock"
    global: true, // boolean | "mock"
    process: true, // boolean
    __filename: "mock", // boolean | "mock"
    __dirname: "mock", // boolean | "mock"
    Buffer: true, // boolean | "mock"
    setImmediate: true // boolean | "mock" | "empty"
  },

  recordsPath: path.resolve(__dirname, "build/records.json"),
  recordsInputPath: path.resolve(__dirname, "build/records.json"),
  recordsOutputPath: path.resolve(__dirname, "build/records.json"),
  // TODO

};