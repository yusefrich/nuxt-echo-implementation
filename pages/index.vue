<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    this.$echo.channel('game')
      .listenToAll((event, data) => {
        data.message.forEach(el => {
          console.log('ws message -> ', { event, data })
        })
      })
  }
}
</script>
