Vue = require 'vue'

module.exports = new Vue
  el: '.todo'
  data:
    title: 'todos'
    tasks: [
      {
          complete: false,
          content: '海賊王になる'
      },
      {
          complete: false,
          content: 'ジン=フリークスに会う'
      },
      {
          complete: true,
          content: 'ギャルのパンティをもらう'
      }
    ]
