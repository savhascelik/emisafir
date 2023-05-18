<script setup>
import {  defineProps,defineEmits, ref} from 'vue';
import DialogModal from '@/components/DialogModal.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import FormSection from '@/components/FormSection.vue';
import axios from 'axios';

const emit = defineEmits(['close']);

defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    addRoomForm:{
        type:Boolean,
        default:ref(null)
    }
});


const close = () => {
    emit('close');
};


</script>

<template>
                           <DialogModal :show="show != false" @close="close">
                            <template #title>
                                Oda Ekle
                            </template>

                            <template #content>


                                <FormSection @submitted="createApiToken">

                                    <template #form>
                                        <!-- Token Name -->


                                        <div  class="col-span-12">



                                            <div >Blok</div>

                                            <select @change="getallFloor(input.block_id)"  v-model="input.block_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                            <option disabled value="">Please select </option>
                                            <option v-for="block in blocks" :key="block.id" :value="block.id">{{ block.block_name +' Blok' }}</option>

                                            </select>

                                            <div v-if="floors.length>0">Kat</div>

                                            <select v-if="floors.length>0"  v-model="input.floor_id"  @change=" computeroomName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                            <option disabled value="">Please select </option>
                                            <option v-for="floor in floors" :key="floor.id" :value="floor.id"  :data-floorname="floor.floor_name" >{{ floor.floor_name +' Katı' }}</option>

                                            </select>


                                            <InputLabel for="name" value="Oda Adı !Aynı isimde iki oda bulunamaz" />
                                            <TextInput
                                                id="name"
                                                v-model="input.room_name"
                                                type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                autofocus
                                            />

                                            <InputLabel for="name" value="Oda Kapasitesi" />
                                            <TextInput
                                                id="name"
                                                v-model="input.room_capacity"
                                                type="number"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                autofocus
                                            />
                                            <InputLabel for="name" value="Oda Hakkında" />
                                            <TextInput
                                                id="name"
                                                v-model="input.room_about"
                                                type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                autofocus
                                            />

                                    </div>
                                    </template>

                                </FormSection>
                            </template>

                            <template #footer>
                                <SecondaryButton @click="close">
                                    İptal
                                </SecondaryButton>

                                <PrimaryButton
                                    class="ml-3"
                                    :class="{ 'opacity-25': addRoomForm.processing }"
                                    :disabled="addRoomForm.processing"
                                    @click="addRooms"
                                >
                                    Kaydet
                                </PrimaryButton>
                            </template>
                        </DialogModal>
</template>

<script>
import {useToast} from 'vue-toast-notification';
import './../../node_modules/vue-toast-notification/dist/theme-bootstrap.css';
const $toast = useToast();

export default {
    name: 'RoomCreate',
      data() {
            return {
                input: {
                    block_id:'',
                    floor_id:'',
                    room_name:'',
                    room_capacity:'',
                    room_about:'',
                },
                blocks:[],
                floors:[]
            }
        },

        methods:{
            computeroomName(e){
               this.input.room_name=e.target.options[e.target.options.selectedIndex].dataset.floorname
            },
                addRooms () {
                
        const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                        };
                axios.post(this.$store.state.apiUrl+this.$store.state.apiRoomSave,{
                    blocks_id: this.input.block_id,
                    floors_id: this.input.floor_id,
                    room_name: this.input.room_name,
                    room_capacity:this.input.room_capacity,
                    room_about:this.input.room_about,
                    token:this.$store.state.token_origin,

                }, config)
                .then((response)=> {
                $toast.success(response.data.data.room_name + "  Odası Başarılı Bir Şekilde Kaydedildi")
                this.emitEvent()

                })
                .catch((error)=> {
                    $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                console.log(error)
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
                        $toast.success("  Blok Verisi Güncellendi")
                        this.blocks=response.data.data 
                        console.log( this.blocks)
                        })
                        .catch((error)=> {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                        console.log(error.data.message)
                        alert(error)
                        }).finally(() => this.loading = false);
                    }
                },
                getallFloor(block_id){
                if(this.$store.state.loginState)
                    {

                    const config = {
                                headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                                };
                        axios.post(this.$store.state.apiUrl+this.$store.state.getallfloor,{
                            blocks_id:block_id
                        }, config)
                        .then((response)=> {
                        $toast.success("  Kat Verisi Güncellendi")
                        this.floors=response.data.data 
                        console.log( this.floors)
                        })
                        .catch((error)=> {
                        $toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error.data.message)
                        console.log(error.data.message)
                        alert(error)
                        }).finally(() => this.loading = false);
                    }
                },
                emitEvent: function () {
            this.$emit('fetchData');
            this.$emit('close');
          },
        },

        mounted(){
            this.getallBlock()
        }

}

</script>