const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	devtool:'eval-source-map',//便于开发环境找错误位置，eval-source-map只用于开发环境
	entry:__dirname+"/app/index.js",//唯一的入口文件
	output:{
		path:__dirname+"/public",//产出文件所在的位置
		filename:"build.js"//产出文件的文件名
	},
/* 	devServer:{
		contentBase:'./public',//本地服务器所加载的页面所在的目录, 
		port:8888,
		inline:true,//实时刷新，
		hot:true
	}, */
	module:{
		rules:[
		 {
		 	test:/(\.js|\.jsx)$/,
		 	exclude:/node_modules/,
		 	use:'babel-loader'
		 },
		 {
		 	test:/\.css$/,
		 	use:['style-loader','css-loader']
		 },
		 {
		 	test:/\.json$/,
		 	use:'json-loader'//新版本webpack要求配置文件中不能省略‘-loader’
		 },
		 {
		 	test:/\.less$/,
		 	use:['style-loader','css-loader','less-loader','postcss-loader']
		 },
		 {
		 	test:/\.html$/,
		 	use:'html-loader'
		 }

		]

	},
	plugins:[new HtmlWebpackPlugin({
		    template: __dirname + "/app/index.tmpl.html"//生产index.html模版文件
		}),  
		/* 在开发环境中配置通过配置HMR 以提高开发效率*/
		  new webpack.HotModuleReplacementPlugin()]
}
/*__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。*/