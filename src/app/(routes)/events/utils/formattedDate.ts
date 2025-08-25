export function formattedDate(date: string) {
  return date.replace(/-0(\d)/g, '-$1')
}
