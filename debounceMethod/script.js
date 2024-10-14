//Debounce method
let counter=0;
const getData = () => {
    console.log("Fetching Data...",counter++);
}

const betterFunction = debounce(getData,300);

function debounce(fn,d){
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, arguments);
        },d);
    }
}