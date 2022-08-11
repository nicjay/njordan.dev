export function getLongDate(date: string) {
  return new Date(date).toLocaleDateString('default', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  });
}
