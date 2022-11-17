/** @type {import('next').NextConfig} */

const isGithubActions = !!process.env.GITHUB_ACTIONS
const repo = isGithubActions ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') : null
const assetPrefix = isGithubActions ? `/${repo}` : ''
const basePath = isGithubActions ? `/${repo}` : '' 

const images = {
  loader: 'imgix',
  path: 'sashadarling.imgix.net'
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath
}

if (isGithubActions) nextConfig.images = images

module.exports = nextConfig
