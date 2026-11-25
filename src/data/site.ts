export type BookStatus = 'available' | 'soon';

export interface Book {
  slug: string;
  kicker: string;
  title: string;
  subtitle: string;
  cover: string;
  coverAlt: string;
  status: BookStatus;
  statusLabel: string;
  short: string;
  synopsis: string[];
  topics: string[];
  audience: string[];
  specs: { label: string; value: string }[];
  prices?: { label: string; value: string }[];
  buy?: { label: string; url: string; price?: string; primary?: boolean }[];
  note?: string;
}

export const site = {
  name: 'Pe. Pedro de Celso Gardini',
  shortName: 'Pedro de Celso Gardini',
  role: 'Sacerdote, jornalista e autor',
  diocese: 'Diocese de São Carlos — SP',
  tagline: 'Escrevo para uma Igreja que acolhe, organiza e escuta.',
  intro:
    'Sacerdote católico, jornalista e autor. Livros e formações que unem espiritualidade, acolhida e boa gestão pastoral — para quem serve na Igreja e quer organização sem perder alma.',
  email: 'contato.livrogestao@gmail.com',
  url: 'https://livros.pcgdigital.com.br',
  booksUrl: 'https://livros.pcgdigital.com.br/',
  toolsUrl: 'https://livros.pcgdigital.com.br/ferramentas',
  socials: [
    { label: 'Instagram', handle: '@pegardini', url: 'https://instagram.com/pegardini' },
    { label: 'YouTube', handle: '@PedroGardini', url: 'https://youtube.com/@pedrogardini' },
    {
      label: 'LinkedIn',
      handle: 'Pedro de Celso Gardini',
      url: 'https://linkedin.com/in/pedro-de-celso-gardini-ba8baa22',
    },
    // A Página do Facebook entra aqui quando o endereço oficial for confirmado.
    // O perfil pessoal (facebook.com/pegardini) não é usado no site.
  ],
};

export const books: Book[] = [
  {
    slug: 'gestao-pastoral',
    kicker: 'Gestão e liderança',
    title: 'Gestão Pastoral',
    subtitle: 'Ferramentas práticas para uma Igreja viva e organizada',
    cover: '/images/capa-gestao-pastoral.webp',
    coverAlt:
      'Capa do livro Gestão Pastoral, em azul-marinho com título dourado e desenho de um vitral',
    status: 'available',
    statusLabel: 'Disponível',
    short:
      'Um método que nasce da espiritualidade: planejar, acolher e formar equipes sem perder o essencial.',
    synopsis: [
      'Toda paróquia nasce de um sonho: ser uma comunidade viva, onde as pessoas se sintam acolhidas e a missão evangelizadora aconteça sem que ninguém se esgote no caminho. Entre esse sonho e o dia a dia — agendas que se cruzam, pastorais que não se conversam, reuniões que cansam mais do que constroem — existe uma distância que só a boa vontade não atravessa.',
      'Gestão pastoral não é burocracia: é amor organizado. O livro une espiritualidade e método, tradição da Igreja e ferramentas práticas de liderança, e caminha ao lado de quem serve na paróquia — sacerdotes, coordenadores, catequistas e lideranças leigas.',
      'Em doze capítulos, oferece caminhos concretos para transformar boa vontade em ação organizada, sem perder de vista o que importa: o encontro com Cristo e o cuidado com cada pessoa.',
    ],
    topics: [
      'A acolhida como primeira evangelização',
      'Gestão estratégica aplicada à paróquia: SWOT e PDCA',
      'Liderança servidora',
      'Coaching pastoral',
      'Espiritualidade e gestão de conflitos',
      'A vocação sinodal dos conselhos',
      'Formação de sucessores',
      'Administração transparente dos bens',
      'Comunicação digital',
      'LGPD como atitude pastoral',
    ],
    audience: [
      'Sacerdotes',
      'Coordenadores de pastoral',
      'Conselhos paroquiais',
      'Catequistas',
      'Secretários paroquiais',
      'Lideranças leigas',
    ],
    specs: [
      { label: 'Edição', value: '1ª edição, 2026' },
      { label: 'Páginas', value: '207' },
      { label: 'Formato', value: '16 × 23 cm, brochura sem orelha' },
      { label: 'Idioma', value: 'Português' },
      { label: 'ISBN', value: '978-65-266-8314-9' },
      { label: 'Publicação', value: 'Clube de Autores' },
      { label: 'Impresso', value: 'R$ 52,68' },
      { label: 'Kindle', value: 'R$ 31,99' },
    ],
    prices: [
      { label: 'Impresso', value: 'R$ 52,68' },
      { label: 'Kindle', value: 'R$ 31,99' },
    ],
    buy: [
      {
        label: 'Impresso na Amazon',
        url: 'https://www.amazon.com.br/Gest%C3%A3o-Pastoral-Ferramentas-pr%C3%A1ticas-Organizada/dp/6526683142',
        price: 'R$ 52,68',
        primary: true,
      },
      {
        label: 'Kindle na Amazon',
        url: 'https://www.amazon.com.br/Gest%C3%A3o-Pastoral-Ferramentas-pr%C3%A1ticas-Organizada/dp/6526683142',
        price: 'R$ 31,99',
      },
    ],
  },
  {
    slug: 'jesus-tora',
    kicker: 'Bíblia e raízes judaicas',
    title: 'Jesus, a Torá e a Identidade Judaica',
    subtitle: 'Um convite para ler a Bíblia de outro jeito',
    cover: '/images/capa-jesus-tora.webp',
    coverAlt:
      'Capa do livro Jesus, a Torá e a Identidade Judaica, com fotografia de uma oliveira centenária',
    status: 'available',
    statusLabel: 'Disponível',
    short:
      'Uma leitura católica que devolve a Jesus o seu chão histórico e ajuda a ler as Escrituras com mais respeito.',
    synopsis: [
      'Jesus viveu, rezou, ensinou e morreu como judeu. Este livro propõe uma leitura católica, bíblica e pastoral que recupera as raízes judaicas da fé cristã, com linguagem acessível e perguntas para a leitura pessoal ou em grupo.',
      'Mais do que oferecer respostas rápidas, a obra convida a interpretar a Bíblia com responsabilidade, respeito e consciência histórica: recuperar as raízes judaicas da fé cristã sem apagar a identidade cristã, e distinguir o diálogo teológico da hostilidade religiosa.',
      'Um percurso breve e reflexivo, pensado para catequistas, agentes de pastoral, grupos de estudo bíblico e para quem deseja compreender melhor o ambiente em que o Evangelho nasceu.',
    ],
    topics: [
      'A Torá e os 613 mandamentos',
      'Escrito, tradição e interpretação',
      'Jesus no judaísmo do Segundo Templo',
      'Paulo, a Torá e os não judeus',
      'O muro e a oliveira: Efésios e Romanos 11',
      'Antijudaísmo e o ensinamento da Igreja',
    ],
    audience: [
      'Catequistas',
      'Agentes de pastoral',
      'Grupos de estudo bíblico',
      'Estudantes de teologia',
      'Leitores da Bíblia',
    ],
    specs: [
      { label: 'Formato', value: 'Ebook Kindle' },
      { label: 'Idioma', value: 'Português' },
      { label: 'ASIN', value: 'B0HNTQC769' },
      { label: 'Publicação', value: 'Amazon' },
      { label: 'Preço', value: 'R$ 17,73' },
      { label: 'Leitura', value: 'Kindle, celular, tablet ou computador' },
    ],
    prices: [{ label: 'Kindle', value: 'R$ 17,73' }],
    buy: [
      {
        label: 'Kindle na Amazon',
        url: 'https://www.amazon.com.br/dp/B0HNTQC769',
        price: 'R$ 17,73',
        primary: true,
      },
    ],
  },
  {
    slug: 'o-essencial',
    kicker: 'Secretaria paroquial',
    title: 'O Essencial é Invisível aos Olhos',
    subtitle: 'Um guia para o secretário(a) paroquial, inspirado n’O Pequeno Príncipe',
    cover: '/images/capa-o-essencial.webp',
    coverAlt:
      'Capa do livro O Essencial é Invisível aos Olhos, com uma rosa em paisagem dourada ao amanhecer',
    status: 'soon',
    statusLabel: 'Em breve',
    short:
      'Acolher também é evangelizar: um guia delicado para quem recebe, escuta e organiza a vida de uma paróquia.',
    synopsis: [
      'Quem chega à secretaria paroquial raramente chega por burocracia. Chega com uma pergunta, um pedido, uma dor, uma esperança. Este guia nasce dessa constatação: o primeiro rosto da paróquia costuma ser o de quem atende.',
      'Inspirado n’O Pequeno Príncipe, o livro reúne reflexões e práticas para acolher com delicadeza, organizar com clareza e reconhecer o essencial que não se vê — na rotina, nos documentos e, sobretudo, nas pessoas.',
    ],
    topics: [
      'A acolhida como primeiro anúncio',
      'Escuta e linguagem no atendimento',
      'Organização do cotidiano paroquial',
      'Limites e cuidado de si',
      'Discrição e confidencialidade',
      'O essencial na rotina',
    ],
    audience: [
      'Secretários paroquiais',
      'Equipes de acolhida',
      'Recepcionistas',
      'Párocos e vigários',
    ],
    specs: [
      { label: 'Situação', value: 'Em preparação' },
      { label: 'Idioma', value: 'Português' },
      { label: 'Formato', value: 'A definir' },
    ],
    note: 'Este livro está em preparação. Para saber do lançamento, escreva para o autor ou acompanhe as redes sociais.',
  },
];

export const themes = [
  {
    title: 'Gestão pastoral',
    text: 'Planejar, decidir e acompanhar com método, sem transformar a paróquia em empresa.',
  },
  {
    title: 'Acolhida e escuta',
    text: 'A primeira evangelização acontece quando alguém se sente esperado.',
  },
  {
    title: 'Liderança servidora',
    text: 'Formar equipes, delegar com confiança e preparar quem vem depois.',
  },
  {
    title: 'Bíblia e raízes judaicas',
    text: 'Ler as Escrituras no chão histórico de Jesus e da tradição de Israel.',
  },
  {
    title: 'Comunicação e cultura digital',
    text: 'Falar com clareza nos ambientes onde as pessoas realmente estão.',
  },
  {
    title: 'Espiritualidade do cotidiano',
    text: 'Encontrar Deus na rotina, inclusive nas tarefas que ninguém vê.',
  },
];

export const resources = [
  {
    title: 'Diagnóstico e planejamento',
    text: 'Leitura de cenário, matriz SWOT e prioridades para o ano pastoral.',
  },
  {
    title: 'Ciclo PDCA na pastoral',
    text: 'Um roteiro simples para planejar, executar, verificar e ajustar.',
  },
  {
    title: 'Acolhida e secretaria',
    text: 'Checklists e rotinas para receber bem e organizar o atendimento.',
  },
  {
    title: 'Reuniões e conselhos',
    text: 'Pautas, atas e encaminhamentos que fazem a reunião render.',
  },
];

export const invitations = [
  'Gestão pastoral para conselhos e coordenações',
  'Acolhida como primeira evangelização',
  'Liderança servidora e formação de equipes',
  'Leitura bíblica e raízes judaicas da fé',
  'Comunicação digital e LGPD na pastoral',
];

export const getBook = (slug: string) => books.find((book) => book.slug === slug);
