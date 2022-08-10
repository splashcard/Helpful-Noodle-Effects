import { Difficulty, copy,  Note, map, info, notesBetween, note } from "https://deno.land/x/remapper@2.0.2/src/mod.ts";

function Dupenotes(start: number, end: number, posX : number, posY: number, posZ: number,  amount = 4, step = 0.25, callback?: ((note: Note, index: number) => void)) {
    notesBetween(start, end, note => {
        for (let i = 1; i <= amount; i++) {
            const newNote = copy(note);
            newNote.fake = true;
            newNote.interactable = false;
            newNote.time += step * i;
            newNote.position = [posX, posY, posZ]
            if (callback) callback(note, i);
            newNote.push();
        }
    })
}

Dupenotes(0, 10, 0, 5, 0)
//this is an extremely goofy way to make some notes fly above you