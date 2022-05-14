<template>
    <v-container>
        <v-row no-gutters> 
            <v-col sm="10" class="pa-4 mx-auto"> </v-col>
            <v-card class="pa-2">
                <v-card-actions class="pb-0">
                    <v-row class="mt-1 mx-1">
                        <v-col sm="2">
                            <v-btn small outlined color="pink">
                                {{product.category}}
                            </v-btn>
                        </v-col>
                        <v-col sm="10" class="d-flex justify-end">
                            <v-btn color="success" text :to="{name: 'edit-product', params:{id:product._id}}">
                                Edit
                            </v-btn>
                            <v-btn color = "red" text @click="removeProducts(product._id)">
                                Delete
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-subtitle class="headline">
                    <h3>{{product.nombre}}</h3>
                </v-card-subtitle>
                <v-card-text class="grey--text">
                    <p>{{product.content}}</p>   
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
import API from "../api-admin.js"
    export default{
        data(){
            return{
                product:{},
            };
        },
        async created(){
            const response = await API.getProductsByID(this.$route.params.id)
            this.product = response;
        },
        methods:{
            async removeProducts(id){
                const response = await API.deleteProducts(id);
                this.$router.push({name:'homeAdmin', 
                params:{message: response.message}});
            },
        },
    };
</script>
