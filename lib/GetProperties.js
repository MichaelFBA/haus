import PouchDB from 'pouchdb';

export function GetProperties(ee) {

    let db = new PouchDB('properties');
    let docs = [];

    function binarySearch(arr, docId) {
        let low = 0,
            high = arr.length,
            mid;
        while (low < high) {
            mid = (low + high) >>> 1; // faster version of Math.floor((low + high) / 2)
            arr[mid]._id < docId ? low = mid + 1 : high = mid
        }
        return low;
    }

    function onDeleted(id) {
        let index = binarySearch(docs, id);
        let doc = docs[index];
        if (doc && doc._id === id) {
            docs.splice(index, 1);
        }
    }

    function onUpdatedOrInserted(newDoc) {
        let index = binarySearch(docs, newDoc._id);
        let doc = docs[index];
        if (doc && doc._id === newDoc._id) { // update
            docs[index] = newDoc;
        } else { // insert
            docs.splice(index, 0, newDoc);
        }
    }

    function fetchInitialDocs() {
        return db.allDocs({
            include_docs: true
        }).then(function(res) {
            docs = res.rows.map(function(row) {
                return row.doc;
            });
            renderDocs();
        });
    }

    function reactToChanges() {
        db.changes({
            live: true,
            since: 'now',
            include_docs: true
        }).on('change', function(change) {
            if (change.deleted) {
                // change.id holds the deleted id
                onDeleted(change.id);
            } else { // updated/inserted
                // change.doc holds the new doc
                onUpdatedOrInserted(change.doc);
            }
            renderDocs();
        }).on('error', console.log.bind(console));
    }

    function renderDocs() {
        ee.emitEvent('Haus:Properties',[docs]);
    }

    fetchInitialDocs()
        .then(reactToChanges)
        .catch(console.log.bind(console));

    // db.put({
    //   _id: 'dave@gmail.com',
    //   name: 'David',
    //   age: 69
    // });
}
