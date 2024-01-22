

function deepTrim(obj) {
    if (typeof obj === "string") {
        return obj.trim();
    }

    if (obj instanceof Date || !obj || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepTrim(item));
    }

    const trimmedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            trimmedObj[key] = deepTrim(obj[key]);
        }
    }

    return trimmedObj;
}


module.exports = deepTrim;
