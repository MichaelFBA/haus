import PouchDB from 'pouchdb';
import EventEmitter from 'wolfy87-eventemitter';
import { GetProperties } from '../GetProperties.js';

import "../styles/grid.scss";
import "../styles/utilities.scss";


//Setup Event Listener for properties
const ee = new EventEmitter();
const repeaterEl = document.getElementById('repeat-properties');

//Event Listeners
ee.addListener('Haus:Properties', function(data){
    repeaterEl.setAttribute('repeat', JSON.stringify(data));
});

repeaterEl.addEventListener('repeatTemplateEvent', function(e){
    // var duplicatedElement = e.detail.element;
    // var data = e.detail.data;
    //
    // // Do you modifications
    // duplicatedElement.querySelector('h1').innerHTML = data.name;
    // duplicatedElement.querySelector('img').setAttribute('src', data.profilePicture);
    console.log('repeater', e)
})

//Query DB for properties
GetProperties(ee);
