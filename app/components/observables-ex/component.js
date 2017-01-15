import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import Rx from 'npm:rxjs/Rx';
import fetch from 'fetch';

const { Observable } = Rx;

var ajax = function(url) {
    const request = fetch(url).then(response => response.json());
    return Observable.from(request);
};

export default Ember.Component.extend({
    layout: hbs`
      <button onclick={{action "go"}}>click</button>
    `,
    actions: {
        go: function() {
            ajax('/api/items')
                .flatMap((result1) => {
                    console.log(result1);
                    return ajax('/api/items');
                }).flatMap((result2) => {
                    console.log(result2);
                    return ajax('/api/items');
                }).flatMap((result3) => {
                    console.log(result3);
                    return ajax('/api/items');
                }).subscribe();
        }
    }
});
