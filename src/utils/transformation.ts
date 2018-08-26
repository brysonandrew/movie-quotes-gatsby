export function toPath(name) {
  return name
    .replace(/./g, '')
    .replace(/-/g, '')
    .replace(/\s/g, '-')
    .replace(/[.,]/g, '')
    .toLowerCase()
}
