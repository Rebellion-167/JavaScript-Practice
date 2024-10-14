let counter = 0;
const expensive = () => {
    console.log("Expensive",counter++);
}

const betterFunction = throttle(expensive,1000);

//throttle function

function throttle(func,limit){
    let flag = true;
    return function(){
        let context = this,
        args = arguments;
        if(flag){
            func.apply(context,arguments);
            flag = false;
            setTimeout(()=> {
                flag = true;
            },limit);
        }
    }
}