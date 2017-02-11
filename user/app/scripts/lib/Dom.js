"use strict";
/**
 * Generate DOM from html string like described here:
 * http://stackoverflow.com/a/494348/1581725
 *
 * @export
 * @param {string} html html string
 * @param {Document} [context] Document Context - usefull if you want to run it on nodeJS
 * @returns {DocumentFragment} Generated DocumentFragment
 */
function render(html, context) {
    context = context ? context : document;
    var fragment = context.createDocumentFragment();
    var element = context.createElement('div');
    var childNodes = element.childNodes;
    element.innerHTML = html;
    for (var i = 0, max = childNodes.length; i < max; i++) {
        fragment.appendChild(childNodes[i]);
    }
    return fragment;
}
exports.render = render;
