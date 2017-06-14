function DisjointSet() {
	this.PARENT = {};
	this.universe = ['a', 'b', 'c', 'd', 'e'];
	for (var u of this.universe) {
		this.PARENT[u] = u;
	}

	this.PARENT['d'] = 'b';
	
	this.union = function(a, b){
		this.PARENT[a] = b;
	};

	this.find = function(a) {
		if (this.PARENT[a] === a) {
			return a;
		}
		return this.find(this.PARENT[a]);
	};
};

var disjointSet = new DisjointSet();
console.log(disjointSet.find('a')); //a
console.log(disjointSet.find('d')); //b
disjointSet.union('a','c');
console.log(disjointSet.find('a')); //c



