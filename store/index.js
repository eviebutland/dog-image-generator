import axios from 'axios'

export const state = () => ({ // should always be a function
  breeds: [],
  currentBreed: ''
})

export const mutations = { // should always be an objects (actions also should be an object )
  updateBreeds(state, data) {
    state.breeds = data
  },
  updateCurrentBreed(state, data){
    state.currentBreed = data
    console.log('data', data)
  }
}
export const actions = { // these are for asynchronous

}
export const getters = {
  async getAllDogBreeds(){ // should this be using fetch method like in docs
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all")
      const data  = res.data.message
      return Object.keys(data)
    } catch(error){
      console.log(error)
    }
  }
}