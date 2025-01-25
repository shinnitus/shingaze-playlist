const playlist = [
    { src: "assets/After school, on the way to school..mp3", title: "After School, On the Way to School", artist: "kinoue64" },
    { src: "assets/Capable of love.mp3", title: "Capable of Love", artist: "Pinkpantheress" },
    { src: "assets/conception for three forms of unhappiness at the state of existence.mp3", title: "Conception for Three Forms of Unhappiness", artist: "my dead girlfriend" },
    { src: "assets/Ginkgo.mp3", title: "Ginkgo", artist: "Panchiko" },
    { src: "assets/hades in the dead of winter.mp3", title: "Hades in the Dead of Winter", artist: "my dead girlfriend" },
    { src: "assets/Humming Word.mp3", title: "Humming Word", artist: "Pitcher56" },
    { src: "assets/nigastu no heitai.mp3", title: "Nigatsu no Heitai", artist: "the cabs" },
    { src: "assets/shayou.mp3", title: "Shayou", artist: "chouchou merged syrups." },
    { src: "assets/When You Sleep.mp3", title: "When You Sleep", artist: "pastel ghost" },
    { src: "assets/Where Blue Light Blooms.mp3", title: "Where Blue Light Blooms", artist: "origami angel" },
    { src: "assets/サマースクール.mp3", title: "サマースクール", artist: "SEAPOOL" },
    { src: "assets/ダブル・プラトニツク・スウイサイド.mp3", title: "ダブル・プラトニツク・スウイサイド", artist: "tokenainamae" }
];

let currentTrackIndex = 0;
const audio = new Audio();
const currentTrackTitle = document.getElementById("currentTrackTitle");
const currentArtist = document.getElementById("currentArtist");
const playPauseButton = document.getElementById("playPauseButton");
const volumeSlider = document.getElementById("volumeSlider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const dropdownContainer = document.getElementById("dropdownContainer");
const tracklistElement = document.getElementById("tracklist");
const menuButton = document.getElementById("menuButton");

// Load the current track's info
function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    currentTrackTitle.textContent = track.title;
    currentArtist.textContent = track.artist;
    audio.load();
}

// Play/Pause button toggle
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸"; // Change to pause symbol
    } else {
        audio.pause();
        playPauseButton.textContent = "▶️"; // Change to play symbol
    }
}

// Play next track
function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "⏸"; // Update button to pause
}

// Play previous track
function playPrevious() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = "⏸"; // Update button to pause
}

// Toggle dropdown visibility
menuButton.addEventListener("click", () => {
    dropdownContainer.classList.toggle("open");
});

// Create track list for the dropdown menu
function createTrackList() {
    playlist.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = `${track.title} - ${track.artist}`;
        li.addEventListener("click", () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            audio.play();
            playPauseButton.textContent = "⏸";
            dropdownContainer.classList.remove("open"); // Close the dropdown after selection
        });
        tracklistElement.appendChild(li);
    });
}

// Volume control
volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

// Event listeners for play, next, and prev buttons
playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNext);
prevButton.addEventListener("click", playPrevious);

// Initialize the first track and load track list
loadTrack(currentTrackIndex);
createTrackList();
