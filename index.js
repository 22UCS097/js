
//to create promise:
//async function always return promise
//promise is object that represent eventual completion or failure of an async operation:
//promise is place holder and if its gets resolved then filled with data:

const promise=ccreateOrder(cart);//fetching data
 promise.then(()=>{
      //callback:
      //this callback gets call once and 100% sure that it will gets called after resolution:
 })

 //promise state:
  /*
   pending
   rejected
   resolved
  */



