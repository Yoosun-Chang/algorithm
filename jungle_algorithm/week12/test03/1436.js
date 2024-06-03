var destCity = function (paths) {
    let start = new Set();

    for (path of paths) {
        start.add(path[0]);
    }

    for (path of paths) {
        if (!start.has(path[1])) {
            return path[1];
        }
    }
}