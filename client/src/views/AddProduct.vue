<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5" color="purple lighten-5">
                    <v-card-title >
                        Add New Product
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Nombre" v-model="products.nombre" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Category ID" v-model="products.categoryN" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                    <v-text-field label="Category" v-model="products.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>                    
                    <v-text-field label="Price Range" v-model="products.priceR" prepend-icon="mdi-currency-usd" :rules="rules"></v-text-field> 
                    <v-text-field label="Price" v-model="products.price" prepend-icon="mdi-currency-usd" :rules="rules"></v-text-field>                                                       
                    <v-textarea label="Content" v-model="products.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>     
                    <v-btn type="submit" class="mt-3" color="deep-purple accent-1">Add Product</v-btn>      
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from "../api-admin.js"
export default{
    data(){
        return{
            rules:[(value)=> !!value || "*This field is required*"],
            products:{
                nombre:"",
                categoryN:"",
                category:"",
                content:"",
                
            },

        };
    },
    methods:{
        
        async submitForm(){
            /*const response = await fetch("http://localhost:5000/api/admin/login/");
      if(localStorage.getItem("token")===null){
        
        
        this.$router.push({
                   name: 'login',
                  params: {message: response.message}
               });
      }else{*/
             const formData = new FormData();
            
            formData.append('nombre', this.products.nombre);
           formData.append('category', this.products.category);
           formData.append('content', this.products.content);
           formData.append('categoryN',this.products.categoryN);
           formData.append('priceR', this.product.priceR);
           formData.append('price',this.product.price);

           if(this.$refs.form.validate()){
               const response = await API.addProducts(formData);
               this.$router.push({
                   name: 'homeAdmin',
                   params: {message: response.message}

               });
           }      
      }

        },
    };

</script>
