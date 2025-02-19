import { primE } from "./fuggveny.js";

export function primTeszt() {
  let tesztEsetekLista = [
    {
      szam: 131,
      vart: true,
    },
    {
      szam: 2,
      vart: true,
    },
    {
      szam: 3,
      vart: true,
    },
    {
      szam: 6,
      vart: false,
    },
    {
      szam: 66,
      vart: false,
    },

    {
      szam: 9,
      vart: false,
    },
    
  ];

  for (let index = 0; index < tesztEsetekLista.length; index++) {
    let szam = tesztEsetekLista[index].szam;
    let vart = tesztEsetekLista[index].vart;
    let kapott = primE(szam);
    console.assert(
      vart === kapott,
      `szam:${szam}, vart:${szam},kapott:${kapott}`
    );
  }
}
