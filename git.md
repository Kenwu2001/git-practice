# git相關知識

## .git file
最原始的情況會長這樣
<img src="images/1.png" alt="1.png" width="500"/>

## HEAD

在git init之後可以看到HEAD file裡面顯示出以下資訊。
```c
ref: refs/heads/master
```
這代表我們目前所在的位置，以此例來說，我們目前是在master branch。

更仔細分的話，HEAD指標可以分為attached或者detached，若是attached的狀況(預設)，會指向我們正在操作的branch。而若是detached的話，則會指向某一個commit。

想知道HEAD目前指向哪裡的話，可以使用```git show HEAD --oneline```或者是```git status```。

此圖顯示HEAD->featGitMD，代表目前指到featGitMD branch，也就是屬於attached的模式。
![alt text](images/2.png)

當我強制切換到某一個commit的時候，可以看到HEAD就會變成detached模式。
![alt text](images/3.png)

![alt text](images/4.png)

若想要回到原本的attached模式，只要重新切回到branch就可以了。如下面操作。

![alt text](images/5.png)

![alt text](images/6.png)



所以看到```You are in 'detached HEAD' state```的時候，並不是代表做錯了什麼事情，而是HEAD目前指向了某一個commit而不是branch。

同時觀察了.git資料夾裡面HEAD的資訊，可以發現每當我們切branch的時候就會及時改變。

![alt text](images/7.png)
![alt text](images/8.png)

![alt text](images/9.png)
![alt text](images/10.png)

ref:
[參考文章1](https://blog.simonxander.tw/2023/12/dot-git-folder-part-1.html)
[參考文章2](https://www.git-tower.com/learn/git/glossary/head)
[參考文章3](https://blog.git-init.com/what-is-head-in-git/)

## blob(Binary Large Object)

def: 是 Git 中的一種物件類型，專門用來存儲檔案的內容

blob會被儲存在objects資料夾裡面。

本來objects資料夾裡什麼東西都沒有。
![alt text](images/11.png)

假如我commit一個新的檔案之後，就會出現變化。以下是新增一個hello.py檔案並且commit後的結果。

![alt text](images/12.png)

執行以下指令就可以解碼內容，可以看出內容就是在記錄我們什麼時候commit了一個版本以及增加了什麼檔案和內容是什麼。
![alt text](images/13.png)
![alt text](images/14.png)
![alt text](images/15.png)