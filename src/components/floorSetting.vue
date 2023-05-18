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

        <div class="grid grid-cols-12  mt-3  gap-2 " v-for="(floor,count) in floors" :key="count" :class="count >0 ? 'border-t':'' ">



   
  


              <div class="col-span-1 " >
                <label for="country">Kat Adı</label  >
                <div class="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="floor.floor_name"  :name="floors[count][floor_name]" id="country" type="text" placeholder="kat adı"  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />

                </div>
                
              </div>

              
              <div class="col-span-2">
                <label for="state">Kat Kap.</label>
                <div class="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="floor.floor_capacity" :name="floors[count][floor_capacity]" id="state" type="number" placeholder="Kat kapasitesi" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>

              <div class="col-span-2">
                <label for="state">Kat Ort. Oda Sayı</label>
                <div class="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="floor.room_number" :name="floors[count][room_number]" id="state" type="number" placeholder="ortalama oda sayısı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>

              
              <div class="col-span-3">
                <label for="state">Oda Ort. Konak. Sayı</label>
                <div class="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="floor.floor_using_avarage" :name="floors[count][floor_using_avarage]" id="state" type="number" placeholder="ortalama konaklayan sayısı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>

              <div class="col-span-2">
                <label for="state">Oda Num. Baş. </label>
                <div class="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="floor.floor_start" :name="floors[count][floor_start]" id="state" type="number" placeholder=" başlangıçı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>

              <div class="col-span-2">
                <label for="state">Oda Num. Art.</label>
                <div class="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input v-model="floor.floor_increase" :name="floors[count][floor_increase]" id="state" type="number" placeholder=" artışı" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
    
                </div>
              </div>

     
          </div>


            <div class="md:col-span-5 text-right mt-3">



     
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="submitFloor()">Kaydet</button>
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
    floors: [],

    blocks:[]
  }
},
 methods: {
    addFloor(block) {
      console.log( block)
      block.forEach(element => {
        for (let index = 0; index < element.number_of_floor; index++) {
          
          this.floors.push({
            block_id:element.id,
        floor_name:element.block_name+'-'+(index+1),
        room_number:'',
        floor_using_avarage:'',
        floor_capacity:element.block_capacity/element.number_of_floor,
        floor_start:0,
        floor_increase:0,

      })
          
        }
        
        
      });



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
            this.addFloor(this.blocks)
            
            })
            .catch((error)=> {
            //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
            console.log(error.data.message)
            alert(error)
            }).finally(() => this.loading = false);
        }
    },
    submitFloor() {
                
                const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.saveallfloor ,{
                          floors:this.floors,
                            token:this.$store.state.token_origin,
        
                        }, config)
                        .then((response)=> {
                        //$toast.success("  Kat/lar Başarılı Bir Şekilde Kaydedildi")
                        this.$emit('rooms');
        
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

