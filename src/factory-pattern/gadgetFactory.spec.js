const {createGadget} = require('./gadgetFactory')

describe('the gadgetFactory', () => {
    it('should create correct ', () => {
        const attributes = {
            ram: 8,
            ssd: 256,
            name: 'Bab\'s MacBook Pro'
        }
        const gadget = createGadget('Laptop', attributes)

        expect(gadget.ram).toBe(attributes.ram)
        expect(gadget.ssd).toBe(attributes.ssd)
        expect(gadget.name).toBe(attributes.name)
    })
})
