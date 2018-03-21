// --------- モジュールロード -----------
// nodeモジュール
import fs from "fs";
import Express from "express";

// --------- サーバ設定 -------------
const app = new Express();
const port = 3000;


// --------- リクエスト・レスポンス ----------
// 動的レスポンス
//app.use('/hoge/fuga.js', function (req, res) {
//  res.header('Content-Type', 'text/javascript;charset=utf-8');
//  return fs.createReadStream(`./static/bundle.js`).pipe(res);
//});

// 静的ファイルの提供
app.use(Express.static('.'));

// --------- Express Listening ---------
app.listen(port, `localhost`, () => {
  console.log(`started at http://localhost:${port}`);
});