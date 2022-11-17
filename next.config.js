/** @type {import('next').NextConfig} */

const isGithubActions = !!process.env.GITHUB_ACTIONS
const repo = isGithubActions ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') : null
const assetPrefix = `/${repo}`
const basePath = `/${repo}` 

const images = {
  loader: 'imgix',
  path: 'sashadarling.imgix.net'
}

let nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

if (isGithubActions) {
  nextConfig = {...nextConfig, assetPrefix, basePath, images}
}

module.exports = nextConfig
