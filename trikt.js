
document.getElementById('button').addEventListener('click', function randomGrind(){

    var grinds = [
        "SOUL", "TOPSIDE SOUL", "ALLEY-OOP SOUL", "TOPSIDE ALLEY-OOP SOUL", "TRUESPIN ALLEY-OOP SOUL", "TRUESPIN ALLEY-OOP TOPSIDE SOUL", 
        "MIZOU", "SWEATSTANCE", "ALLEY-OOP MIZOU", "KINDGRIND", "TRUESPIN ALLEY-OOP MIZOU", "TRUESPIN KINDGRIND", 
        "X-GRIND", "ALLEY-OOP X-GRIND", "TRUESPIN ALLEY-OOP X-GRIND", 
        "ACID SOUL", "ALLEY-OOP ACID SOUL", "TOPSIDE ACID SOUL", "TOPSIDE ALLEY-OOP ACID SOUL", "TRUESPIN ALLEY-OOP ACID SOUL", "TRUESPIN TOPSIDE ALLEY-OOP ACID SOUL", 
        "ACID MIZOU", "SUNNY DAY", "PORNSTAR", "TOPSIDE PORNSTAR", "TRUESPIN PORNSTAR", "TRUESPIN TOPSIDE PORNSTAR", 
        "MAKIO", "ROCKET MAKIO", "FISHBRAIN", "ROCKET FISHBRAIN", "ALLEY-OOP MAKIO", "ALLEY-OOP FISHBRAIN", "ALLEY-OOP ROCKET FISHBRAIN", "ALLEY-OOP PARALLEL FISHBRAIN", "TRUESPIN ALLEY-OOP MAKIO", "TRUESPIN ALLEY-OOP FISHBRAIN", "TRUESPIN ALLEY-OOP PARALLEL FISHBRAIN", 
        "MISTRIAL", "TOPSIDE MISTRIAL", "ALLEY-OOP MISTRIAL", "TOPSIDE ALLEY-OOP MISTRIAL", "TRUESPIN ALLEY-OOP MISTRIAL", "TRUESPIN TOPSIDE ALLEY-OOP MISTRIAL", 
        "TORQUE SOUL", "SOYALE", "TOPSIDE TORQUE SOUL", "TOPSIDE SOYALE", "TRUESPIN SOYALE", "TRUESPIN TOPSIDE SOYALE", 
        "FRONTSIDE", "BACKSIDE", 
        "FRONTSIDE ROYALE", "BACKSIDE ROYALE", 
        "FRONTSIDE UFO", "BACKSIDE UFO", 
        "FRONTSIDE UNITY", "BACKSIDE UNITY", 
        "FRONTSIDE SAVANNAH", "BACKSIDE SAVANNAH", 
        "FRONTSIDE FARFEGNUGEN", "BACKSIDE FARFEGNUGEN", 
        "FRONTSIDE BACKSLIDE", "BACKSIDE BACKSLIDE", "FRONTSIDE ROCKET BACKSLIDE", "BACKSIDE ROCKET BACKSLIDE", 
        "FRONTSIDE TORQUE SLIDE", "BACKSIDE TORQUE SLIDE", "FRONTSIDE ROCKET TORQUE SLIDE", "BACKSIDE ROCKET TORQUE SLIDE",];

    var randomGrind = grinds.splice(Math.floor(Math.random()* grinds.length),1)[0];

    document.getElementById('result').innerText = randomGrind;
});

var checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', (event) => {
	if (event.target.checked){
        document.getElementById("result").innerText = "PRESS GO";
		document.getElementById('button').addEventListener('click', function randomAir(){

            var spins = ["ZERO SPIN", "180", "FAKIE 180", "360", "FAKIE 360", "540", "FAKIE 540",];
            var grabs = ["SAFETY", "MUTE", "STALE JAPAN", "JUDO", "LUI KANG", "PARALLEL", "ROCKET", "FLY FISH"];
        
            var randomSpin = spins.splice(Math.floor(Math.random()* spins.length),1)[0];
            var randomGrab = grabs.splice(Math.floor(Math.random()* grabs.length),1)[0];
        
            document.getElementById('result').innerText = randomGrab + " " + randomSpin;
        });

	} else {
        document.getElementById("result").innerText = "PRESS GO";
		document.getElementById('button').addEventListener('click', function randomGrind(){

            var grinds = [
                "SOUL", "TOPSIDE SOUL", "ALLEY-OOP SOUL", "TOPSIDE ALLEY-OOP SOUL", "TRUESPIN ALLEY-OOP SOUL", "TRUESPIN ALLEY-OOP TOPSIDE SOUL", 
                "MIZOU", "SWEATSTANCE", "ALLEY-OOP MIZOU", "KINDGRIND", "TRUESPIN ALLEY-OOP MIZOU", "TRUESPIN KINDGRIND", 
                "X-GRIND", "ALLEY-OOP X-GRIND", "TRUESPIN ALLEY-OOP X-GRIND", 
                "ACID SOUL", "ALLEY-OOP ACID SOUL", "TOPSIDE ACID SOUL", "TOPSIDE ALLEY-OOP ACID SOUL", "TRUESPIN ALLEY-OOP ACID SOUL", "TRUESPIN TOPSIDE ALLEY-OOP ACID SOUL", 
                "ACID MIZOU", "SUNNY DAY", "PORNSTAR", "TOPSIDE PORNSTAR", "TRUESPIN PORNSTAR", "TRUESPIN TOPSIDE PORNSTAR", 
                "MAKIO", "ROCKET MAKIO", "FISHBRAIN", "ROCKET FISHBRAIN", "ALLEY-OOP MAKIO", "ALLEY-OOP FISHBRAIN", "ALLEY-OOP ROCKET FISHBRAIN", "ALLEY-OOP PARALLEL FISHBRAIN", "TRUESPIN ALLEY-OOP MAKIO", "TRUESPIN ALLEY-OOP FISHBRAIN", "TRUESPIN ALLEY-OOP PARALLEL FISHBRAIN", 
                "MISTRIAL", "TOPSIDE MISTRIAL", "ALLEY-OOP MISTRIAL", "TOPSIDE ALLEY-OOP MISTRIAL", "TRUESPIN ALLEY-OOP MISTRIAL", "TRUESPIN TOPSIDE ALLEY-OOP MISTRIAL", 
                "TORQUE SOUL", "SOYALE", "TOPSIDE TORQUE SOUL", "TOPSIDE SOYALE", "TRUESPIN SOYALE", "TRUESPIN TOPSIDE SOYALE", 
                "FRONTSIDE", "BACKSIDE", 
                "FRONTSIDE ROYALE", "BACKSIDE ROYALE", 
                "FRONTSIDE UFO", "BACKSIDE UFO", 
                "FRONTSIDE UNITY", "BACKSIDE UNITY", 
                "FRONTSIDE SAVANNAH", "BACKSIDE SAVANNAH", 
                "FRONTSIDE FARFEGNUGEN", "BACKSIDE FARFEGNUGEN", 
                "FRONTSIDE BACKSLIDE", "BACKSIDE BACKSLIDE", "FRONTSIDE ROCKET BACKSLIDE", "BACKSIDE ROCKET BACKSLIDE", 
                "FRONTSIDE TORQUE SLIDE", "BACKSIDE TORQUE SLIDE", "FRONTSIDE ROCKET TORQUE SLIDE", "BACKSIDE ROCKET TORQUE SLIDE",];
        
            var randomGrind = grinds.splice(Math.floor(Math.random()* grinds.length),1)[0];
        
            document.getElementById('result').innerText = randomGrind;
        });
	}
  })