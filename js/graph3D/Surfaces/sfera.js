Surfaces.prototype.sfera = (x = 0, y = 0, z = 0, r = 10, count = 20) => {
	const points = [];
	const edges = [];
    const polygons = [];
    
    function setSphereOfPoints(count, R) {
        const da = 2 * Math.PI / count;
        for(let j = 0; j < 2 * Math.PI; j += da){
	        for (let i = 0; i < 2 * Math.PI; i += da) {
	            const x = R * Math.sin(j) * Math.cos(i);
	            const y = R * Math.sin(j) * Math.sin(i);
	            const z = R * Math.cos(j);
	            points.push(new Point(x, y, z));
	        }
    	}
    }

    setSphereOfPoints(count, r);

    for(let i = 0; i < points.length - count; i++){
        edges[i] = new Edge(i, i + count);
    }
    edges.push(new Edge(count, count + count - 1));

    for(let j = count; j < points.length - count; j += count){
        let k = 0;
        for(let i = j; k < count - 1; i++){
            edges.push(new Edge(i, i + 1));
            k++;
        }
    }

    for(let i = count; i < count * 2 - 1; i++){
        polygons.push(new Polygon([0, 0, i + 1, i], '#A5FF50'));
    }

    polygons.push(new Polygon([0, 0, count, count + count - 1], '#A5FF50'));

    for(let j = count; j < points.length - count; j += count){
        let k = 0;
        for(let i = j; k < count - 1; i++){
            polygons.push(new Polygon([i, i + count,i + count + 1, i + 1], '#A5FF50'));
            k++;
        }
    }
    return new Subject(points, edges, polygons);
}