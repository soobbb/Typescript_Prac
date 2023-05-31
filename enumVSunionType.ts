/* enum와 union type 

*/
enum Fruit1 {
  Apple,
  Banan,
  Orange,
}
console.log(Fruit1);

// api 호출
enum HttpMethod {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete",
}
function makeRequest(url: string, method: HttpMethod) {
  // ...
}
makeRequest("/api/data", HttpMethod.Post);


// union type
function printValue(value: string | number):void{
  if(typeof value === "string")
    console.log(`The type is a number: ${value}`)
  else
    console.log(`The type is a string: ${value}`)
}
printValue(10);

let numberORstring: string | number;
numberORstring = "hello";
console.log(typeof numberORstring);
numberORstring = 10;
console.log(typeof numberORstring);

function printArr(arr: number[] | string[]){
  for(let i of arr){
    console.log(i);
  }
}
printArr([1, 2, 3]); // 숫자 배열 출력
printArr(["a", "b", "c"]); // 문자열 배열 출력
