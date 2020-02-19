class TypeWriter {
  constructor(id, speed = 1000) {
    this.id = id;
    this.obj = document.getElementById(this.id);
    this.obj.innerHTML = "";

    this.speed = speed;
    this.buildTextField();
    this.buildTypedCursor();
  }

  get step(){
    return this.frequency * (0.5 + Math.random())
  }

  set speed(speed){
    this.frequency = 60000 / speed;
  }

  buildTextField(){
    this.textField = document.createElement('span');
    this.obj.appendChild(this.textField);
  }

  buildTypedCursor(){
    this.typedCursor = document.createElement('span');
    this.typedCursor.innerHTML += '│';
    this.typedCursor.classList.add('typed-cursor');
    this.obj.appendChild(this.typedCursor);
  }

  printText(text) {
    if (text[0]!==undefined) {
      setTimeout(() => {
        this.textField.innerText += text[0];
        this.printText(text.substr(1));
      }, this.step);
    }
  }
}

window.onload = function () {
  const typeWriter = new TypeWriter('typeWriter', 600);
  typeWriter.printText('АлексейАлексейАлексейАлексейАлексейАлексейАлексейАлексейАлексей');
};