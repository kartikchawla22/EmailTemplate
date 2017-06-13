import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = "";
  template  = "";
  copy;
  html = ""
  Reg = new RegExp(/[\n\r\ ]/g);
  Reg2 = new RegExp(/\[(.*?)\]/)
  onbuttonclik(){
    this.copy = this.template.split(this.Reg);
   for( var i = 0 ; i < this.copy.length; i++ ){
     if(this.copy[i].match(this.Reg2))
     {
        this.copy[i] =  this.copy[i].split(this.Reg2);
        this.a = this.copy[i][1];

        this.copy[i]="<input id = '" + this.a + "' type = 'text'>";
        console.log(this.copy[i]);
   }
this.html = this.copy.join(" ");

}


this.html = "<html>\n<body>\n" + this.html +  "\n</html>\n</body>\n"
  console.log(this.html)


}}


