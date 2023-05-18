<script setup>
import { VuePreloader } from 'vue-preloader';
import AppLayout from '@/Layouts/AppLayout.vue';
import Reports from '@/components/Reports.vue';
</script>


<template>
          <VuePreloader
        background-color="#091a28"
        color="#ffffff"
        transition-type="fade-down"
        :loading-speed="5"
        :transition-speed="500"
        @loading-is-over="showAnimation = false"
        @transition-is-over="transitionIsOver"
        >
        </VuePreloader>
        

<AppLayout title="Odalar">
      <template #header>
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
              Raporlar
          </h2>


            
            
      </template>

      <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                  <Reports />

              </div>
          </div>
      </div>
  </AppLayout>

</template>



<script>
// @ is an alias to /src
import {useToast} from 'vue-toast-notification';
import { useIpcRenderer } from '@vueuse/electron'

const ipcRenderer = useIpcRenderer()
const $toast = useToast();
export default {
  name: 'RoomsView',
  mounted() {
    if(this.$store.state.loginState )
    {
      $toast.success("Misafirler Bölümüne Hoş Geldiniz")
    }else
    {
      $toast.warning("Giriş Yapmalısınız")
      ipcRenderer.send("login-required",true)

      this.$router.push({name:'login'})
    }
  }
  
}
</script>
