import PouchDB from 'pouchdb';
import EventEmitter from 'wolfy87-eventemitter';
import GetProperties from '../GetProperties.js';

import "../styles/columns.scss";
import "../styles/nav.scss";
import "../styles/helpers.scss";
import "../styles/home-page.scss";
import "../styles/utilities.scss";

console.log('EventEmitter', EventEmitter);

var propertiesDB = new PouchDB('properties');
let properties = GetProperties();
console.log('propertiesDB', propertiesDB, properties);
