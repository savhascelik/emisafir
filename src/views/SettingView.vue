<script setup>
import { VuePreloader } from 'vue-preloader';
import './../../node_modules/vue-preloader/dist/style.css'
import AppLayout from '@/Layouts/AppLayout.vue';

import blockSetting from '@/components/blockSetting.vue';
import floorSetting from '@/components/floorSetting.vue';
import roomsSetting from '@/components/roomsSetting.vue';
import otherSetting from '@/components/otherSetting.vue';



import { defineProps,ref } from 'vue';
defineProps({
    id: String,
    name:String,
    
});

</script>


<template>

        <VuePreloader
        background-color="#091a28"
        color="#ffffff"
        transition-type="fade-up"
        :loading-speed="12"
        :transition-speed="750"
        @loading-is-over="loadingIsOver"
        @transition-is-over="transitionIsOver"
        >
        </VuePreloader>


        <AppLayout title="Home">
      <template #header>
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
              Ayarlar
          </h2>
          

                    <div data-html2canvas-ignore="true" class="mt-6 md:flex md:items-center md:justify-between">
                    <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200  sm:text-sm " :class="blocks ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="addblocks()"  >
                            Blok 
                            
                        </a>
            
                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm "  :class="floor ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="addfloor()">
                            Kat
                        </a>
            
                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm"  :class="rooms ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="addrooms()">
                            Oda
                        </a>

                        <a class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm "  :class="server ? 'bg-gray-100  dark:bg-gray-800 dark:text-gray-300':' dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'" @click="addother()">
                            Sunucu/Yazıcı
                        </a>

                    </div>
            
                
                </div>



      </template>

      <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                  <blockSetting v-if="blocks"  @floors="addfloor"/>
                  <floorSetting v-if="floor"  @rooms="addrooms" />
                  <roomsSetting v-if="rooms" />
                  <otherSetting v-if="other" />

              </div>
          </div>
      </div>
  </AppLayout>
</template>

<script>
import {useToast} from 'vue-toast-notification';
const $toast = useToast();

export default {
name:'SettingView',
data(){
    return{

        blocks:true,
        floor:false,
        rooms:false,
        other:false,
    };
},
methods:{
    addblocks(){
        this.blocks=true;
        this.floor=false;
        this.rooms=false;
        this.other=false;
    },
    addfloor(){
        this.blocks=false;
        this.floor=true;
        this.rooms=false;
        this.other=false;
    },
    addrooms(){
        this.blocks=false;
        this.floor=false;
        this.rooms=true;
        this.other=false;
    },
    addother(){
        this.blocks=false;
        this.floor=false;
        this.rooms=false;
        this.other=true;
    }
},
mounted() {
    if(this.$store.state.loginState )
    {
      //$toast.success("Ayarlar Sayfasına Hoş Geldiniz")
    }else
    {
      //$toast.warning("Giriş Yapmalısınız")

      this.$router.push({name:'login'})
    }
  }

}
</script>
