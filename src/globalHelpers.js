const defaultBase = 'https://cuddle-bandit.herokuapp.com/api/v1/'
const serializeObjs = (arrayOfObj) => {
  // console.log(arrayOfObj)
  return (
    arrayOfObj.filter((pair) => {
      return Object.values(pair)[0] !== ''
    })
    .sort((pair) => {
      // console.log(Object.keys(pair)[0])
      return Object.keys(pair)[0] === 'key' ? -1 : 1
    })
    .map((pair) => {
      return Object.entries(pair).join('').replace(/,/, '=')
    })
    .join('&')
  )
}
export function prepareUrl (route, params, urlBase = defaultBase){
  return `${urlBase}${route}${serializeObjs(params)}`
}

export function nestParams (rawUrl, parentKey) {
  var re = new RegExp('&([a-zA-Z]*)=', 'g')
  return rawUrl.replace(re, `&${parentKey}[$1]=`)
}
