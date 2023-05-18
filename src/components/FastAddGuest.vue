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
import bringingInstitutionCreate from '@/components/bringingInstitutionCreate.vue';
const addRommsFor =ref(null)
const addRooms = () => {
    addRommsFor.value = true;
};

const addBoxFor =ref(null)
const addBox = () => {
    addBoxFor.value = true;
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




    <div ref="fragment"  >
        <!-- Generate API Token -->
        <FormSection >
           
            <template #form>
                <!-- Token Name -->
                <div class="col-span-6 sm:col-span-4 grid grid-cols-2 gap-2">



                <div class="">
                    <InputLabel for="name" value="Adı" />
                    <TextInput
                        id="name"
                        v-model="input.name"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autofocus
                    />
                </div>

                <div class="">
                    <InputLabel for="name" value="Soyadı" />
                    <TextInput
                        id="name"
                        v-model="input.surname"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                    />
                </div>  

                



             </div>



                



            <div class="col-span-6 sm:col-span-4 grid grid-cols-2 gap-3">

                <div class=" ">
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
                      <Datepicker class="" placeholder="Start Typing ..." text-input  auto-apply   :enable-time-picker="false" :format="format" v-model="input.date_of_entry"  />
          
                </div>

                
            </div>

            






                <div class="col-span-6 sm:col-span-4 gap-4">
                 <div class="grid grid-cols-12">
                     <div class="col-span-11 ">
                    <div>Getiren il/İlçe Kurum </div>

                    <select v-model="input.bringing_institution_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option disabled value="">Please select </option>
                    <option v-for="institution in bringinginstitution" :key="institution.id" :value="institution.id">{{ institution.sehir.name }} || {{ institution.bringing_institution_name }}</option>

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
                </div>
            </div>


          

                <div class="col-span-6 sm:col-span-4">
                <div>Durumu </div>

                <select v-model="input.current_status_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option disabled value="">Please select </option>
                <option v-for="status in currentstatus" :key="status.id" :value="status.id">{{ status.current_status_name }}</option>

                </select>
                </div>
      




  
            </template>

            <template #actions>
                <div  class="col-span-6">


                <PrimaryButton  @click="addGuest()">
                    Kaydet
                </PrimaryButton>
            </div>
            </template>
        </FormSection>






    </div>

    <roomCreate :show="addRommsFor != null" @close="addRommsFor=null" :addRoomForm="addRoomForm"  v-on:fetchData="fetchData()"     ></roomCreate>
    <BoxCreate :show="addBoxFor != null" @close="addBoxFor=null" :addBoxForm="addBoxForm"  v-on:fetchData="fetchData()"      ></BoxCreate>
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
                    name:'',
                    surname:' YOK',
                    genders_id:2,
                    date_of_birtday:new Date(),
                    geozone_countries:2,
                    date_of_entry:new Date(),
                    bringing_institution_id:'',
                    current_status_id:1,

                },
                genders:'',
                currentstatus:'',
                geozonecountries:'',
                bringinginstitution:'',
                

            }
        },

        methods:{
        async fetchData(){
            if(this.$store.state.loginState)
            {

                const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                        };
                axios.get(this.$store.state.apiUrl+this.$store.state.guestfastinfo, config)
                .then((response)=> {
                $toast.success("  Misafir tanım verileri getirildi")
                this.genders=response.data.data.genders
                this.currentstatus=response.data.data.currentstatus
                this.bringinginstitution=response.data.data.bringinginstitution
                this.geozonecountries=response.data.data.geozonecountries
                

                })
                .catch((error)=> {
                $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                console.log(error.data.message)
                alert(error)
                });
            }
                    
        },
        statusUsing(capacity,using){
            return (using/capacity)*100;

        },
         generateReport () {
            this.$refs.frame.print(this.$refs.fragment);

        },
        addGuest () {
                
            const config = {
                            headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                            };
                    axios.post(this.$store.state.apiUrl+this.$store.state.apiGuestFastSave,{
                        name:this.input.name,
                        surname:this.input.surname,
                        genders_id:this.input.genders_id,
                        date_of_birtday:this.input.date_of_birtday,
                        geozone_countries:this.input.geozone_countries,
                        date_of_entry:this.input.date_of_entry,
                        current_status_id:this.input.current_status_id,
                        bringing_institution_id:this.input.bringing_institution_id,
                        token:this.$store.state.token_origin,
    
                    }, config)
                    .then((response)=> {
                    $toast.success(response.data.data.room_name + "  Misafir Başarılı Bir Şekilde Kaydedildi")
                    this.emitEvent()
    
                    })
                    .catch((error)=> {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                    console.log(error)
                    });
    
    
                    },
        },    
         mounted() {
      this.fetchData()
    }

}

</script>
