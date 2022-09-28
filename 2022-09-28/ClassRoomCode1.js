//! 원본
//let first = setTimeout(() => {
//  console.log('첫번째 setTimeout 입니다 3초뒤에 실행됩니다')
//}, 3000);
//let second = setTimeout(() => {
//  console.log('두번째 setTimeout 입니다 2초뒤에 실행됩니다')
//}, 2000);
//let third = setTimeout(() => {
//  console.log('세번째 setTimeout 입니다 1초뒤에 실행됩니다')
//}, 1000);
//! 첫번째 변형
//let first = setTimeout(() => {
//  console.log('첫번째 setTimeout 입니다 3초뒤에 실행됩니다')
//}, 3000);
//let second = setTimeout(() => {
//  console.log('두번째 setTimeout 입니다 2초뒤에 실행됩니다')
//}, 5000);
//let third = setTimeout(() => {
//  console.log('세번째 setTimeout 입니다 1초뒤에 실행됩니다')
//}, 6000);
//! 두번째 변형
let first = setTimeout(() => {
  {console.log('첫번째 setTimeout 입니다 3초뒤에 실행됩니다')
  let second = setTimeout(() => {
    {console.log('두번째 setTimeout 입니다 2초뒤에 실행됩니다')
    let third = setTimeout(() => {
      {console.log('세번째 setTimeout 입니다 1초뒤에 실행됩니다')
    };
    }, 1000);
  };
  }, 2000);
};
}, 3000);