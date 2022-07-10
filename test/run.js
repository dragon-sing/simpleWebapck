let webpack = require('../src/lib/webpack')
let options = require('./webpack.config.js')

// 生成一个 compiler 编译器
let compiler = webpack(options)

// 执行这个编译器，完成打包
compiler.run((err, stats) => {
  console.log(err)
  console.log(stats)
})
