<template>
  <div class="about">
    <h1>Budget</h1>
     <div class="flex justify-items-center place-self-center mx-36 mt-10">
    <div class="  pb-40 flex-auto">
      <div class=" bg-gray-400  pt-10 ">
      <h2>Free</h2>
      <h1 class="text-7xl">$</h1>
      <h1 class="text-7xl">{{free}}</h1>
      <p class="place-self-end pt-28 pb-5">per month</p>
      </div>
      <div class="pt-5">
        <h3>1 User</h3>
        <h3>Feature 1</h3>

      </div>
      
      </div>
    <div class=" pb-40 flex-auto">
      <div class=" bg-gray-300  pt-10">
      <h2>Standard</h2>
      <h1 class="text-7xl">$</h1>
       <h1 class="text-7xl">{{standard}}</h1>
      <p class="place-self-end pt-28 pb-5">per month</p>
      </div>
      <div class="pt-5">
        <h3>15 User</h3>
        <h3>Feature 1</h3>
        <h3>Feature 2</h3>
        

      </div>
    </div>
    <div class=" pb-40 flex-auto ">
        <div class=" bg-gray-200  pt-10">
      <h2>Business</h2>
      <h1 class="text-7xl">$</h1>
       <h1 class="text-7xl">{{bussiness}}</h1>
      <p class=" place-self-end pt-28 pb-5">per month</p>
      </div>
      <div class="pt-5">
        <h3>50 User</h3>
       <h3>Feature 1</h3>
        <h3>Feature 2</h3>
        <h3>Feature 3</h3>
        

      </div>
    </div>
    <div class=" pb-40 flex-auto">
        <div class=" bg-gray-100  pt-10">
      <h2>Professional</h2>
      <h1 class="text-7xl">$</h1>
       <h1 class="text-7xl">{{pro}}</h1>
      <p class="place-self-end pt-28 pb-5">per month</p>
      </div>
      <div class="pt-5">
        <h3>Unlimited Users</h3>
        <h3>Feature 1</h3>
        <h3>Feature 2</h3>
        <h3>Feature 3</h3>
        <h3>Feature 4</h3>
        

      </div>
    </div>
    
  </div>
  <router-link to="/edit" class="pb-10 text-green-500 font-bold">Edit</router-link>
  </div>
 
</template>

<script>

import axios from 'axios'
export default {
  name: 'About',
  data() {
    return {
      prices: [],
      free: '0',
      standard: '19',
      bussiness: '99',
      pro: '199'
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:5000/price`)

      this.prices = res.data;
    } catch(e) {
      console.error(e)
    }
  },
   
     
   
  }
  

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>