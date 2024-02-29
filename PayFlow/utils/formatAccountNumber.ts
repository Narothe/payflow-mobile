/* eslint-disable */
export function formatAccountNumber(accountNumber: string): string {
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
export function truncateAccountNumber(accountNumber: string): string {
  if (!accountNumber) {
    return '';
  }

  const accountString: string = accountNumber.toString();
  const firstFourDigits: string = accountString.substring(0, 4);
  const lastFourDigits: string = accountString.substring(accountString.length - 4);

  return `${firstFourDigits}...${lastFourDigits}`;
}
