

const myInterval = setInterval(addBlock, 1500);



function addBlock() {
    const blocksContainer = document.getElementById("blocks");
    var amount = blocksContainer.childElementCount;
    const div = document.createElement("div");
    div.classList.add('blocks__element', 'element--block');
    div.addEventListener('click', () => { blocksContainer.removeChild(div); })

    if (amount < 64) {
        blocksContainer.appendChild(div)
    }
}





