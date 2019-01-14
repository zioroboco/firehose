import * as webpack from "webpack"

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/typescript", "@babel/react"]
        }
      }
    ]
  },
  resolve: { extensions: [".js", ".ts", ".tsx"] }
}

export default config
