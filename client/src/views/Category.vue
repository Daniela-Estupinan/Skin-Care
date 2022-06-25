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
 <div class="col-md-6 "> 

</div>
  </div>
     </div>
  </div>
 
     <div class="col-md-8">
    <v-row>
    <v-col sm="4" class="pa-3" v-for="product in  filterProduct" :key="product._id">

       <v-card style="background: #CFD8DC" class="pa-0" :to="{ name:'product', params:{id:product._id}}" >
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
<v-col sm="4" class="pa-3" v-for="post in  filterPost" :key="post._id">
 <v-card style="background: #B2EBF2" class="pa-0" :to="{ name:'post', params:{id:post._id}}" >
 <v-card-text class="py-0" > POST </v-card-text>
<v-bnt class="m1-4 mt-3" small outlined color="violet">
            {{post.categoryName}}
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
      posts:[{"id":"1","title":"Bloq Solar", "categoryN":"1", 
      categoryName:"Piel Seca","content":"Bloq especial para piel seca"},
      {"id":"2","title":"Crema", "categoryN":"2", 
      categoryName:"Piel Mixta","content":"Crema"},
      {"id":"3","title":"Agua Miscelar", "categoryN":"3", 
      categoryName:"Piel Grasa","content":"Agua Miscelar especializada para piel grasa"}],
      selectedCategory:["0"],
      categorys:[{"id":"1","categoryN":1,"categoryName":"Piel Seca"},
      {"id":"2","categoryN":2,"categoryName":"Piel Mixta"},
      {"id":"3","categoryN":3,"categoryName":"Piel Grasa"},
      {"id":"4","categoryN":4,"categoryName":"Piel Normal"}],
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
    return this.filteredProductbyCategory(this.products)
  },
  filterPost:function(){
    return this.filterPostbyCategory(this.posts)
  }

},

methods: {
    filteredProductbyCategory: function(products) {  
       const categorys = this.selectedCategory;
      if (categorys.includes("0")){
        return products;
     } else
        return products.filter(category =>
          categorys.includes(category.categoryN.toString())
        );
    },
    filterPostbyCategory: function(){
        const postsC = this.selectedCategory;
        if(postsC.includes("0")){
            return this.posts;
        } else
        return this.posts.filter(category =>
        postsC.includes(category.categoryN.toString()))
    }
  }
};
</script>

