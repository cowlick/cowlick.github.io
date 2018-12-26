import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    secondary: colors.grey.darken3,
    accent: colors.blue.accent1,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
});
