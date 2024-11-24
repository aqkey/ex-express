// httpというモジュールを呼び出し,httpというオブジェクトを作成
const http = require('http');

// createServerというメソッドを呼び出し、http.serverオブジェクトを作成
var server = http.createServer(
    (request, response)=>{
        response.end('Hello Node.js');
    }
);

/**　こう書ける
 * (引数) => {
  // 処理内容
};
 */

/**　もう少しちゃんと書くと
 * const requestHandler = (req: IncomingMessage, res: ServerResponse): void => {
    // レスポンス本文を送信
    res.end("Hello Node.js");
};
 */

/**　functionを使うとこう
 *  function requestHandler(req: IncomingMessage, res: ServerResponse): void {
    res.end("Hello, TypeScript with HTTP using a function declaration!");
}
 */


// http.serverオブジェクトに対し、3000番ポートで待ち受け
server.listen(3000);