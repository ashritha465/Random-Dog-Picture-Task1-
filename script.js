//used async and called the function getRandomdog( )
async function getRandomDog(){
    try{
    //fetched the public API
    let res=await fetch('https://random.dog/woof.json/');
    //Got the javascript object data
    let jsobject=await res.json();
    //console.log(jsobject);
    //searched the hierarchy with the result that is stored in jsobject
    let image=jsobject.url;
    //console.log(image);
    
    if(image.includes('.mp4')) {
        getRandomDog();
    }
    else {
        dog_result.innerHTML = `<img src=${image} alt="dog" />`;
    }
    }
    catch(error){
console.log(error)
    }
}


    