import { InMemoryDbService } from "angular-in-memory-web-api";

import { Agencia } from "./agencia";

export class AgenciasData implements InMemoryDbService {
  createDb() {
    const agencias: Agencia[] = [
      {
        id: 1,
        agencia: "Las Flores",
        distrito: "San Juan De Lurigancho",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Las Flores de Primavera 1487",
        lat: -77.01232817,
        lon: -12.0046896,
        imageUrl: ""
      },
      {
        id: 2,
        agencia: "Punchana",
        distrito: "Punchana",
        provincia: "Maynas",
        departamento: "Loreto",
        direccion: "Av. La Marina N° 944",
        lat: -73.240647,
        lon: -3.731367,
        imageUrl: ""
      },
      {
        id: 3,
        agencia: "Conquistadores",
        distrito: "San Isidro",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Conquistadores 968",
        lat: -77.03735314,
        lon: -12.10568371,
        imageUrl: ""
      },
      {
        id: 4,
        agencia: "Salvador Allende",
        distrito: "Villa Maria del Triunfo",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Salvador Allende 468 – Villa María del Triunfo",
        lat: -76.957646,
        lon: -12.158153,
        imageUrl: ""
      },
      {
        id: 5,
        agencia: "Siglo XX (030)",
        distrito: "Arequipa",
        provincia: "Arequipa",
        departamento: "Arequipa",
        direccion: "Av. Siglo XX N°122 Cercado de Arequipa",
        lat: -71.530671,
        lon: -16.399615,
        imageUrl: ""
      },
      {
        id: 6,
        agencia: "Constructores",
        distrito: "La Molina",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av Constructores Cuadra 1 Mz. D Lote 5",
        lat: -76.957802,
        lon: -12.067233,
        imageUrl: ""
      },
      {
        id: 7,
        agencia: "Victor Larco",
        distrito: "Trujillo",
        provincia: "Trujillo",
        departamento: "La Libertad",
        direccion: "Av. Víctor Larco Herrera N° 1631 Urbanización Fátima",
        lat: -79.042123,
        lon: -8.128624,
        imageUrl: ""
      },
      {
        id: 8,
        agencia: "Socabaya",
        distrito: "Socabaya",
        provincia: "Arequipa",
        departamento: "Arequipa",
        direccion: "Av. San Martín de Socabaya N° 307 Socabaya",
        lat: -71.529979,
        lon: -16.438285,
        imageUrl: ""
      },
      {
        id: 9,
        agencia: "Colonial",
        distrito: "Callao",
        provincia: "Callao",
        departamento: "Lima",
        direccion: "Av. Oscar Benavides Mz. V Lotes 38 y 39",
        lat: -77.094569,
        lon: -12.05266,
        imageUrl: ""
      },
      {
        id: 11,
        agencia: "Bagua",
        distrito: "Bagua Chica",
        provincia: "Bagua",
        departamento: "Amazonas",
        direccion: "Jr. Comercio  N°  532 (C-5 Mz 220 Lote 31)",
        lat: -78.53162,
        lon: -5.639817,
        imageUrl: ""
      },
      {
        id: 12,
        agencia: "El Porvenir",
        distrito: "El Porvenir",
        provincia: "Trujillo",
        departamento: "La Libertad",
        direccion: "Jr. Micaela Bastidas N° 1201 ",
        lat: -79.00303884,
        lon: -8.08513996,
        imageUrl: ""
      },
      {
        id: 13,
        agencia: "Faber Castell",
        distrito: "Ate",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. La Molina N. 161",
        lat: -76.963932,
        lon: -12.055857,
        imageUrl: ""
      },
      {
        id: 14,
        agencia: "Real Plaza Salaverry",
        distrito: "Jesús María",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Salaverry Cdra. 23 y 24",
        lat: -77.051717,
        lon: -12.089713,
        imageUrl: ""
      },
      {
        id: 15,
        agencia: "Tottus Sullana",
        distrito: "Sullana",
        provincia: "Sullana",
        departamento: "Piura",
        direccion: "Av. Panamericana N°461 Urbanización Santa Rosa",
        lat: -80.697197,
        lon: -4.903301,
        imageUrl: ""
      },
      {
        id: 16,
        agencia: "Open Plaza Pucallpa",
        distrito: "Calleria",
        provincia: "Coronel Portillo",
        departamento: "Ucayali",
        direccion: "Av. Centenario – Av. Juan Vargas",
        lat: -74.566592,
        lon: -8.387681,
        imageUrl: ""
      },
      {
        id: 17,
        agencia: "Yanahuara",
        distrito: "Yanahuara",
        provincia: "Arequipa",
        departamento: "Arequipa",
        direccion: "Av. Ejército  / Urb. Jardín Mz. A Lt. 03",
        lat: -71.542328,
        lon: -16.391764,
        imageUrl: ""
      },
      {
        id: 18,
        agencia: "De la Fuente",
        distrito: "Miraflores",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. 28 de Julio 1121",
        lat: -77.02138969,
        lon: -12.13000805,
        imageUrl: ""
      },
      {
        id: 19,
        agencia: "Naylamp",
        distrito: "San Juan de Lurigancho",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Gran Chimú 568",
        lat: -77.00450896,
        lon: -12.0268364,
        imageUrl: ""
      },
      {
        id: 21,
        agencia: "Próceres",
        distrito: "San Juan De Lurigancho",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Proceres de la Independencia N° 2062 - SJL",
        lat: -77.009044,
        lon: -11.998248,
        imageUrl: ""
      },
      {
        id: 22,
        agencia: "Real Plaza Cajamarca",
        distrito: "Cajamarca",
        provincia: "Cajamarca",
        departamento: "Cajamarca",
        direccion: " Av. vía de Evitamiento Norte",
        lat: -78.506083,
        lon: -7.154024,
        imageUrl: ""
      },
      {
        id: 23,
        agencia: "Hersil",
        distrito: "Ate",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Los Frutales 220",
        lat: -76.96720247,
        lon: -12.05953566,
        imageUrl: ""
      },
      {
        id: 24,
        agencia: "Owens Illinois",
        distrito: "Lurín",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "S/N Pampas De Mamay Lote A-2-3",
        lat: -76.831697,
        lon: -12.297813,
        imageUrl: ""
      },
      {
        id: 25,
        agencia: "Enotria",
        distrito: "Ate",
        provincia: "Lima",
        departamento: "Lima",
        direccion: "Av. Nicolas Ayllon 2890",
        lat: -76.972601,
        lon: -12.058336,
        imageUrl: ""
      },
      {
        id: 26,
        agencia: "Real Plaza Cusco",
        distrito: "Cusco",
        provincia: "Cusco",
        departamento: "Cusco",
        direccion: "Av. De la Cultura Lt. A-2",
        lat: -71.950088,
        lon: -13.523304,
        imageUrl: ""
      }
    ];
    return { agencias };
  }
}
