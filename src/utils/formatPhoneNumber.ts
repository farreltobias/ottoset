export const formatPhoneNumber = (number: string) => {
  const phoneRegex =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

  const phoneNumber = number.replace(/\+55/g, '');

  const [, ddd, num1, num2] = phoneRegex.exec(phoneNumber) || [];
  let phone = `${num1}-${num2}`;

  if (ddd) {
    phone = `(${ddd}) ${phone}`;
  }

  return phone;
};
