module.exports = (config) => {
    config.setTemplateFormats(['md', 'njk'])

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    }
}
