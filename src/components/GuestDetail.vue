<script setup>
import { ref,watch,defineProps } from 'vue';
import Checkbox from '@/components/Checkbox.vue';
import FormSection from '@/components/FormSection.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import axios from 'axios';
import roomCreate from '@/components/roomCreate.vue';
import BoxCreate from '@/components/boxCreate.vue';
import BagsCreate from '@/components/bagsCreate.vue';
import SafeBoxCreate from '@/components/safeboxCreate.vue';
import diseasesCreate from '@/components/diseasesCreate.vue';
import bringingInstitutionCreate from '@/components/bringingInstitutionCreate.vue';
import camerax from '@/components/cameraupdate.vue';
import guestdetailmenu from '@/components/guestdetailmenu.vue'; 
import block from '@/components/blockfloorroom.vue'; 
import floor from '@/components/floor.vue'; 
import roomselect from '@/components/roomselect.vue';
const addRommsFor =ref(null)
const addRooms = () => {
    addRommsFor.value = true;
};

const addBoxFor =ref(null)
const addBox = () => {
    addBoxFor.value = true;
};


const diseasesFor =ref(null)
const diseasesFunc = () => {
    diseasesFor.value = true;
};


const addBagsFor =ref(null)
const addBags = () => {
    addBagsFor.value = true;
};


const addSafeBoxFor =ref(null)
const addSafeBox = () => {
    addSafeBoxFor.value = true;
};

const addBringingInstitutionFor =ref(null)
const addaddBringingInstitution = () => {
    addBringingInstitutionFor.value = true;
};

const date = ref(new Date());

const format = (date) => {
    try {
        const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
    } catch (error) {
        const date = ref(new Date());
    }
 
}



</script>

<template  >

   <div class="flex justify-end">
    <td data-html2canvas-ignore="true" class="px-4 py-4 text-sm whitespace-nowrap justify-end">

<div class="flex items-center mt-4 gap-x-3">

    <button @click="gettoguestinfopdf(guest_id)"
        class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">
        <svg class="h-8 w-8 " fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>


    </button>


    <button @click="gettoguesteatpdf(guest_id)"
        class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

        <svg class="h-8 w-8 " viewBox="0 0 24 24" fill="none"
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



    <button @click="barcode(guest_id)"
        class="flex items-center justify-center  ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">

        <svg class="h-8 w-8 " width="24" height="24" viewBox="0 0 24 24"
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

        <svg class="h-8 w-8 text-red-500" width="24" height="24"
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

   </div>



    <div ref="fragment"  >
<block v-if="block_show" @block_id="addblock_id($event)"/>
<floor  v-if="floor_show" :block_id="input.block_id" @floor_id="addfloor_id($event)"  />
<roomselect  v-if="roomselect_show" :floor_id="input.floor_id" @room_id="addroom_id($event)"  />


        <!-- Generate API Token -->
        <FormSection >
           
            <template #form>
                <!-- Token Name -->
                <div class="col-span-6 sm:col-span-4 gap-4">
                <div class="grid grid-cols-12">
                <div class="col-span-6 ">  

                    <div class=" grid grid-cols-12 ">
                <div class="col-span-8">

                    <div>Oda</div>

                    <select disabled v-model="input.rooms_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option disabled value="">Please select </option>
                    <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.room_name }}</option>

                    </select>
                </div>
                <div class="col-span-4 justify-self-center content-center">
        
                <button class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"

                @click="changeroom()"
                >

                <svg class="h-6 w-6 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="2" />  <circle cx="19" cy="6" r="2" />  <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />  <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" /></svg>

                </button>

                </div>
            </div>

                <div class=" col-span-5 ">
                    <InputLabel for="name" value="Adı" />
                    <TextInput
                        id="name"
                        v-model="input.name"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autofocus
                    />
                </div>

                <div class="col-span-5 ">
                    <InputLabel for="name" value="Soyadı" />
                    <TextInput
                        id="name"
                        v-model="input.surname"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                    />
                </div>  

                
                <div class=" col-span-5">
                    <InputLabel for="name" value="Cinsiyet" />

                    <select v-model="input.genders_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option disabled value=""></option>
                    <option v-for="gender in genders" :key="gender.id" :value="gender.id">{{ gender.gender_info }}</option>

                    </select>


                </div>

                <div class="">
                <InputLabel for="name" value="Uyruk" />

                <select v-model="input.geozone_countries"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="geozonecountry in geozonecountries" :key="geozonecountry.id" :value="geozonecountry.id" >{{ geozonecountry.name }}</option>

                </select>


                </div>

                <div class="">
                    <InputLabel for="name" value="Doğum Tarihi" />
                    <Datepicker class=" " placeholder="Start Typing ..." text-input  auto-apply   :enable-time-picker="false" :format="format" v-model="input.date_of_birtday"  />
                    
                </div>


                <div class="">
                    <InputLabel for="name" value="Giriş tarihi" />
                      <Datepicker disabled class="" placeholder="Start Typing ..." text-input  auto-apply   :enable-time-picker="false" :format="format" v-model="input.date_of_entry"  />
          
                </div>


                </div>

                <div class="col-span-6 px-5 pt-5 h1/2" >
                    <camerax  @photo="addphoto($event)" :photopath="input.profile_photo">

                    </camerax>
                </div>

 



            </div>
        </div>







                <div class="col-span-6 sm:col-span-4 gap-4">
                 <div class="grid grid-cols-12">
                     <div class="col-span-7 ">
                    <div>Getiren il/İlçe Kurum </div>

                    <select v-model="input.bringing_institution_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option disabled value="">Please select </option>
                    <option v-for="institution in bringinginstitution" :key="institution.id" :value="institution.id">{{ institution.bringing_institution_name }}</option>

                    </select>
                    </div>

                    <div class="col-span-1 justify-self-center content-center">
        
                    <button class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"

                    @click="addaddBringingInstitution()"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>

                    </div>

                    <div class="col-span-3">
                <div>Hastalık Durumu </div>

                <select v-model="input.diseases_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="diseas in diseases" :key="diseas.id" :value="diseas.id">{{ diseas.diseases_name }}</option>

                </select>

                </div>

                <div class="col-span-1 justify-self-center content-center">
        
                <button class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"

                @click="diseasesFunc()"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>

                </div>

                </div>
            </div>


            <div class="col-span-6 sm:col-span-4">
                <div class=" grid grid-cols-12 ">

                <div class="col-span-3">
                <div>Dolap No </div>

                <select v-model="input.deposit_box_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="box in depositbox" :key="box.id" :value="box.id">{{ box.deposit_box_name }}</option>

                </select>


                </div>

                <div class="col-span-1 justify-self-center content-center">
        
                <button class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"

                @click="addBox()"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>

                </div>

                <div class="col-span-3">
                <div>Çanta No </div>

                <select v-model="input.deposit_bags_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="bags in depositbags" :key="bags.id" :value="bags.id">{{ bags.deposit_bags_name }}</option>

                </select>
                </div>

                <div class="col-span-1 justify-self-center content-center">
        
                <button class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"

                @click="addBags()"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>

                </div>

                <div class="col-span-3">
                <div>Kasa No </div>

                <select v-model="input.safe_deposit_box_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="safebox in safedepositbox" :key="safebox.id" :value="safebox.id" >{{ safebox.safe_deposit_box_name }}</option>

                </select>
                </div>

                <div class="col-span-1 justify-self-center content-center">
        
                <button class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"

                @click="addSafeBox()"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>

                </div>

                </div>
            </div>

                <div class="col-span-6 sm:col-span-4">
                <div>Durumu </div>

                <select v-model="input.current_status_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="status in currentstatus" :key="status.id" :value="status.id">{{ status.current_status_name }}</option>

                </select>
                </div>
                <div class="col-span-6 sm:col-span-4 grid grid-cols-3 gap-3">
                <div class="">
                    <InputLabel for="name" value="Pasaport Adı " />
                    <TextInput
                        id="name"
                        v-model="input.passport_name"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                    />
                </div>

                <div class="">
                    <InputLabel for="name" value="Pasaport Soyadı" />
                    <TextInput
                        id="name"
                        v-model="input.passport_surname"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                    />
                </div>

                <div class="">
                    <InputLabel for="name" value="Pasaport No" />
                    <TextInput
                        id="name"
                        v-model="input.passport_no"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                    />
                </div>
            </div>



            <guestdetailmenu/>
  
            </template>

            <template #actions>
                <div  class="col-span-6">


                <PrimaryButton  @click="updateGuest()">
                    Kaydet
                </PrimaryButton>
            </div>
            </template>
        </FormSection>






    </div>






    <roomCreate :show="addRommsFor != null" @close="addRommsFor=null" :addRoomForm="addRoomForm"  v-on:fetchData="fetchData()"     ></roomCreate>
    <BoxCreate :show="addBoxFor != null" @close="addBoxFor=null" :addBoxForm="addBoxForm"  v-on:fetchData="fetchData()"      ></BoxCreate>
    <diseasesCreate :show="diseasesFor != null" @close="diseasesFor=null" :diseasesForm="diseasesForm"  v-on:fetchData="fetchData()"      ></diseasesCreate>
    <BagsCreate :show="addBagsFor != null" @close="addBagsFor=null" :addBagsForm="addBagsForm"  v-on:fetchData="fetchData()"      ></BagsCreate>
    <SafeBoxCreate :show="addSafeBoxFor != null" @close="addSafeBoxFor=null" :addBoxForm="addSafeBoxForm"  v-on:fetchData="fetchData()"      ></SafeBoxCreate>
    <bringingInstitutionCreate :show="addBringingInstitutionFor != null" @close="addBringingInstitutionFor=null" :addBoxForm="addBringingInstitutionForm"  v-on:fetchData="fetchData()"       ></bringingInstitutionCreate>
</template>

<script>
import {useToast} from 'vue-toast-notification';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import './../../node_modules/vue-toast-notification/dist/theme-bootstrap.css';
const $toast = useToast();

export default {
    name: 'AddGuest',
      data() {
            return {
                input: {
                    block_id:'',
                    floor_id:'',
                    rooms_id:'',
                    name:'',
                    surname:' YOK',
                    genders_id:'',
                    date_of_birtday:new Date(),
                    geozone_countries:2,
                    date_of_entry:new Date(),
                    deposit_box_id:1,
                    diseases_id:1,
                    deposit_bags_id:1,
                    safe_deposit_box_id:1,
                    current_status_id:'',
                    passport_name:'YOK',
                    passport_surname:'YOK',
                    passport_no:'YOK',
                    bringing_institution_id:'',
                    permissions:[],
                    profile_photo:'',
                },
                guest_id:this.$route.query.guest,
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
                availablePermissions:["read","create","update","delete"],
                block_show:false,
                floor_show:false,
                roomselect_show:false,

            }
        },

        methods:{
        async fetchData(){
            if(this.$store.state.loginState)
            {

                const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}`, 'content-type': 'multipart/form-data' }
                        };
                axios.get(this.$store.state.apiUrl+this.$store.state.guestinfo, config)
                .then((response)=> {
                $toast.success("  Konuk tanım verileri getirildi")
                this.rooms=response.data.data.rooms
                this.genders=response.data.data.genders
                this.cityes=response.data.data.cityes
                this.currentstatus=response.data.data.currentstatus
                this.depositbags=response.data.data.depositbags
                this.geozonecountries=response.data.data.geozonecountries
                this.safedepositbox=response.data.data.safedepositbox
                this.bringinginstitution=response.data.data.bringinginstitution
                this.diseases=response.data.data.diseases

                this.depositbox=response.data.data.depositbox

                })
                .catch((error)=> {
                $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                console.log(error)
                alert(error)
                });
            }
                    
        },
        addphoto(event){
            this.input.profile_photo=event;
        },
        statusUsing(capacity,using){
            return (using/capacity)*100;

        },
        updateGuest () {
                
            const config = {
                            headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                            };
                    axios.post(this.$store.state.apiUrl+this.$store.state.guestupdate,{
                        rooms_id:this.input.rooms_id,
                        name:this.input.name,
                        surname:this.input.surname,
                        genders_id:this.input.genders_id,
                        date_of_birtday:this.input.date_of_birtday,
                        geozone_countries:this.input.geozone_countries,
                        date_of_entry:this.input.date_of_entry,
                        deposit_box_id:this.input.deposit_box_id,
                        deposit_bags_id:this.input.deposit_bags_id,
                        safe_deposit_box_id:this.input.safe_deposit_box_id,
                        current_status_id:this.input.current_status_id,
                        passport_name:this.input.passport_name,
                        passport_surname:this.input.passport_surname,
                        passport_no:this.input.passport_no,
                        bringing_institution_id:this.input.bringing_institution_id,
                        profile_photo:this.input.profile_photo,
                        token:this.$store.state.token_origin,
    
                    }, config)
                    .then((response)=> {
                    $toast.success(response.data.data.room_name + "  Konuk Başarılı Bir Şekilde Kaydedildi")
    
                    })
                    .catch((error)=> {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                    console.log(error)
                    });
    
    
                    },
         getGuest () {
                
            const config = {
                            headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                            };
                    axios.post(this.$store.state.apiUrl+this.$store.state.apiGetGuest,{
                        id:this.$route.query.guest
    
                    }, config)
                    .then((response)=> {
                        let getguest=response.data.data.data
                        console.log(getguest)
                this.input.rooms_id=response.data.data.data[0]["rooms_id"];
                this.input.name=response.data.data.data[0]["name"];
                this.input.surname=response.data.data.data[0]["surname"];
                this.input.genders_id=response.data.data.data[0]["genders_id"];
                this.input.date_of_birtday=response.data.data.data[0]["date_of_birtday"];
                this.input.geozone_countries=response.data.data.data[0]["geozone_countries"];
                this.input.date_of_entry=response.data.data.data[0]["date_of_entry"];
                this.input.deposit_box_id=response.data.data.data[0]["deposit_box_id"];
                this.input.deposit_bags_id=response.data.data.data[0]["deposit_bags_id"];
                this.input.safe_deposit_box_id=response.data.data.data[0]["safe_deposit_box_id"];
                this.input.current_status_id=response.data.data.data[0]["current_status_id"];
                this.input.passport_name=response.data.data.data[0]["passport_name"];
                this.input.passport_surname=response.data.data.data[0]["passport_surname"];
                this.input.passport_no=response.data.data.data[0]["passport_no"];
                this.input.bringing_institution_id=response.data.data.data[0]["bringing_institution_id"];
                this.input.profile_photo=response.data.data.data[0]["profile_photo"];

                    $toast.success( "  Konuk Bilgileri Getirildi")
    
                    })
                    .catch((error)=> {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                    console.log(error)
                    });
    
    
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
        addblock_id($event){
            this.input.block_id=$event
            this.block_show=false
            this.floor_show=true
           this.roomselect_show=false
        },
        addfloor_id($event){
            this.input.floor_id=$event
            this.block_show=false
            this.floor_show=false
           this.roomselect_show=true
        },
        changeroom(){
            if(this.block_show)
           { 
            this.block_show =false
            this.floor_show=false
           this.roomselect_show=false
          }else
          {
            this.block_show =true
            this.floor_show=false
           this.roomselect_show=false

          }

        },
        addroom_id($event){
            this.input.rooms_id=$event
            this.roomselect_show=false
        },
        beforeWindowUnload (e) {
        if (this.form_dirty) {
            e.preventDefault()
            e.returnValue = ''
        }
        }
    },  
    beforeRouteLeave (to, from, next) {
    if (this.form_dirty) {
      next(false)
      window.location = to.path // this is the trick
    } else {
      next()
    }
  },    
         created() {
            window.addEventListener('beforeunload', this.beforeWindowUnload)
      this.getGuest()

      this.fetchData()
    },
    beforeUnmount () {
    window.removeEventListener('beforeunload', this.beforeWindowUnload)
  }
    
    

}

</script>




