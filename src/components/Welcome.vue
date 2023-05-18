<script setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import {  ref} from 'vue';
import PrintPage from '@/components/PrintPage.vue';
import roomCreate from '@/components/roomCreate.vue';
import WelcomeGuests from '@/components/WelcomeGuests.vue';

const addRommsFor =ref(null)
const addRooms = () => {
    addRommsFor.value = true;
};
</script>

<template>
<PrintPage ref="frame" />

    <div>
        <div class="p-6 lg:p-8 bg-white border-b border-gray-200 justify-between">
            <ApplicationLogo class="block h-12 w-auto" />

            <h1 class="mt-8 text-2xl font-medium text-gray-900">
               "Konuk" Uygulamasına Hoş Geldiniz
            </h1>

            
            <div class="flex justify-end mt-4  gap-2">

            <router-link

                to="/fastaddguest"
                custom
                v-slot="{ href,navigate }"
                >
            <a :href="href"  @click="navigate" class="flex items-center justify-center px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
            <span>Hızlı Konuk Kaydı</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            </a>
            </router-link>

            <button  class=" flex items-center justify-center  px-3 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600" @click="generateReport()">
            <svg class="h-6 w-5 text-white-500 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />  <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />  <rect x="7" y="13" width="10" height="8" rx="2" /></svg>
            </button>

            </div>


        </div>


        <WelcomeGuests></WelcomeGuests>

        <div class="fragment"  ref="fragment">



        <div class="flex justify-center h-48 z-0 opacity-25">
      <img :src="logo" />

    </div>

<div class="bg-white py-24 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Toplam Konuk</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">12 Kişi</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Erkek Konuk</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">9</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Kadın Konuk</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">3</dd>
      </div>

      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Çocuk Konuk</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">0</dd>
      </div>
    </dl>
  </div>
</div>
<!--

        <div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-8">
            <div>
                <div class="">

                    <h2 class=" text-xl font-semibold text-gray-900">
                        <a href="https://laravel.com/docs">Odalar Dağılımı</a>
                    </h2>
                </div>

                <div class="w-48 h-72 flex items-center">
                    

                    <Pie :data="city.data" :options="city.options" />

                </div>


            </div>

            <div>
                <div class="">
 
                    <h2 class=" text-xl font-semibold text-gray-900">
                        <a href="https://laravel.com/docs">Ülkelere göre dağılım</a>
                    </h2>
                </div>
                <div class="w-48 h-72 flex items-center">
                    

                    <Pie :data="country.data" :options="country.options" />

                </div>



     
            </div>



            <div>



            </div>
        </div>
-->

    </div>

        <roomCreate :show="addRommsFor != null" @close="addRommsFor=null" :addRoomForm="addRoomForm"    ></roomCreate>

    </div>
</template>
<script>
import logo from '@/assets/img/ggm_logo.jpg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,Title,BarElement,CategoryScale,LinearScale } from 'chart.js'
import { Pie } from 'vue-chartjs'
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend,Title,BarElement,CategoryScale,LinearScale )



export default {
name:'Welcome',

data(){
    return{
        logo:logo,

        country: {
            data:{
                labels:['Afganistan','Suriye'],

        datasets: [{ data: [40, 20],
            backgroundColor: [this.randomcolor(), this.randomcolor()],
        }]

            },
        
        options: {
        responsive: true,
        maintainAspectRatio: false
      },
      },
      
      city: {
            data:{
                labels:['A-22','D-100','A-12'],

        datasets: [{ data: [34, 66,43],
            backgroundColor: [this.randomcolor(), this.randomcolor(),this.randomcolor()],
        }]

            },
        
        options: {
        responsive: true,
        maintainAspectRatio: false
      },
      },
      rooms:[],
      road:[],
      labels:[]
   }
},
methods:{
    randomcolor(){
        let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    console.log(color);
    return color;
    },
    getallroom(){

        
        const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.get(this.$store.state.apiUrl+this.$store.state.apiAllRoom, config)
                        .then((response)=> {
                        console.log("  Oda Verisi Güncellendi")
                        console.log(this.country)

                        this.rooms=response.data.data
                        })
                        .catch((error)=> {
                            console.log("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                        }).finally(() => this.loading = false);
    },
    getfullname (){
        this.rooms.map(room => {return room.room.name});
      },
      generateReport () {
            this.$refs.frame.print(this.$refs.fragment);

        },
},
mounted(){

    this.getallroom()
},
  computed :{

    }
}
</script>
