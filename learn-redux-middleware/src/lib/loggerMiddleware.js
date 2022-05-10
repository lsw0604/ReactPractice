const loggerMiddleware = store => next => action => {
  // 미들웨어의 기본구조
  console.group(action && action.type); // 액션타입으로 log 그룹화함
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState());
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;



// const loggerMiddleware = function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       // 미들웨어 기본 구조
//     };
//   };
// };