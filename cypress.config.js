const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress',
        supportFile: false,
    },
    env: {
        baseUrl: 'https://saucedemo.com/v1/',
    }
})