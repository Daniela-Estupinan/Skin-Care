
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Daniela Estupinan
          </v-list-item-title>
          <v-list-item-subtitle>
             Skin Care Tips
          </v-list-item-subtitle>
          
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense >
      <v-list-item-group
        
        color="deep-purple accent-2"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color = "purple accent-1" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-col class="d-flex justify-space-around">
         <v-toolbar-title >
            Skin Care Tips
         </v-toolbar-title>
        <v-btn color = "red" text @click="removeToken" elevation="2" large>
             LogOut
      </v-btn>
        </v-col>

    </v-app-bar>

    <v-main>
      <router-view>
          
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
          items: [
        { title: 'Log In', icon:'mdi-login', link:"/"},
        { title: 'Home', icon: 'mdi-home',link:"/home" },
        { title: 'Add Post', icon: 'mdi-note-plus',link:"/add-post" },
        { title: 'Productos', icon: 'mdi-shopping',link:"/about" },
        { title: 'Category', icon: 'mdi-chart-bubble',link:"/category" },
        
      ],
     }),
         methods:{
             async removeToken(){
                 const response = await fetch("https://skin-care-tips.herokuapp.com/api/user/login/");
                 localStorage.clear();
                   this.$router.push({
                   name: 'login',
                   params: {message: response.message}
               });

            }

    }
  }
  
</script>

