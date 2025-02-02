const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

class UserScriptMetadataPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('UserScriptMetadataPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'UserScriptMetadataPlugin',
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE
        },
        (assets) => {
          const content = fs.readFileSync('./script.user.js', 'utf8');
          const metadataMatch = content.match(/(\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\n)/);
          const metadata = metadataMatch ? metadataMatch[1] : '';

          Object.keys(assets).forEach(filename => {
            if (filename.endsWith('.user.js')) {
              let originalSource = assets[filename].source();
              // Remove any existing metadata block if present
              originalSource = originalSource.replace(/(\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\n)/, '');
              const newSource = metadata + originalSource;
              assets[filename] = new webpack.sources.RawSource(newSource);
            }
          });
        }
      );
    });
  }
}

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  
  return {
    entry: './script.user.js',
    output: {
      filename: 'bundle.user.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: false
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: '> 0.25%, not dead',
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: 3
                }]
              ],
              plugins: [
                '@babel/plugin-transform-runtime'
              ]
            }
          }
        }
      ]
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: isDevelopment ? [] : [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
              drop_console: false,
              keep_classnames: true,
              keep_fnames: true
            },
            mangle: {
              safari10: true,
              keep_classnames: true,
              keep_fnames: true
            },
            format: {
              comments: false
            }
          },
          extractComments: false,
          parallel: true,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true
                }
              }
            ]
          }
        })
      ],
      moduleIds: isDevelopment ? 'named' : 'deterministic',
      runtimeChunk: false,
      splitChunks: false,
      concatenateModules: !isDevelopment
    },
    plugins: [
      new UserScriptMetadataPlugin()
    ],
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules']
    },
    performance: {
      hints: false
    },
    devtool: isDevelopment ? 'cheap-module-source-map' : false,
    mode: isDevelopment ? 'development' : 'production'
  };
}; 
