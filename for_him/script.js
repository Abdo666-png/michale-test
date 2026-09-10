const apps = {

   peep: {
    title: "Peep 🖤",
    content: `
        <div class="peepApp">

            <div class="peepHero">
                <div class="peepGlow"></div>

                <div class="peepCover">
                    <div class="peepCoverText">
                        <span>LIL</span>
                        <strong>PEEP</strong>
                    </div>
                </div>
            </div>

            <div class="peepInfo">
                <h2>Lil Peep</h2>
                <p>music for the late nights 🖤</p>
            </div>

            <div class="peepPlayer">

                <div class="peepNowPlaying">
                    <div>
                        <span>NOW PLAYING</span>
                        <h3 id="peepSong">
                            Star Shopping
                        </h3>
                    </div>

                    <div class="peepHeart">
                        ♡
                    </div>
                </div>

                <div class="peepProgress">
                    <div class="peepProgressFill"></div>
                </div>

                <div class="peepTime">
                    <span>0:00</span>
                    <span>2:34</span>
                </div>

                <div class="peepControls">
                    <button onclick="previousPeepSong()">↶</button>

                    <button
                        class="peepPlay"
                        onclick="togglePeepMusic()"
                        id="peepPlayButton"
                    >
                        ▶
                    </button>

                    <button onclick="nextPeepSong()">↷</button>
                </div>

            </div>

            <div class="peepSongs">

                <div
                    class="peepSong"
                    onclick="selectPeepSong(0)"
                >
                    <span>01</span>
                    <div>
                        <b>Star Shopping</b>
                        <small>Lil Peep</small>
                    </div>
                    <span>♡</span>
                </div>

                <div
                    class="peepSong"
                    onclick="selectPeepSong(1)"
                >
                    <span>02</span>
                    <div>
                        <b>Save That Shit</b>
                        <small>Lil Peep</small>
                    </div>
                    <span>♡</span>
                </div>

                <div
                    class="peepSong"
                    onclick="selectPeepSong(2)"
                >
                    <span>03</span>
                    <div>
                        <b>Awful Things</b>
                        <small>Lil Peep</small>
                    </div>
                    <span>♡</span>
                </div>

                <div
                    class="peepSong"
                    onclick="selectPeepSong(3)"
                >
                    <span>04</span>
                    <div>
                        <b>Beamer Boy</b>
                        <small>Lil Peep</small>
                    </div>
                    <span>♡</span>
                </div>

                <div
                    class="peepSong"
                    onclick="selectPeepSong(4)"
                >
                    <span>05</span>
                    <div>
                        <b>Witchblades</b>
                        <small>Lil Peep</small>
                    </div>
                    <span>♡</span>
                </div>

            </div>

            <div class="peepFooter">
                made for the late nights 🖤
            </div>

        </div>
    `
},

    monster: {
        title: "Monster 🥤",
        content: `
            <div class="monsterApp">

                <!-- MONSTER SELECTOR -->

                <div id="monsterSelector">

                    <h2>Choose your Monster</h2>

                    <div class="monsterStage">

                        <img
                            id="monsterImage"
                            src="monster-cans.png"
                            alt="Monster drinks"
                        >

                    </div>

                    <div class="monsterControls">

                        <button onclick="previousMonster()">‹</button>

                        <div class="monsterInfo">

                            <span id="monsterNumber">7 / 12</span>

                            <h3 id="monsterName">
                                Original Monster
                            </h3>

                        </div>

                        <button onclick="nextMonster()">›</button>

                    </div>

                    <button
                        class="selectMonster"
                        onclick="selectMonster()"
                    >
                        SELECT
                    </button>

                </div>


                <!-- POURING PAGE -->

                <div id="pourPage">

                    <div class="pourHeader">
                        <span id="pourMonsterName">
                            Original Monster
                        </span>
                    </div>


                    <div class="pourScene">

                        <!-- CAN -->

                        <div class="pourCan">

                            <div
                                id="canFake"
                                class="canFake"
                            >
                                🥤
                            </div>

                        </div>


                        <!-- STREAM -->

                        <div class="pourStream"></div>


                        <div class="cupContainer">

    
                        <div class="liquid">
       
                        <div class="liquidSurface"></div>
       
                        <div class="bubbles">
       
                        <i></i>
       
                        <i></i>
       
                        <i></i>
       
                        <i></i>
       
                        <i></i>
       
                        <i></i>
       
                     </div>
    </div>

</div>

                            <img
                                src="cup.png"
                                class="cupImage"
                                alt="Cup"
                            >

                        </div>


                        <!-- SPLASH -->

                        <div class="splash">

                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>

                        </div>

                    </div>


                    <div class="pourMessage">
                        Pouring your Monster...
                    </div>


                    <button
                        id="drinkButton"
                        class="drinkButton"
                        onclick="drinkMonster()"
                    >
                        DRINK 🥤
                    </button>

                </div>

            </div>
        `
    },


   anime: {
    title: "K-ON! 🎀",
    content: `
        <div class="konApp">

            <!-- floating decorations -->
            <div class="konFloat konNote n1">♪</div>
            <div class="konFloat konNote n2">♫</div>
            <div class="konFloat konHeart h1">♥</div>
            <div class="konFloat konHeart h2">♡</div>
            <div class="konFloat konStar s1">✦</div>
            <div class="konFloat konStar s2">✧</div>

            <!-- HERO -->
            <div class="konHero">

                <img
                    src="k-on.png"
                    alt="K-ON!"
                    class="konImage"
                >

                <div class="konHeroOverlay"></div>

                <div class="konHeroText">
                    <span>SAKURA HIGH</span>
                    <h1>K-ON!</h1>
                    <p>放課後ティータイム</p>
                </div>

            </div>

            <!-- INTRO -->
            <div class="konIntro">
                <span class="konSmallTitle">AFTER SCHOOL TEA TIME</span>

                <h2>
                    Who are you visiting?
                </h2>

                <p>
                    Pick a member of the Light Music Club 🎸
                </p>
            </div>

            <!-- CHARACTER CARDS -->
            <div class="konCharacters">

                <button
                    class="konCharacter yui"
                    onclick="selectKonCharacter('yui')"
                >
                    <div class="konCharIcon">🎸</div>

                    <div class="konCharInfo">
                        <strong>Yui</strong>
                        <span>Guitar • Chaos</span>
                    </div>

                    <div class="konArrow">›</div>
                </button>

                <button
                    class="konCharacter mio"
                    onclick="selectKonCharacter('mio')"
                >
                    <div class="konCharIcon">🎸</div>

                    <div class="konCharInfo">
                        <strong>Mio</strong>
                        <span>Bass • Shy</span>
                    </div>

                    <div class="konArrow">›</div>
                </button>

                <button
                    class="konCharacter ritsu"
                    onclick="selectKonCharacter('ritsu')"
                >
                    <div class="konCharIcon">🥁</div>

                    <div class="konCharInfo">
                        <strong>Ritsu</strong>
                        <span>Drums • Chaos</span>
                    </div>

                    <div class="konArrow">›</div>
                </button>

                <button
                    class="konCharacter mugi"
                    onclick="selectKonCharacter('mugi')"
                >
                    <div class="konCharIcon">🫖</div>

                    <div class="konCharInfo">
                        <strong>Mugi</strong>
                        <span>Keys • Tea</span>
                    </div>

                    <div class="konArrow">›</div>
                </button>

                <button
                    class="konCharacter azusa"
                    onclick="selectKonCharacter('azusa')"
                >
                    <div class="konCharIcon">🎸</div>

                    <div class="konCharInfo">
                        <strong>Azusa</strong>
                        <span>Guitar • Focus</span>
                    </div>

                    <div class="konArrow">›</div>
                </button>

            </div>

            <!-- CHARACTER DISPLAY -->
            <div
                class="konProfile"
                id="konProfile"
            >

                <div class="konProfileTop">

                    <div
                        class="konProfileIcon"
                        id="konProfileIcon"
                    >
                        🎸
                    </div>

                    <div>
                        <span class="konProfileLabel">
                            LIGHT MUSIC CLUB
                        </span>

                        <h3 id="konProfileName">
                            Yui Hirasawa
                        </h3>
                    </div>

                    <button
                        class="konFavorite"
                        id="konFavorite"
                        onclick="toggleKonFavorite()"
                    >
                        ♡
                    </button>

                </div>

                <div class="konProfileLine"></div>

                <p id="konProfileText">
                    A cheerful guitarist who can turn
                    literally anything into an adventure.
                </p>

                <div class="konTags" id="konTags">
                    <span>GUITAR</span>
                    <span>ENERGY</span>
                    <span>FOOD</span>
                </div>

            </div>

            <!-- VIBE -->
            <div class="konVibe">

                <div class="konVibeTitle">
                    <span>🎀</span>
                    <div>
                        <small>YOUR VIBE</small>
                        <strong id="konVibeText">
                            Cute & chaotic
                        </strong>
                    </div>
                </div>

                <div class="konVibeButtons">

                    <button
                        onclick="setKonVibe('cute')"
                        class="active"
                    >
                        💗 Cute
                    </button>

                    <button
                        onclick="setKonVibe('sleepy')"
                    >
                        🌙 Sleepy
                    </button>

                    <button
                        onclick="setKonVibe('chaotic')"
                    >
                        💥 Chaotic
                    </button>

                    <button
                        onclick="setKonVibe('tea')"
                    >
                        🫖 Tea
                    </button>

                </div>

            </div>

            <!-- LITTLE MESSAGE -->
            <div class="konMessage" id="konMessage">

                <div class="konMessageIcon">
                    ♪
                </div>

                <div>
                    <span>AFTER SCHOOL MESSAGE</span>

                    <p id="konMessageText">
                        "Let's have some cake!"
                    </p>
                </div>

            </div>

            <div class="konFooter">
                放課後ティータイム ♡
            </div>

        </div>
    `
},


   geass: {
    title: "GEASS 👁️",
    content: `
        <div class="geassApp">

            <div class="geassAtmosphere"></div>

            <div class="geassEye">

                <div class="geassEyeOuter">
                    <div class="geassEyeInner">
                        <div class="geassPupil"></div>
                    </div>
                </div>

                <div class="geassMarks">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

            </div>

            <div class="geassTitle">
                <span>CODE GEASS</span>
                <h2>I ASK OF YOU...</h2>
            </div>

            <div class="geassCommand" id="geassText">
                Awaiting command...
            </div>

            <button
                class="geassActivate"
                id="geassButton"
                onclick="activateGeass()"
            >
                <span>ACTIVATE</span>
                <small>GEASS</small>
            </button>

            <div class="geassWarning" id="geassWarning">
                ⚠ ONE USE ONLY ⚠
            </div>

        </div>
    `
},


    csm: {
        title: "CSM 🩸",
        content: `
            <div class="content">

                <h2>Chainsaw Man</h2>

                <p>
                    Reze • Makima • Denji
                </p>

            </div>
        `
    },


    dbd: {
        title: "DBD ☠️",
        content: `
            <div class="content center">

                <div class="bigEmoji">☠️</div>

                <h2>DEAD BY DAYLIGHT</h2>

                <p>
                    Survivor status: ALIVE
                </p>

            </div>
        `
    },


    messages: {
        title: "Messages 💬",
        content: `
            <div class="content">

                <div class="message">

                    <b>me</b>

                    <p>
                        bro why are you drinking Monster again 😭
                    </p>

                </div>


                <div class="message">

                    <b>him</b>

                    <p>
                        shut up
                    </p>

                </div>

            </div>
        `
    },


    secret: {
        title: "???",
        content: `
            <div class="content center">

                <div class="bigEmoji">❓</div>

                <h2>Nothing here.</h2>

                <p>yet.</p>

            </div>
        `
    }

};



/* ==========================================
   APP SYSTEM
========================================== */

function openApp(name) {

    const app = apps[name];

    document.getElementById("home").style.display = "none";

    document.getElementById("appScreen").style.display = "block";

    document.getElementById("appTitle").textContent =
        app.title;

    document.getElementById("appContent").innerHTML = app.content;

if (name === "geass") {
    setTimeout(() => {
        resetGeass();
    }, 50);
}
if (name === "anime") {
    setTimeout(() => {
        resetKonApp();
    }, 50);
}
// If Monster opened, initialize selector
if (name === "monster") {
    setTimeout(() => {
        updateMonster();
    }, 50);
}


    // If Monster opened, initialize selector

    if (name === "monster") {

        setTimeout(() => {

            updateMonster();

        }, 50);

    }

}



function goHome() {

    document.getElementById("appScreen").style.display =
        "none";

    document.getElementById("home").style.display =
        "block";

}



/* ==========================================
   CODE GEASS
========================================== */

let geassActivated = false;

function activateGeass() {

    if (geassActivated) return;

    geassActivated = true;

    const app =
        document.querySelector(".geassApp");

    const text =
        document.getElementById("geassText");

    const button =
        document.getElementById("geassButton");

    const warning =
        document.getElementById("geassWarning");

    if (!app || !text || !button) return;

    /* Activate visual effect */

    app.classList.add("geassActivated");

    button.classList.add("used");

    if (warning) {
        warning.textContent =
            "GEASS ACTIVATED";
    }

    /* Glitch effect */

    document.body.classList.add("geassGlitch");

    setTimeout(() => {
        document.body.classList.remove("geassGlitch");
    }, 700);

    /* Typewriter */

    text.textContent = "";

    const message =
        "You have been commanded to continue exploring this website.";

    let index = 0;

    function typeMessage() {

        if (index < message.length) {

            text.textContent +=
                message.charAt(index);

            index++;

            setTimeout(typeMessage, 45);

        } else {

            text.classList.add("finished");
        }
    }

    setTimeout(typeMessage, 900);
}
function resetGeass() {

    geassActivated = false;

    const app =
        document.querySelector(".geassApp");

    const text =
        document.getElementById("geassText");

    const button =
        document.getElementById("geassButton");

    const warning =
        document.getElementById("geassWarning");

    if (app) {
        app.classList.remove("geassActivated");
    }

    if (text) {
        text.textContent =
            "Awaiting command...";
        text.classList.remove("finished");
    }

    if (button) {
        button.classList.remove("used");
    }

    if (warning) {
        warning.textContent =
            "⚠ ONE USE ONLY ⚠";
    }
}



/* ==========================================
   MONSTER SYSTEM
========================================== */

const monsters = [

    {
        name: "Ultra Blue",
        x: 85
    },

    {
        name: "Ultra Gold",
        x: 145
    },

    {
        name: "Ultra Red",
        x: 215
    },

    {
        name: "Ultra White",
        x: 300
    },

    {
        name: "Ultra Violet",
        x: 400
    },

    {
        name: "Fiesta Mango",
        x: 510
    },

    {
        name: "Original Monster",
        x: 650
    },

    {
        name: "Nitro",
        x: 760
    },

    {
        name: "Juiced Lemonade",
        x: 850
    },

    {
        name: "Juiced Mango",
        x: 955
    },

    {
        name: "VR46",
        x: 1040
    },

    {
        name: "Ripper",
        x: 1120
    }

];


let currentMonster = 6;



function updateMonster() {

    const monster =
        monsters[currentMonster];

    const image =
        document.getElementById("monsterImage");

    if (!image) return;


    const scale = 0.72;

    const stageCenter = 175;

    const canPosition =
        monster.x * scale;

    const movement =
        stageCenter - canPosition;


    image.style.transform =
        `translateX(${movement}px)`;


    const name =
        document.getElementById("monsterName");

    if (name) {

        name.textContent =
            monster.name;

    }


    const number =
        document.getElementById("monsterNumber");

    if (number) {

        number.textContent =
            `${currentMonster + 1} / ${monsters.length}`;

    }

}



function nextMonster() {

    currentMonster++;

    if (
        currentMonster >=
        monsters.length
    ) {

        currentMonster = 0;

    }

    updateMonster();

}



function previousMonster() {

    currentMonster--;

    if (currentMonster < 0) {

        currentMonster =
            monsters.length - 1;

    }

    updateMonster();

}



/* ==========================================
   MONSTER COLORS
========================================== */

const monsterColors = {

    "Ultra Blue": "#168cff",

    "Ultra Gold": "#ffc400",

    "Ultra Red": "#ff1744",

    "Ultra White": "#eeeeee",

    "Ultra Violet": "#9b4dff",

    "Fiesta Mango": "#ff8c00",

    "Original Monster": "#8cff00",

    "Nitro": "#f5f5f5",

    "Juiced Lemonade": "#ffe600",

    "Juiced Mango": "#ff7b00",

    "VR46": "#ffe600",

    "Ripper": "#ff9d00"

};



let selectedMonsterColor =
    "#8cff00";



/* ==========================================
   SELECT MONSTER
========================================== */

function selectMonster() {

    const monster =
        monsters[currentMonster];


    selectedMonsterColor =
        monsterColors[monster.name] ||
        "#8cff00";


    /*
        Hide selector
    */

    const selector =
        document.getElementById(
            "monsterSelector"
        );

    if (selector) {

        selector.style.display =
            "none";

    }


    /*
        Show pouring page
    */

    const pourPage =
        document.getElementById(
            "pourPage"
        );

    if (!pourPage) return;


    pourPage.style.display =
        "flex";


    /*
        Set color
    */

    pourPage.style.setProperty(
        "--drink-color",
        selectedMonsterColor
    );


    /*
        Change name
    */

    const name =
        document.getElementById(
            "pourMonsterName"
        );

    if (name) {

        name.textContent =
            monster.name;

    }


    /*
        Reset animation
    */

    pourPage.classList.remove(
        "pouring"
    );


    void pourPage.offsetWidth;


    /*
        Start animation
    */

    pourPage.classList.add(
        "pouring"
    );


    /*
        Show DRINK after animation
    */

    const button =
        document.getElementById(
            "drinkButton"
        );

    if (button) {

        button.style.display =
            "none";


        setTimeout(() => {

            button.style.display =
                "block";

        }, 6500);

    }

}



/* ==========================================
   DRINK
========================================== */

function drinkMonster() {

    const liquid =
        document.querySelector(
            "#pourPage .liquid"
        );

    if (!liquid) return;


    liquid.classList.add(
        "drink"
    );


    const message =
        document.querySelector(
            "#pourPage .pourMessage"
        );


    if (message) {

        message.textContent =
            "Damn bro drank it 💀";

    }


    setTimeout(() => {

        liquid.classList.remove(
            "drink"
        );

    }, 1800);

}

/* ==========================================
   LIL PEEP MUSIC SYSTEM
========================================== */

const peepSongs = [
    {
        title: "Star Shopping",
        file: "audio/star-shopping.mp3"
    },
    {
        title: "Save That Shit",
        file: "audio/save-that-shit.mp3"
    },
    {
        title: "Awful Things",
        file: "audio/awful-things.mp3"
    },
    {
        title: "Beamer Boy",
        file: "audio/beamer-boy.mp3"
    },
    {
        title: "Witchblades",
        file: "audio/witchblades.mp3"
    }
];

let currentPeepSong = 0;
let peepPlaying = false;

const peepAudio = new Audio();

function loadPeepSong(index, autoplay = false) {

    currentPeepSong = index;

    const song = peepSongs[currentPeepSong];

    peepAudio.src = song.file;

    const title =
        document.getElementById("peepSong");

    if (title) {
        title.textContent = song.title;
    }

    const button =
        document.getElementById("peepPlayButton");

    if (button) {
        button.textContent = autoplay ? "Ⅱ" : "▶";
    }

    if (autoplay) {
        peepAudio.play()
            .then(() => {
                peepPlaying = true;
            })
            .catch(() => {
                peepPlaying = false;
            });
    }
}

function selectPeepSong(index) {
    loadPeepSong(index, true);
}

function togglePeepMusic() {

    if (!peepAudio.src) {
        loadPeepSong(currentPeepSong, true);
        return;
    }

    if (peepPlaying) {

        peepAudio.pause();
        peepPlaying = false;

    } else {

        peepAudio.play();
        peepPlaying = true;
    }

    updatePeepPlayButton();
}

function updatePeepPlayButton() {

    const button =
        document.getElementById("peepPlayButton");

    if (!button) return;

    button.textContent =
        peepPlaying ? "Ⅱ" : "▶";
}

function nextPeepSong() {

    currentPeepSong++;

    if (currentPeepSong >= peepSongs.length) {
        currentPeepSong = 0;
    }

    loadPeepSong(currentPeepSong, true);
}

function previousPeepSong() {

    currentPeepSong--;

    if (currentPeepSong < 0) {
        currentPeepSong = peepSongs.length - 1;
    }

    loadPeepSong(currentPeepSong, true);
}

/* ==========================================
   AUDIO EVENTS
========================================== */

peepAudio.addEventListener("play", () => {

    peepPlaying = true;
    updatePeepPlayButton();

});

peepAudio.addEventListener("pause", () => {

    peepPlaying = false;
    updatePeepPlayButton();

});

/* Automatically go to next song */

peepAudio.addEventListener("ended", () => {

    nextPeepSong();

});
peepAudio.addEventListener("timeupdate", () => {

    const progress =
        document.querySelector(".peepProgressFill");

    const currentTime =
        document.querySelector(".peepTime span:first-child");

    const duration =
        document.querySelector(".peepTime span:last-child");

    if (!progress || !currentTime || !duration) return;

    if (peepAudio.duration) {

        const percent =
            (peepAudio.currentTime / peepAudio.duration) * 100;

        progress.style.width = `${percent}%`;

        currentTime.textContent =
            formatPeepTime(peepAudio.currentTime);

        duration.textContent =
            formatPeepTime(peepAudio.duration);
    }
});

function formatPeepTime(seconds) {

    if (!seconds || isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return `${minutes}:${secs
        .toString()
        .padStart(2, "0")}`;
}
const peepProgress =
    document.querySelector(".peepProgress");

if (peepProgress) {

    peepProgress.addEventListener("click", (event) => {

        if (!peepAudio.duration) return;

        const rect =
            peepProgress.getBoundingClientRect();

        const clickPosition =
            event.clientX - rect.left;

        const percentage =
            clickPosition / rect.width;

        peepAudio.currentTime =
            percentage * peepAudio.duration;
    });
}
/* =========================================================
   K-ON! APP
   ========================================================= */

const konCharacters = {

    yui: {
        name: "Yui Hirasawa",
        icon: "🎸",
        text:
            "A cheerful guitarist who can turn literally anything into an adventure.",
        tags: ["GUITAR", "ENERGY", "FOOD"],
        message: "\"Let's have some cake!\"",
        vibe: "Cute & chaotic"
    },

    mio: {
        name: "Mio Akiyama",
        icon: "🎸",
        text:
            "The calm bassist of the group. Talented, responsible... and easily scared.",
        tags: ["BASS", "SONGWRITER", "SHY"],
        message: "\"I-I wasn't scared!\"",
        vibe: "Soft & mysterious"
    },

    ritsu: {
        name: "Ritsu Tainaka",
        icon: "🥁",
        text:
            "The energetic drummer and resident troublemaker. Peace was never an option.",
        tags: ["DRUMS", "CHAOS", "LEADER"],
        message: "\"Come on! Let's do something fun!\"",
        vibe: "Maximum chaos"
    },

    mugi: {
        name: "Tsumugi Kotobuki",
        icon: "🫖",
        text:
            "The elegant keyboardist who somehow finds everything absolutely fascinating.",
        tags: ["KEYBOARD", "TEA", "SWEET"],
        message: "\"Would you like some tea? ♡\"",
        vibe: "Tea & happiness"
    },

    azusa: {
        name: "Azusa Nakano",
        icon: "🎸",
        text:
            "A dedicated guitarist who tries very hard to keep everyone focused.",
        tags: ["GUITAR", "FOCUSED", "KAWAII"],
        message: "\"Senpai... please practice!\"",
        vibe: "Cute & serious"
    }

};

let currentKonCharacter = "yui";
let konFavoriteState = false;


/* ---------------------------------------------------------
   SELECT CHARACTER
   --------------------------------------------------------- */

function selectKonCharacter(character) {

    const data = konCharacters[character];

    if (!data) return;

    currentKonCharacter = character;

    const name = document.getElementById("konProfileName");
    const icon = document.getElementById("konProfileIcon");
    const text = document.getElementById("konProfileText");
    const tags = document.getElementById("konTags");
    const message = document.getElementById("konMessageText");
    const vibe = document.getElementById("konVibeText");

    if (name) {
        name.textContent = data.name;
    }

    if (icon) {
        icon.textContent = data.icon;
    }

    if (text) {
        text.textContent = data.text;
    }

    if (message) {
        message.textContent = data.message;
    }

    if (vibe) {
        vibe.textContent = data.vibe;
    }

    if (tags) {

        tags.innerHTML = data.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

    }

    document
        .querySelectorAll(".konCharacter")
        .forEach(card => {
            card.classList.remove("selected");
        });

    const selected = document.querySelector(
        `.konCharacter.${character}`
    );

    if (selected) {
        selected.classList.add("selected");
    }

    /* little profile animation */

    const profile = document.getElementById("konProfile");

    if (profile) {

        profile.style.animation = "none";

        void profile.offsetWidth;

        profile.style.animation =
            "konProfileIn 0.4s ease";

    }

    konFavoriteState = false;

    const favorite = document.getElementById("konFavorite");

    if (favorite) {
        favorite.textContent = "♡";
        favorite.classList.remove("favorited");
    }

}


/* ---------------------------------------------------------
   FAVORITE
   --------------------------------------------------------- */

function toggleKonFavorite() {

    konFavoriteState = !konFavoriteState;

    const button = document.getElementById("konFavorite");

    if (!button) return;

    if (konFavoriteState) {

        button.textContent = "♥";
        button.classList.add("favorited");

        showKonToast(
            `${konCharacters[currentKonCharacter].name} added to favorites ♡`
        );

    } else {

        button.textContent = "♡";
        button.classList.remove("favorited");

    }

}


/* ---------------------------------------------------------
   VIBES
   --------------------------------------------------------- */

const konVibes = {

    cute: {
        text: "Cute & chaotic",
        message: "\"Let's have some cake! 🍰\""
    },

    sleepy: {
        text: "Sleepy afternoon",
        message: "\"Five more minutes... zzz 🌙\""
    },

    chaotic: {
        text: "Absolute chaos",
        message: "\"LET'S MAKE SOME NOISE!! 🥁\""
    },

    tea: {
        text: "Tea time",
        message: "\"Would you like some tea? 🫖\""
    }

};


function setKonVibe(vibe) {

    const data = konVibes[vibe];

    if (!data) return;

    const text = document.getElementById("konVibeText");
    const message = document.getElementById("konMessageText");

    if (text) {
        text.textContent = data.text;
    }

    if (message) {
        message.textContent = data.message;
    }

    document
        .querySelectorAll(".konVibeButtons button")
        .forEach(button => {
            button.classList.remove("active");
        });

    const buttons =
        document.querySelectorAll(".konVibeButtons button");

    const indexMap = {
        cute: 0,
        sleepy: 1,
        chaotic: 2,
        tea: 3
    };

    if (buttons[indexMap[vibe]]) {
        buttons[indexMap[vibe]].classList.add("active");
    }

}


/* ---------------------------------------------------------
   SMALL TOAST
   --------------------------------------------------------- */

function showKonToast(message) {

    const oldToast =
        document.querySelector(".konToast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = "konToast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 20);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 1800);

}


/* ---------------------------------------------------------
   INITIALIZE WHEN APP OPENS
   --------------------------------------------------------- */

function resetKonApp() {

    currentKonCharacter = "yui";
    konFavoriteState = false;

    setTimeout(() => {

        selectKonCharacter("yui");
        setKonVibe("cute");

    }, 50);

}