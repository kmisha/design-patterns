module.exports = function Tablet({ ram = 0, hdd = 0, name = '', network = '' }) {
    this.ram = ram
    this.hdd = hdd
    this.name = name
    this.network = network
}
