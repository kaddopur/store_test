'use strict';
var createStore = require('fluxible/addons').createStore;

var FooStore = createStore({
    storeName: 'FooStore',
    initialize: function () {
        this.bar = 'bar';
    },
    getBar: function () {
        return this.bar;
    },
    dehydrate: function () {
        return {
            bar: this.bar
        };
    },
    rehydrate: function (state) {
        this.bar = state.bar;
    }
});

module.exports = FooStore;
