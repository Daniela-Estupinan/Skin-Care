<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>
                        Edit this Product
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Nombre" v-model="product.nombre" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Category ID" v-model="product.categoryN" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                    <v-text-field label="Category" v-model="product.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>  
                    <v-text-field label="Price Range" v-model="product.priceR" prepend-icon="mdi-coin" :rules="rules"></v-text-field> 
                    <v-text-field label="Price" v-model="product.price" prepend-icon="mdi-coin" :rules="rules"></v-text-field>                                   
                    <v-textarea label="Content" v-model="product.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>     
                    <v-btn type="submit" class="mt-3" color="success">Update Product</v-btn>      
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
            rules:[(value)=> !!value || "This field is required*"],
            product:{
                nombre:"",
                categoryN:"",               
                category:"",
                content:"",
                priceR:"",
                price:"",

            },
        };
    },
    async created(){
        const response = await API.getProductsByID(this.$route.params.id);
        this.product = response;
    },
    methods:{
        
        async updateForm(){
            const formData = new FormData();
           
            formData.append('nombre', this.product.nombre);
            formData.append('categoryN',this.product.categoryN);
           formData.append('category', this.product.category);
           formData.append('content', this.product.content);
           formData.append('priceR', this.product.priceR);
           formData.append('price',this.product.price);



           if(this.$refs.form.validate()){
               const response = await API.updateProducts(this.$route.params.id, formData);
              
               this.$router.push({
                   name: 'homeAdmin',
                   params: {message: response.message}
               });
           }
        },
    },
};

</script>
