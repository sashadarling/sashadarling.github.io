/** @type {import('next').NextConfig} */

const isGithubActions = !!process.env.GITHUB_ACTIONS
const repo = isGithubActions ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') : null
const assetPrefix = isGithubActions ? `/${repo}` : ''
const basePath = isGithubActions ? `/${repo}` : '' 

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath,
  iamges: {
    loader: 'imgix',
    path: 'sashadarling.imgix.net'
  }
}

module.exports = nextConfig
