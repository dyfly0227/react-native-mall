export function isEmail(email: string) {
  var filter = new RegExp(
    '^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$',
  );
  return filter.test(email);
}
export function isPhone(phone: string) {
  var filter = new RegExp('^[1][3,4,5,7,8][0-9]{9}$');
  return filter.test(phone);
}

export function validateInput(type: string, val: string) {
  switch (type) {
    case 'require':
      return val !== '';
    case 'phone':
      return isPhone(val);
    case 'email':
      return isEmail(val);
    default:
      return true;
  }
}
