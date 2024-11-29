// TypeScriptの型定義lsを使って記述
import * as http from 'http';
import * as fs from 'fs';

// サーバーオブジェクトを作成
const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
        // ファイルを読み込む
        fs.readFile('./html/index.html', 'utf-8', 
            (error: NodeJS.ErrnoException | null, data: string) => { 
                if (error) {
                    response.writeHead(500, { 'Content-Type': 'text/plain' });
                    response.write('Internal Server Error');
                    response.end();
                    console.error(error);
                    return;
                }
                
                // 成功時のレスポンス
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
                response.end();
            }
        );
    }
);

// サーバーを3000番ポートで待ち受け
server.listen(3000, () => {
    console.log('Server restart!');
});
