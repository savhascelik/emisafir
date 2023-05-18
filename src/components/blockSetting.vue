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

        <div class="grid grid-cols-12 gap-6    " v-for="(old_organisatin,old_count) in blocks" :key="old_count">



   
  


            <div class=" col-span-6" >
              <label for="country">Blok Adı</label  >
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input v-model="old_organisatin.block_name" :name="blocks[old_count][block_name]" id="country" type="text" placeholder="Blok adı" disabled class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

              </div>
              
            </div>

            
            <div class=" col-span-3">
              <label for="state">Kapasite</label>
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input v-model="old_organisatin.block_capacity" :name="blocks[old_count][block_capacity]" id="state" type="number" placeholder="Kat sayısı" disabled class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

              </div>
              
      
            </div>


            <div class=" col-span-3">
              <label for="state">Kat Sayısı</label>
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input v-model="old_organisatin.number_of_floor" :name="blocks[old_count][number_of_floor]" id="state" type="number" placeholder="Kat sayısı" disabled class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

              </div>
              
      
            </div>

            <!--

            <div class=" col-span-2 items-center content-stretch">
              <div class="">
              
              <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-6">
                Sil
              </button>
            </div>
            </div>
            -->




            </div>


        <div class="grid grid-cols-12 gap-6  " v-for="(organisati,count) in block" :key="count">



   
  


              <div class="  col-span-6 " >
                <label for="country">Blok Adı</label  >
                <div class="h-10  flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="organisati.block_name" :name="block[count][block_name]" id="country" type="text" placeholder="Blok adı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

                </div>
                
              </div>

              <div class=" col-span-3">
              <label for="state">Kapasite</label>
              <div class="h-10  flex border border-gray-200 rounded items-center mt-1">
                <input v-model="organisati.block_capacity" :name="block[count][block_capacity]" id="state" type="number" placeholder="Kat sayısı"  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

              </div>
              
      
            </div>

              <div class="  col-span-3">
                <label for="state">Kat Sayısı</label>
                <div class="h-10  flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="organisati.number_of_floor" :name="block[count][number_of_floor]" id="state" type="number" placeholder="Kat sayısı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>




     
          </div>


            <div class="md:col-span-5 text-right mt-3">



                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mr-5  h-full" @click="removeBlock()">
                    <svg class="h-5 w-5 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />  <line x1="18" y1="9" x2="12" y2="15" />  <line x1="12" y1="9" x2="18" y2="15" /></svg>

                    </button>
                </div>

                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mr-5  h-full " @click="addBlock()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </div>


                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full" @click="submitBlock()">Kaydet</button>
                </div>



        </div>
      </div>
    </div>


  </div>
</div>


     

    </div>
</template>
<script>
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
const $toast = useToast();


export default {
name: "Setting",
  
  data(){
    return { 
    block: [],

    blocks:[]
  }
},
 methods: {
    addBlock() {
      this.block.push({
        block_name: '',
        number_of_floor: '',
        block_capacity:'',

      })
    },
    removeBlock() {
      this.block.pop()
    },

    submit () {
      const data = {
        block: this.block
      }
      alert(JSON.stringify(data, null, 2))
    },
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
    submitBlock () {
                
                const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.saveallblock ,{
                          block:this.block,
                            token:this.$store.state.token_origin,
        
                        }, config)
                        .then((response)=> {
                        //$toast.success("  Blok/lar Başarılı Bir Şekilde Kaydedildi")
                        this.$emit('floors');
        
                        })
                        .catch((error)=> {
                            //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                        console.log(error)
                        });
        
        
                        },
  },
  mounted(){
this.getallBlock()
  }
};
</script>
