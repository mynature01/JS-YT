function fetchUserData(){
return Promise((resolve, reject) => {
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

}
async function getUser(){
    const user = await fetchUserData();
    console.log(user);
} catch (error){
    console.log('Error: ${error.message}')
}
getUser()