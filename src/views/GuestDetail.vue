<script setup>
import { VuePreloader } from 'vue-preloader';
import AppLayout from '@/Layouts/AppLayout.vue';
import GuestDetail from '@/components/GuestDetail.vue';
import phone from '@/components/phone.vue';


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
              Misafir Bilgileri
          </h2>

      </template>

      <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <GuestDetail />
              </div>
          </div>
      </div>
      <div class="py-12 -mt-6">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <phone></phone>

              </div>
          </div>
      </div>

  </AppLayout>

</template>



<script>
// @ is an alias to /src
import AuthenticationCard from '@/components/AuthenticationCard.vue';
import {useToast} from 'vue-toast-notification';
import { useIpcRenderer } from '@vueuse/electron'

const ipcRenderer = useIpcRenderer()
const $toast = useToast();
export default {
  name: 'RoomsView',
  mounted() {
 /*   if(this.$store.state.loginState )
    {
      $toast.success("Misafir Detay Bölümüne Hoş Geldiniz")
      this.$route.query.guest_id
    }else
    {
      $toast.warning("Giriş Yapmalısınız")
      ipcRenderer.send("login-required",true)

      this.$router.push({name:'login'})
    }*/
  },
  created() {

  },
  
}
</script>

<style>

.py-12{
  zoom: 85%;

}
</style>
