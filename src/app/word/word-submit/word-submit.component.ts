import { WordService } from './../word.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-word-submit',
  templateUrl: './word-submit.component.html',
  styleUrls: ['./word-submit.component.css']
})
export class WordSubmitComponent implements OnInit {

  words = [];

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.wordService.listar()
      .subscribe(dados => this.words = dados);
  }

  palindrome(frm: FormControl) {
    this.wordService.palindrome(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }

  firstChar(frm: FormControl) {
    this.wordService.firstChar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }

}
