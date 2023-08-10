import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  // nomeAtor1 = "Meliodas";
  // avatarAtor1 = "/assets/meliodasImg.png";

  // nomeAtor2 = "Harlequin";
  // avatarAtor2 = "/assets/harlequinImg.jpg";

  nome = "Meliodas";
  caminho = "/assets/meliodasImg.png";
  curtidas = '500';

  elenco = [

    {
      nome: "Harlequin",
      caminho: "/assets/harlequinImg.jpg",
      curtidas: '50'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
