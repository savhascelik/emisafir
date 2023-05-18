<template>


<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Rapor Çıktıları İçin Tıklayınız</h5>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-6 gap-3">
        <a @click="gotoCurrentStatus()" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
 
            <div class="text-left">
                <div class="mb-1 text-xs">Mevcut Durum</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Mevcut misafir durumu </div>
            </div>
        </a>
        <a @click="gotoFloorSum()" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg class="mr-3 w-7 h-7"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <div class="text-left" >
                <div class="mb-1 text-xs">Kat Toplamları</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Kat misafir sayısı</div>
            </div>
        </a>
        <a @click="develop()" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg class="mr-3 w-7 h-7"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>


          <div class="text-left">
                <div class="mb-1 text-xs">Aile Listesi</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Kat misafir sayısı</div>
            </div>
        </a>

        <a @click="develop()" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg class="mr-3 w-7 h-7"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>


          <div class="text-left">
                <div class="mb-1 text-xs">Hasta </div>
                <div class="-mt-1 font-sans text-sm font-semibold">Hasta Listesi</div>
            </div>
        </a>

        
    </div>
</div>


</template>

<script>
import axios from 'axios';
import './../../node_modules/vue-toast-notification/dist/theme-bootstrap.css';
import {useToast} from 'vue-toast-notification';

const $toast = useToast();

export default {
  name:'reports',
  methods:{
    gotoFloorSum(){
      
      const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
                responseType: 'blob'
            };


            axios.get(this.$store.state.apiUrl + this.$store.state.gettofloorsumpdf,  config)
                .then((response) => {
                    $toast.success("  pdf verisi Verisi getirildi")
                    const downloadUrl = window.URL.createObjectURL(response.data)

                    // open pdf file on new tab
                    window.open(downloadUrl, '__blank')

                    // remove temp url
                })
                .catch((error) => {
                    $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);
    },
    gotoCurrentStatus(){
      
      const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
                responseType: 'blob'
            };


            axios.get(this.$store.state.apiUrl + this.$store.state.gotoCurrentStatus,  config)
                .then((response) => {
                    $toast.success("  pdf verisi Verisi getirildi")
                    const downloadUrl = window.URL.createObjectURL(response.data)

                    // open pdf file on new tab
                    window.open(downloadUrl, '__blank')

                    // remove temp url
                })
                .catch((error) => {
                    $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);
    },
    develop(){
      alert("geliştirme aşamasında")
    }
  }
}

</script>
