<template>
<router-link
            to="/lists"
            custom
            v-slot="{ href }"
            >

<a :href="href"  class="md:absolute bottom-0 right-0 p-4 float-right">
      <div class="md:absolute inline-flex items-center justify-center w-6 h-6 text-m font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 right-2 dark:border-gray-900 animate-bounce">{{ listguestcount }}
    
    
    </div>
      <div class="p-4 space-y-2 bg-gray-600 rounded shadow">

      <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      </div>
    </a>
</router-link>

</template>

<script>
import axios from 'axios';


export default {
    name:'listinfo',
    data(){
        return{
            listguestcount:''
        }
    },
    methods:{
        lastest(){
            const config = {
                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` },
            };


            axios.post(this.$store.state.apiUrl + this.$store.state.lastest_list, {
                token:this.$store.state.token_origin,
            }, config)
                .then((response) => {
                    this.listguestcount=response.data.data
                    console.log(this.listguestcount)

                })
                .catch((error) => {
                    console.log(error)
                    alert(error)
                }).finally(() => this.loading = false);

        }
    },
    mounted(){
        this.lastest();
    }

}

</script>