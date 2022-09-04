
/*    */

//create Array
const songs = [
    {
        id:'1',
        songName:`Jessie J <br>
        <div class="subtitulo">Who You Are</div>`,
        poster:"./public/img/album/1.png"
    },
    {
        id:'2',
        songName:`Josh Baldwin <br>
        <div class="subtitulo">Narrow Road</div>`,
        poster:"./public/img/album/2.png"
    },
    {
        id:'3',
        songName:`Michael Jackson <br>
        <div class="subtitulo">Billie Jean </div>`,
        poster:"./public/img/album/3.png"
    },
    {
        id:'4',
        songName:`Lily Allen <br>
        <div class="subtitulo"> The Fear</div>`,
        poster:"./public/img/album/4.png"
    },
    {
        id:'5',
        songName:`Justin Timberlake <br>
        <div class="subtitulo">Rock Your Body</div>`,
        poster:"./public/img/album/5.png"
    },
    {
        id:'6',
        songName:`Elvis Presley <br>
        <div class="subtitulo">Can't Help Falling In Love</div>`,
        poster:"./public/img/album/6.png"
    },
    {
        id:'7',
        songName:`Gwen Stefani <br>
        <div class="subtitulo">The Sweet Escape</div>`,
        poster:"./public/img/album/7.png"
    },


    //Pupular song

    {
        id:'10',
        songName:`Shura <br>
        <div class="subtitulo"> Indecision</div>`,
        poster:"./public/img/album/10.png"
    },
    {
        id:'11',
        songName:`Adele <br>
        <div class="subtitulo"> Someone Like you</div>`,
        poster:"./public/img/album/11.png"
    },
    {
        id:'12',
        songName:`The Beatles <br>
        <div class="subtitulo">Don't Let Me Down</div>`,
        poster:"./public/img/album/12.png"
    },
    {
        id:'13',
        songName:`The Zombies <br>
        <div class="subtitulo">Summertime</div>`,
        poster:"./public/img/album/13.png"
    },
    {
        id:'14',
        songName:`The Rolling Stones <br>
        <div class="subtitulo">Paint, Black</div>`,
        poster:"./public/img/album/14.png"
    },
    {
        id:'15',
        songName:`Petula Clark <br>
        <div class="subtitulo">I Couldn't Your Love</div>`,
        poster:"./public/img/album/15.png"
    },
    {
        id:'16',
        songName:`Coldplay<br>
        <div class="subtitulo">Hymn For The Weekend </div>`,
        poster:"./public/img/album/16.png"
    },
    {
        id:'17',
        songName:`Jessie J <br>
        <div class="subtitulo">Who You Are</div>`,
        poster:"./public/img/album/17.png"
    },
    {
        id:'18',
        songName:`Josh Baldwin <br>
        <div class="subtitulo">Narrow Road</div>`,
        poster:"./public/img/album/18.png"
    },
    {
        id:'19',
        songName:`Michael Jackson <br>
        <div class="subtitulo">Billie Jean </div>`,
        poster:"./public/img/album/19.png"
    },
    {
        id:'20',
        songName:`Lily Allen <br>
        <div class="subtitulo"> The Fear</div>`,
        poster:"./public/img/album/20.png"
    },
    {
        id:'21',
        songName:`Justin Timberlake <br>
        <div class="subtitulo">Rock Your Body</div>`,
        poster:"./public/img/album/21.png"
    } 
    

]

Array.from(document.getElementsByClassName('menu__song__item')).forEach((element, i)=>{
     element.getElementsByTagName('img')[0].src = songs[i].poster;
     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})

