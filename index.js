import Datatable from './Datatable'

export { Datatable }

export default {
  install(Vue) {
    Vue.component('datatable', Datatable);
  }
}