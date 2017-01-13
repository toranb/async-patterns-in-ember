import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ajax from '../../utils/ajaxone';

export default Ember.Component.extend({
    layout: hbs`
      <button onclick={{action "go"}}>click</button>
    `,
    actions: {
        go: function() {
            ajax('/api/items', function(result1) {
                console.log(result1);
                ajax('/api/items', function(result2) {
                    console.log(result2);
                    ajax('/api/items', function(result3) {
                        console.log(result3);
                    });
                });
            });
        }
    }
});
