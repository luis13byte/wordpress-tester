const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
      on('task', {
        removeFile (filePath) {
          console.log('Cypress task: Removing file..')
          fs.unlinkSync(filePath)
          return null
        }
      })
    }
  }
})
