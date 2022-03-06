export const isFieldValid = (event, field, currentState) => {
    const { name, value } = event.target;
    let currentIndex = 0;
    const fields = currentState.map((stateField, index) => {
        if (stateField.name === field.name) {
            stateField.text = value;
            currentIndex = index;
        }
        return stateField;
    })
    if (fields[currentIndex].validation.type === 'length') {
        if (fields[currentIndex].text.length < fields[currentIndex].validation.check) {
            fields[currentIndex].error = 1;
            fields[currentIndex].valid = 0;
        } else {
            fields[currentIndex].error = 0;
            fields[currentIndex].valid = 1;
        }
    }
    return fields;
}

export const isFormValid = (fields) => {
    const sum = fields.reduce((field, {valid}) => field + valid, 0);
    return sum;
}

export const emptyForm = (fields) => {
    return fields.map(field => {
        field.text = '';
        field.valid = 0;
        return field;
    })
}