function telephoneCheck(str) {
  let numbers = 0;
  let parentnum = 0;
  let dashnum = 0;
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) >= '0' && str.charAt(i) <= '9')
    {
      numbers++;
    }
    if(str.charAt(i) == '(')
      parentnum++;
    if(str.charAt(i) == '-')
      dashnum++;
    if(str.charAt(i) == ')' && str.charAt(i - 4) != '(')
      return false
    if(str.charAt(i) == '(' && str.charAt(i + 4) != ')')
      return false
  }
  if(parentnum > 1)
    return false;
  if(dashnum > 2)
    return false;
  if(numbers == 11 && str.charAt(0) == 1)
  return true;
  if(numbers == 10)
  return true;
  return false
}

telephoneCheck("555-555-5555");