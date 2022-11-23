import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

export default (_, inject) => {
  if (process.env.WS_HOST && process.env.WS_KEY) {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: process.env.WS_KEY,
      secret: process.env.WS_SECRET,
      wsHost: process.env.WS_HOST,
      wsPort: process.env.WS_PORT,
      wssPort: process.env.WSS_PORT,
      encrypted: false,
      disableStats: true,
      cluster: 'mt1',
      forceTLS: false,
      enabledTransports: ['ws', 'wss'],
      disabledTransports: ['sockjs', 'xhr_polling', 'xhr_streaming']
    })
    inject('echo', echo)
  }
}
