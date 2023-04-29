import {SignType} from "../types";
import IconScissors from "../assets/images/icon-scissors.svg";
import IconLizard from "../assets/images/icon-lizard.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconRock from "../assets/images/icon-rock.svg";
import IconSpock from "../assets/images/icon-spock.svg";

export const RULES = {"rock": ["scissors"], "scissors": ["paper"], "paper": ["rock"]}
export const BONUS_RULES = {
    "rock": ["lizard", "scissors"],
    "scissors": ["paper", "lizard"],
    "paper": ["rock", "spock"],
    "lizard": ["paper", "spock"],
    "spock": ["scissors", "rock"]
}

export const SIGN_ICONS: { [key in SignType]: any } = {
    scissors: IconScissors,
    lizard: IconLizard,
    paper: IconPaper,
    rock: IconRock,
    spock: IconSpock,
};
