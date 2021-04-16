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
        <button class="font-bold bg-gray-300 px-5 py-1 rounded shadow mt-3">Edit</button>
        

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
        <button class="font-bold bg-gray-300 px-5 py-1 rounded shadow mt-3">Edit</button>

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
        <button class="font-bold bg-gray-300 px-5 py-1 rounded shadow mt-3">Edit</button>

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
        <button class="font-bold bg-gray-300 px-5 py-1 rounded shadow mt-3">Edit</button>

      </div>
    </div>
    
  </div>
  </div>
 
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      free: '0',
      standard: '19',
      bussiness: '99',
      pro: '199'
    }
  }}
  

</script>
