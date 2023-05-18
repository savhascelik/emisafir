
<template>

<div class="flex items-center">

<div class=" justify-center w-full " v-if="!isCameraOpen" v-show="!isLoading"  @click="toggleCamera">

    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6" >
            <svg  aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Tıklayın ve kamerayı açın</span> isterseniz fotorağı yerel bilgisayara kaydedebilirsiniz</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
    </label>
</div>




</div> 

<div id="app" class="web-camera-container h-6">
  <button v-if="isCameraOpen" type="button" id="closebutton" class="button px-4 py-2 z-40 bg-black-600 rounded text-white text-sm font-medium  absolute" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
    &times;
    </button>


  <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
    
    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
      
    <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="200" autoplay></video>
    
    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>

    <div v-if="isCameraOpen && !isLoading" class="camera-shoot flex  justfy-center items-center text-center w-full ">
    <button type="button" class="button absolute -mt-8 z-40 flex justfy-center items-center text-center w-full" @click="takePhoto">
      <img :src="cameralogo" class="absolute">
    </button>

  </div>
  </div>
  

  
  
  <div v-if="isPhotoTaken && isCameraOpen" class="camera-download text-center">
    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button bold" @click="downloadImage">
      Resmi Kaydet
    </a>

    
  </div>
</div>

</template>

<script>

import camera from '@/assets/img/camera--v2.png'

export default{
    el: '#app',
  
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      cameralogo:camera
    }
  },
  
  methods: {
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});


			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      

        this.stopCameraStream();

        const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
           this.$emit('photo',canvas);
      
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
      this.$emit('photo',canvas);
    }
  }
}
</script>

<style>

.closebutton {
      position: absolute;
      top: -200px;
      left: -15px;
      width: 33px;
      height: 35px;
      background: #555;
      border: 0;
      box-shadow: 0px 0px 10px #00000048;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
    }

</style>