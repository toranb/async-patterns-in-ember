import Ember from 'ember';

export default function ajax(url, callback) {
    Ember.$.ajax({
        url : url,
        type: 'GET',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success : callback
    });
}
