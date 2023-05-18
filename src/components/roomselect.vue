<script setup>
import {defineProps } from 'vue';


const props=defineProps({
    floor_id:String,
})


</script>

<template>
<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white ml-2 mr-2 text-center">Oda Seçimi</h3>
<ul class=" flex justify-center gap-2 ml-2 mr-2 animate-pulse p-6">
    
    <li v-for="(room,count) in rooms" :key="count" @click="selectedfloor(room.id)" class="relative">
      <div class="md:absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 right-2 dark:border-gray-900">{{ room.room_using_status }}</div>

        <input type="checkbox" :id="'react-option'+count" value="" class="hidden peer" required="">
        <label :for="'react-option'+count" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block justify-center">

                <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect width="6" height="6" x="9" y="5" rx="1" />  <line x1="4" y1="7" x2="5" y2="7" />  <line x1="4" y1="11" x2="5" y2="11" />  <line x1="19" y1="7" x2="20" y2="7" />  <line x1="19" y1="11" x2="20" y2="11" />  <line x1="4" y1="15" x2="20" y2="15" />  <line x1="4" y1="19" x2="20" y2="19" /></svg>
                <div class="w-full text-lg font-semibold">{{ room.room_name }}</div>
                
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="'width:'+ statusUsing(room.room_capacity,room.room_using_status)  +'%'"> {{statusUsing(room.room_capacity,room.room_using_status)}}%</div>
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

    rooms:[]
    }
    },
    methods:{
    statusUsing(capacity,using){
            return Math.floor((using/capacity)*100);

        },
        getallroom() {


            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
            };

            axios.post(this.$store.state.apiUrl + this.$store.state.getselectrooms, {
                floors_id: this.$props.floor_id
            }, config)
                .then((response) => {
                    //$toast.success("  Oda verileri getirildi")

                    this.rooms=response.data.data
                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);

        },
        selectedfloor(id){
            this.$emit('room_id', id)
    }
    },

    mounted(){
    this.getallroom()
    }

}
</script>