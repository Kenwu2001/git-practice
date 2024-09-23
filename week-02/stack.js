// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
    // 如果在一個class裡面有井字號#，它就代表私有變數，
    // 也就是這個變數只能在class內部使用，外部無法直接存取，
    // 這是為了達到封裝性的效果，讓程式更加安全

  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
		// TODO
    this.#items[this.#items.length] = element;
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
		// TODO
    let topItem = this.#items.at(-1);
    this.#items.splice(-1, 1);
    return topItem
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    if (this.#items.length === 0) {
      return "nothing in the stack";
    }
    return this.#items.at(-1);
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    // TODO
    // this.#items = [];
    this.#items.length = 0;
  }

  // 印出 stack 內容
  print() {
    // TODO
    console.log(this.#items);
  }
}