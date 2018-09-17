import { Student } from "./student";
import { Person } from "./Person";
import $ from 'jquery';

var greeter = function (target: Person) {
    $('#my-p').html(`Hello ${target.name}`)
}

var me = new Student('Anduin M', 22);

greeter(me);