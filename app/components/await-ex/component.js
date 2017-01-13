import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ajax from '../../utils/ajaxone';

var fetchh = function(url) {
    return new Promise(function(resolve,reject) {
        ajax(url, resolve);
    }).then(function(response) {
        return response;
    });
};

async function main() {
    var result1 = await fetchh('/api/items');
    console.log(result1);
    var result2 = await fetchh('/api/items');
    console.log(result2);
    var result3 = await fetchh('/api/items');
    console.log(result3);
}

export default Ember.Component.extend({
    layout: hbs`
      <button onclick={{action "go"}}>click</button>
    `,
    actions: {
        go: function() {
            main();
        }
    }
});
