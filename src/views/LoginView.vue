<script setup>
import {  defineProps } from 'vue';
import axios from 'axios';
import AuthenticationCard from '@/components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/components/AuthenticationCardLogo.vue';
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import LoginNavbar from '@/components/LoginNavbar.vue';
import { VuePreloader } from 'vue-preloader';
import './../../node_modules/vue-preloader/dist/style.css'

import { useRouter } from "vue-router";
defineProps({
    canResetPassword:{
      Boolean,
      default: true
    },
    status:{
      String,
    }
});
const router = useRouter();


const self = this;
console.log(self)









</script>

<template>



    <AuthenticationCard>
<keep-alive>

        <VuePreloader
        background-color="#091a28"
        color="#ffffff"
        transition-type="fade-up"
        :loading-speed="25"
        :transition-speed="1500"
        @loading-is-over="loadingIsOver"
        @transition-is-over="transitionIsOver"
        >
        </VuePreloader>

</keep-alive>
        <template #login>
            <LoginNavbar />
        </template>

        <template #logo>
            <AuthenticationCardLogo />

        </template>
        <h1 class="mb-4 text-3xl font-extrabold dark:text-white md:text-5xl lg:text-6xl   text-blue-500   text-center ">
                Konuk
            </h1>
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>


        <form @submit.prevent="submit" >
            <div>
                <InputLabel for="email"    value="Kullanıcı Adı" />
                <TextInput
                    id="email"
                    name="email"
                    v-model="input.username"
                    type="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    autofocus
                    autocomplete="username"
                />
            </div>

            <div class="mt-4">
                <InputLabel for="password"   value="Şifre" />
                <TextInput
                    id="password"
                    name="password"
                    v-model="input.password"
                    type="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    autocomplete="current-password"
                />
            </div>



            <div class="flex items-center justify-end mt-4">
                <template v-if="canResetPassword">

                <router-link  to="/" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Şifremi Unuttum
                </router-link>
            </template>

                <PrimaryButton  v-on:click="login()">
                    Giriş
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>


<script>
import {useToast} from 'vue-toast-notification';
import './../../node_modules/vue-toast-notification/dist/theme-bootstrap.css';
import { useIpcRenderer } from '@vueuse/electron'

const ipcRenderer = useIpcRenderer()

const $toast = useToast();


export default {
  name: 'LoginView',
  data() {
            return {
                input: {
                    username: "savas@savas.com",
                    password: "12345678"
                }
            }
        },

  methods:{
    login () {
                

                axios.post(this.$store.state.apiUrl+this.$store.state.apiLogin,{
                
                email: this.input.username,
                password:this.input.password

                })
                .then((response)=> {
                $toast.success("Başarılı!Oturum Açılıyor")
                /*router.push({name:'setting',
                params: {
                id: 1,
                name: 'John'}
                })*/
                /*this.$emit("canLogin", true)
                console.log(this.$router)
                this.$router.push({name:'home'}) */
                this.$store.commit('loginChange',true)
                console.log(response.data.tokens)
                this.$store.commit('token_origin',response.data.token_origin)
                this.$store.commit('token_plaintext',response.data.token_plaintext)
                ipcRenderer.send("login-success",true)
                this.$router.push({name:'home'})


                })
                .catch((error)=> {
                $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin")
                console.log(error)
                });


                }
        },
        mounted() {
            
        if(this.$store.state.loginState )
        {
            $toast.success("Oturum Zaten Açık")
            this.$router.push({name:'home'})
        }else
        {
            ipcRenderer.send("login-required",true)
        }
    }
  
}
</script>


