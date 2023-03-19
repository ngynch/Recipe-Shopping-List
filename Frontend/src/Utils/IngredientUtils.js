const isValid = (value) => {
    console.log(value)
    if (isNaN(parseFloat(value)) || parseFloat(value) <= 0 || parseFloat(value).toString().length !== value.length){
        return false;
    }
    return true;
    }

export  {isValid}