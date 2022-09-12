import { selector, atom } from "recoil";

interface IToDostate {
  [key: string]: string[];
}

export const toDoState = atom<IToDostate>({
  key: "todo",
  default: {
    To_Do: ["a", "b", "e"],
    Doing: ["c", "d"],
    Done: ["f"],
  },
});
