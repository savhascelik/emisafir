<script setup>
import SettingSvg from '@/assets/svg/Setting.vue';
import ExitSvg from '@/assets/svg/Exit.vue';
import {  defineProps } from 'vue';



</script>


<template>

<nav id="top-bar" class="w-screen flex justify-end absolute inset-x-0 top-3 pl-3 pr-3  " >

    <div>
        <router-link to="/" @click="clickFun()">
            <ExitSvg/>

        </router-link>
    </div>
</nav>
</template>

<style>

#top-bar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

svg{
  -webkit-app-region: no-drag;
}

</style>

<script>
import { useIpcRenderer } from '@vueuse/electron'

const ipcRenderer = useIpcRenderer()

export default{
    name:"LoginNavbar",
    methods:{
        clickFun (){
        ipcRenderer.send("exit",true)
    },
    }

}

</script>