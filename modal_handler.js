var currentSegment = 1;

const segment_1 = document.getElementById('segment-1');
const segment_2 = document.getElementById('segment-2');
const closeButton = document.getElementById('modal-close');
const modal = document.getElementById('terms-modal');
const modal_content = document.getElementById('modal-content');

closeButton.onclick = function() {
    if (currentSegment == 1) {
        console.log(1);
        closeButton.textContent = "AGREE TO TERMS AND CONDITIONS";
        modal_content.classList.add("sweep");
        setTimeout(() => {
            segment_1.style.display = "none";
            segment_2.style.display = "block";
            currentSegment = 2;
        }, 500);
    } else if (currentSegment == 2) {
        modal.style.display = "none"
    }
    
}