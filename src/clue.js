// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: `Ruben`,
        lastName: `Dietl`,
        occupation: `Developer`,
        age: 23,
        description: `Really good looking young developer.`,
        image: `https://media.licdn.com/dms/image/C4E03AQH7Vwqgorlplg/profile-displayphoto-shrink_200_200/0/1648456998526?e=1698883200&v=beta&t=3tGGOBTmZAODgTRb0cJXemXPDzd0oighowmeJbOHluE`,
        color: `red`
    },
    {
        firstName: `Isabella`,
        lastName: `Moses`,
        occupation: `Student`,
        age: 23,
        description: `Really good looking young student.`,
        image: `https://media.licdn.com/dms/image/D4E03AQFtYp8IK70r9g/profile-displayphoto-shrink_800_800/0/1665860512660?e=2147483647&v=beta&t=qKALa3Lnyv0FJ9dlO6TZNB5gW0gq2ojxN2rqUAfLWSk`,
        color: `pink`
    },
    {
        firstName: `Max`,
        lastName: `Mustermann`,
        occupation: `Beamter`,
        age: 23,
        description: `Loves doing portraits.`,
        image: `https://media.licdn.com/dms/image/C4D03AQHzRE_JpKrgIg/profile-displayphoto-shrink_800_800/0/1567410455596?e=2147483647&v=beta&t=qkM7F7sPVGmpuj5X1ggD0cKCW34w9gkKrq3Kum5QFjA`,
        color: `gray`
    },
    {
        firstName: `Eric`,
        lastName: `Weinstein`,
        occupation: `Scientist`,
        age: 23,
        description: `Director of a Hedgefond.`,
        image: `https://media.licdn.com/dms/image/C4D03AQHzRE_JpKrgIg/profile-displayphoto-shrink_800_800/0/1567410455596?e=2147483647&v=beta&t=qkM7F7sPVGmpuj5X1ggD0cKCW34w9gkKrq3Kum5QFjA`,
        color: `black`
    },
    {
        firstName: `David`,
        lastName: `Alaba`,
        occupation: `Soccer Player`,
        age: 23,
        description: `Successfull professional soccer player.`,
        image: `https://img.fcbayern.com/image/upload/t_cms-4x3-seo/v1604326652/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/david_alaba_.png`,
        color: `yellow`
    },
    {
        firstName: `Elon`,
        lastName: `Musk`,
        occupation: `Entrepreneur`,
        age: 23,
        description: `Successfull entrepreneur and CEO of multiple companies.`,
        image: `https://images.tagesschau.de/image/7fc734d5-f187-41f6-a322-95c1efa6003d/AAABhnQd3j4/AAABibBx1ms/1x1-840/elon-musk-141.jpg`,
        color: `mint green`
    }
];

// Rooms Array

const weaponsArray = [
    { name: "Rubber Duck", weight: 0.1 },
    { name: "Keyboard", weight: 1.5 },
    { name: "Meme Poster", weight: 0.5 },
    { name: "Giant Pencil", weight: 2 },
    { name: "Infinity Gauntlet", weight: 10 },
    { name: "Tesla Key", weight: 0.2 },
    { name: "Football Boot", weight: 0.8 },
    { name: "Spilled Coffee", weight: 0.4 },
    { name: "Mysterious USB Stick", weight: 0.05 }
];

// Weapons Array

const roomsArray = [
    { name: "Server Room" },
    { name: "Meme Gallery" },
    { name: "Hacker's Hideout" },
    { name: "Coffee Lounge" },
    { name: "SpaceX Rocket" },
    { name: "Football Field" },
    { name: "Podcast Studio" },
    { name: "CEO's Secret Lair" },
    { name: "The Infinite Corridor" },
    { name: "Code Debugging Arena" },
    { name: "Nerf Gun Arsenal" },
    { name: "Rocket Design Studio" },
    { name: "Meme Creation Lab" },
    { name: "Alien Encounter Room" },
    { name: "Underground Parking Lot" }
];


// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    let mysteryObj = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
    return mysteryObj;
}


// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

