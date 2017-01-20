import PouchDB from 'pouchdb';
import EventEmitter from 'wolfy87-eventemitter';
import { GetProperties } from '../GetProperties.js';

import "../styles/columns.scss";
import "../styles/nav.scss";
import "../styles/helpers.scss";
import "../styles/home-page.scss";
import "../styles/utilities.scss";


//Setup Event Listener
var ee = new EventEmitter();
ee.addListener('Haus:Properties', function(data){
    console.log('properties', data);
});

GetProperties(ee);
