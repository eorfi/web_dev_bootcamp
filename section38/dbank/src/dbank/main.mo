import Debug "mo:base/Debug"; 
import Time "mo:base/Time";
import Float "mo:base/Float";


actor Dbank {
  stable var currentValue: Float = 300;
  // stable tyrns as variable into a persisted variable
  // felxbul is the revarse of the stable
  
  // currentValue := 100; 
  // := assignment in place u
  // let id = 2626435427;   
  // Debug.print("hello")
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id))

  // this is without input if you want an input
  // nat is nutural number
  // public func topUp() {

  stable var startTime = Time.now();
  Debug.print(debug_show(startTime));
// this shows how many nanseconds have elapsed since 1970 1st of january
// the output is [Canister rrkah-fqaaa-aaaaa-aaaaq-cai] +1_733_244_515_251_732_818

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };
    // eorfi@DESKTOP-VGJ352E:~/ic-projects/dbank$ dfx canister call dbank topUp
    // Error: The Replica returned an error: code 3, message: "Canister rrkah-fqaaa-aaaaa-aaaaq-cai has no update method 'topUp'"
    // if you get this error because the function was privet so make it bublic

    // to can run the code 
    // dfx canister call dbank topUp '(10)'

  

  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Ampunt too large, currentValue less then zero.")
    }
// id do this if condetion to check the amount and if it is larger the print this message
  };
  public query func checkBalance(): async Float{ 
    return currentValue;
    // this is basically just a read only operation 
    // this is a query function and the one in the top is update function, the qyery function is faster than update function 
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS =  currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    // s -> seconds / NS -> nanoseconds
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
    // that mean every time that we compound, we're going to reaset the startTime
  };

}
// the actor is a class

// to start a the code press 
// dfx start
// then add anther terminal 
// dfx deploy
// and if you wnat to call the funtion press
// dfx canister call dbank topUp
// or with inputs like this dfx canister call dbank withdraw '(2)'
// dfx canister call dbank topUp '(10)'
// dbank is the folder name and topUp is the function name

// if you need to call the function with press a butten not call it every time in bath
// then follow this stepes

// dfx canister id__Candid_UI
// this is my id rkp4c-7iaaa-aaaaa-aaaca-cai
// rkp4c-7iaaa-aaaaa-aaaca-cai


// then in the pach
// type -> dfx canister id dbank
// and thi the the output id -> rrkah-fqaaa-aaaaa-aaaaq-cai

// http://127.0.0.1:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai
// rrkah-fqaaa-aaaaa-aaaaq-cai
// rrkah-fqaaa-aaaaa-aaaaq-cai


// after we changes the frontint the 
// npm install
// dfx start 
// dfx deploy
// npm start 
// then go to local host 8080 

// if i got an error when i press npm start i must chamges the webpack.config.js to this code

// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

// function initCanisterEnv() {
//   let localCanisters, prodCanisters;
//   try {
//     localCanisters = require(path.resolve(".dfx", "local", "canister_ids.json"));
//   } catch (error) {
//     console.log("No local canister_ids.json found. Continuing production");
//   }
//   try {
//     prodCanisters = require(path.resolve("canister_ids.json"));
//   } catch (error) {
//     console.log("No production canister_ids.json found. Continuing with local");
//   }

//   const network =
//     process.env.DFX_NETWORK ||
//     (process.env.NODE_ENV === "production" ? "ic" : "local");

//   const canisterConfig = network === "local" ? localCanisters : prodCanisters;

//   return Object.entries(canisterConfig).reduce((prev, current) => {
//     const [canisterName, canisterDetails] = current;
//     prev[canisterName.toUpperCase() + "_CANISTER_ID"] =
//       canisterDetails[network];
//     return prev;
//   }, {});
// }
// const canisterEnvVariables = initCanisterEnv();

// const isDevelopment = process.env.NODE_ENV !== "production";

// const frontendDirectory = "dbank_assets";

// const asset_entry = path.join("src", frontendDirectory, "src", "index.html");

// module.exports = {
//   target: "web",
//   mode: isDevelopment ? "development" : "production",
//   entry: {
//     index: path.join(__dirname, asset_entry).replace(/\.html$/, ".js"),
//   },
//   devtool: isDevelopment ? "source-map" : false,
//   optimization: {
//     minimize: !isDevelopment,
//     minimizer: [new TerserPlugin()],
//   },
//   resolve: {
//     extensions: [".js", ".ts", ".jsx", ".tsx"],
//     fallback: {
//       assert: require.resolve("assert/"),
//       buffer: require.resolve("buffer/"),
//       events: require.resolve("events/"),
//       stream: require.resolve("stream-browserify/"),
//       util: require.resolve("util/"),
//     },
//   },
//   output: {
//     filename: "index.js",
//     path: path.join(__dirname, "dist", frontendDirectory),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, asset_entry),
//       cache: false,
//     }),
//     new CopyPlugin({
//       patterns: [
//         {
//           from: path.join(__dirname, "src", frontendDirectory, "assets"),
//           to: path.join(__dirname, "dist", frontendDirectory),
//         },
//       ],
//     }),
//     new webpack.EnvironmentPlugin({
//       NODE_ENV: "development",
//       ...canisterEnvVariables,
//     }),
//     new webpack.ProvidePlugin({
//       Buffer: [require.resolve("buffer/"), "Buffer"],
//       process: require.resolve("process/browser"),
//     }),
//   ],
//   devServer: {
//     proxy: [
//       {
//         context: ["/api"],
//         target: "http://localhost:8000",
//         changeOrigin: true,
//         pathRewrite: { "^/api": "/api" },
//       },
//     ],
//     hot: true,
//     watchFiles: [path.resolve(__dirname, "src", frontendDirectory)],
//     liveReload: true,
//   },
// };
