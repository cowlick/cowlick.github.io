import {Router} from "~/model/Router";

export const state = () =>
  ({
    routes: [
      {
        title: "ホーム",
        link: "/"
      },
      {
        title: "チュートリアル",
        link: "/tutorial"
      },
      {
        title: "その他",
        link: "/other"
      }
    ]
  } as Router);

export const mutations = {};

export const actions = {};
