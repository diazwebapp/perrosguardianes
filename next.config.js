const withPWA = require('next-pwa')

module.exports = withPWA({
  images: {
    domains: ['localhost','perrosguardianes.ml'],
  },
  env:{
    API:process.env.API || 'http://localhost:8080',
    DOMAIN:process.env.DOMAIN || 'http://localhost:3000',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
})