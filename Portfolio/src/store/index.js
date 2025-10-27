import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    // Add your state properties here
    user: null,
    isLoading: false
  }),
  
  getters: {
    // Add your computed properties here
    isAuthenticated: (state) => !!state.user
  },
  
  actions: {
    // Add your methods here
    setUser(user) {
      this.user = user
    },
    
    setLoading(status) {
      this.isLoading = status
    }
  }
})
