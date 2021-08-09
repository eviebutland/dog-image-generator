import axios from 'axios'

export const state = () => ({ // should always be a function
  breeds: []
})

export const mutations = { // should always be an objects (actions also should be an object )
  updateBreeds(state, data) {
    state.breeds = data
  }
}

export const getters = {
  async getAllDogBreeds(){
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all")
      const data  = res.data.message
      return Object.keys(data)
    } catch(error){
      console.log(error)
    }
  }
}