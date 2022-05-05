import Vue from "vue"
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/packages/theme-chalk/lib/index.css'
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert,
  Icon
} from 'element-ui'

const element = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert,
  Icon
];

// Делаем так что бы фреймворк работал на английском а не на китайском
locale.use(lang)

/*
  Для того что бы сделать каждую компаненту глобальной вызываем у объекта Vue метод use
  передаем туда этот элемент
*/
element.forEach(El => Vue.use(El,{ locale }));