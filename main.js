const randomNumber = Math.ceil(Math.random() * 100) ;
console.log(randomNumber);


const validateNumber = (value) => {
    if(isNaN(value)) {
        return "Please Enter a Valid Number :" ;
    } else if (+value < 1 || +value > 100) {
        return "Please Enter A number between 1 to 100"
    }
};


const play = () => {
    const number = prompt("Enter a number between 1 to 100 ")
    
    if(number === null) {
        return;
    }

    const validation = validateNumber(number);
    if (validation) {
        console.log(validation) ;
        return play();
    }

};


play() ;
