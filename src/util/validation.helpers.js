export function validateUsername(value) {
    let error;
    if (!value) {
        error = "Username is required";
    }
    return error;
}

export function validateFullName(value) {
    let error;
    if (!value) {
        error = "Full Name is required";
    }
    return error;
}

export function validateEmail(value) {
    let error;
    if (!value) {
        error = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Invalid email address";
    }
    return error;
}

export function validatePassword(value) {
    let error;
    if (!value) {
        error = "Password is required";
    } else if (value.length < 8) {
        error = "Password must be at least 8 characters long";
    } else if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        error = "Password must contain at least 1 letter and 1 number";
    }
    return error;
}

export function validatePhoneNumber(value) {
    let error;
    if (!value) {
        error = "Phone Number is required";
    } else if (!/^\d{10}$/.test(value)) {
        error = "Invalid phone number";
    }
    return error;
}
