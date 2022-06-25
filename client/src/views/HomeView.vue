<template>

  <v-container>
    <v-alert border="left" close-text="Close Alert" color = "green accent-4" dark
    dismissible v-if="this.$route.params.message">
    {{this.$route.params.message}}
    </v-alert>
    <v-row>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">

        <v-card class="pa-1" :to="{ name:'post', params:{id:post._id}}" >
          <v-img height="250" :src="`/${post.image}`"></v-img>
          <v-bnt class="m1-4 mt-3" small outlined color="violet">
            {{post.category}}
          </v-bnt>
          <v-card-title class="headline">
            {{post.title}}
          </v-card-title>
          <v-card-text class="py-0" >
            <p>
              {{post.content.substring(0, 100)+"..."}}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api.js"
  export default {
    name: 'Home',
    data(){
      return{
        posts:[],
      };
    },
    async created(){
      const response = await fetch("https://skin-care-tips.herokuapp.com/api/user/login/");
      if(localStorage.getItem("token")===null){
        console.log(localStorage.getItem("token"));
        
        this.$router.push({
                   name: 'login',
                  params: {message: response.message}
               });
      }else{
        this.posts = await API.getAllPost();
      }

    },
  
    
  };
</script>
 