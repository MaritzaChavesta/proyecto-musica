const music = new Audio('./public/audio/1.mp3');
music.play();

let masterplay = document.getElementById('masterplay');
let wave = document.getElementsByClassName('wave')[0];

masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play(); 
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');  
        wave.classList.add('active2');

       
    }else{
            music.pause();
      
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill'); 
        wave.classList.remove('active2');
    }
})




const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
        })
}


let index = 0;
let poster__menu = document.getElementById('poster__menu');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeAllPlays();

        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');

        music.src = `./public/audio/${index}.mp3`;
        poster__menu.src = `./public/img/album/${index}.png`; 
        music.play();

        let song__title = songs.filter((ele) =>{
            return ele.id == index ;
        })

        song__title.forEach(ele =>{
            let{songName} = ele;
            title.innerHTML = songName;
        })
    })
})

let start  = document.getElementById('start');
let end = document.getElementById('end');
let seek  = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('play__bar__dot')[0];

music.addEventListener('timeupdate',()=>{
    let music__curr = music.currentTime;
    let music__dur = music.duration;

    let min = Math.floor(music__dur/60);
    let  sec = Math.floor(music__dur%60);
    if(sec<10){
        sec = `0${sec}`
    }
    end.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music__curr/60);
    let  sec1 = Math.floor(music__curr%60);
    if(sec<10){
        sec = `0${sec1}`
    }
    start.innerText = `${min1}:${sec1}`;


    let progresbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progresbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
})

 music.addEventListener('ended',()=>{
    masterplay.classList.add('bi-play-fill');
    masterplay.classList.remove('bi-pause-fill');  
    wave.classList.remove('active2');
 })

 let vol__icon = document.getElementById('vol__icon');
 let vol = document.getElementById('vol');
 let vol__dot = document.getElementById('vol__dot');
 let vol__bar = document.getElementsByClassName('vol__bar')[0];

 vol.addEventListener('change',() =>{
    if(vol.value == 0){
        vol__icon.classList.remove('bi-volume-down-fill');
        vol__icon.classList.add('bi-volume-mute-fill');
        vol__icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        vol__icon.classList.add('bi-volume-down-fill');
        vol__icon.classList.remove('bi-volume-mute-fill');
        vol__icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 50){
        vol__icon.classList.remove('bi-volume-down-fill');
        vol__icon.classList.remove('bi-volume-mute-fill');
        vol__icon.classList.add('bi-volume-up-fill');
    }
    
    let vol__a = vol.value;
    vol__bar.style.width = `${vol__a}%`;
    vol__dot.style.left = `${vol__a}%`;
    music.volume = vol__a/100;
 })



 let back = document.getElementById('back');
 let next = document.getElementById('next');

 back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('menu__song__item')).length;
    }

    music.src = `./public/audio/${index}.mp3`;
        poster__menu.src = `./public/img/album/${index}.png`; 
        music.play();

        let song__title = songs.filter((ele) =>{
            return ele.id == index ;
        })

        song__title.forEach(ele =>{
            let{songName} = ele;
            title.innerHTML = songName;
        })
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');   
 })

 
 next.addEventListener('click',()=>{
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('menu__song__item')).length){
        index = 1;
        
    }

    music.src = `./public/audio/${index}.mp3`;
        poster__menu.src = `./public/img/album/${index}.png`; 
        music.play();

        let song__title = songs.filter((ele) =>{
            return ele.id == index ;
        })

        song__title.forEach(ele =>{
            let{songName} = ele;
            title.innerHTML = songName;
        })
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        


})