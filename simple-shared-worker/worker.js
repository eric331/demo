let data = 0
onconnect = function (e) {
    const port = e.ports[0];

    port.onmessage = function (event) {
        if (event.data.get) {
            const workerResult = `Result: ${data}`;
            port.postMessage(workerResult);
        }
        // 非 get 指令则存储该消息数据
        else {
            data = event.data[0] * event.data[1];
        }
    };
};
