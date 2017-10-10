export const currentUser = state => !state.user ? state.user = localStorage.getItem('email') : localStorage.getItem('email')

export const isAuthenticated = state => state.token !== null

