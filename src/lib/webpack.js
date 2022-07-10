const Compiler = require('./Compiler')
const NodeEnvironmentPlugin = require('./node/NodeEnvironmentPlugin')
const WebpackOptionsApply = require('./WebpackOptionsApply')

const webpack = function (options) {
  // 实例化 compiler 对象
  let compiler = new Compiler(options.context)
  compiler.options = options

  // 初始化 NodeEnvironmentPlugin(让compiler具体文件读写能力)，使用的是NODE自带的读写能力。
  new NodeEnvironmentPlugin().apply(compiler)

  // 挂载所有 plugins 插件至 compiler 对象身上
  if (options.plugins && Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      plugin.apply(compiler)
    }
  }

  // 挂载所有 webpack 内置的插件
  new WebpackOptionsApply().process(options, compiler)

  // 返回 compiler 对象
  return compiler
}

module.exports = webpack
