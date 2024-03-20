/* eslint-disable */
export function formatCardNumber(accountNumber: string): string {
  if (!accountNumber) {
    return '';
  }

  const accountString: string = accountNumber.toString();
  const firstTwoDigits: string = accountString.substring(0, 2);
  const remainingDigits: string = accountString.substring(2);

  const chunks: string[] = [];
  for (let i = 0; i < remainingDigits.length; i += 4) {
    chunks.push(remainingDigits.substring(i, i + 4));
  }

  return `${firstTwoDigits} ${chunks.join(' ')}`;
}
export function truncateNumber(accountNumber: string): string {
  if (!accountNumber) {
    return '';
  }

  const accountString: string = accountNumber.toString();
  const firstFourDigits: string = accountString.substring(0, 4);
  const lastFourDigits: string = accountString.substring(accountString.length - 4);

  return `${firstFourDigits}...${lastFourDigits}`;
}
// export const formatExpirationDate = (rawDate: Date) => {
//   const dateObject: Date = new Date(rawDate);
//   const options = {month: '2-digit', year: '2-digit'};
//   return dateObject.toLocaleDateString('en-US', options);
// };
export function formatExpirationDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  const lastTwoDigitsOfYear = year.slice(-2);
  return `${month}/${lastTwoDigitsOfYear}`;
}

export function formatAccountNumber(accountNumber: string | undefined) {
  if (!accountNumber) {
    return '';
  }

  const accountString = accountNumber.toString();
  const firstTwoDigits = accountString.substring(0, 2);
  const remainingDigits = accountString.substring(2);

  const chunks = [];
  for (let i = 0; i < remainingDigits.length; i += 4) {
    chunks.push(remainingDigits.substring(i, i + 4));
  }

  return `${firstTwoDigits} ${chunks.join(' ')}`;
}

export function formatBlikNumber(number: string | undefined) {
  if (!number) {
    return '';
  }
  const firstDigits = number.substring(0, 3);
  const remainingDigits = number.substring(3);
  return `${firstDigits} ${remainingDigits}`;
}
export function formatBalance(balance: number): string {
  const parts = balance.toFixed(2).toString().split('.');
  
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join('.');
}

