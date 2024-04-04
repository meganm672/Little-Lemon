/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {

    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // handles images
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|svg)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },


}