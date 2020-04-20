// Babel provider for AVA https://github.com/avajs/babel

export default {
  'babel': {
    // By default, only test files are compiled. You can compile additional files as tests by providing glob patterns:
    compileAsTests: ['test/**', 'src/**'],
    extensions: ['js'],
    testOptions: {
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: '6'
            }
          }
        ]
      ]
    }
  }
};
