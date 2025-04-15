//promise API
//1)
promise.all([p1,P2,p3]);//actually it will take array of promises and parallel execution of promises happen
 //return arr of values 
  /*
  it will wait for all of them to finished
  if in case if any one gets rejected then it will immediatelly give error:
  like if p1 ,p2 , p3 take 2s 1s 3s respective and p2 gets rejected then throw error:  
  */
 //if one of them rejected still we want  data then use:

 //2)
 promise.allsetteled([p1,p2,p3])
   /*
   wait all promise to setteled:
     after setteled all promise it will give array of result
      [val1,error,val3]  in case p2 gets rejected:
     */

//3)
promise.race([p1,p2,p3])
/*
  it will give value of first setteled promise it will either resolve or rejected:
    if resolve then value othet wise error
*/

//4)
promise.any([p1,p2,p3])
/*
  wait for first promise to gets successfully resolve:

*/





