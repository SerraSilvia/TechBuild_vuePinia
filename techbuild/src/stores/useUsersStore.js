import { defineStore } from 'pinia'


export const useUserStore = defineStore('storeUser', {
  state: () => ({
    // valors per defecte
    userName: 'Silvia', 
    role: 'Programadora',
    github: 'https://github.com/'
  }),
  actions: {
    actualUser(user) {
      this.userName = user.userName
      this.role = user.role
      this.github = user.github
    },
    visitaGitHub() {
      window.open(this.github, '_blank')
    }
  }
})