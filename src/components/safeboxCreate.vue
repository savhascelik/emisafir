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
    addSafeBoxForm:{
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
                                Kasa Ekle
                            </template>

                            <template #content>


                                <FormSection >

                                    <template #form>
                                        <!-- Token Name -->


                                        <div  class="col-span-12">

                                            <InputLabel for="name" value="Kasa Adı" />
                                            <TextInput
                                                id="name"
                                                v-model="input.safe_deposit_box_name"
                                                type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                autofocus
                                            />

                                            <InputLabel for="name" value="Kasa Hakkında Bilgi" />
                                            <TextInput
                                                id="name"
                                                v-model="input.safe_deposit_box_info"
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
                                    :class="{ 'opacity-25': addSafeBoxForm.processing }"
                                    :disabled="addSafeBoxForm.processing"
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
    name: 'BoxCreate',
      data() {
            return {
                input: {
                    safe_deposit_box_name:'',
                    safe_deposit_box_info:'',
                },
            }
        },

        methods:{
                addRooms () {
                
        const config = {
                        headers: { Authorization: `Bearer ${this.$store.state.token_origin}` }
                        };
                axios.post(this.$store.state.apiUrl+this.$store.state.apiSafeBoxSave,{
                    safe_deposit_box_name: this.input.safe_deposit_box_name,
                    safe_deposit_box_info:this.input.safe_deposit_box_info,
                    token:this.$store.state.token_origin,

                }, config)
                .then((response)=> {
                //$toast.success(response.data.data.safe_deposit_box_name + "  Kasası Başarılı Bir Şekilde Kaydedildi")
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
        }

}

</script>