export const appUrl = () => {
  return `${window.location.protocol}//${window.location.hostname}/${process.env.VUE_APP_NAME}`
}