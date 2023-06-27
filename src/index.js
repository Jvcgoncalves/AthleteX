let mainDiv = document.getElementById('main-videos')
let videos =  [`<iframe class="videosToPlay" width="700" height="400" src="https://www.youtube.com/embed/LGCOYNQF_14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe class="videosToPlay" width="700" height="400" src="https://www.youtube.com/embed/6F6ZLCcRDKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
let index = 0
// Função de ir para o próximo vídeo
function nextVideo(){
mainDiv.classList.add('hide');
setTimeout(() => {
index++;
if (index > videos.length - 1) {
index = 0;
}
mainDiv.innerHTML = videos[index];
mainDiv.classList.remove('hide');
}, 500);
}
// Função de voltar para o vídeo anterior
function previousVideo(){
mainDiv.classList.add('hide');
setTimeout(() => {
index--;
if (index < 0) {
         index = videos.length - 1;
}
mainDiv.innerHTML = videos[index];
mainDiv.classList.remove('hide');
}, 500);
}
