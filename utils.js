const debounce = (func, delay = 1000) => {
    let timeoutId;
    // wrapper
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};