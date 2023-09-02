const calc = new Promise((resolve, reject)=>{
    const success = true;
    if (success){
        resolve('ok')
    }else{
        reject('na1!, am not doing this')
    }
});

calc
    .then((res)=>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    })
