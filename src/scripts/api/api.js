const fetch = (path, verb = 'GET', options = { default: "Lorum ipsum" }) => new Promise((resolve) => {
  setTimeout(() => resolve(options.default), 1000)
})

class API {
  motd() {
    return fetch('/api/v1/motd')
  }
}

export default new API()
