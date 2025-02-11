```javascript
// Solution: Check for empty array before querying
const queryArray = [ /* ... your array ... */ ];

if (queryArray.length === 0) {
  db.collection.find({}); // Return all documents if the array is empty
} else {
  db.collection.find({ field: { $in: queryArray } });
}
```