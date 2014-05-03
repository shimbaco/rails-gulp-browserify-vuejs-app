# Rails + Gulp + Browserify + Vue.js なサンプルアプリケーション

Railsはデフォルトでは [Sprockets](https://github.com/sstephenson/sprockets) を使って
JavaScriptやCSSなどを良い感じにしています。
でも最近のJavaScript界隈の面白そうなツールと併用するのが辛い気がしたので、
思い切ってSprocketsを使うのやめようと思いました。

(Railsでも [CommonJS](http://en.wikipedia.org/wiki/CommonJS) の恩恵をこうむりたい!)

そして最近(特に日本で)話題の [Vue.js](http://vuejs.org/) も使ってみたかったので、
一緒に試してみることにしました。


## 環境

* Ruby 2.1.1
* Ruby on Rails 4.1.0
* Gulp 3.6.1
* Browserify 3.36.1
* Vue.js 0.10.4


## 動かし方

```
$ git clone git@github.com:bojovs/rails-gulp-browserify-vuejs-app.git
$ cd rails-gulp-browserify-vuejs-app
$ bundle
$ npm install
$ rake db:create
$ rails s
$ gulp // 別のウィンドウで実行
```

http://localhost:3000 にアクセスすると、
[Vue.jsのドキュメントに書かれているTODOアプリ](http://vuejs.org/guide/index.html) が表示されるはずです。


## 参考

GulpとBrowserify周りの設定はほとんど
[Gulp + Browserify: The Everything Post | Viget](http://viget.com/extend/gulp-browserify-starter-faq)
というブログ記事から拝借しています。
