const dinner = {
  meal: 'tacos',
}
const handler = {
  // target, prop, receiver
  // get(target, prop, receiver) {
  get() {
    console.log('intercepted!')
    return Reflect.get(...arguments)
  },
}

const proxy = new Proxy(dinner, handler)

console.log(proxy.meal)
