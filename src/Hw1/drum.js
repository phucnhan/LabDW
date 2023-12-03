import React from 'react';
import './drumhw1.css';
const Drum = () => {
    function handleClick(event) {
        console.log(this);
        console.log(event.target);
        makeSound(event.target.innerText);
        buttonAnimation(event.target.innerText);
    }

    let eventArray = document.querySelectorAll("button");
    for (const event of eventArray) {
        event.addEventListener("click", handleClick);
    }

    document.addEventListener("keypress", handleKeyboardEvent);

    function handleKeyboardEvent(event) {
        console.log(event.key);
        makeSound(event.key);
        buttonAnimation(event.key);
    }

    function makeSound(key) {
        switch (key) {
            case "w": {
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            }
            case "a": {
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            }
            case "s": {
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            }
            case "d": {
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            }
            case "j": {
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            }
            case "k": {
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            }
            case "l": {
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            }
            default: {
                break;
            }
        }
    }

    function buttonAnimation(key) {
        let activeButton = document.querySelector("." + key);
        activeButton.classList.add("pressed");
        document.body.classList.add("modify-body");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
            document.body.classList.remove("modify-body");
        }, 200);
    }
    return (
        <div>
            <body>
                <h1 id="title">Drum 🥁 Kit</h1>
                <div class="set">
                    <button class="w drum">w</button>
                    <button class="a drum">a</button>
                    <button class="s drum">s</button>
                    <button class="d drum">d</button>
                    <button class="j drum">j</button>
                    <button class="k drum">k</button>
                    <button class="l drum">l</button>
                </div>

                <footer></footer>
            </body>
        </div>
    );
};

export default Drum;
