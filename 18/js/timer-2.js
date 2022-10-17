let counter = 0;

let timer = setInterval(() => {
    console.log("Hi?");
    counter++;

    if(counter === 5) {
        clearInterval(timer);
    }
}, 2000);