import { selector, atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDostate {
  [key: string]: string[];
}

export const toDoState = atom<IToDostate>({
  key: "todo",
  default: {
    To_Do: [],
    Doing: [],
    Done: [],
  },
});
