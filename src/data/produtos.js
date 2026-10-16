const arquivosImagens = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default",
  }
);

function carregarImagens(id, quantidade) {
  const extensoes = ["png", "jpg", "jpeg", "webp", "avif"];

  return Array.from({ length: quantidade }, (_, index) => {
    const numero = index + 1;

    const caminho = extensoes
      .map((extensao) => `../assets/${id}${numero}.${extensao}`)
      .find((caminho) => arquivosImagens[caminho]);

    if (!caminho) {
      console.warn(`Imagem não encontrada: ${id}${numero}`);
      return null;
    }

    return arquivosImagens[caminho];
  }).filter(Boolean);
}

const produtosBase = [
  {
    id: "tenis-knu-skool-pearl-suede-black",
    nome: "Tênis Knu Skool Pearl Suede Black",
    preco: 649.9,
    precoOriginal: 699.9,
    descricao: "O Knu Skool Pearl Suede Black, da Vans, apresenta um design robusto inspirado nos modelos de skate dos anos 1990. Com acabamento em camurça preta e detalhes característicos da linha, o tênis combina estilo urbano e versatilidade, sendo ideal para compor looks casuais e streetwear.",
    tamanhos: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    quantidadeImagens: 6,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-30px) scale(1.05)",
  },
  {
    id: "tenis-knu-skool-black-true-white",
    nome: "Tênis Knu Skool Black True White",
    preco: 399.9,
    precoOriginal: 499.9,
    descricao: "Tênis de estilo urbano com visual clássico e acabamento em preto e branco.",
    tamanhos: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    quantidadeImagens: 6,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-30px) scale(1.05)",
  },
  {
    id: "tenis-skate-half-cab-wafflecup-una-white-gum",
    nome: "Tênis Skate Half Cab Wafflecup Una White Gum",
    preco: 499.90,
    precoOriginal: 699.90,
    descricao: "Tênis Vans Half Cab WaffleCup, na combinação de cores branco e gum. Desenvolvido para a prática de skate, possui design de cano médio, estrutura reforçada e solado que oferece aderência e estabilidade. Seu visual clássico combina funcionalidade e estilo urbano, sendo ideal tanto para andar de skate quanto para compor looks casuais.",
    tamanhos: [38, 39, 40, 41, 42, 43],
    quantidadeImagens: 4,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-30px) scale(1.05)",
  },
  {
    id: "tenis-knu-skool-pig-deep-twilight",
    nome: "Tênis Knu Skool Pig Deep Twilight",
    preco: 349.90,
    precoOriginal: 699.90,
    descricao: "O Knu Skool Pig Deep Twilight, da Vans, apresenta um design robusto inspirado nos modelos clássicos de skate dos anos 1990. Com acabamento em camurça e tonalidade azul-escura, o tênis combina estilo urbano e versatilidade, sendo ideal para compor looks casuais e streetwear.",
    tamanhos: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    quantidadeImagens: 4,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-30px) scale(1.05)",
  },
  {
    id: "tênis-mte-sk8-hi-ripstop-asphalt",
    nome: "Tênis Mte Sk8-Hi Ripstop Asphalt",
    preco: 899.90,
    precoOriginal: 999.90,
    descricao: "O MTE Sk8-Hi Ripstop Asphalt, da Vans, apresenta um design de cano alto com visual robusto e urbano. Com acabamento em tom cinza e material ripstop, o modelo combina estilo e praticidade, sendo ideal para compor looks casuais e streetwear.",
    tamanhos: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    quantidadeImagens: 8,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-20px) scale(1.05)",
  },
  {
    id: "tenis-skate-sk8-hi-black-gum",
    nome: "Tênis Skate Sk8-Hi Black Gum",
    preco: 249.90,
    precoOriginal: 499.9,
    descricao: "O Sk8-Hi Black Gum, da Vans, apresenta um design clássico de cano alto, com combinação de preto e sola em tom de borracha natural. Inspirado na cultura do skate, o modelo oferece um visual urbano e versátil, ideal para compor looks casuais e streetwear.",
    tamanhos: [33,34,35,36,37,38,39,40,41,42],
    quantidadeImagens: 6,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-20px) scale(1)",
  },
  {
    id: "tenis-skate-half-cab-black-white",
    nome: "Tênis Skate Half Cab Black White",
    preco: 449.90,
    precoOriginal: 549.9,
    descricao: "Tênis de cano médio com cabedal preto, detalhes brancos e construção reforçada para skate. Um clássico que combina com jeans baggy e camisetas oversized.",
    tamanhos: [33,34,35,36,37,38,39,40,41,42,43,44,45],
    quantidadeImagens: 8,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-20px) scale(1)",
  },
  {
    id: "camiseta-manga-longa-throwback-mixer-black",
    nome: "Camiseta Manga Longa Throwback Mixer Black",
    preco: 199.90,
    precoOriginal: 299.90,
    descricao: "Camiseta de manga longa com visual streetwear e design Throwback Mixer Black.",
    tamanhos: ["P", "M", "G", "GG"],
    quantidadeImagens: 4,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-20px) scale(1)",
  },
  {
    id: "mp3-famue-64gb-2.7-polegadas",
    nome: "Famue MP3 Player 64GB 2.7 polegadas",
    preco: 189.90,
    precoOriginal: 299.99,
    descricao: "MP3 player portátil com armazenamento de 64 GB e tela de 2,7 polegadas.",
    tamanhos: [],
    quantidadeImagens: 2,
    imagemCardNumero: 2,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "moletom-bershka-com-capuz-e-ziper-lavado",
    nome: "Moletom Bershka com capuz e zíper lavado",
    preco: 239.90,
    precoOriginal: 279.90,
    descricao: "Moletom com capuz, fechamento por zíper e acabamento lavado, ideal para composições streetwear.",
    tamanhos: ["P", "M", "G", "GG"],
    quantidadeImagens: 4,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "tenis-qix-chorao-park-house-preto",
    nome: "Tênis QIX Chorão Park House",
    preco: 329.90,
    precoOriginal: 349.90,
    descricao: "Moletom com capuz, fechamento por zíper e acabamento lavado, ideal para composições streetwear.",
    tamanhos: [34,35,36,37,38,39,40,41,42,43,44],
    quantidadeImagens: 6,
    imagemCardNumero: 2,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "bermuda-bershka-jort-barrel-estampada",
    nome: "Bermuda Bershka Jort Barrel estampada",
    preco: 279.90,
    descricao: "A Bermuda Jort Barrel Estampada, da Bershka, apresenta um design contemporâneo, com modelagem barrel e estampa que agrega personalidade à peça. O modelo combina uma proposta urbana e despojada, acompanhando as tendências atuais da moda casual. Sua estética versátil permite composições com camisetas, moletons e tênis, sendo adequada para diferentes estilos de looks cotidianos.",
    tamanhos: ["P","M","G"],
    quantidadeImagens: 6,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "bermuda-de-moletom-baggy-preta",
    nome: "Bermuda de Moletom Baggy Preta",
    preco: 217.90,
    descricao: "A Bermuda Moletom Baggy Preta apresenta uma modelagem ampla e um estilo urbano e despojado. Com cor preta e visual minimalista, a peça combina conforto e versatilidade, sendo ideal para compor looks casuais e streetwear.",
    tamanhos: ["P","M","G","GG"],
    quantidadeImagens: 3,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "camiseta-boxy-regular-preta",
    nome: "Camiseta Boxy Regular Preta",
    preco: 137.90,
    descricao: "A Camiseta Boxy Regular Preta apresenta uma modelagem moderna e um visual minimalista. Com cor preta e estilo despojado, a peça é versátil e combina facilmente com diferentes roupas, sendo ideal para compor looks casuais e streetwear.",
    tamanhos: ["P","M","G","GG"],
    quantidadeImagens: 3,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "camiseta-boxy-regular-mirtilo",
    nome: "Camiseta Boxy Regular Mirtilo",
    preco: 137.90,
    descricao: "A Camiseta Boxy Regular Mirtilo apresenta uma modelagem moderna e um estilo casual. Com tonalidade inspirada na cor mirtilo, a peça combina simplicidade e personalidade, sendo ideal para compor looks urbanos e streetwear.",
    tamanhos: ["P","M","G","GG"],
    quantidadeImagens: 4,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-20px) scale(1)",
  },
  {
    id: "camiseta-boxy-regular-gradiente-azul",
    nome: "Camiseta Boxy Regular Gradiente Azul",
    preco: 137.90,
    descricao: "A Camiseta Boxy Regular Gradiente Azul apresenta uma modelagem moderna e estampa em degradê azul, que adiciona destaque ao visual. Com uma proposta urbana e despojada, a peça é versátil e combina facilmente com diferentes looks casuais e streetwear.",
    tamanhos: ["P","M","G","GG"],
    quantidadeImagens: 3,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-20px) scale(1)",
  },
  {
    id: "carteira-explorador-de-arquivos-windows-xp",
    nome: "Carteira Explorador de Arquivos Windows XP",
    preco: 229.90,
    precoOriginal: 250,
    descricao: "A Carteira Explorador de Arquivos é uma carteira desenvolvida em couro legítimo, combinando durabilidade, funcionalidade e um design diferenciado. O produto possui oito bolsos, oferecendo espaço para organizar cartões, documentos e outros itens essenciais do dia a dia. Sua proposta une praticidade e estilo, sendo uma opção versátil para quem busca um acessório funcional com acabamento em material natural.",
    tamanhos: [],
    quantidadeImagens: 6,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "cinto-fl-studio-106cm",
    nome: "Cinto FL Studio 106cm",
    preco: 249.90,
    precoOriginal: 299.9,
    descricao: "O Cinto FL Studio é um acessório que combina funcionalidade e estilo, complementando diferentes composições de vestuário. Com uma proposta estética contemporânea, o cinto se destaca como um elemento versátil para a construção de looks urbanos e casuais. Seu design permite combiná-lo com peças como calças jeans, bermudas e outras roupas do estilo streetwear, agregando personalidade à composição.",
    quantidadeImagens: 4,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "moletom-zip-up-off-white-fortal-ed-hardy-x-matue",
    nome: 'Moletom Zip Up Off White "Fortal" Ed Hardy x Matuê',
    preco: 399.90,
    precoOriginal: 449.9,
    descricao: "O moletom Zip Up Off-White Fortal, fruto da colaboração entre Ed Hardy e Matuê, apresenta um estilo urbano e despojado. Com cor off-white, fechamento por zíper e estampas características da coleção, a peça combina conforto e personalidade, sendo ideal para compor looks casuais e streetwear.",
    quantidadeImagens: 3,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(0.8)",
  },
  {
    id: "calca-moletom-off-white-fortal-ed-hardy-x-matue",
    nome: 'Calça Moletom Off White "Fortal" Ed Hardy x Matuê',
    preco: 399.90,
    precoOriginal: 439.9,
    descricao: "A calça de moletom Off-White Fortal, fruto da colaboração entre Ed Hardy e Matuê, apresenta um estilo urbano e despojado. Com cor off-white e estampas características da coleção, a peça combina conforto e personalidade, sendo ideal para compor looks casuais e streetwear.",
    quantidadeImagens: 3,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(0.8)",
  },
  {
    id: "camiseta-manga-longa-preta-pomba-isso-e-trap",
    nome: 'Camiseta Manga Longa Preta POMBA - ISSO É TRAP',
    preco: 129.90,
    precoOriginal: 189.9,
    descricao: "A camiseta de manga longa preta POMBA, da linha Merch Brandão Oficial, apresenta um estilo urbano e despojado. Com cor preta e identidade visual ligada à 30PRAUM, a peça combina versatilidade e personalidade, sendo ideal para compor looks casuais e streetwear.",
    quantidadeImagens: 1,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(0.8)",
  },
  {
    id: "bandana-branca-isso-e-trap",
    nome: 'Bandana Branca ISSO É TRAP',
    preco: 49.90,
    descricao: "A Bandana Merch Brandão, da 30PRAUM, é um acessório de estilo urbano que complementa looks casuais e streetwear. Com identidade visual ligada à coleção Brandão, a peça agrega personalidade ao visual e pode ser utilizada de diferentes formas, oferecendo versatilidade na composição de diferentes estilos.",
    quantidadeImagens: 1,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  {
    id: "relógio-analogico-condor-aco-co2035nxx-4k-prata",
    nome: "Relógio Analógico Condor Aço CO2035NXX 4K Prata",
    preco: 149.90,
    precoOriginal: 199.9,
    descricao: "O relógio analógico da Condor apresenta um design clássico e versátil, com estrutura em aço inoxidável. Seu visual combina elegância e praticidade, sendo ideal para complementar looks casuais e urbanos, além de servir como acessório para o uso diário.",
    tamanhos: [],
    quantidadeImagens: 3,
    imagemCardNumero: 1,
    imagemCardTransform: "translateY(-10px) scale(1)",
  },
  ];

export const produtos = produtosBase.map((produto) => {
  const imagens = carregarImagens(
    produto.id,
    produto.quantidadeImagens ?? 1
  );

  const imagemCard =
    imagens[(produto.imagemCardNumero ?? 1) - 1] ??
    imagens[0];

  return {
    ...produto,
    imagens,
    imagemCard,
  };
});