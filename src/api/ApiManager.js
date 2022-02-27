const BASE_URL = process.env.REACT_APP_BASE_URL
//const BASE_URL = "http://localhost:3001"

export default class ApiManager {
  static async getFoodList(foodName) {
    try {
      return await fetch(`https://dojigiri.top/hackathon/api/${foodName}`)
        .then(res => res.json())
    } catch (error) {
      console.log(error)
      return [];
    }
  }
}
