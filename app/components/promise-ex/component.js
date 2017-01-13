import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ajax from '../../utils/ajaxtwo';

export default Ember.Component.extend({
    layout: hbs`
      <button onclick={{action "go"}}>click</button>
    `,
    actions: {
        go: function() {
            ajax('/api/items')
            .then((result1) => {
                console.log(result1);
                return ajax('/api/items');
            })
            .then((result2) => {
                console.log(result2);
                return ajax('/api/items');
            })
            .then((result3) => {
                console.log(result3);
            });
        }
    }
});
