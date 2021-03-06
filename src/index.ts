import Phaser from "phaser";
import config from "./config";
import Preload from "@scenes/Preload";
import Game from "@scenes/Game";
import HUD from "@scenes/HUD";
import LevelComplete from "@scenes/LevelComplete";
import GameEnd from "@scenes/End";

new Phaser.Game(
  Object.assign(config, {
    scene: [Preload, Game, HUD, LevelComplete, GameEnd],
  })
);
