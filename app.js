const http = require("http");
const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain ; charset=UTF-8 "); //テキストを返す。日本語なのでcharsetを設定

    // ルーティングの設定
    switch (req.url) { // req.urlに入った値が
        case "/":
            res.write("トップページです。\n");
            break;
        case "/up":
            res.write("投稿ページです。\n");
            break;
        default:
            res.write("その他のページです。\n");
            break;
    }
    res.end("以上！\n");
});

server.listen(port, host, () => {
    console.log("server listening...");
});