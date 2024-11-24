// httpというモジュールを呼び出し,httpというオブジェクトを作成
const http = require('http');
const fs = require('fs');

// createServerというメソッドを呼び出し、http.serverオブジェクトを作成
var server = http.createServer(
    (request, response)=>{
        fs.readFile('./html/index.html', 'utf-8',
            (error, data)=>{ // コールバック関数（後で呼び出される）
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            }
        )
    }
);

// http.serverオブジェクトに対し、3000番ポートで待ち受け
server.listen(3000);
console.log('Server restart!');