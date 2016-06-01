import { resolve } from 'path';
import { fromJS } from 'immutable';
import { path as rootPath } from 'app-root-path';

export default fromJS({

  entry: {
    examples: './examples/index',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
  },

  node: {
    process: true,
  },

});
