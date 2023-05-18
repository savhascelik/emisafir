<script setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import {  ref} from 'vue';

import roomCreate from '@/components/roomCreate.vue';

const addRommsFor =ref(null)
const addRooms = () => {
    addRommsFor.value = true;
};
</script>

<template>
    <div>


        <div class="  flex items-center justify-center">
  <div class="container  mx-auto">
    <div>

      <div class="bg-white rounded  p-4 px-4 md:p-8 mb-6">

        <div class="grid grid-cols-2 gap-6  " v-for="(organisati,count) in organisation" :key="count">



   
  


              <div >
                <label for="country">diğer odalar</label  >
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="organisati.Blokname" :name="organisation[count][Blokname]" id="country" type="text" placeholder="Blok adı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

                </div>
                
              </div>

              <div class="">
                <label for="state">Kat Sayısı</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="organisati.floornumber" :name="organisation[count][floornumber]" id="state" type="number" placeholder="Kat sayısı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>


     
          </div>


            <div class="md:col-span-5 text-right mt-3">



                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" @click="addOrganisation()">Blok ekle</button>
                </div>
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="submit()">Kaydet</button>
                </div>



        </div>
      </div>
    </div>

    <a href="/" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
    </a>
  </div>
</div>


     

    </div>
</template>
<script>
import axios from 'axios';

const floors=ref(null)

export default {
name: "Setting",
  
  data(){
    return { 
    organisation: [
      {
        Blokname: "",
        floornumber: '',
     
      }
    ]
  }
},
 methods: {
    addOrganisation() {
      this.organisation.push({
        Blokname: '',
        floornumber: ''
      })
    },

    submit () {
      const data = {
        organisation: this.organisation
      }
      alert(JSON.stringify(data, null, 2))
    }
  },
  mounted(){
    alert("bağlandı")
  }
};
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
.work-experiences > div:not(:last-child) {
  border-bottom: 1px solid rgb(206, 212, 218);
}
</style>