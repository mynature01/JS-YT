const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve({
            id: 12345,
            name : "Sanskar gaur"
            })
    }
    else{
        reject((new Error("Data not fetched")))
    }
    })

    promise1
    .then((response)=>{
        return response
    })
    .then((response2)=>{
        console.log(response2)
    })
    .catch((error)=>{
        console.log(error.message);
    });

    const promise2 = new Promise((resolve,reject)=>{
        let success = false;
    if(success){
        resolve({
            orderId: 69,
            orderName : "Sunglasses"
            })
    }
    else{
        reject((new Error("Order not fetched")))
    }
    })

    promise2
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error.message);
    });

    // Promise.all([promise1,promise2])
    // .then((response)=>{
    //      console.log(response);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    // Promise.race([promise1,promise2])
    // .then((response)=>{
    //      console.log(response);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    Promise.allSettled([promise1,promise2])
    .then((response)=>{
         console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })

