import axios from 'axios'



const URL = 'http://api.edamam.com/'

export default {
	state: {
		loading: false,
		prodsArray: [],
		images: [],
		// temp_images: [],
	},
	// 
	mutations: {
		mutateProducts(state, payload) {
		},
		toggleLoading(state) {
			state.loading = !state.loading
		}
	},
	// 
	actions: {
		fetchProducts({ state, commit }) {
			https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id={your app_id}&app_key={your app_key}
			commit('toggleLoading')
			axios.get(`${URL}/api/food-database/parser?`).then(res => {
				commit('toggleLoading')
				state.prodsArray = res.data
			})
		},
		uploadImages({ state, commit }, e) {
			commit('toggleLoading')
			state.temp_images.map(image => {
				const data = new FormData()
				data.append('file', image)
				axios.post(`${URL}/api/images`, data).then(res => {
					commit('toggleLoading')
					e.target.reset()
					state.temp_images = []
					commit('addImage', res.data)
				})
			})
		}
	},
	getters:{
		getProds(){
			return state.prodsArray;
		}
	}
})