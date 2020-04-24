const subject = require('./observer')
const clone = require('lodash/cloneDeep')

describe('Subject', () => {
    let sub;
    beforeEach(() => {
        // clone subject
        sub = clone(subject)
    })

    it('should create correct subscriptions', () => {
        const amountOfSubscriptions = Math.floor(Math.random() * 1000)
        let result = []
        for (let i = 0; i < amountOfSubscriptions; i++) {
            const fn = value => result = [...result, value]
            sub.on(fn)
        }

        sub.notify(5)

        expect(result.length).toBe(amountOfSubscriptions)
        expect(result.some(value => value !== 5)).toBeFalse()
    })

    it('should correct unsubscribe from subscription', () => {
        let result = []
        const first = value => result = [...result, value]
        const second = jasmine.createSpy('second')
        sub.on(first)
        const subscription = sub.on(second)

        subscription()
        sub.notify(6)

        expect(result).toEqual([6])
        expect(second).not.toHaveBeenCalled()
    })
})
