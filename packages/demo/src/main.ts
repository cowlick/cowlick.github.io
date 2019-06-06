import * as tl from "@akashic-extension/akashic-timeline";
import * as core from "@cowlick/core";
import * as novel from "@cowlick/engine";
import {AssetCollector} from "./AssetCollector";

module.exports = () => {
  const engine = novel.initialize(g.game);
  engine.assetCollector = new AssetCollector();
  addScripts(engine);
  engine.load("title", (c: novel.SceneController) => {});
};

export namespace Tag {
  export const enterScene = "enterScene";
  export const nextScene = "nextScene";
}

const duration = 300;

interface NextScene {
  tag: "nextScene";
  label: string;
}

const addScripts = (engine: novel.Engine) => {
  const fadeInScript = novel.defaultScripts.get(core.Tag.fadeIn);
  engine.script(core.Tag.fadeIn, (controller: novel.SceneController, data: any) => {
    data.after = [
      {
        tag: core.Tag.skip
      }
    ];
    fadeInScript(controller, data);
  });
  const fadeOutScript = novel.defaultScripts.get(core.Tag.fadeOut);
  engine.script(core.Tag.fadeOut, (controller: novel.SceneController, data: any) => {
    data.after = [
      {
        tag: core.Tag.skip
      }
    ];
    fadeOutScript(controller, data);
  });
  engine.script(Tag.enterScene, (controller: novel.SceneController) => {
    const scene = controller.current;
    scene.disableWindowClick();
    scene.transition("black", (layer: g.E) => {
      const timeline = new tl.Timeline(scene.body);
      timeline.create(layer, {modified: layer.modified, destroyed: layer.destroyed}).fadeOut(duration);
    });
  });
  engine.script(Tag.nextScene, (controller: novel.SceneController, data: NextScene) => {
    const scene = controller.current;
    scene.disableWindowClick();
    scene.transition("black", (layer: g.E) => {
      const timeline = new tl.Timeline(scene.body);
      timeline
        .create(layer, {modified: layer.modified, destroyed: layer.destroyed})
        .fadeIn(duration)
        .call(() => {
          controller.jump({
            tag: core.Tag.jump,
            label: data.label
          });
        });
    });
  });

  engine.script("newgame", (controller: novel.SceneController) => {
    const layer = {
      name: "button",
      x: 30,
      y: 320
    };
    const link = createLink(controller, {
      tag: core.Tag.link,
      width: 200,
      height: 40,
      text: "はじめる",
      fontSize: 24,
      backgroundImage: "yellow",
      padding: 4,
      backgroundEffector: {
        borderWidth: 4
      },
      scripts: [
        {
          tag: core.Tag.extension,
          data: {
            tag: Tag.nextScene,
            label: "scene0"
          }
        }
      ],
      layer
    });
    controller.current.appendLayer(link, layer);
  });
};

export const createLink = (controller: novel.SceneController, link: core.Link) => {
  // FIXME: LabelButtonParamatersが公開されたら型を明示する
  const params = {
    scene: controller.current.body,
    width: link.width,
    height: link.height,
    backgroundImage: link.backgroundImage,
    padding: link.padding,
    backgroundEffector: link.backgroundEffector,
    text: link.text,
    config: controller.config,
    gameState: controller.current.gameState
  } as any;
  if (link.fontSize) {
    params.fontSize = link.fontSize;
  }
  const button = new novel.LabelButton(params);
  button.move(link.layer.x, link.layer.y);
  for (const script of link.scripts) {
    button.click.add(() => {
      novel.Engine.scriptManager.call(controller, script);
    });
  }
  return button;
};

export const black = (opacity: number): core.Image => ({
  tag: core.Tag.image,
  assetId: "black",
  layer: {
    name: "black",
    opacity
  }
});
