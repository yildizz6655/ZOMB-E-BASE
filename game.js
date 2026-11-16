
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

export const characters = [
    {
        id: "player",
        name: "Asker",
        type: "player",
        health: 100,
        speed: 5,
        damage: 20,
        model: "models/soldier.glb"
    },
    {
        id: "zombie",
        name: "Normal Zombi",
        type: "enemy",
        health: 100,
        speed: 1.5,
        damage: 10,
        model: "models/zombie.glb"
    },
    {
        id: "soldier_zombie",
        name: "Zombi Asker",
        type: "enemy",
        health: 150,
        speed: 2,
        damage: 15,
        model: "models/zombie-soldier.glb"
    },
    {
        id: "fast_zombie",
        name: "Hızlı Zombi",
        type: "enemy",
        health: 65,
        speed: 5,
        damage: 12,
        model: "models/fast-zombie.glb"
    },
    {
        id: "giant_zombie",
        name: "Dev Zombi",
        type: "enemy",
        health: 350,
        speed: 1,
        damage: 30,
        model: "models/giant-zombie.glb"
    },
    {
        id: "commander",
        name: "Zombi Komutan",
        type: "boss",
        health: 1000,
        speed: 2.5,
        damage: 40,
        model: "models/zombie-commander.glb"
    }
];

console.log("6 karakter tanımlandı:", characters);
