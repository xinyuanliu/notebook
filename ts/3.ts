function flatMap(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(cur)
    }, [])
}

function debounce(fn: () => void, delay: number | undefined) {
    let timer: = null
    return function () {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}