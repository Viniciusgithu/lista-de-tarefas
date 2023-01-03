
const Main = {

  init: function () {
    this.cacheSelectors();
    this.bindEvents();
  },

  cacheSelectors: function () {
    // uso do $ para indicar as variáveis que armazenam algum elemento HTML 

    this.$checkButtons = document.querySelectorAll('.check')
    this.$inputTask = document.querySelector('#inputTask')
    this.$list = document.querySelector('#list')
  },

  bindEvents: function () {
    const self = this // o this se refere ao obj Main

    this.$checkButtons.forEach(function (button) {
      button.onclick = self.Events.checkButton_click
    });

    this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)
  },

  Events: {
    checkButton_click: function (e) {
      let li = e.target.parentElement
      let isDone = li.classList.contains('done')

      if (isDone) {
        li.classList.remove('done')
      } else {
        li.classList.add('done')
      };

    },

    inputTask_keypress: function (e) {
      //Dentro de uma função de evento - seja de click ou de onkeypress, onmousemove - o this vai ser o próprio elemento que o evento foi adicionado. Usa-se o método bind()

      let key = e.key
      let value = e.target.value
      
      if(key === 'Enter'){
        this.$list.innerHTML += `
          <li>
            <div class="check"></div>
            <label class="task">
               ${value}
            </label>
            <button class="remove"></button>
          </li>
        
        `
        e.target.value = ''

        this.cacheSelectors();
        this.bindEvents();
      }
  }
}


}

Main.init()
