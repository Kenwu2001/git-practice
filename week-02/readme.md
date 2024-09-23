# Javascript Environment

## NodeJS Version

我最後選擇安裝了v20.17.0版本，原因是因為它是LTS(Long-Term Support)版本，也就是長期支持的版本，LTS版本的特性就是穩定而且安全，而且它有往後30個月的維護保證，也就是這個版本不會在短時間內被下架而且有持續被維護的保障。另外沒有選擇奇數版本號是因為通常奇數號都是用來測試的版本，穩定性可能沒有那麼好，而不選擇最新的Current版本是因為它還沒有進入LTS版本，主要是著重在開發新功能而不是維護既有的功能，這樣也可能會有穩定性的問題，雖然會很想嘗試新功能，但在開發專案時還是以穩定為第一原則。

## nvm & npm

nvm(Node Version Manager)是專門用來控制Node.js版本的工具，有了nvm就可以讓開發者隨意切換Node.js的版本。沒有nvm的話就只能解除某個Node.js版本後才能再安裝新的Node.js版本，會比較麻煩。

npm(Node Package Manager)是用來管理package的，在寫程式的時候很常都會需要引用package，有了npm就很容易下載、安裝和管理這些package。有時候如果是自己寫了一個package想要讓大家使用，也可以上傳到npm Registry，這樣其他人就能輕鬆下載來使用。