<script setup>
import { ref, defineEmits } from 'vue';
import PrintPage from '@/components/PrintPage.vue';
import PdfView from '@/components/PdfView.vue';

import axios from 'axios';
import roomCreate from '@/components/roomCreate.vue';

const addRommsFor = ref(null)
const addRooms = () => {
    addRommsFor.value = true;
};

</script>

<template>























    
    <!-- component -->

    <PdfView ref="pdfview" />
    <PrintPage ref="frame" />


    <section class="container px-4 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <!--<h2 class="text-lg font-medium text-gray-800 dark:text-white">Misafir Sayısı</h2>

                    <span
                        class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240
                        Misafir</span> -->
                </div>
                
          <div class="flex justify-center mt-3">
    
    <div   class="relative flex items-center mt-4 md:mt-0">
        <span class="absolute">
            <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </span>
      </div>

        <input type="text" placeholder="Arama Yapın" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">

        
    </div>

            </div>





        </div>
        <div ref="fragment">

            <div data-html2canvas-ignore="true" class="mt-6 md:flex md:items-center md:justify-between">
               <!-- 
                <div
                    class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button
                        class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                        Misafir
                    </button>

                    <button
                        class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Çıkış Yapanlar
                    </button>

                    <button
                        class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Hepsi
                    </button>
                </div>
                <div class="relative flex items-center mt-4 md:mt-0">
                    <span class="absolute">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                    <input type="text" placeholder="Arama Yapın"
                        class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
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
                                        <th scope="col"
                                            class="py-3.5  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button class="flex items-center gap-x-3 focus:outline-none">
                                                <span>Misafir Adı</span>

                                                <svg class="h-3" viewBox="0 0 10 11" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                        fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                    <path
                                                        d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                        fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                    <path
                                                        d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                        fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                </svg>
                                            </button>
                                        </th>

                                        <th scope="col"
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Odası
                                        </th>

                                        <th scope="col"
                                            class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Hakkında
                                        </th>

                                        <th scope="col"
                                            class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Durumu</th>

                                        <th scope="col"
                                            class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Giriş Tarihi</th>

                                        <th scope="col" class="relative py-3.5 px-4">
                                            <span class="sr-only">İşlemler</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    <tr v-for="guest in guests" :key="guest.id">
                                        <td class=" py-4 text-sm font-medium whitespace-nowrap">
                                            <div>
                                                <h2 class="font-medium text-gray-800 dark:text-white ">{{ guest.name + ' '+guest.surname}}</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div
                                                class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                {{ guest.room }}
                                            </div>
                                            <div data-html2canvas-ignore="true"
                                                class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-blue-100/60 dark:bg-gray-800">
                                                {{ guest.duration_of_stay + " 'giriş yaptı " }}
                                            </div>
                                        </td>
                                        <td class=" py-4 text-sm whitespace-nowrap">
                                            <div>
                                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400"> {{
                                                    guest.geozoneCountries + "'lı " + guest.age + ' yaşında ' + guest.gender
                                                }}</p>
                                                <p class="text-sm font-normal text-blue-600 dark:text-blue-400"> {{
                                                    guest.is_child ? 'Çocuk' : 'Yetişkin' }}</p>
                                            </div>
                                        </td>
                                        <td class=" py-4 text-sm whitespace-nowrap">
                                            <div
                                                class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-blue-100/60 dark:bg-gray-800">
                                                {{ guest.currentStatus }}
                                            </div>
                                        </td>

                                        <td class="px-4 py-4 text-sm whitespace-nowrap ">
                                            <div>
                                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400"> {{
                                                    guest.date_of_entry }}</p>
                                            </div>
                                        </td>

                                        <td data-html2canvas-ignore="true" class="px-4 py-4 text-sm whitespace-nowrap">

                                            <div class="flex items-center mt-4 gap-x-3">

                                                <button @click="gettoguestinfopdf(guest.id)"
                                                    class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">
                                                    <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>


                                                </button>


                                                <button @click="gettoguesteatpdf(guest.id)"
                                                    class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

                                                    <svg class="h-6 w-6 " viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path
                                                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1="16" y1="13" x2="8" y2="13" />
                                                        <line x1="16" y1="17" x2="8" y2="17" />
                                                        <polyline points="10 9 9 9 8 9" />
                                                    </svg>
                                                </button>



                                                <button @click="barcode(guest)"
                                                    class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

                                                    <svg class="h-6 w-6 " width="24" height="24" viewBox="0 0 24 24"
                                                        stroke-width="2" stroke="currentColor" fill="none"
                                                        stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
                                                        <path d="M4 17v1a2 2 0 0 0 2 2h2" />
                                                        <path d="M16 4h2a2 2 0 0 1 2 2v1" />
                                                        <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
                                                        <rect x="5" y="11" width="1" height="2" />
                                                        <line x1="10" y1="11" x2="10" y2="13" />
                                                        <rect x="14" y="11" width="1" height="2" />
                                                        <line x1="19" y1="11" x2="19" y2="13" />
                                                    </svg>

                                                </button>



                                                <button @click="transfer()"
                                                    class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

                                                    <svg class="h-6 w-6 text-red-500" width="24" height="24"
                                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                                                        <line x1="10" y1="14" x2="20" y2="4" />
                                                        <polyline points="15 4 20 4 20 9" />
                                                    </svg>
                                                </button>
                                                <button @click="barcode()"
                                                    class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

                                                    <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>

                                                </button>
                                            </div>

                                        </td>
                                    </tr>



                                    <roomCreate :show="addRommsFor != null" @close="addRommsFor = null"
                                        :addRoomForm="addRoomForm" v-on:fetchData="fetchData()"></roomCreate>



                                </tbody>

                            </table>

                            <div class="card-footer flex justify-end">
                                <TailwindPagination  :data="cleanguest"  @pagination-change-page="fetchData($event)" />

                            </div>
                            <!-- API Token Permissions Modal -->

                        </div>

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
import { useToast } from 'vue-toast-notification';

import './../../node_modules/vue-toast-notification/dist/theme-bootstrap.css';
import { TailwindPagination } from 'laravel-vue-pagination';
const $toast = useToast();
const cleanguest = ref({});

const drops = ref(null);



export default {

    name: 'Rooms',

    data() {
        return {
            input: {
                room_id: '',
            },
            guests: '',
            rooms: '',
        }
    },

    methods: {

drop(){
drops.value ? drops.value=false:drops.value=true;
},
        async fetchData(page=1) {
            if (this.$store.state.loginState) {
                this.guests='';
                const pages = page ? page : 1
                const config = {
                    headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                };
                await axios.get(this.$store.state.apiUrl + this.$store.state.apiWelcomeGuest + '?page=' + pages, config)
                    .then((response) => {
                        $toast.success("Yeni Kayıt  Misafir Verisi Güncellendi")
                        this.guests =  response.data.data.data
                cleanguest.value = response.data.data.meta
                        console.log(cleanguest);
                    })
                    .catch((error) => {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                        console.log(error)
                        alert(error)
                    }).finally(() => this.loading = false);
            }

        },
        statusUsing(capacity, using) {
            return (using / capacity) * 100;

        },
        generateReport() {
            this.$refs.frame.print(this.$refs.fragment);

        },
        async getrooms() {
            if (this.$store.state.loginState) {

                const config = {
                    headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                };
                axios.get(this.$store.state.apiUrl + this.$store.state.apiAllRoom, config)
                    .then((response) => {
                        $toast.success("  Oda Verisi Getirildi")
                        this.rooms = response.data.data
                        console.log(this.rooms)
                    })
                    .catch((error) => {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error.data.message)
                        console.log(error.data.message)
                        alert(error)
                    }).finally(() => this.loading = false);
            }
        },
        change() {
            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
            };
            axios.post(this.$store.state.apiUrl + this.$store.state.apiAllGuest, {
                rooms_id: this.input.room_id,
            }, config)
                .then((response) => {
                    $toast.success("  Misafir Verisi Güncellendi")
                    this.guests = response.data.data.data
                    console.log(this.guests)
                })
                .catch((error) => {
                    $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error.data.message)
                    console.log(error.data.message)
                    alert(error)
                }).finally(() => this.loading = false);
        },

        gotoguestdetail(id) {

            this.$router.push({ name: 'guestdetail', query: { guest: id } });

        },
        gettoguestinfopdf(id) {


            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
                responseType: 'blob'
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.gettoguestinfopdf, {
                guest_id: id
            }, config)
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
        gettoguesteatpdf(id) {


            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
                responseType: 'blob'
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.gettoguesteatpdf, {
                guest_id: id
            }, config)
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
        async barcode(guest) {
            alert(guest.name)
        },
        transfer() {
            alert("Odalar arası ve dış transer yapabileceğiniz modül hazırlanmakta")
        },
        toarray(obj) {
            const result = Object.entries(obj).reduce((acc, curr) => {
                const [key, val] = curr;

                acc.push({
                    name: key,
                    ...val
                });

                console.log(acc)
                return acc;
            }, []);

            console.log(result)
            return result
        }
    },
    mounted() {
        this.fetchData(),
            this.getrooms()
    }

}
</script>


