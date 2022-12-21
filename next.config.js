const ANALYZE = process.env.ANALYZE === 'true';

const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE,
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
    ],
  },
  webpack(config) {
    if (ANALYZE) {
      config.plugins.push(new DuplicatePackageCheckerPlugin());
    }

    config.resolve.alias['@prismicio/helper'] = path.resolve(
      __dirname,
      'node_modules',
      '@prismicio/helper',
    );

    config.resolve.alias['@prismicio/richtext'] = path.resolve(
      __dirname,
      'node_modules',
      '@prismicio/richtext',
    );

    config.resolve.alias.tslib = path.resolve(
      __dirname,
      'node_modules',
      'tslib',
    );

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: { overrides: { removeViewBox: false } },
                },
              ],
            },
            prettier: false,
            svgo: true,
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig;
