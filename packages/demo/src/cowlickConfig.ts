import * as core from "@cowlick/core";
import {Config} from "@cowlick/config";

const size = 24;

const config: Config = {
  window: {
    message: {
      ui: {
        layer: {
          name: core.LayerKind.message,
          x: 10,
          y: g.game.height - g.game.height / 4 - 40
        },
        width: g.game.width - 20,
        height: g.game.height / 4 + 30,
        backgroundImage: "message",
        padding: 4,
        backgroundEffector: {
          borderWidth: 4
        },
        touchable: true
      },
      top: {
        x: 30,
        y: g.game.height - g.game.height / 4 - 30
      },
      marker: []
    },
    system: [],
    priority: [["message", 0], ["choice", 1], ["system", 2]]
  },
  font: {
    list: [
      new g.DynamicFont({
        game: g.game,
        fontFamily: g.FontFamily.SansSerif,
        size
      })
    ],
    color: "white",
    alreadyReadColor: "white",
    size
  },
  system: {
    maxSaveCount: 100,
    messageSpeed: 1000 / g.game.fps,
    autoMessageDuration: 1500,
    alreadyRead: false,
    realTimeDisplay: false,
    autoSave: false
  },
  audio: {
    voice: 0.5,
    se: 0.5,
    bgm: 0.5
  }
};

module.exports = config;
