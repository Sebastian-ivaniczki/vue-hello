  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue Hello'
      }
    }
  }).mount('#root')