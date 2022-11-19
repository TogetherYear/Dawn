import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

//防止一些控制台的Warning提示：比较碍眼
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

import naive from "./naive"

import pinia from './pinia'

import { AppRequest } from './plugins/AppRequest'
AppRequest.Instance.Run()

import { IpcRendererHandle } from './plugins/IpcRendererHandle'
IpcRendererHandle.Instance.Run()

createApp(App)
  .use(router)
  .use(naive)
  .use(pinia)
  .mount('#app')