  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue Hello',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
      }
    }
  }).mount('#root')