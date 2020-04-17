module.exports = {
    observers_: new Set(),
    notify: function (payload) {
        this.observers_.forEach(callback => {
            try {
                callback(payload)
            } catch {
                //
            }
        })
    },
    on: function (callback) {
        if (typeof callback !== 'function') throw 'Callback should be a function'

        this.observers_.add(callback)

        return () => this.observers_.delete(callback)
    }
}
