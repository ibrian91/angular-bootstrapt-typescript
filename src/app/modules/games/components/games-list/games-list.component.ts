import { Component, OnInit } from '@angular/core';


interface Juego {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
    requisitosPC: {
      nombre: string;
      valor: string;
    }[];
  genero: string;
  tipo: string;
  dlc?: {
    nombre: string;
    descripcion: string;
    precio: number;
  }[];
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent  {

  juegos: Juego[] = [
    {
      nombre: 'Super Mario Odyssey',
      imagen: '/assets/super-mario-odyssey.jpg',
      descripcion: 'Un juego de plataformas desarrollado por Nintendo EPD y publicado por Nintendo para la consola Nintendo Switch. Fue lanzado el 27 de octubre de 2017 en todo el mundo.',
      precio: 60,
      requisitosPC: [
        {
          nombre: 'Sistema operativo',
          valor: 'Windows 10'
        },
        {
          nombre: 'Procesador',
          valor: 'Intel Core i5-4590 o AMD Ryzen 3 1200'
        },
        {
          nombre: 'Memoria RAM',
          valor: '8 GB'
        },
        {
          nombre: 'Tarjeta gráfica',
          valor: 'NVIDIA GeForce GTX 970 o AMD Radeon R9 290'
        },
        {
          nombre: 'Almacenamiento',
          valor: '12 GB'
        }
      ],
      genero: 'Plataformas',
      tipo: 'Completo'
    },
    {
      nombre: 'The Legend of Zelda: Breath of the Wild',
      imagen: '/assets/the-legend-of-zelda-breath-of-the-wild.jpg',
      descripcion: 'Un juego de acción-aventura desarrollado y publicado por Nintendo para la consola Nintendo Switch. Fue lanzado el 3 de marzo de 2017 en todo el mundo.',
      precio: 60,
      requisitosPC: [
        {
          nombre: 'Sistema operativo',
          valor: 'Windows 10'
        },
        {
          nombre: 'Procesador',
          valor: 'Intel Core i5-4590 o AMD Ryzen 3 1200'
        },
        {
          nombre: 'Memoria RAM',
          valor: '8 GB'
        },
        {
          nombre: 'Tarjeta gráfica',
          valor: 'NVIDIA GeForce GTX 970 o AMD Radeon R9 290'
        },
        {
          nombre: 'Almacenamiento',
          valor: '13 GB'
        }
      ],
      genero: 'Acción-aventura',
      tipo: 'Completo'
    },
    {
      nombre: 'Elden Ring',
      imagen: '/assets/elden-ring.jpg',
      descripcion: 'Un juego de acción role-playing desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Fue lanzado el 25 de febrero de 2022 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S.',
      precio: 60,
      requisitosPC: [
        {
          nombre: 'Sistema operativo',
          valor: 'Windows 10'
        },
        {
          nombre: 'Procesador',
          valor: 'Intel Core i5-8400 o AMD Ryzen 3 3300X'
        },
        {
          nombre: 'Memoria RAM',
          valor: '16 GB'
        },
        {
          nombre: 'Tarjeta gráfica',
          valor: 'NVIDIA GeForce GTX 1060 6GB o AMD Radeon RX 580 8GB'
        },
        {
          nombre: 'Almacenamiento',
          valor: '60 GB'
        }
      ],
      genero: 'Acción-aventura',
      tipo: 'Completo'
    },
    {
      nombre: 'Elden Ring Aventura En el p',
      imagen: '/assets/elden-ring.jpg',
      descripcion: 'Un juego de acción role-playing desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Fue lanzado el 25 de febrero de 2022 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S.',
      precio: 60,
      requisitosPC: [
        {
          nombre: 'Sistema operativo',
          valor: 'Windows 10'
        },
        {
          nombre: 'Procesador',
          valor: 'Intel Core i5-8400 o AMD Ryzen 3 3300X'
        },
        {
          nombre: 'Memoria RAM',
          valor: '16 GB'
        },
        {
          nombre: 'Tarjeta gráfica',
          valor: 'NVIDIA GeForce GTX 1060 6GB o AMD Radeon RX 580 8GB'
        },
        {
          nombre: 'Almacenamiento',
          valor: '60 GB'
        }
      ],
      genero: 'Acción-aventura',
      tipo: 'Completo',
    
      dlc: [
        {
          nombre: 'DLC Aventura Adicional',
          descripcion: 'Explora nuevos mundos y desafíos con este emocionante DLC.',
          precio: 15
        }
      ]
    },
    {
      nombre: 'Minecraft volador En el p',
      imagen: '/assets/minecraft.jpg',
      descripcion: 'Un juego de acción role-playing desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Fue lanzado el 25 de febrero de 2022 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S.',
      precio: 60,
      requisitosPC: [
        {
          nombre: 'Sistema operativo',
          valor: 'Windows 10'
        },
        {
          nombre: 'Procesador',
          valor: 'Intel Core i5-8400 o AMD Ryzen 3 3300X'
        },
        {
          nombre: 'Memoria RAM',
          valor: '16 GB'
        },
        {
          nombre: 'Tarjeta gráfica',
          valor: 'NVIDIA GeForce GTX 1060 6GB o AMD Radeon RX 580 8GB'
        },
        {
          nombre: 'Almacenamiento',
          valor: '60 GB'
        }
      ],
      genero: 'Acción-aventura',
      tipo: 'Completo',
    
      dlc: [
        {
          nombre: 'DLC Drama Emocional',
          descripcion: 'Explora el romance',
          precio: 15
        },
      ]
    }

  ]
}
