  /* slick slider*/
  $('.slider').slick({
    slidesToShow:5,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });

//music js part

const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');;
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress-my');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


// song titles
const songs = ['See you Again', 'Machine Gun Kelly','same-old-love','Justin Bieber','Ariana Grande','The Weeknd 1','Post Malon','Gods Plan','Taylor Swift','Neha kakkar','Arijit Singh','Jubin-Nautiyal','Badshah','Dhvani Bhanushali','A. R. Rahman','Guru_Randhawa','Mandragora','Hardwell'
,'David Guetta','Martin Garrix','Zedd','Alan Walker','Skrillex','Marshmello',]

// keep track of song

let songIndex = 0

// Initial load song into DOM

loadSong(songIndex)

// update song details

function loadSong(index) {
  songIndex = index
  const song = songs[index]
    title.innerText = song
    audio.src = `music/${song}.mp3`;
    cover.src =  `images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()

}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
   audio.pause()
}

function prevSong(){
songIndex --

if(songIndex < 0) {
    songIndex = songs.length - 1
}
loadSong(songIndex)

playSong()
}
function nextSong(){
    songIndex ++

if(songIndex > songs.length - 1) {
    songIndex = 0
}
loadSong(songIndex)

playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

    
}

function setProgress(e) {
    const Width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = ( clickX / Width) * duration
}

//get duration & currentTime for Time of song



// event listener
    playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// change song event

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


