import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ajax from '../../utils/ajaxone';

var it;

var fetchh = function(url) {
    ajax(url, function(response) {
        it.next(response);
    });
};

function *main() {
    var result1 = yield fetchh('/api/items');
    console.log(result1);
    var result2 = yield fetchh('/api/items');
    console.log(result2);
    var result3 = yield fetchh('/api/items');
    console.log(result3);
}

export default Ember.Component.extend({
    layout: hbs`
      <button onclick={{action "go"}}>click</button>
    `,
    actions: {
        go: function() {
            it = main();
            it.next();
        }
    }
});
