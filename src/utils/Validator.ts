const phoneRegex = /^[0-9]{10}$/;
export const phoneRegexFun = (phone: string) => {
  if (phoneRegex?.test(phone)) {
    return true;
  } else {
    return false;
  }
};
