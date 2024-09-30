## <基礎題>
### package.json 中的 dependencies 與 devDependencies 分別是什麼

軟體生命週期有分為開發以及運行階段。開發階段包括編寫程式碼、單元測試、代碼審查、使用開發工具和框架等。運行階段包括部署應用程式、監控和維護系統、處理實際用戶請求等。

- dependencies
    - 用於運行階段，包含了運行時需要用到的函示庫以及框架，例如我們使用的express框架就會被歸類到dependencies裡面。
- devDependencies
    - 用於開發階段，比較常看到的像是Mocha(測試工具)以及ESLint(程式碼檢查工具)，都會被列到devDependencies裡面。
    - 會使用 ```npm install <package name> --save-dev``` 來把 package 加入到devDependencies裡面。

注意: 
- dependencies 跟 devDependencies 有可能會包含相同的 package，因為一個工具可能同時在開發以及運行都會被用到。
- 有些應該要屬於devDependencies的 package 卻忘了使用```--save-dev```來安裝也會出現問題，可能會有安全風險以及維護上的困難(很籠統的講)。

### package.json 中的 scripts 這個區塊怎麼用？

我們在寫javaScript的時候是使用Node來開發，而Node跟npm有著緊密的關係，其中腳本功能就是npm的其中一項功能。在終端機我們可以執行 ``` npm run [someting]```，這裡的 [something]就可以定義在package.json裡面的scripts中。

```json
// this is package.json
{
  "scripts": {
    "start": "node app.js"
  }
}

```

例如上方我們定義了 start 等於 node app.js ，那麼使用終端機的時候我們就可以用```npm run start```來執行 app.js ，它就會等同於在終端機下```node app.js```的指令。

還有許多常見的腳本功能，像是 build，我們一樣可以使用```npm run build```來執行定義在 scripts 裡面的 build。
```json
// this is package.json
{
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
}
```

而build又可以延伸出更厲害更方便的腳本定義方式，如下方，這時我如果執行```npm run build```，則會先執行 prebuild 裡面的內容，接著再執行 build 的內容，最後執行 postbuild 的內容。從這個例子就可以發現腳本定義的好處。
```json
{
  "scripts": {
    "prebuild": "echo 'Running before build'",
    "build": "webpack --config webpack.config.js",
    "postbuild": "echo 'Running after build'"
  }
}
```

### Port number 要怎麼以環境變數來設定？

在程式碼裡面可以運運下面的程式來動態給予 Port number 。
```js
const port = process.env.PORT;
```
並且在終端機(我的是Windows pwsh)以下方的指令完成附值。
```
$env:PORT = 4000; node app.js
```

另一種方法是先```npm install dotenv```，並且在根目錄底下新增一個 .env 檔案，在檔案裡寫一行```PORT=3000```，並且在app.js裡改寫一下，如此一來就可以在終端機直接下```node app.js```的指令，程式就會自動找到 .env file 裡面的 PORT 號碼。
```js
// this is app.js
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
```
ˋ
### 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

經過上網查了相關資料，我決定省略以下幾個檔案或資料夾。

- node_modules 資料夾
    - 這是 Node.js 專案中安裝的所有 dependency package 的存放位置，因為它們可以通過 package.json 和 package-lock.json 重新生成，所以不需要提交。
- Logs 相關
    - logs 相關文件通常包含運行時的輸出信息，不需要特別提交。
- .env file
    - 這個檔案通常包含敏感信息，如 API 密鑰和數據庫憑據，不應該提交到版本控制系統。
- OS generated files
    - 例如 .DS_Store 以及 Thumbs.db，這些是作業系統生成的文件，對版本控制不重要。
- .vscode folder
    - 這個資料夾在每個專案都會出現，裡面的設定通常是開發者個人的偏好，不需要提交到版本控制系統。
- temporary files
    - 例如 *.tmp 以及 *.swp，這些文件通常是編輯器或其他工具生成的，也不需要提交到版本控制系統。

### 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

NodeJS 是 2009 年正式發表的，而ES Modules 是 2015 才成為標準。在 Node.JS v12.17 之前使用的是 CommonJs Modules (CJS) 系統，之後版本才支援 ECMAScript Modules(ECM)，而現在通常使用 ECM。
兩者的差別在於import以及export方式不同，我們可以從檔名來辨別目前使用的是哪種方法，使用CJS方法時我們會把檔名取為 .cjs，而使用ESM時我們會把檔名取為 .mjs，一般情況下檔案會是 .js，預設狀況來說這會是使用 CJS 的方式，如果我們想要把它變成 ESM，則需要在 package.json 中加上```"type": "module"```。

CJS: 使用 require 函數來導入模塊，並使用 module.exports 或 exports 對象來定義導出的內容。以下為網路參考的範例，可以看到使用```exports.add```方法來把add function導出。並用```require('./math.js')```來導入。

```js
// 定義module
// math.js
exports.add = function(a, b) {
  return a + b;
};

// 導入module
// main.js
var math = require('./math.js');
console.log(math.add(2, 3)); // 輸出: 5
```

ESM: ESM 使用 import 和 export 關鍵字來定義和導入模塊。以下為網路參考的範例，可以看到使用 import 以及 export 來實現模塊之間的交流。

```js
// 定義 module
// math.js
export function add(a, b) {
  return a + b;
}

// 導入 module
// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 輸出: 5
```

補充:
- ESM 可以在現代瀏覽器中使用，CJS 主要用於 Node.js 環境。
- ESM 和 CJS 是不相容的模塊系統
- ESM 通常在性能上更有優勢，因為它的靜態加載和非阻塞特性會讓模塊加載更高效。
- CJS 因為動態和同步加載，可能會在初次加載時導致性能瓶頸。

---

## <進階題>

### localhost 是什麼？

localhost可以想像成 local + host， host 可以想像成 server，所以 localhost 就是本地端的 server，當沒有網路的時候我們還是可以用 localhost 來測試我們的程式，因為電腦扮演 localhost 的角色，也就是本身電腦就是一個 server 來提供服務。
另外，每個 server 都有唯一的 IP 位址，而我們把 localhost 的位址預設為 127.0.0.1。

### curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

curl 是 command-line 的工具，可以用來傳輸數據。它支持多種協議像是HTTP、HTTPS、FTP 等，平常會用它來測試網路連線狀況。
想要用 curl 來測試網路連線的方式就是 ```curl http://example.com```，這個指令會送一個 GET 到 http://example.com 並顯示它的內容。

常用的參數如下:
- -I 或 --head : 只取得 headers
```curl -I http://example.com```
- -X 或 --request : 這可以指定 HTTP 的方法， GET、POST、PUT 等
```curl -X POST http://example.com```
- -d 或 --data : 發送數據，通常用於POST
```curl -d "param1=value1&param2=value2" http://example.com```
- -H 或 --header : 添加客製化的 headers
```curl -H "Content-Type: application/json" http://example.com```
- -o 或 --output: 把 response 儲存到檔案
```curl -o output.html http://example.com```
- -u 或 --user : 提供使用者名稱或密碼進行身分驗證
```curl -u username:password http://example.com```

---

## 觀察package.json

執行npm init會多了一個package.json檔。
![jinit](./assets/json_init.png)

執行npm install express會多出一個node_modules資料夾以及一個package-lock.json檔案。
![alt text](./assets/install_express.png)

package.json會比npm init時多出一個dependencies。

```json
"dependencies": {
    "express": "^4.21.0"
}
```

node_modules裡面有什麼?
包含了專案所需的所有外部套件和它們的依賴項(dependencies)，也有二進位檔案跟 module 檔案。