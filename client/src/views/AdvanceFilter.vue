<template>
<v-app style="background: #FFCDD2">
    <div class="container" id="app">
  <div class="row ">
    <div class="col-md-6">
      <div class="filter">
        <span class="mdi mdi-filter">Filtro Categoria</span><div></div> 
        <label><input type="checkbox" v-model="selectedCategory" value="0"/> Todos </label>
        <label><input type="checkbox" v-model="selectedCategory" value="1" /> Piel Seca </label>
        <label><input type="checkbox" v-model="selectedCategory" value="2"/> Piel Mixta </label>
        <label><input type="checkbox" v-model="selectedCategory" value="3" /> Piel Grasa </label>
        <label><input type="checkbox" v-model="selectedCategory" value="4" /> Piel Normal </label> 
        <div></div><span class="mdi mdi-filter">Filtro Precio</span><div></div>  
        <label><input type="checkbox" v-model="range" value="0" />Todos </label>    
        <label><input type="checkbox" v-model="range" value="1" /> $5-$10 </label>
        <label><input type="checkbox" v-model="range" value="2" /> $11-$15 </label> 
        <label><input type="checkbox" v-model="range" value="3" /> $16-$20 </label> 
        <label><input type="checkbox" v-model="range" value="4" /> $21-$30 </label> 
        <label><input type="checkbox" v-model="range" value="5" /> $30-$50 </label>  
 <div class="col-md-6 "> 

</div>
  </div>
     </div>
  </div>
 
     <div class="col-md-8">
    <v-row>
    <v-col sm="4" class="pa-3" v-for="product in  filterProduct" :key="product._id">
       <v-card class="pa-0" :to="{ name:'product', params:{id:product._id}}" >
          <v-card-text class="py-0">
            {{product.category}}
          </v-card-text>
          <v-card-title class="headline">
            {{product.nombre}}- $ {{product.price}}
          </v-card-title>
          <v-card-text class="py-0" >
            <p>
              {{product.content.substring(0, 100)+"..."}}
            </p>
          </v-card-text>
        </v-card>
    </v-col>
    </v-row>
    </div>
  </div>
</v-app>
</template>
<script>
import API from "../api-admin.js"
export default{
    
  name:'AdvanceFilter',
  data () {
    return {
      products: [],
      selectedCategory: ["0"],
      range:["0"],
    }
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
        this.products = await API.getAllProducts();
      }

      },

computed:{
  filterProduct: function(){
    return this.filteredProductbyCategory(this.filterProductsByPrice(this.products))
  }
},

methods: {
    filteredProductbyCategory: function(products) {  
       const categorys = this.selectedCategory;
      if (categorys.includes("0")){
        return products;
     } else
        return products.filter(product =>
          categorys.includes(product.categoryN.toString())
        );
    },
    filterProductsByPrice: function(products) {
      const ranges = this.range;
        if (ranges.includes("0")){
        return products;
     } else
       return products.filter(product=>
        
        ranges.includes(product.priceR.toString())   
        );
      
    },
  }
};
</script>

