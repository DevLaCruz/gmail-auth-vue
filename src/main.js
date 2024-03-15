import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login';


const CLIENT_ID="1051188070161-kf49dk0dgbv3avcpe9v4qvrv09irvhhl.apps.googleusercontent.com"

createApp(App)
.use(vue3GoogleLogin,{
    clientId:CLIENT_ID,
})
.mount('#app')
