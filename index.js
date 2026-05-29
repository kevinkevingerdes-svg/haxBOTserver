const HBInit = require("haxball-headless");

const room = HBInit({
  roomName: "Mi Host Railway",
  maxPlayers: 12,
  public: true,
  noPlayer: true,
  token: "TU_TOKEN"
});

room.setDefaultStadium("Big");
room.setScoreLimit(3);
room.setTimeLimit(5);

console.log("Host iniciado!");
