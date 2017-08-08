module.exports={
	// devtool:'eval-source-map',//便于开发环境找错误位置，eval-source-map只用于开发环境
	entry:__dirname+"/app/index.js",//唯一的入口文件
	output:{
		path:__dirname+"/public",//产出文件所在的位置
		filename:"build.js"//产出文件的文件名
	},
	devServer:{
		contentBase:'./public',//本地服务器所加载的页面所在的目录, 
		port:8888,
		inline:true//实时刷新
	},
	module:{
		rules:[
		 {
		 	test:/\.js$/,
		 	exclude:/node_modules/,
		 	loader:'babel-loader'
		 },
		 {
		 	test:/\.css$/,
		 	loader:'style!css'
		 },
		 {
		 	test:/\.json$/,
		 	loader:'json-loader'
		 }

		]

	}
}
/*__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。*/