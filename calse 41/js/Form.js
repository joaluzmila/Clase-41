class Form {

  constructor() {
    this.input = createInput("Nombre");
    this.button = createButton('Jugar');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
    this.tittttle = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.tittttle.hide();
  }

  display(){
    this.title.html("Bienvenido");
    this.title.position(displayWidth/2 - 50, 10);
  

    this.tittttle.html("Juego de Carreras de Autos Multijugador");
    this.tittttle.position(displayWidth/2 - 165, 60)

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hola " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
