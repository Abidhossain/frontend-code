<template>
  <div>
    <form @submit.prevent="submit" enctype="multipart/form-data">
      <select v-model="formData.category_id">
        <option value="">Choose Category</option>
        <template v-for="item in categoryList">
          <option :value="item.id" :key="item.id">{{item.name}}</option>
        </template>
      </select>
      <br><span class="text-danger" v-if="errors.category_id">{{ errors.category_id[0] }}</span><br>

      <input v-model="formData.name" type="text" placeholder="Name">
      <br><span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span><br>
      <input v-model="formData.price" type="number" placeholder="Price"><br><br>
      <textarea v-model="formData.description" type="text" placeholder="Description"></textarea> <br>

    <!-- <input @change="formData.price" type="file"> <br><br>-->

      <button class="btn btn-sm btn-success" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {BASE_URL} from "@/endpoints";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AddProduct',
  data() {
    return {
      formData: {
        name: '',
        description: '',
        price: '',
        category_id: ''
      },
      categoryList: [],
      errors: {}
    };
  },
  methods: {
    getCategories() {
      axios.get(`${BASE_URL}/api/auth/category`)
          .then(response => {
            this.categoryList = response.data;
          }).catch(({response}) => {
        this.errors = response.data.errors
      })
    },
    submit(){
      axios.post(`${BASE_URL}/api/auth/product`,this.formData)
          .then(() => {
            this.formData = {}
            alert('Product added successfully')
          }).catch(({response}) => {
        this.errors = response.data.errors
      })
    }
  },
  mounted (){
    this.getCategories()
  }
}
</script>