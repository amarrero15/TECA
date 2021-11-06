import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bleeding',
  templateUrl: './bleeding.component.html',
  styleUrls: ['./bleeding.component.scss'],
})
export class BleedingComponent implements OnInit {
  CentralTheme: string = "Lorem ipsum dolor sit amet";
  Leaves = [
    {
      id:0,
      bold: true,
      italic:true,
      underline:true,
      text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    
  ]
  newLeaf = {
    id:0,
    bold: false,
    italic:false,
    underline:false,
    text:'',
  };

  setBold() { 
    this.newLeaf.bold = !this.newLeaf.bold;
  }

  setItalic() { 
    this.newLeaf.italic = !this.newLeaf.italic;
  }

  setUnderline() { 
    this.newLeaf.underline = !this.newLeaf.underline;
  }

  addLeaf(){
    let temp = {id:this.Leaves.length,bold: this.newLeaf.bold,italic:this.newLeaf.italic,underline:this.newLeaf.underline,text:this.newLeaf.text,};
    console.log(this.newLeaf);
    this.Leaves.push(temp);
    this.newLeaf = {id:0,bold: false,italic:false,underline:false,text:'',};
  }

  constructor() { }

  ngOnInit() {}
}
