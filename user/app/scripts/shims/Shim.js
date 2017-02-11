"use strict";
/**
 * Loads variable from window according to
 * the name parameter.
 *
 * @export
 * @param {string} name
 * @returns {*} window[name]
 */
function shim(name) {
    var global = window;
    return global[name];
}
exports.shim = shim;
