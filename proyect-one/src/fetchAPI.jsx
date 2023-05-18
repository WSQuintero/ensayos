
export async function FetchData (endPoint) {
  const response = await fetch(`https://hp-api.onrender.com/api/${endPoint}`)
  const data = await response.json()
  return data
}
