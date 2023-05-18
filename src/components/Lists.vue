<script setup>
import axios from 'axios';


</script>

<template><!-- component -->
    <section class="container px-4 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-end">
            <!--

            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white">Konuk Sayısı</h2>
    
                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 Konuk</span>
                </div>
    
            </div>
            -->

        </div>
    
        <div class="mt-6 md:flex md:items-center md:justify-between">

            <div data-html2canvas-ignore="true" class="mt-6 md:flex md:items-center md:justify-between">
                    <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200  sm:text-sm " :class="my_list ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="mylist()"  >
                            Listelerim 
                            
                        </a>
            
                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm "  :class="other_list ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="otherlist()">
                            Diğer Listeler
                        </a>
            
                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm"  :class="close_list ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="closelist()">
                            Kapalı Listelerim
                        </a>


                    </div>
            
                
                </div>
            <!--

            <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                    Müsait Odalar
                </button>
    
                <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    Hepsi
                </button>
    
                <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    Dolu Odalar
                </button>
            </div>
    
            <div class="relative flex items-center mt-4 md:mt-0">
                <span class="absolute">
                    <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
    
                <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            -->

        </div>
    
        <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <button class="flex items-center gap-x-3 focus:outline-none">
                                            <span>Liste Adı</span>
    
                                            <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </th>
    
                                    <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Durum
                                    </th>
    
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Hakkında
                                    </th>
    
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Konuk Sayısı</th>
    
    
                                    <th scope="col" class="relative py-3.5 px-4">
                                        <span class="sr-only">İşlemler</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                <tr v-for="list in lists" :key="list.id">
                                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 class="font-medium text-gray-800 dark:text-white ">{{list.list_name}}</h2>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            {{list.status ? "açık":"kapalı"}}
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400">{{list.info}}</p>

                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">{{ list.list_buskets_count }} </p>
                                        </div>
                                    </td>
    
                
    
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
        

                                        <button  @click="gotoguestlist(list.id,list.list_name)" class="ml-1 bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">
                                        Konuk Listesi
                                        </button>
                                    </td>
                                </tr>
    

    

                            </tbody>
                        </table>
                                                <!-- API Token Permissions Modal -->

                    </div>
                </div>
            </div>
        </div>
    
        <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
             <!--
            <div class="text-sm text-gray-500 dark:text-gray-400">
               Page <span class="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
            </div>
    
            <div class="flex items-center mt-4 gap-x-4 sm:mt-0 mb-5">
                <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
    
                    <span>
                        previous
                    </span>
                </a>
    
                <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Next
                    </span>
    
                    <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
            -->
        </div>
    </section>
</template>

<script>
import {useToast} from 'vue-toast-notification';
import './../../node_modules/vue-toast-notification/dist/theme-bootstrap.css';


const $toast = useToast();


export default {
 
  name: 'Rooms',
  
  data() {
            return {
        my_list:true,
        other_list:false,
        close_list:false,
                lists:''
            }
        },

  methods:{


                async fetchData(){
                    if(this.$store.state.loginState)
                    {

                     const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.apiAllLists,{
                            token:this.$store.state.token_origin,
                        },config)
                        .then((response)=> {
                        //$toast.success("  Liste Verisi Güncellendi")
                        this.lists=response.data.data 
                        console.log(this.lists)
                        })
                        .catch((error)=> {
                        //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                        console.log(error.data.message)
                       alert(error)
                        }).finally(() => this.loading = false);
                    }
                    
        },
        gotoguestlist(id,name){

            this.$router.push({ name: 'listdetail', query: { list_id: id ,list_name:name } });
        },
        mylist(){
        this.my_list=true;
        this.other_list=false;
        this.close_list=false;
         this.lists=[];
                            if(this.$store.state.loginState)
                    {

                     const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.apiAllLists,{
                            token:this.$store.state.token_origin,
                        },config)
                        .then((response)=> {
                        //$toast.success("  Liste Verisi Güncellendi")
                        this.lists=response.data.data 
                        console.log(this.lists)
                        })
                        .catch((error)=> {
                        //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                        console.log(error.data.message)
                       alert(error)
                        }).finally(() => this.loading = false);
                    }
        },
        otherlist(){
          this.my_list=false;
        this.other_list=true;
        this.close_list=false;
                 this.lists=[];
                            if(this.$store.state.loginState)
                    {

                     const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.apiotherlist,{
                            token:this.$store.state.token_origin,
                        },config)
                        .then((response)=> {
                        //$toast.success("  Liste Verisi Güncellendi")
                        this.lists=response.data.data 
                        console.log(this.lists)
                        })
                        .catch((error)=> {
                        //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                        console.log(error.data.message)
                       alert(error)
                        }).finally(() => this.loading = false);
                    }
        },
        closelist(){
          this.my_list=false;
        this.other_list=false;
        this.close_list=true;
                 this.lists=[];
                            if(this.$store.state.loginState)
                    {

                     const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.apicloselist,{
                            token:this.$store.state.token_origin,
                        },config)
                        .then((response)=> {
                        //$toast.success("  Liste Verisi Güncellendi")
                        this.lists=response.data.data 
                        console.log(this.lists)
                        })
                        .catch((error)=> {
                        //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                        console.log(error.data.message)
                       alert(error)
                        }).finally(() => this.loading = false);
                    }
        
        },
            
        },
        mounted() {
      this.fetchData()
    }
  
}
</script>


