<template>
<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white ml-2 mr-2 text-center">Blok Seçimi</h3>
<ul class=" flex justify-center gap-2 ml-2 mr-2 animate-pulse p-6">
    <li v-for="(block,count) in blocks" :key="count" @click="selectedblock(block.id)" class="relative">
      <div class="md:absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 right-2 dark:border-gray-900">{{block.block_using_status }}</div>

        <input type="checkbox" id="react-option" value="" class="hidden peer" required="">
        <label for="react-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block justify-center">
                <svg class="mb-2 w-7 h-7 text-sky-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <div class="w-full text-lg font-semibold">{{ block.block_name }}</div>
                
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="'width:'+ statusUsing(block.block_capacity,block.block_using_status)  +'%'"> {{statusUsing(block.block_capacity,block.block_using_status)}}%</div>
                </div>

            </div>
        </label>
    </li>

</ul>

</template>

<script>
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
const $toast = useToast();
 

export default {
    name:'blockfloorroom',
    data(){
    return { 

    blocks:[]
    }
    },
    methods:{
    getallBlock(){
      if(this.$store.state.loginState)
        {

          const config = {
                    headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                    };
            axios.get(this.$store.state.apiUrl+this.$store.state.getallblock, config)
            .then((response)=> {
            //$toast.success("  Blok Verisi Güncellendi")
            this.blocks=response.data.data 
            console.log( this.blocks)
            })
            .catch((error)=> {
            //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
            console.log(error.data.message)
            alert(error)
            }).finally(() => this.loading = false);
        }
    },
    statusUsing(capacity,using){
            return Math.floor((using/capacity)*100);

        },
        selectedblock(id){
            this.$emit('block_id', id)
    }
    },

    mounted(){
    this.getallBlock()
    }

}
</script>