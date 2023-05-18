<script setup>
import { ref,defineProps } from 'vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import NavLink from '@/components/NavLink.vue';

defineProps({
    title: String,
    
});

const showingNavigationDropdown = ref(false);


const logout = () => {
    this.$router.push("login");
};
</script>

<template>
    <div>


        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->

                            <router-link
                            to="/home"
                            custom
                            v-slot="{ href,navigate, isActive }"
                            >
                            <NavLink :active="isActive" :href="href" @click="navigate">
                                Anasayfa
                                </NavLink
                            >
                            </router-link>

                            




                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
 
                            <router-link
                            to="/guests"
                            custom
                            v-slot="{ href, navigate, isActive }"
                            >
                            <NavLink :active="isActive" :href="href" @click="navigate">
                                Konuklar
                                </NavLink
                            >
                            </router-link>
                            </div>

                                                        <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
 
                            <router-link
                            to="/rooms"
                            custom
                            v-slot="{ href, navigate, isActive }"
                            >
                            <NavLink :active="isActive" :href="href" @click="navigate">
                                Odalar
                                </NavLink
                            >
                            </router-link>
                            </div>

                            
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
 
                            <router-link
                            to="/reports"
                            custom
                            v-slot="{ href, navigate, isActive }"
                            >
                            <NavLink :active="isActive" :href="href" @click="navigate">
                                Raporlar
                                </NavLink
                            >
                            </router-link>
                            </div>


                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
 
                            <router-link
                            to="/lists"
                            custom
                            v-slot="{ href, navigate, isActive }"
                            >
                            <NavLink :active="isActive" :href="href" @click="navigate">
                                Listeler
                                </NavLink
                            >
                            </router-link>
                            </div>


                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
 
                            <router-link
                            to="/setting"
                            custom
                            v-slot="{ href, navigate, isActive }"
                            >
                            <NavLink :active="isActive" :href="href" @click="navigate">
                                Ayarlar
                                </NavLink
                            >
                            </router-link>
                            </div>


                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <div class="ml-3 relative">
                                <SecondaryButton :type="button" v-on:click="exit()">
                                    Çıkış
                                </SecondaryButton>
                            </div>

                            <!-- Settings Dropdown -->

                        </div>

                        <!-- Hamburger -->

                    </div>
                </div>


            </nav>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>

<script>

export default {
    name:'HomeView',

    methods:{
        exit(){
            this.$store.commit('loginChange',false)
            this.$router.push({name:'login'})
        }
    },
    data(){
        return{
           

        }
    }

}

</script>