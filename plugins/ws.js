import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

export default (_, inject) => {
  if (process.env.WS_HOST && process.env.WS_KEY) {
    const echo = new Echo({
      broadcaster: process.env.WS_BROADCASTER,
      key: process.env.WS_KEY,
      secret: process.env.WS_SECRET,
      wsHost: process.env.WS_HOST,
      wsPort: process.env.WS_PORT,
      wssPort: process.env.WSS_PORT,
      encrypted: process.env.WS_ENCRYPTED && process.env.WS_ENCRYPTED === 'true' ? true : false,
      disableStats: process.env.WS_DISABLE_STATS && process.env.WS_DISABLE_STATS === 'true' ? true : false,
      cluster: process.env.WS_CLUSTER ? process.env.WS_CLUSTER : 'mt1',
      forceTLS: process.env.WS_FORCE_TLS && process.env.WS_FORCE_TLS === 'true' ? true : false,
      enabledTransports: ['ws', 'wss'],
      disabledTransports: ['sockjs', 'xhr_polling', 'xhr_streaming']
    })
    inject('echo', echo)
  }
}
