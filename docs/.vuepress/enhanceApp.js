import {
  VAlert,
  VAsync,
  VDrawer,
  VDropdown,
  VFile,
  VImg,
  VInput,
  VIntersect,
  VModal,
  VTabs,
  VToggle,
  autofocus,
  clickout,
  copy,
} from "../../src/entry"

export default ({ Vue, options, router, siteData }) => {
  Vue.component("VAlert", VAlert)
  Vue.component("VAsync", VAsync)
  Vue.component("VDrawer", VDrawer)
  Vue.component("VDropdown", VDropdown)
  Vue.component("VFile", VFile)
  Vue.component("VImg", VImg)
  Vue.component("VInput", VInput)
  Vue.component("VIntersect", VIntersect)
  Vue.component("VModal", VModal)
  Vue.component("VTabs", VTabs)
  Vue.component("VToggle", VToggle)

  Vue.directive("autofocus", autofocus)
  Vue.directive("clickout", clickout)
  Vue.directive("copy", copy)
}

import "./public/static/styles.css"
