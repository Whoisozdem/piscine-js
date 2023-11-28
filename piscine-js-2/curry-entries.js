function defaultCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key];
        }
        for (let key in obj2) {
            res[key] = obj2[key];
        }
        return res;
    };
}

function mapCurry(func) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            res[func([key, obj2[key]])[0]] = func([key, obj2[key]])[1];
        }
        return res;
    };
}
function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let res = obj3;
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]);
        }
        return res;
    };
}

function filterCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) {
                res[key] = obj2[key];
            }
        }
        return res;
    };
}
function reduceScore(obj, value) {
    return reduceCurry((acc, [key, val]) => acc + val.pilotingScore + val.shootingScore)(filterCurry(([key, val]) => val.isForceUser)(obj), value)
}

function filterForce(obj) {
    return filterCurry((([key, val]) => val.shootingScore >= 80 && val.isForceUser))(obj)
}
function mapAverage(obj) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = Object.assign({}, obj[key]);
            res[key].averageScore = (obj[key].shootingScore + obj[key].pilotingScore) / 2;
        }
    }
    return res;
}