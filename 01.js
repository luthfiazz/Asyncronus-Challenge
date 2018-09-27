const fs = require('fs')


const readDir= new Promise((resolve, reject)=>{
    return fs.readdir('/', (err, result) => {
        if (err) {
          reject (err)
        }
        resolve (result)
      })
      
})

readDir.then(item=>console.log(item))


// (async function   x(){
// const a = await readDir();
// console.log(a);
// })();

