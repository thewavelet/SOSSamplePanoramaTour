#SOS랩 파노라마 투어 샘플 프로젝트

## 윈도우에서 npm install 후 npm start 에서 오류 날 경우.

## node_modules\metro\src\blacklist.js 의 아래의 내용을 다음과 같이 수정해 준다.

// Don't forget to everything listed here to `package.json`
// modulePathIgnorePatterns.
// var sharedBlacklist = [
// /node_modules[/\\]react[/\\]dist[/\\].*/,
//
// /website\/node_modules\/.*/,
//
// /heapCapture\/bundle\.js/,
//
// /.*\/__tests__\/.*/];

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

## npm start 후에 브라우저 에서 http://localhost:8081/index.html 접속

 