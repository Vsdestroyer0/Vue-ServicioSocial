const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  title: 'Documentación',

  components: 'src/**/*.vue',

  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/node_modules/**'
  ],

  sections: [
    {
      name: 'Introducción',
      content: 'document/index.md'
    },
    {
      name: 'Componentes Globales',
      components: 'src/components/**/*.vue'
    },
    {
      name: 'Vistas',
      components: 'src/view/**/*.vue'
    },

  ],

  defaultExample: true,

  enhancePreviewApp: path.resolve(__dirname, 'styleguide/preview.js'),

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },

  getExampleFilename(componentPath) {
    const componentName = path.basename(componentPath, '.vue')

    return path.resolve(
      __dirname,
      'document',
      `${componentName}.md`
    )
  }
}