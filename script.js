let container = document.querySelector('.container');
container.addEventListener('click', function(e){
    const hasil = document.querySelector('.container .hasil .angka');
    if(hasil !== null && hasil.value == "" && e.target.className == 'tombol samadengan'){
        hasil.value = "";
    }else if( e.target.className == 'tombol hapus' ){
        hasil.value = "";
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
mode.addEventListener('click', function(e){
    if( e.target.className == 'fa fa-moon-o'){
        document.body.style.backgroundColor = 'blue';
        container.classList.add('dark');
    }
});