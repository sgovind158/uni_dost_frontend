const phoneRegex = /^[0-9]{10}$/;
export const phoneRegexFun = (phone: string) => {
  if (phoneRegex?.test(phone)) {
    return true;
  } else {
    return false;
  }
};

export function calculateAge(dobString: string): number {
  const dob = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

// Usage:
