const TOKEN_KEY = 'access_token'
const USER = 'user'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken (accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  },

  getUserInstance () {
    return JSON.parse(localStorage.getItem(USER))
  },

  saveUserInstance (user) {
    localStorage.setItem(USER, JSON.stringify(user))
  },

  removeUserInstance () {
    localStorage.removeItem(USER)
  }
}

export { TokenService }
