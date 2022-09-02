export const validator = (input, a) => {

    let errors = {};

    //--------Name---------------
    if (!input.name) {
        errors.name = 'Name is necessary'
    } else {
        const values = /^[0-9\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.name)) {
            errors.name = 'Name only can be Text';
        };
    };

    //----------weightMin-------------

    if (!input.weightMin) {
        errors.weightMin = 'Weight Min is necessary'
    } else {
        const values = /^[a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.weightMin.toLowerCase())) {
            errors.weightMin = 'Weight only can be a Number'
        } else if (input.weightMin > 100) {
            errors.weightMin = 'Weight must be greater than 0 and less than 100'
        };
    };

    //-----------weightMax------------

    if (!input.weightMax) {
        errors.weightMax = 'Weight Max is necessary'
    } else {
        const values = /^[a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.weightMax.toLowerCase())) {
            errors.weightMax = 'Weight only can be a Number'
        } else if (input.weightMax > 100) {
            errors.weightMax = 'Weight must be greater than 0 and less than 100'
        } else if (parseInt(input.weightMax.length) > 0 && (parseInt(input.weightMin) > parseInt(input.weightMax))) {
            errors.weightMax = 'Weight max must be greater or equal than Weight min'
        };
    };

    //-----------heightMin------------

    if (!input.heightMin) {
        errors.heightMin = 'Height Min Min is necessary'
    } else {
        const values = /^[a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.heightMin.toLowerCase())) {
            errors.heightMin = 'Height Min only can be a Number'
        } else if (input.heightMin > 2) {
            errors.heightMin = 'Height Min must be greater than 0 and less than 2'
        };
    };

    //-----------heightMax------------

    if (!input.heightMax) {
        errors.heightMax = 'Height Max is necessary'
    } else {
        const values = /^[a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.heightMax.toLowerCase())) {
            errors.heightMax = 'Height only can be a Number'
        } else if (input.heightMax > 2) {
            errors.heightMax = 'Height must be greater than 0 and less than 2'
        } else if (parseInt(input.heightMax.length) > 0 && (parseInt(input.heightMin) > parseInt(input.heightMax))) {
            errors.heightMax = 'Height max must be greater or equal than Height min'
        };
    };

    //-----------life_spanMin------------

    if (!input.life_spanMin) {
        errors.life_spanMin = 'Life Span Min Min is necessary'
    } else {
        const values = /^[a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.life_spanMin.toLowerCase())) {
            errors.life_spanMin = 'Life Span Min only can be a Number'
        } else if (input.life_spanMin > 20) {
            errors.life_spanMin = 'Life Span Min must be greater than 0 and less than 20'
        };
    };

    //-----------life_spanMax------------

    if (!input.life_spanMax) {
        errors.life_spanMax = 'Height Max is necessary'
    } else {
        const values = /^[a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¿¡¨°¬´]+$/g;
        if (controlate(values, input.life_spanMax.toLowerCase())) {
            errors.life_spanMax = 'Life Span only can be a Number'
        } else if (input.life_spanMax > 20) {
            errors.life_spanMax = 'Life Span must be greater than 0 and less than 20'
        } else if (parseInt(input.life_spanMax.length) > 0 && (parseInt(input.life_spanMin) > parseInt(input.life_spanMax))) {
            errors.life_spanMax = 'Life Span max must be greater or equal than Life Span min'
        };
    };


    return errors;
}



const controlate = (values, input) => {
    let count = 0;
    for (const element of input) {
        if (values.test(element)) {
            count++;
        };
    };
    if (count > 0) {
        return true;
    };
    return false;
}

