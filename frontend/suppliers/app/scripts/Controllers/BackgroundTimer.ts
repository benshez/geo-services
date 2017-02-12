export const INTERVAL: number = 1000; //ms

export const timer = setInterval(function () {
    let date = new Date();
    postMessage(date.getTime(), '*');
}, INTERVAL);

export const onmessage = function (e: any) {
    if (e.data === 'stop') {
        clearInterval(timer);
        close();
    }
};
