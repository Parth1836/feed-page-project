const path = require("path");
const output = path.join(__dirname, "public", "javascripts");
const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        targets: {
          browsers: ["last 2 versions", "ie >= 11"],
        },
      },
    ],

    "@babel/react",
  ],
};

const cssConfig = [
  { loader: "style-loader" },
  { loader: "css-loader", options: { importLoaders: 1 } },
  { loader: "postcss-loader" },
];

const sassConfig = [
  { loader: "style-loader" },
  { loader: "css-loader", options: { importLoaders: 1 } },
  { loader: "postcss-loader" },
  { loader: "sass-loader" },
];

module.exports = {
  entry: { bundle: ["./src/frontend/index.jsx"] },
  output: { filename: "[name].js", path: output },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".scss", "png", "jpeg"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssConfig,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: sassConfig,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: babelConfig,
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      },
    ],
  },
};
