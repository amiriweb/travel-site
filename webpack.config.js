var path = require('path');


module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts" ),
    filename: "[name].js"
  },
  module: {
   rules: [{
     test: /\.js$/, // include .js files
     exclude: /node_modules/, // exclude any and all files in the node_modules folder
     use: [{
       loader: "babel-loader",
       query: {
         presets: ['es2015']
       }
     }]
   }]
 }
};
