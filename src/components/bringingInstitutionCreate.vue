<script setup>
import {  defineProps,defineEmits, ref} from 'vue';
import DialogModal from '@/components/DialogModal.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
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
    addBringingInstitutionForm:{
        type:Boolean,
        default:ref(null)
    },
});


const close = () => {
    emit('close');
};


</script>

<template>
                           <DialogModal :show="show != false" @close="close">
                            <template #title>
                               Dış Kurum Ekle
                            </template>

                            <template #content>


                                <FormSection>

                                    <template #form>
                                        <!-- Token Name -->


                                        <div  class="col-span-12">

                                            <div>Şehir:</div>

                                            <select v-model="input.city_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                            <option disabled value="">Lütfen Şehir Seçiniz</option>
                                            <option v-for="city in citys" :value=" city.code" :key="city.id">{{ city.name }}</option>

                                            </select>





                                            <InputLabel for="name" value="Kurum Adı" />
                                            <TextInput
                                                id="name"
                                                v-model="input.bringing_institution_name"
                                                type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                autofocus
                                            />

                                            <InputLabel for="name" value="Kurum Hakkında" />
                                            <TextInput
                                                id="name"
                                                v-model="input.bringing_institution_info"
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
                                    :class="{ 'opacity-25': addBringingInstitutionForm.processing }"
                                    :disabled="addBringingInstitutionForm.processing"
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
                    bringing_institution_name:'',
                    bringing_institution_info:'',
                    city_id:39
                },
                citys:[],
            }
        },

        methods:{
                addRooms () {
                
        const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                        };
                axios.post(this.$store.state.apiUrl+this.$store.state.bringinginstitutionsave,{
                    bringing_institution_name: this.input.bringing_institution_name,
                    city_id: this.input.city_id,
                    bringing_institution_info:this.input.bringing_institution_info,
                    token:this.$store.state.token_origin,

                }, config)
                .then((response)=> {
                //$toast.success(response.data.data.bringing_institution_name + "  Kurumu Başarılı Bir Şekilde Kaydedildi")
                this.emitEvent()

                })
                .catch((error)=> {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                console.log(error)
                });


                },
                emitEvent: function () {
            this.$emit('fetchData');
            this.$emit('close');
          },
          getallcity(){

            const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                        };
                axios.get(this.$store.state.apiUrl+this.$store.state.getallcity,config)
                .then((response)=> {
                    this.citys=response.data.data;
                console.log(" Şehir bilgisi geldi")

                })
                .catch((error)=> {
                    //$toast.warning("Başarısız Lütfen Bilgileri Kontrol Edin: "+error)
                console.log(error)
                });

          },
        },
        mounted(){
            this.getallcity()
        }

}

</script>