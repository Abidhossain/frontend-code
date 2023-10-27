<template>
  <div>
    <form @submit.prevent="loginUser">
      <input v-model="user.email" type="email" placeholder="Email">
      <br><span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span><br>
      <input v-model="user.password" type="password" placeholder="Password">
      <br><span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span><br>
      <button class="btn btn-sm btn-success" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {BASE_URL} from "@/endpoints";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      errors: {}
    };
  },
  methods: {
    loginUser() {
      axios.post(`${BASE_URL}/api/auth/login`, this.user)
          .then(response => {
            const token = response.data.token;

            localStorage.setItem('token', token);

            this.$router.push('/dashboard');
          }).catch(({response}) => {
        this.errors = response.data.errors
      })

    },
  }
}
</script>