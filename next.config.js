const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? process.env.ROOT = 'http://localhost:3000'
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
      env: {
        rootPath: 'https://scribe.ikartik.com',
        username: 'zeit-L0exBF8a8X3DTrRwbp4QKx9m',
        password: 'iPHoTyOzTaYeqyJa'
      }
    }
  }

  const withSass = require('@zeit/next-sass')
  // const postList = require('./posts/index')

  // const exportMap = {}
  // postList().map((post) => {
  //   exportMap[`/${post.id}`] = { page: '/post', query: { id: post.id } }
  // })

  return withSass({
    env: {
      rootPath: 'http://localhost:3000',
      username: 'zeit-L0exBF8a8X3DTrRwbp4QKx9m',
      password: 'iPHoTyOzTaYeqyJa'
    },
    // webpack: (config) => {
    //   config.module.rules.push(
    //     {
    //       test: /\.md$/,
    //       use: 'raw-loader'
    //     }
    //   )
    //   return config
    // },
    target: 'serverless'
    // exportPathMap: () => {
    //   return {
    //     '/': { page: '/' },
    //     ...exportMap
    //   }
    // }
  })
}
