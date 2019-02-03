const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  }
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
  //     '/p/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
  //     '/p/deploy-nextjs': { page: '/post', query: { title: 'Deploy apps with Zeit' } },
  //     '/p/exporting-pages': { page: '/post', query: { title: 'Learn to Export HTML Pages' } }
  //   }
  // }
})
