<template>

    <add-card>
      <div class="flex text-sm mt-2">
        
      </div>
      <form @submit.prevent="submitForm">
        <textarea
          placeholder="insert your note .."
          class="textArea ring-2 ring-gray-300"
          :class="{' ring-offset-sea-light': invalidInput,'ring-offset-salmon-dark': !invalidInput}"
          type="text"
          v-model="featureText"
          @blur="validating"
        ></textarea>
        <button class="btn" @click="validating">Submit</button>
      </form>
    </add-card>

   
    
    <div class="flex  justify-center flex-wrap">
      <div class="container p-4 max-w-xs shadow rounded m-4 dark:bg-gray-800 dark:text-gray-200 bg-salmon-light" 
        v-for="feature in Features" :key="feature.datetime">
      <feature-item :feature="feature" @click-edit="showData" @click-delete="deleteData" />
      </div>
    </div>
   
</template>

<script>
import AddCard from "@/components/AddFeature.vue";
const axios = require("axios");

export default {
  components: {
    AddCard,
  },
  data() {
    return {
      url: "http://localhost:5000/Feature",
      featureText: "",
      datetime: "",
      invalidInput: false,
      Features: [],
      isEdit:false
      
    };
  },
  methods: {
    submitForm() {
      this.invalidInput = this.featureText === "" ? true : false;
      var time = new Date();
      if (this.featureText !== "") {
        
        if (this.isEdit) {
          this.editFeature({
            id: this.editId,
            datetime: time.toLocaleString("en-GB", { hour12: true }),
            title: this.featureText,
          });
        } else {
          this.addNewFeature({
            datetime: time.toLocaleString("en-GB", { hour12: true }),
            title: this.featureText,
          });
        }
      }
      this.featureText = "";
      this.datetime = "";

    
    },
  
    validating() {
      this.invalidInput = this.featureText === "" ? true : false;
    },
    focusIn() {
      this.invalidInput = !this.invalidInput === "" ? true : false;
    },
    showData(oldFeature) {
      this.isEdit = true;
      this.editId = oldFeature.id;
      this.featureText = oldFeature.title;
      this.datetime = oldFeature.datetime;
    },

    async editFeature(editingFeature) {
      try {
        const res = await fetch(`${this.url}/${editingFeature.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: editingFeature.title,
            datetime: editingFeature.datetime,
          }),
        });
        const data = await res.json();
        this.Features = this.Features.map((survey) =>
          survey.id === editingFeature.id
            ? { ...survey, title: data.title, datetime: data.datetime }
            : survey
        );
        this.isEdit = false;
        this.editId = "";
        this.featureText = "";
        this.datetime = "";
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },

    async getNoteResult() {
      try {
        const res = await fetch(this.url);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },

   
    
    deleteData(id){
      axios.delete(this.url + '/' + id).then((response) => {
        return response.data
      }).catch((error) => {
        console.log(error)
      }).then(() => {
        this.Features = this.Features.filter(
        (note) => note.id !== id);
      })
    },

    async addNewFeature(newNote) {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: newNote.title,
            datetime: newNote.datetime,
          }),
        });
        const data = await res.json();
        this.Features = [...this.Features, data];
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    }
  },

  async created() {
    this.Features = await this.getNoteResult();
  },
};
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
