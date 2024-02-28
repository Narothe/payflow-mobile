export const checkPhoneNumber = (number: string) => {
  if (!checkGoodValue(number)) {
    return false;
  }
  const regex = /^\d{9}$/;
  return regex.test(number);
};
export const checkEmail = (email: string) => {
  if (!checkGoodValue(email)) {
    return false;
  }
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
export const checkZipCode = (code: string) => {
  if (!checkGoodValue(code)) {
    return false;
  }
  const regex = /^\d{2}-\d{3}$/;
  return regex.test(code);
};
export const checkHomeNumber = (number: string) => {
  if (!checkGoodValue(number)) {
    return false;
  }
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(number);
};
export const isString = (s: string) => {
  if (!checkGoodValue(s)) {
    return false;
  }
  const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
  return regex.test(s);
};

export const checkAmount = (amount: string) => {
  if (!checkGoodValue(amount)) {
    return false;
  }
  const regex = /^[0-9]+([,.][0-9]+)?$/;
  return regex.test(amount);
};

export const checkDateFormat = (date: string) => {
  if (!checkGoodValue(date)) {
    return false;
  }
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return false;
  }
  const [yyyy, mm, dd] = date.split('-').map(Number);
  const data = new Date(yyyy, mm - 1, dd);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return data < today;
};

export const isAccountNumberValid = (inputString: string) => {
  const stringWithoutWhitespace = inputString.replace(/\s/g, '');
  if (stringWithoutWhitespace.length !== 26) {
    return false;
  }
  for (let i = 0; i < stringWithoutWhitespace.length; i++) {
    if (!/\d/.test(stringWithoutWhitespace[i])) {
      return false;
    }
  }
  return true;
};

export const checkGoodValue = (input: string | undefined | null) => {
  return !(typeof input === 'undefined' || input === null);
};

export const checkPasswordStrength = (inputPassword: string) => {
  const hasUpperCase = /[A-Z]/.test(inputPassword);
  const hasLowerCase = /[a-z]/.test(inputPassword);
  const hasDigit = /\d/.test(inputPassword);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(inputPassword);
  const isLengthValid = inputPassword.length >= 8;
  return (
    hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLengthValid
  );
};
