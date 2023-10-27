<template>
  <div>
   <div class="row">
     <div class="col-md-3"></div>
     <div class="col-md-6">
       <table class="table">
         <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Image</th>
           <th scope="col">Name</th>
           <th scope="col">Price</th>
           <th scope="col">Category</th>
         </tr>
         </thead>
         <tbody>
         <tr v-for="item in productList" :key="item.id">
           <td>{{ item.id }}</td>
           <td><img :src="imageGenerate(item.image)" height="40" width="60" alt=""></td>
           <td>{{ item.name }}</td>
           <td>{{ item.price }}</td>
           <td>{{ item.category.name }}</td>
         </tr>

         </tbody>
       </table>
     </div>
   </div>
  </div>
</template>

<script>
import axios from "axios";
import {BASE_URL} from "@/endpoints";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Products',
  data() {
    return {
      productList: []
    };
  },
  methods: {
    imageGenerate(path){
      return `${BASE_URL}/${path}`;
    },
    getProducts() {
      axios.get(`${BASE_URL}/api/auth/product`)
          .then(response => {
            this.productList = response.data

          }).catch(({response}) => {
        this.errors = response.data.errors
      })
    },
  },
  mounted(){
    this.getProducts()
  }
}
</script>