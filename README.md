# Blockly 進階使用教學
本教學適用對像為：會寫HTML, JavaScript的人。
因為每位開發者用的前端框架都不同，所以這邊以「不用框架的方式」來介紹Blockly。

## 1. Blockly 到哪裡自訂
[https://blockly-demo.appspot.com/static/demos/blockfactory/index.html](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

做好的Block別忘了"Save"與"Download"存到你的開發專案中做為備份。
[blockly-04.png]

## 2. 自訂好後如何使用
守先，先到[github google blockly](https://github.com/google/blockly)下載
必須在html內引入 'blockly_compressed.js', 'blocks_compressed.js'，
並依你想要產生哪種程式語言引入相對應的檔案：
* ’javascript_compressed.js’
* ’python_compressed.js’
* ’php_compressed.js’
* ’lua_compressed.js’
* 'dart_compressed.js’

## 3. 產生程式碼
```javascript
var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
console.log(code)
```
可以參考 [main.js] 裡面 genCode 的function

## 4. 保存排好的Block
```javascript
var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
var xml_text = Blockly.Xml.domToPrettyText(xml);
```
可以參考 [main.js] 裡面 genXml 的function

## 5. 讀取之前排好的Block
```javascript
var dom = Blockly.Xml.textToDom(xml_text);
Blockly.Xml.domToWorkspace(dom, demoWorkspace);
```
可以參考 [main.js] 裡面 loadLocalStorage 的function
