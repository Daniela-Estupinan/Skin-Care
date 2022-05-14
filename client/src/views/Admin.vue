<template>
  <v-app style="background: #FFCDD2">
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center" >
      <v-col cols="10" lg="7" class="mx-auto" >
        <v-card class="pa-5">
          <div class="text-center">
            <v-avatar size="100" color="purple lighten-5">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="indigo--text">Admin Login</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="admin.email"
                
                label="email"
  
                prepend-inner-icon="mdi-account"

              />
              <v-text-field
                      v-model="admin.password"
                    label="password"
  
                      prepend-inner-icon="mdi-key"

              />

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
            admin:{
               email:"",
               password:"",
               
            },
        };
    },
 methods:{
        async submitHandler(){
            const response = await fetch("http://localhost:5000/api/admin/login/",{

                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(
                    this.admin,
                ),
            });
            console.log(response);
            if(!response.ok) return console.log(response.status,);
            const data = await response.json();
              
            localStorage.setItem("token", JSON.stringify(data.token));
          //  setHasRegistered(true);
          
          this.$router.push({
                   name: 'homeAdmin',
                   params: {message: response.message}
               });

        }
    },
};
</script>

