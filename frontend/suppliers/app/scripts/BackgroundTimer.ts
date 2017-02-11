let INTERVAL: number = 1000; //ms

let timer = setInterval(function () {
    let date = new Date();
    postMessage(date.getTime(), '*');
}, INTERVAL);

onmessage = function (e: any) {
    if (e.data === "stop") {
        clearInterval(timer);
        close();
    }
};
