const clone = require('lodash/cloneDeep')
// IIFE (immediately invoked function expression)
const Logger = (function(date) {
    const logger = []
    const log = msg => {
        const result = `[${date.now()}]: ${msg}`
        logger.push(result)
        return result
    }

    const length = () => logger.length

    return {
        log,
        length
    }
})(Date)

describe('The Logger module', () => {
    let logger
    beforeEach(() => {
        logger = clone(Logger)
    })

    it('should export log funtion', () => {
        const {log} = logger

        expect(log('test')).toMatch('test')
    })
    it('should correct count number of the log function executions', () => {
        const {log, length} = logger

        expect(length()).toBe(0)
        log('test1')
        expect(length()).toBe(1)
        log('test2')
        expect(length()).toBe(2)
    })
})
