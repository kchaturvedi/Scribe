const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {}
  }

  const withSass = require('@zeit/next-sass')
  const postList = require('./posts/index')

  const exportMap = {}
  postList().map((post) => {
    exportMap[`/${post.id}`] = { page: '/post', query: { id: post.id } }
  })

  return withSass({
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
      return config
    },
    target: 'serverless',
    exportPathMap: () => {
      return {
        '/': { page: '/' },
        ...exportMap
      }
    }
  })
}
