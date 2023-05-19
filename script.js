let container = document.querySelector('.container');
container.addEventListener('click', function(e){
    const hasil = document.querySelector('.container .hasil .angka');
    if(hasil !== null && hasil.value == "" && e.target.className == 'tombol samadengan' ){
        hasil.value = "";
    }else if( e.target.className == 'tombol hapus'){
        hasil.value = "";
        console.log(e.target);
    }else if( e.target.className == 'tombol samadengan' ){
        let total = eval(hasil.value);
        hasil.value = total;
    }else if( e.target.className != 'tombol' ){
        hasil.value = hasil.value;
    }else{
        hasil.value += e.target.value;
    }
});

// dark mode
const mode = document.querySelector('.mode');
const hasil = document.querySelector('.hasil');
const tombol = document.querySelectorAll('input.tombol');
const clear = document.getElementById('hapus');
mode.addEventListener('click', function(e){
    if( e.target.className == 'fa fa-moon-o'){
        if(e.target.previousElementSibling.className == 'fa fa-sun-o'){
            e.target.previousElementSibling.style.color = 'rgba(255, 255, 255, .2)';
            e.target.previousElementSibling.style.cursor = 'pointer';
        }
        e.target.style.color = "rgb(0, 140, 255)";
        e.target.style.cursor = "none";
        document.body.style.backgroundColor = ' rgb(0, 140, 255)';
        container.setAttribute('id', 'dark');
        hasil.setAttribute('id', 'dark-hasil');
        mode.setAttribute('id', 'dark-mode');
        clear.setAttribute('id', 'dark-clear');
        for(var i = 0; i < tombol.length; i++){
            tombol[i].setAttribute('id', 'dark-tombol');
        }
    }else{
        if(e.target.nextElementSibling.className == 'fa fa-moon-o'){
            e.target.nextElementSibling.style.color = 'rgba(0, 0, 0, .2)';
            e.target.nextElementSibling.style.cursor = 'pointer';
        }
        document.body.style.backgroundColor = 'orangered';
        e.target.style.color = "orangered";
        e.target.style.cursor = "none";
        container.removeAttribute('id', 'dark');
        hasil.removeAttribute('id', 'dark-hasil');
        mode.removeAttribute('id', 'dark-mode');
        clear.removeAttribute('id', 'dark-clear');
        for(var i = 0; i < tombol.length; i++){
            tombol[i].removeAttribute('id', 'dark-tombol');
        }
    }
});