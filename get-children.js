data = [{
  "id": 1,
  "parent": 0,
  "name": "Parent"
}, {
  "id": 2,
  "parent": 1,
  "name": "Child 1"
}, {
  "id": 3,
  "parent": 2,
  "name": "Grand Child 1"
}, {
  "id": 4,
  "parent": 2,
  "name": "Grand Child 2"
}, {
  "id": 5,
  "parent": 1,
  "name": "Child 2"
}]

function findAllChildren (id, results) {
	for (d in data) {
		if (data[d].parent == id) {
			results.push(data[d])
			findAllChildren(data[d].id, results)
		}
	}
}

var results = []
findAllChildren(2, results)

console.log(results)