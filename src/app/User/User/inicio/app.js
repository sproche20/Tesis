
import {jsPDF}from 'jspdf';
function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
  }
  window.addEventListener('load', async () => {
    const canvas=document.querySelector("canvas");
    const form=document.querySelector('#form');
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      generatePDF();
    })
   
  });
  async function generatePDF() {
    const imagen=await loadImage("fondo.jpg");
  
    const pdf = new jsPDF('p', 'pt', 'letter');
    
    pdf.save("example.pdf");
  pdf.addImage(imagen,'png',0,0,565,272)
  
  
    
  }