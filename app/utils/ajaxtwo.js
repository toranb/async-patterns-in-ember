import Ember from 'ember';

export default function ajax(url) {
    return Ember.$.ajax({
        url : url,
        type: 'GET',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json'
    });
}
