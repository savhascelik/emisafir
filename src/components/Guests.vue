<script setup>
import { ref, defineEmits } from 'vue';
import PrintPage from '@/components/PrintPage.vue';
import PdfView from '@/components/PdfView.vue';
import listinfo from '@/components/listinfo.vue';
import roomselect from '@/components/roomselect.vue';
import block from '@/components/blockfloorroom.vue'; 
import floor from '@/components/floor.vue'; 
import PrimaryButton from '@/components/PrimaryButton.vue'; 
import TextInput from '@/components/TextInput.vue';
import Checkbox from '@/components/Checkbox.vue';


import axios from 'axios';
import roomCreate from '@/components/roomCreate.vue';

const addRommsFor = ref(null)
const addRooms = () => {
    addRommsFor.value = true;
};

</script>

<template>

<div class="absolute  h-100 w-100 z-40">
<aside id="default-sidebar" class=" absolute -left-80 w-64 -top-25" aria-label="Sidenav">
  <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <block v-if="queryinfo.block_show" @block_id="addblock_id($event)"/>
                        <floor  v-if="queryinfo.floor_show" :block_id="query.block_id" @floor_id="addfloor_id($event)"  />
                        <roomselect  v-if="queryinfo.roomselect_show" :floor_id="query.floor_id" @room_id="addroom_id($event)"  />
      <ul class="space-y-2">

          <li class="border-b">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Odalar</span>
              <ul id="dropdown-sales" class=" py-2 space-y-2">
                      <li>


                        <div class="col-span-5">


                        <select :disabled="query.rooms_id" @change="filter_data_func({'rooms_id':query.rooms_id})"  v-model="query.rooms_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                        <option  value="">Oda Seçiniz </option>
                        <option v-for="room in queryinfo.rooms" :key="room.id" :value="room.id">{{ room.room_name }}</option>

                        </select>
                        </div>

                      </li>

              </ul>
          </li>

      </ul>
 
    <ul class="space-y-2">

        <li class="border-b">
                <span class="flex-1 ml-3 text-left whitespace-nowrap">Cinsiyet</span>
            <ul id="dropdown-sales" class=" py-2 space-y-2">
                    <li>
                        <div class=" col-span-5">

                    <select :disabled="query.genders_id" @change="filter_data_func({'genders_id':query.genders_id})" v-model="query.genders_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option disabled value=""></option>
                    <option v-for="gender in queryinfo.genders" :key="gender.id" :value="gender.id">{{ gender.gender_info }}</option>

                    </select>

                    <label class="flex items-center">
                    <Checkbox :disabled="query.adult" @change="filter_data_func({'is_child':false})" v-model="query.adult"  />

                      <span class="ml-2 text-sm text-gray-600">Yetişkin</span>
                     </label>

                     <label class="flex items-center">
                        <Checkbox :disabled="query.child"  @change="filter_data_func({'is_child':true})" v-model="query.child"  />

                      <span class="ml-2 text-sm text-gray-600">Çocuk</span>
                     </label>
                    


                </div>
                    </li>

            </ul>
        </li>

    </ul>

    <ul class="space-y-2">

<li class="border-b">
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Uyruk</span>
    <ul id="dropdown-sales" class=" py-2 space-y-2">
            <li>
 
                <div class="">

                <select :disabled="query.geozone_countries" @change="filter_data_func({'geozone_countries_id':query.geozone_countries})"  v-model="query.geozone_countries"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="geozonecountry in queryinfo.geozonecountries" :key="geozonecountry.id" :value="geozonecountry.id" >{{ geozonecountry.name }}</option>

                </select>


                </div>
            </li>

    </ul>


    
</li>

</ul>

<ul class="space-y-2">

<li class="border-b">
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Getiren il/İlçe Kurum </span>
    <ul id="dropdown-sales" class=" py-2 space-y-2">
            <li>
 
                <div class="col-span-7 ">

                    <select :disabled="query.bringing_institution_id" @change="filter_data_func({'bringing_institution_id':query.bringing_institution_id})" v-model="query.bringing_institution_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option disabled value="">Please select </option>
                    <option v-for="institution in queryinfo.bringinginstitution" :key="institution.id" :value="institution.id">{{ institution.bringing_institution_name }}</option>

                    </select>
                    </div>
            </li>

    </ul>


    
</li>

</ul>


<ul class="space-y-2">

<li class="border-b">
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Dolap No </span>
    <ul id="dropdown-sales" class=" py-2 space-y-2">
            <li>
 


            <div class=" col-span-5 ">
                    <TextInput
                        id="box"
                        v-model="query.deposit_box_id"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autofocus
                        @change="filter_data_func({'deposit_box_id':query.deposit_box_id})"
                        :disabled="query.deposit_box_id"
                    />
                </div>
            </li>

    </ul>


    
</li>

</ul>

<ul class="space-y-2">

<li class="border-b">
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Kasa No </span>
    <ul id="dropdown-sales" class=" py-2 space-y-2">
            <li>
                <div class=" col-span-5 ">
                    <TextInput
                        id="safebox"
                        v-model="query.safe_deposit_box_id"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autofocus
                        @change="filter_data_func({'safe_deposit_box_id':query.safe_deposit_box_id})" 
                        :disabled="query.safe_deposit_box_id"

                    />
                </div>
            </li>

    </ul>


    
</li>

</ul>

<ul class="space-y-2">

<li class="border-b">
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Çanta No </span>
    <ul id="dropdown-sales" class=" py-2 space-y-2">
            <li>
                <div class=" col-span-5 ">
                    <TextInput
                        id="safebox"
                        v-model="query.deposit_bags_id"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autofocus
                        @change="filter_data_func({'deposit_bags_id':query.deposit_bags_id})" 
                        :disabled="query.deposit_bags_id"

                    />
                </div>
            </li>

    </ul>


    
</li>

</ul>


<ul class="space-y-2">

<li class="border-b">
  
 
                <PrimaryButton v-if="filter_data.length"  @click="filterprintpdf()">
                    Sonucu Pdf Al
                </PrimaryButton>
            </li>
            <li>
 
 <PrimaryButton v-if="filter_data.length"  @click="filterromeve()">
     Filtre Sıfırla
 </PrimaryButton>



    
</li>

</ul>
  </div>

</aside>
</div>



















    <listinfo ref="lastest" />



    
    <!-- component -->

    <PdfView ref="pdfview" />
    <PrintPage ref="frame" />


    <section class="container px-4 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <!--<h2 class="text-lg font-medium text-gray-800 dark:text-white">Konuk Sayısı</h2>

                    <span
                        class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240
                        Konuk</span> -->
                </div>
                
          <div class="flex justify-center mt-3">
    
    <div   class="relative flex items-center mt-4 md:mt-0">
        <span class="absolute">
            <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </span>
      </div>

        <input type="text" v-model="search_text"  :id="search-input" @change="serchguest()" placeholder="Arama Yapın" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">

        
    </div>

            </div>




            <div class="flex items-center mt-4 gap-x-3">
                <router-link to="/fastaddguest" custom v-slot="{ href, navigate }">
                    <a :href="href" @click="navigate"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <span>Hızlı Konuk Kaydı</span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </a>
                </router-link>

                <router-link to="/addguest" custom v-slot="{ href, navigate }">
                    <a :href="href" @click="navigate"
                        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <span>Detaylı Kayıt</span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </a>
                </router-link>

                <button
                    class=" flex items-center justify-center  px-3 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                    @click="generateReport()">
                    <svg class="h-6 w-5 text-white-500 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                        <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                        <rect x="7" y="13" width="10" height="8" rx="2" />
                    </svg>
                </button>

            </div>



        </div>
        <div ref="fragment" v-if="!isLoading">

            <div data-html2canvas-ignore="true" class="mt-6 md:flex md:items-center md:justify-between">
               <!-- 
                <div
                    class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button
                        class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                        Konuk
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
                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            #
                                        </th>
                                        <th scope="col"
                                            class="py-3.5  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button class="flex items-center gap-x-3 focus:outline-none">
                                                <span>Konuk Adı</span>

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
                                        <td>
                                            <a :class="{ invisible : active_el == guest.id }"  @click="addlist(guest.id)"
                                                class="flex items-center justify-center px-1 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </a>
                                            <a v-if="active_el==guest.id"  @click="deleteguestlist(guest.id)"
                                                class=" flex items-center justify-center px-1 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:yellow-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </a>
                                        </td>
                                        <td class=" py-4 text-sm font-medium whitespace-nowrap">
                                            <div>
                                                <h2 class="font-medium text-gray-800 dark:text-white ">{{ guest.name + ' '+guest.surname}}</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div
                                                class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                {{ guest.room }} <br/>
                                            </div>
                                            <div data-html2canvas-ignore="true"
                                                class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-blue-100/60 dark:bg-gray-800">
                                                {{ guest.duration_of_stay + " 'giriş yaptı " }}
                                            </div>
                                        </td>
                                        <td class=" py-4 text-sm whitespace-nowrap">
                                            <div>
                                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400"> {{
                                                    guest.geozoneCountries.substring(0,8) + "'lı " + guest.age + ' yaşında ' + guest.gender
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
                                                <button @click="gotoguestdetail(guest.id)"
                                                    class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

                                                    <svg class="h-6 w-6 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />  <line x1="12" y1="11" x2="12" y2="17" />  <line x1="9" y1="14" x2="15" y2="14" /></svg>

                                                </button>
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

    name: 'Guestscomp',

    data() {
        return {
            active_el:true,
            query: {
                    block_id:'',
                    floor_id:'',
                    rooms_id:null,
                    name:null,
                    surname:' YOK',
                    genders_id:null,
                    date_of_birtday:new Date(),
                    geozone_countries:null,
                    date_of_entry:new Date(),
                    deposit_box_id:null,
                    diseases_id:null,
                    deposit_bags_id:null,
                    safe_deposit_box_id:null,
                    current_status_id:null,
                    passport_name:'YOK',
                    passport_surname:'YOK',
                    passport_no:'YOK',
                    bringing_institution_id:null,
                    permissions:[],
                    profile_photo:null,
                    adult:null,
                    child:null
                },
            input: {
                room_id: '',
            },
            queryinfo:{
                    rooms:'',
                    genders:'',
                    cityes:'',
                    currentstatus:'',
                    depositbags:'',
                    diseases:'',
                    depositbox:'',
                    geozonecountries:'',
                    safedepositbox:'',
                    bringinginstitution:'',
                    block_show:true,
                    floor_show:false,
                    roomselect_show:false,
                },
            guests: '',
            rooms: '',
            isLoading: true,
            search_text:'',
            filter_data:[]
        }
    },

    methods: {
        filterromeve(){
            this.query.rooms_id=null
            this.query.name=null
            this.query.genders_id=null
            this.query.geozone_countries=null
            this.query.deposit_box_id=null
            this.query.diseases_id=null
            this.query.deposit_bags_id=null
            this.query.safe_deposit_box_id=null
            this.query.current_status_id=null
            this.query.bringing_institution_id=null
            this.query.profile_photo=null
            this.query.adult=null
            this.filter_data=[]
            this.fetchData()


        },
        getqueryinfo(){
            if(this.$store.state.loginState)
            {

                const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}`, 'content-type': 'multipart/form-data' }
                        };
                axios.get(this.$store.state.apiUrl+this.$store.state.guestinfo, config)
                .then((response)=> {
                //$toast.success("  Konuk tanım verileri getirildi")
                this.queryinfo.rooms=response.data.data.rooms
                this.queryinfo.genders=response.data.data.genders
                this.queryinfo.cityes=response.data.data.cityes
                this.queryinfo.currentstatus=response.data.data.currentstatus
                this.queryinfo.depositbags=response.data.data.depositbags
                this.queryinfo.geozonecountries=response.data.data.geozonecountries
                this.queryinfo.safedepositbox=response.data.data.safedepositbox
                this.queryinfo.bringinginstitution=response.data.data.bringinginstitution
                this.queryinfo.diseases=response.data.data.diseases

                this.depositbox=response.data.data.depositbox

                })
                .catch((error)=> {
                //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                console.log(error)
                alert(error)
                });
            }
                    
        },

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
                await axios.get(this.$store.state.apiUrl + this.$store.state.apiAllGuest + '?page=' + pages, config)
                    .then((response) => {
                        //$toast.success("  Konuk Verisi Güncellendi")
                        this.guests =  response.data.data.data
                cleanguest.value = response.data.data.meta
                        console.log(cleanguest);
                    })
                    .catch((error) => {
                        //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
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
                        //$toast.success("  Oda Verisi Getirildi")
                        this.rooms = response.data.data
                        console.log(this.rooms)
                    })
                    .catch((error) => {
                        //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error.data.message)
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
                    //$toast.success("  Konuk Verisi Güncellendi")
                    this.guests = response.data.data.data
                    console.log(this.guests)
                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error.data.message)
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
                    //$toast.success("  pdf verisi Verisi getirildi")
                    const downloadUrl = window.URL.createObjectURL(response.data)

                    // open pdf file on new tab
                    window.open(downloadUrl, '__blank')

                    // remove temp url
                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
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
                    //$toast.success("  pdf verisi Verisi getirildi")
                    const downloadUrl = window.URL.createObjectURL(response.data)

                    // open pdf file on new tab
                    window.open(downloadUrl, '__blank')

                    // remove temp url
                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
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
        },

        addlist(id){
            this.active_el = id;

            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.addlist, {
                guests_id: id,
                token:this.$store.state.token_origin,

            }, config)
                .then((response) => {
                    //$toast.success("  Listeye Ekleme Başarılı")
                    this.$refs.lastest.lastest()

                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);

        },
        deleteguestlist(id){
            this.active_el = 0;

            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.deleteguestlist, {
                guests_id: id,
                token:this.$store.state.token_origin,

            }, config)
                .then((response) => {
                    //$toast.warning("  Listeden Çıkarma Başarılı")
                    this.$refs.lastest.lastest()

                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);

        },
                    addblock_id($event){
            this.filter_data_func({'blocks_id':$event})
            this.query.block_id=$event
            this.queryinfo.block_show=false
            this.queryinfo.floor_show=true
           this.queryinfo.roomselect_show=false
        },
        addfloor_id($event){
            this.filter_data_func({'floors_id':$event})

            this.query.floor_id=$event
            this.queryinfo.block_show=false
            this.queryinfo.floor_show=false
           this.queryinfo.roomselect_show=true
        },

        addroom_id($event){
            this.query.rooms_id=$event
            this.queryinfo.roomselect_show=false
        },
        serchguest(){
            if(this.search_text!='')
            {

            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.searchguest, {
               search_text: this.search_text,
                token:this.$store.state.token_origin,

            }, config)
                .then((response) => {
                    //$toast.success("  Arama Başarılı")
                    this.guests =  response.data.data.data
                cleanguest.value = response.data.data.meta

                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);
            }else
            {
             this.fetchData()

            }


        },
        filter_data_func(value)
        {
            this.filter_data.push({value})

            if(this.filter_data.length)
            {

            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.filterdata, {
               filter_data: this.filter_data,
                token:this.$store.state.token_origin,

            }, config)
                .then((response) => {
                    //$toast.success("  Arama Başarılı")
                    this.guests =  response.data.data.data
                cleanguest.value = response.data.data.meta

                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);
            }else
            {
             this.fetchData()

            }
        },
        filterprintpdf()
        {

            if(this.filter_data.length)
            {

            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
                responseType: 'blob'

            };


            axios.post(this.$store.state.apiUrl + this.$store.state.filterprintpdf, {
               filter_data: this.filter_data,
                token:this.$store.state.token_origin,

            }, config)
                .then((response) => {
                    //$toast.success("  pdf verisi Verisi getirildi")
                    const downloadUrl = window.URL.createObjectURL(response.data)

                    // open pdf file on new tab
                    window.open(downloadUrl, '__blank')

                })
                .catch((error) => {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: " + error)
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);
            }else
            {
             this.fetchData()

            }
        }

    },
    async  mounted() {
        this.fetchData(),
            this.getrooms()
            this.isLoading = false
            this.getqueryinfo()
    },created() {
    let self = this;
},

}
</script>


