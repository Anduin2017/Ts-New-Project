import { Person } from "./Person";

export class Student implements Person {
    constructor(
        public name: string,
        public age: number) {

    }
}