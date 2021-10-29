import 'vue';
declare module '*.ts';
declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
}
