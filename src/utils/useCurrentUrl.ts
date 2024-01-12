
export const useCurrentUrl = () => {
 const urlArray: Array<string> = window.location.href.split('/')
 let url: string = ''
 for (let index = 0; index < 3; index++) {
  if (index !== 0) url += '/'
  url += urlArray[index]
 }
 return { url }
}