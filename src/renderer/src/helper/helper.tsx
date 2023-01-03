export const formatNumber = (value: number): string => {
  if (value) {
    const separator = '.'
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }
  return value.toString()
}
