import { Book } from 'Interfaces/book';

export const booksMock: Array<Book> = [
  {
    id: 1,
    name: 'Harry Potter e a Pedra Filosofal',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 2,
    name: 'Harry Potter e a Câmara Secreta',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 3,
    name: 'Harry Potter e o Prisioneiro de Azkaban',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 4,
    name: 'Harry Potter e o Cálice de Fogo',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 5,
    name: 'Harry Potter e a Ordem da Fênix',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 6,
    name: 'Harry Potter e o Príncipe Mestiço',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 7,
    name: 'Harry Potter e as Relíquias da Morte',
    description: `Livro de Harry Potter`,
    isRented: false,
  },

  {
    id: 8,
    name: 'Crônicas de Gelo e Fogo',
    description: `Livro de Game of Thrones`,
    isRented: false,
  },

  {
    id: 9,
    name: 'A Batalha do Apocalipse',
    description: `Há muitos e muitos anos, tantos quanto o número de estrelas no céu, o paraíso celeste foi palco de um terrível levante. Um grupo de anjos guerreiros, amantes da justiça e da liberdade, desafiou a tirania dos poderosos arcanjos, levantando armas contra seus opressores. Expulsos, os renegados foram forçados ao exílio e condenados a vagar pelo mundo dos homens até o Dia do Juízo Final.Mas eis que chega o momento do Apocalipse, o tempo do ajuste de contas. Único sobrevivente do expurgo, Ablon, o líder dos renegados, é convidado por Lúcifer, o Arcanjo Negro, a se juntar às suas legiões na Batalha do Armagedon, o embate final entre o céu e o inferno, a guerra que decidirá não só o destino do mundo, mas o futuro da humanidade. Das ruínas da Babilônia ao esplendor do Império Romano, das vastas planícies da China aos gelados castelos da Inglaterra medieval, A Batalha do Apocalipse não é apenas uma viagem pela história humana – é também uma jornada de conhecimento, um épico empolgante, repleto de lutas heroicas, magia, romance e suspense.`,
    author: 'Eduardo Spohr',
    year: 2011,
    isRented: false,
  },

  {
    id: 10,
    name: 'Hobbit',
    description: `Livro de Senhor dos Anéis`,
    isRented: false,
  },
];

export const pageSize = 5;

const ROUTES = {
  HOME: {
    url: '/',
  },

  LOGIN: {
    url: '/login',
  },

  DETAILS: {
    url: '/details/:id',
  },

  CREATE: {
    url: '/create',
  },

  EDIT: {
    url: '/edit/:id',
  },
};

export default ROUTES;
