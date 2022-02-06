function receivesAFunction(cb) {
    cb();
    return cb;
}

function returnsANamedFunction () {
    return (function namedFunction () {});
}

const returnsAnAnonymousFunction = () => function(){};