<template>
  <v-app style="background: #FFCDD2">
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center" >
      <v-col cols="10" lg="7" class="mx-auto" >
        <v-card class="pa-5">
          <div class="text-center">
            <v-avatar size="100" color="purple lighten-5">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="indigo--text">Skin Care Login</h2>
          </div>
              <v-list-item-title>
               Admin login <router-link to="/admin">here</router-link>
             </v-list-item-title>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="user.email"
                
                label="email"
  
                prepend-inner-icon="mdi-account"

              />
              <v-text-field
                      v-model="user.password"
                    label="password"
  
                      prepend-inner-icon="mdi-key"

              />
             <v-list-item-subtitle>
                 Don't have and account yet click <router-link to="/register">here</router-link>
             </v-list-item-subtitle>

            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn  type="submit" color="deep-purple accent-1">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>

export default{
    data(){
        return{
            user:{
               email:"",
               password:"",
               
            },
        };
    },
 methods:{
        async  submitHandler(){
            const response = await fetch("https://skin-care-tips.herokuapp.com/api/user/login/",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    data:this.user,
                }),
            });
            
            if(!response.ok) return console.log(response.status);
            const data = await response.json();
              
            localStorage.setItem("token", JSON.stringify(data.token));
          //  setHasRegistered(true);
          
          this.$router.push({
                   name: 'home',
                   params: {message: response.message}
               });

        }
    },
};
</script>