const playlist = [
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/After school, on the way to school..mp3", title: "After School, On the Way to School", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/Capable of love.mp3", title: "Capable of Love", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/conception for three forms of unhappiness at the state of existence.mp3", title: "Conception for Three Forms of Unhappiness", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/Ginkgo.mp3", title: "Ginkgo", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/hades in the dead of winter.mp3", title: "Hades in the Dead of Winter", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/Humming Word.mp3", title: "Humming Word", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/nigastu no heitai.mp3", title: "Nigatsu no Heitai", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/shayou.mp3", title: "Shayou", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/When You Sleep.mp3", title: "When You Sleep", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/Where Blue Light Blooms.mp3", title: "Where Blue Light Blooms", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/サマースクール.mp3", title: "サマースクール", artist: "Unknown" },
    { src: "/Users/obisballs707/Downloads/:audioplayer/assets/ダブル・プラトニツク・スウイサイド.mp3", title: "ダブル・プラトニツク・スウイサイド", artist: "Unknown" }
];

let currentTrackIndex = 0;
const audio = new Audio();
const currentTrackTitle = document.getElementById("currentTrackTitle");
const currentArtist = document.getElementById("currentArtist");
const playPauseButton = document.getElementById("playPauseButton");
const volumeSlider = document.getElementById("volumeSlider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    currentTrackTitle.textContent = track.title;
    currentArtist.textContent = track.artist;
    audio.load();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸"; // Change to pause symbol
    } else {
        audio.pause();
        playPauseButton.textContent = "▶️"; // Change to play symbol
    }
}

function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "⏸"; // Update button to pause
}

function playPrevious() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "⏸"; // Update button to pause
}

// Volume slider listener
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

// Attach event listeners
prevButton.addEventListener("click", playPrevious);
nextButton.addEventListener("click", playNext);
playPauseButton.addEventListener("click", togglePlayPause);

// Load the first track initially
loadTrack(currentTrackIndex);
