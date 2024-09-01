'use strict';


// Making A responsive Navbar
const burger1 = document.querySelector('.bar');
const burger2 = document.querySelector('.hex');
const navBar = document.querySelector('.sub-nav');

burger1.addEventListener('click', () => {
    navBar.classList.toggle('sidebar');
    burger1.classList.toggle('to-hide');
    burger2.classList.toggle('to-show');
});

burger2.addEventListener('click', () => {
    navBar.classList.toggle('sidebar');
    burger1.classList.remove('to-hide');
    burger2.classList.remove('to-show');
});


// Sending customers/Users Order to her DM on Whatsapp
const sendwhatsapp = () => {
    const phoneNumber = '+2349063299905';
    let name = document.getElementById("text").value;
    let tel = document.getElementById("tel").value;
    let location = document.getElementById("location").value;
    let budget = document.getElementById("budget").value;
    let message = document.getElementById("message").value;


    if (!name || !tel || !location || !budget || !message) {
        alert("Please fill all the required fields");

        return;
    };


let encodeDifferentCharacter = `Good Day Lapearl, Below are the details of my order \n\n *Name:* ${name}\n *Number:* ${tel}\n *Location:*  ${location}\n *Budget:* ${budget}\n\n *Message:* ${message}\n`;

alert(`Name: ${name}\nNumber: ${tel}\nLocation: ${location}\nBudget: ${budget}\nMessage: ${message}`);


encodeDifferentCharacter = encodeURIComponent(encodeDifferentCharacter);


let url = "https://wa.me/" + phoneNumber + "?text=" + encodeDifferentCharacter;

window.open(url, '_blank').focus();

};
