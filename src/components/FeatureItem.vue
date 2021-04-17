<template>
    <div class="flex ">
        <h1 class="font-mono flex-1">Feature: {{ feature.title }}</h1>
        <button @click="showData(feature)" class="ml-2 bg-sea-dark rounded-md shadow-md py-1 px-3 font-mono">
        edit
        </button>
        <button @click="deleteData(feature.id)" class=" bg-salmon-darkest rounded-md py-1 shadow-md ml-3 px-2 font-mono"  >
        delete
        </button>
    </div>
    
</template>

<script>
export default {
    props:{
        feature:Object,
    },
    methods: {
        showData(){
            this.$emit('click-edit',this.feature)
        },
        deleteData(){
            this.$emit('click-delete', this.feature.id)
        }
    },
}
</script>
