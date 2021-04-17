<template>
   <div>
       <div class="flex justify-items-center place-self-center mx-36 mt-10">
    <div class="  pb-40 flex-auto">
      <div class=" bg-gray-400  pt-10 ">
      <h2>Free</h2>
      <h1 class="text-7xl">$</h1>
      <h1 class="text-7xl">{{free}}</h1>
      
       <input class="input " v-model="num">
       <button class="px-2 rounded ml-2 bg-green-400" v-on:click="setFree(num)">Add</button>
       <!-- <about setStandard(standard)></about> -->
       
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
       
       <input class="input " v-model="num1">
       <button class="px-2 rounded ml-2 bg-green-400" v-on:click="setStandard(num1)">Add</button>
       <!-- <about setStandard(standard)></about> -->
       
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
       
       <input class="input " v-model="num2">
       <button class="px-2 rounded ml-2 bg-green-400" v-on:click="setBussines(num2)">Add</button>
       <!-- <about setStandard(standard)></about> -->
      
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
       
       <input class="input " v-model="num3">
       <button class="px-2 rounded ml-2 bg-green-400" v-on:click="setPro(num3)">Add</button>
       <!-- <about setStandard(standard)></about> -->
       
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
   </div>
</template>

<script>

// import About from './About.vue' 

import axios from 'axios'
export default {
  name: 'edit',
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
      const res = await axios.get(`http://localhost:3000/price`)

      this.prices = res.data;
    } catch(e) {
      console.error(e)
    }
  },
   methods: {
     setFree(num) {
       this.free = num
      
     },
     setStandard(num1) {
       this.standard = num1
      

     },
     setBussines(num2) {
       this.bussiness = num2
       

     },
     setPro(num3) {
       this.pro = num3
       

     }
   }
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