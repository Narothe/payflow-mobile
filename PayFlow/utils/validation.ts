export const checkPhoneNumber = (number: string) => {
  const regex = /^\d{9}$/;
  return regex.test(number);
};
export const checkEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
export const checkZipCode = (code: string) => {
  const regex = /^\d{2}-\d{3}$/;
  return regex.test(code);
};
export const checkHomeNumber = (number: string) => {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(number);
};
export const isString = (s: string) => {
  const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
  return regex.test(s);
};

export const checkAmount = (amount: string) => {
  const regex = /^[0-9]+([,.][0-9]+)?$/;
  return regex.test(amount);
};

export const checkDateFormat = (date: string) => {
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!regex.test(date)) {
    return false;
  }
  const [dd, mm, yyyy] = date.split('-').map(Number);
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
