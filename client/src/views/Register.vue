<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5" color="purple lighten-5">
                    <v-card-title >
                        Register
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="registerUser" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="username" v-model="user.username" prepend-icon="mdi-account"></v-text-field>
                    <v-text-field label="email" v-model="user.email" prepend-icon="mdi-at" ></v-text-field>                   
                    <v-text-field
                      v-model="user.password"
                      label="password"

                      prepend-inner-icon="mdi-key"

              />
                    <v-btn type="submit" class="mt-3" color="deep-purple accent-1">Register</v-btn>      
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default{
    data(){
        return{
           
            user:{
               username:"",
               email:"",
               password:"",
               
            },

        };
    },
    methods:{
        async  registerUser(){
            const response = await fetch("https://skin-care-tips.herokuapp.com/api/user/register/",{
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
            //setHasRegistered(true);
            this.$router.push({
                   name: 'login',
                   params: {message: response.message}
               });
        }
    },
};
</script>

