<template>
    <div class="" v-if="loggedIn">
      <button @click="logout">Logout</button>
      <h2>The name is:{{user.name}}</h2>
      <h2>The email is:{{user.email}}</h2>
      <img :src="user.picture" alt="">
    </div>


   <div class="" v-else>
    <GoogleLogin :callback="callback" prompt auto-login/>
   </div>
</template>

<script>
 
import{decodeCredential, googleLogout} from 'vue3-google-login'

  export default {
    data(){
      return{

loggedIn:false,
user:null,


        callback: (response)=>{
          console.log("logged in")
          this.loggedIn=true
          console.log(response)
          this.user= decodeCredential(response.credential)
          console.log(user)
        }
      }
    },
    methods:{
      logout(){
        googleLogout()
        this.loggedIn=false
      }
    }
  }

</script>
