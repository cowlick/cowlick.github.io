import {initialize, SceneController} from "@cowlick/engine";

module.exports = () => {
  const engine = initialize(g.game);
  engine.load("title", (c: SceneController) => {});
};
