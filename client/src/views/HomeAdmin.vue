<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color = "green accent-4" dark
    dismissible v-if="this.$route.params.message">
    {{this.$route.params.message}}
    </v-alert>
    <v-row>
      <v-col sm="4" class="pa-3" v-for="product in products" :key="product._id">

        <v-card class="pa-1" :to="{ name:'product', params:{id:product._id}}" >
          <v-card-text class="py-0">
            {{product.category}}
          </v-card-text>
          <v-card-title class="headline">
            {{product.nombre}}
          </v-card-title>
          <v-card-text class="py-0" >
            <p>
              {{product.content.substring(0, 100)+"..."}}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api-admin.js"
  export default {
    name: 'HomeAdmin',
    data(){
      return{
        products:[],
      };
    },
    async created(){
      /*const response = await fetch("http://localhost:5000/api/user/login/");
      if(localStorage.getItem("token")===null){
        console.log(localStorage.getItem("token"));
        
        this.$router.push({
                   name: 'login',
                  params: {message: response.message}
               });
      }else{*/
        this.products = await API.getAllProducts();
      }

    };
</script>
 