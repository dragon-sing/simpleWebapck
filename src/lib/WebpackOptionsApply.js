const EntryOptionPlugin = require('./EntryOptionPlugin')

class WebpackOptionsApply {
  process(options, compiler) {
    // 挂在entryOptionTap
    new EntryOptionPlugin().apply(compiler)
    // 执行上面注册的tap
    compiler.hooks.entryOption.call(options.context, options.entry)
  }
}

module.exports = WebpackOptionsApply
