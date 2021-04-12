'use strict'

function Human(name) {
    this.name = name;
}
// let steve = new Human('steve');

Human.prototype.sleep = () => {
    console.log('zzz')
};

var steve = new Human('steve');


steve.toString();   // [object Object]

// 모든 객체에 toString Method 가 있다.
// steve.__proto__ Human.prototype 참조
//  여기에는 toString 없지만
// __proto__ 은 모든 prototype에 들어있어서
// 상위로 상위로 찾다보면 어디선가 toString 이 나오는데
// 거기가 모든 JS 대표객체 대문자 Object 에 대한
// prototype에 정의 되어 있음




let li = document.createElement('li')




