const formEvent = document.querySelector('#shelterForm');
const input = document.querySelector('#carName');
const list = document.querySelector('#lists');
formEvent.addEventListener('submit', function(e) {
    e.preventDefault();
    /*console.log("Hurray! Submitted!")*/
    const name = input.value;
    const LIs = document.createElement('li');
    LIs.innerText = name;
    list.append(LIs);
    input.value = '';
})
