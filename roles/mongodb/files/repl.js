var cfg = { _id: 'rs',
    members: [
        { _id: 0, host: 'master:27017'},
        { _id: 1, host: 'node1:27017'},
        { _id: 2, host: 'node2:27017', arbiterOnly: true}
    ]
};

var error = rs.initiate(cfg);
printjson(error);