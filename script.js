const modalOverlay = document.querySelector(".modal-overlay");
const revenue = document.querySelectorAll('.revenues')

for (let revenues of revenue ){
    revenues.addEventListener("click", function(){

        modalOverlay.querySelector('img').src =
         revenues.querySelector('img').src

        modalOverlay.querySelector('.h3-modal').innerHTML =
        revenues.querySelector('.revenue_tittle').innerHTML

        modalOverlay.querySelector('.p-modal').innerHTML =
        revenues.querySelector('.revenue_author').innerHTML

        modalOverlay.classList.add("active")
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})