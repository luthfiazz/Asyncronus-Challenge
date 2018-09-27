new Promise (function(resolve, reject){
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
    resolve()
  }, 1000);
}
// console.log("Done")
})
.then (()=>{
  console.log('Done');
})
  