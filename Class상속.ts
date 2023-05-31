class Iphone {
  buy(price: number): void{
    console.log(`${price}만원에 구입했읍니다.`)
  }
}
class Iphone14 extends Iphone {
  func(): void{
    console.log("good camera!")
  }
}
const iphone14 = new Iphone14()
iphone14.buy(100);
iphone14.func();