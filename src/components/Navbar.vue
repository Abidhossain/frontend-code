<template>
 <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">Home</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item active">
           <router-link to="/">Home</router-link>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Register</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Product list</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Add product</a>
         </li>
       </ul>
       <router-view/>
     </div>
   </nav>
 </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : 'Navbar',
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>
