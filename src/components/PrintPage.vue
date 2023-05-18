<template>
  <div class="vue-html2pdf">


    <transition name="transition-anim">
      <section class="pdf-preview" v-if="pdfFile">
        <button @click.self="closePreview()">&times;</button>

        <iframe :src="pdfFile" width="100%" height="100%" />
      </section>
    </transition>
  </div>
</template>
<script>
import html2pdf  from "html2pdf.js";

export default
{
  name: 'PrintPage',
  data(){
    return{
      pdfFile: null,
    }
  },
  props:
    {
      landscape:
        {
          type: Boolean,
          default: false
        }
    },
  methods:
    {
      

    closePreview() {
      this.pdfFile = null
    },
     async print(node)
      {
        const options = this.setOptions()
            const html2PdfSetup = html2pdf().set(options).from(node)
            this.pdfFile = await html2PdfSetup.output('bloburl')
      },

setOptions() {
  return {
    margin:       [5, 5, 5, 5],

    filename: `rapor.pdf`,

    image: {
      type: 'jpeg',
      quality: 0.98,
    },

    enableLinks: true,

    html2canvas: {
      dpi: 300,
      scale: 1,
      useCORS: true,
      letterRendering: true,
      
    },

    jsPDF: {
        unit: "mm", 
                format: "a4", 
                orientation: "p"
    },
  }
},
    }
};
</script>

<style>


 .pdf-preview {
    position: fixed;
    width: 65%;
    min-width: 600px;
    height: 80vh;
    top: 100px;
    z-index: 9999999;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px #00000048;



 
  }
  .pdf-preview  iframe {
      border: 0;
    }

    .pdf-preview  button {
      position: absolute;
      top: -20px;
      left: -15px;
      width: 35px;
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