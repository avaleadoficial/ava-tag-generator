export type CategoryData = {
  hashtags: string[];
  keywords: string[];
  trends: string[];
  aliases: string[];
};

export type Database = Record<string, CategoryData>;

export const database: Database = {
  estetica: {
    aliases: ["estetica", "estética", "esteticista", "beleza facial", "skincare", "spa"],
    hashtags: [
      "#esteticafacial", "#esteticacorporal", "#harmonizacaofacial", "#belezanatural",
      "#clinicadeestetica", "#esteticaavancada", "#skincarebrasil", "#peelingfacial",
      "#limpezadepele", "#drenagemlinfatica", "#botoxnatural", "#preenchimentolabial",
      "#rejuvenescimento", "#cuidadoscomapele", "#esteticaintegrativa", "#bioestimulador",
      "#protocolofacial", "#radiofrequencia", "#massagemmodeladora", "#criolipolise",
      "#esteticaprofissional", "#beautyclinic", "#rotinadebeleza", "#pelelinda",
      "#esteticabrasileira", "#tratamentofacial", "#hidratacaofacial", "#antienvelhecimento",
      "#peeleperfeita", "#esteticafeminina", "#bemestar", "#autoestimaemalta",
      "#dermatofuncional", "#cuidadodapele", "#protocolopersonalizado", "#esteticamoderna",
      "#beautyaesthetic", "#glowskin", "#peledourada", "#pelederosto",
      "#tratamentoestetico", "#facelift", "#microagulhamento", "#dermaplaning",
    ],
    keywords: [
      "Limpeza de pele profunda", "Drenagem linfática facial", "Aplicação de botox",
      "Preenchimento com ácido hialurônico", "Skin care personalizado", "Rejuvenescimento facial",
      "Harmonização facial", "Peeling químico", "Microagulhamento", "Radiofrequência facial",
      "Criolipólise", "Massagem modeladora", "Bioestimulador de colágeno", "Lifting facial",
      "Tratamento para acne", "Clareamento de manchas", "Hidratação facial intensiva",
      "Protocolo anti-idade", "Rinomodelação", "Lipo de papada", "Toxina botulínica",
      "Bichectomia estética", "Pump labial", "Massagem relaxante", "Esfoliação corporal",
      "Tratamento de estrias", "Redução de celulite", "Modelagem corporal",
      "Tratamento de olheiras", "Design de sobrancelhas", "Limpeza facial premium",
      "Cuidados pós-procedimento", "Avaliação dermatofuncional", "Plano de tratamento estético",
      "Beleza natural integrada", "Consultoria de skincare",
    ],
    trends: [
      "Harmonização facial sutil", "Skinification corporal", "Bioestimuladores naturais",
      "Protocolos personalizados", "Skinbooster injetável", "Estética regenerativa",
      "Rejuvenescimento natural", "Beleza minimalista", "Slow beauty",
    ],
  },

  beleza: {
    aliases: ["beleza", "make", "maquiagem", "cosmetico", "cosméticos"],
    hashtags: [
      "#belezanatural", "#maquiagemprofissional", "#makeup", "#beautytips",
      "#tutorialdemake", "#cosmeticos", "#belezasemfiltro", "#peleperfeita",
      "#makedodia", "#belezafeminina", "#beautyblogger", "#dicasdebeleza",
      "#produtosdebeleza", "#rotinademake", "#makeupartist", "#contornoeiluminacao",
      "#paletadesombras", "#batomvermelho", "#cilios", "#sobrancelhas",
      "#makenoivas", "#belezaempoderada", "#instabeauty", "#beautyaddict",
      "#beautycommunity", "#makebrasil", "#makemoderna", "#trabalhodemake",
      "#blogdebeleza", "#produtosnacionais", "#vegancosmetics", "#cleanbeauty",
      "#highlighter", "#peletratada", "#cabeloperfeito", "#hairstyle",
    ],
    keywords: [
      "Maquiagem para noivas", "Produtos veganos de beleza", "Rotina de skincare coreana",
      "Tendências de maquiagem 2026", "Curso de automaquiagem", "Maquiagem para festa",
      "Maquiagem profissional", "Paleta de sombras nude", "Batom de longa duração",
      "Base para pele oleosa", "Iluminador líquido", "Sobrancelha laminada",
      "Extensão de cílios", "Henna para sobrancelhas", "Maquiagem editorial",
      "Produtos cruelty free", "Cabelo cacheado cuidados", "Hidratação capilar profunda",
      "Coloração capilar tendência", "Mechas iluminadas", "Tratamento de fios",
      "Make natural diário", "Glow makeup", "Pele de porcelana",
    ],
    trends: [
      "Clean girl aesthetic", "Glass skin", "Make minimalista", "Cosméticos veganos",
      "Skinimalism", "Cabelo natural valorizado",
    ],
  },

  micropigmentacao: {
    aliases: ["micropigmentacao", "micropigmentação", "microblading"],
    hashtags: [
      "#micropigmentacao", "#microblading", "#sobrancelhasperfeitas", "#designdesobrancelhas",
      "#fioafio", "#micropigmentacaolabial", "#sobrancelhamicropigmentada", "#labiosperfeitos",
      "#micropigmentadoraprofissional", "#microshading", "#nanopigmentacao", "#sobrancelhasnaturais",
      "#tatuagemestetica", "#brownatural", "#micropigmentacaodebeleza", "#brownlift",
      "#powderbrows", "#ombrebrows", "#cursomicropigmentacao", "#tecnicafioafio",
      "#estimuladorlabial", "#micropigmentacaocouro", "#sobrancelhasdesenhadas", "#beautyink",
    ],
    keywords: [
      "Micropigmentação fio a fio", "Micropigmentação labial 3D", "Design de sobrancelhas perfeito",
      "Microblading premium", "Nanopigmentação capilar", "Sobrancelha natural duradoura",
      "Lábios pigmentados", "Esfumado de sobrancelha", "Ombre powder brows",
      "Cursos de micropigmentação", "Pigmentos hipoalergênicos", "Retoque de micropigmentação",
      "Anestésico tópico labial", "Pré e pós micropigmentação", "Pigmentação de couro cabeludo",
    ],
    trends: [
      "Nano brows ultra realistas", "Lábios russos", "Powder brows suave",
      "Pigmentação labial blush",
    ],
  },

  cilios: {
    aliases: ["cilios", "cílios", "extensao de cilios"],
    hashtags: [
      "#extensaodecilios", "#cilios", "#cilioslindos", "#lashmaker", "#volumeegipcio",
      "#volumerusso", "#fioafiocilios", "#lashlifting", "#cilioslevantados",
      "#brasilianvolume", "#cilioslargados", "#tinturadecilios", "#lashbrow",
      "#designerdecilios", "#cursolashmaker", "#workshopcilios",
    ],
    keywords: [
      "Extensão de cílios fio a fio", "Volume russo brasileiro", "Volume egípcio",
      "Lash lifting com tintura", "Cílios mega volume", "Curso de lash designer",
      "Manutenção de cílios", "Removedor de extensão", "Cílios postiços premium",
      "Cuidados pós extensão",
    ],
    trends: [
      "Lash lifting natural", "Cílios fox eye", "Brasilian volume",
    ],
  },

  sobrancelhas: {
    aliases: ["sobrancelha", "sobrancelhas", "brow"],
    hashtags: [
      "#designdesobrancelhas", "#sobrancelhasperfeitas", "#brownatural", "#henna",
      "#sobrancelhamicropigmentada", "#designerdesobrancelhas", "#browlamination",
      "#sobrancelhasdesenhadas", "#fioafio", "#estetica", "#maquiagemdefinitiva",
    ],
    keywords: [
      "Design de sobrancelhas com henna", "Brow lamination", "Sobrancelha natural",
      "Curso de designer de sobrancelhas", "Henna premium", "Visagismo facial",
    ],
    trends: ["Brow lamination", "Fluffy brows", "Soap brows"],
  },

  carros: {
    aliases: ["carros", "automoveis", "automóveis", "auto", "veiculos", "veículos"],
    hashtags: [
      "#carros", "#carrosrebaixados", "#carrosesportivos", "#automoveis", "#carrosdeluxo",
      "#carrosantigos", "#carroseletricos", "#carrosturbo", "#instacar", "#carlovers",
      "#carlife", "#carrosnacionais", "#carrosimportados", "#supercars", "#carrosbrasil",
      "#carrosdoinstagram", "#tunadocomestilo", "#carrosvip", "#carscene", "#stancenation",
      "#carculture", "#detalhamentoautomotivo", "#cuidadocomocarro", "#oficina",
      "#mecanicaautomotiva", "#funilariaepintura", "#esteticaautomotiva", "#polimentotecnico",
      "#cristalizacaodepintura", "#vitrificacaoautomotiva", "#blindagem", "#som automotivo",
      "#rodasaro20", "#suspensaoarcomprimido", "#carrohotwheels", "#colecionadores",
    ],
    keywords: [
      "Estética automotiva premium", "Detalhamento profissional de carros",
      "Polimento técnico", "Cristalização de pintura", "Vitrificação automotiva",
      "Higienização interna de veículos", "Funilaria e pintura", "Mecânica geral",
      "Revisão de carro", "Troca de óleo", "Alinhamento e balanceamento",
      "Suspensão a ar", "Som automotivo de alta performance", "Película automotiva",
      "Blindagem veicular", "Plotagem em carros", "Envelopamento de veículo",
      "Personalização automotiva", "Restauração de carros antigos", "Carros seminovos",
      "Compra e venda de carros", "Financiamento de veículos", "Avaliação automotiva",
      "Inspeção veicular", "Concessionária premium",
    ],
    trends: [
      "Carros elétricos no Brasil", "Estética automotiva premium", "Detalhamento ceramic coat",
      "Restauração resto-mod", "SUVs híbridos",
    ],
  },

  mecanica: {
    aliases: ["mecanica", "mecânica", "oficina"],
    hashtags: [
      "#mecanica", "#oficinamecanica", "#mecanicoautomotivo", "#manutencaoveicular",
      "#trocadeoleo", "#revisao", "#freios", "#suspensao", "#injecaoeletronica",
      "#diagnosticoautomotivo", "#alinhamentoebalanceamento", "#oficinaespecializada",
    ],
    keywords: [
      "Manutenção preventiva veicular", "Troca de óleo e filtros", "Reparo de motor",
      "Reparo de câmbio", "Diagnóstico eletrônico", "Conserto de freios",
      "Suspensão automotiva", "Oficina especializada em importados", "Revisão completa",
    ],
    trends: ["Oficina premium", "Diagnóstico computadorizado", "Manutenção elétricos"],
  },

  funilaria: {
    aliases: ["funilaria", "pintura automotiva"],
    hashtags: [
      "#funilariaepintura", "#pinturaautomotiva", "#funileiro", "#repintura",
      "#carrobatido", "#restauracaoautomotiva", "#estamparia", "#funilariaprofissional",
    ],
    keywords: [
      "Funilaria expressa", "Pintura automotiva premium", "Polimento pós pintura",
      "Reparo de batidas", "Restauração de lataria", "Pintura de motos",
    ],
    trends: ["Pintura PPG", "Repaint personalizado", "Wrap colorido"],
  },

  esteticaauto: {
    aliases: ["estetica automotiva", "estética automotiva", "detalhamento"],
    hashtags: [
      "#esteticaautomotiva", "#detalhamentoautomotivo", "#polimento", "#cristalizacao",
      "#vitrificacao", "#ceramiccoat", "#cuidadoautomotivo", "#carrolimpo",
      "#detailing", "#carwash", "#lavagemecologica",
    ],
    keywords: [
      "Ceramic coating profissional", "Vitrificação premium", "Lavagem ecológica",
      "Higienização interna completa", "Polimento técnico em 3 etapas",
      "Hidratação de couro automotivo", "Descontaminação de pintura",
    ],
    trends: ["Graphene coating", "Self-healing PPF", "Detalhamento concours"],
  },

  odontologia: {
    aliases: ["odonto", "dentista", "odontologia"],
    hashtags: [
      "#odontologia", "#dentista", "#sorrisoperfeito", "#clareamentodental", "#ortodontia",
      "#implantes", "#facetasdeporcelana", "#lentesdecontatodental", "#odontoestetica",
      "#dentistabrasil", "#clinicaodontologica", "#odontopediatria", "#endodontia",
      "#periodontia", "#protesedentaria", "#aparelhoortodontico", "#alinhadorinvisivel",
      "#harmonizacaoorofacial", "#sorrisogengival", "#designsmile",
    ],
    keywords: [
      "Clareamento dental a laser", "Lentes de contato dental", "Facetas em porcelana",
      "Implante dentário", "Ortodontia invisível", "Aparelho autoligado",
      "Tratamento de canal", "Limpeza profissional", "Harmonização orofacial",
      "Prótese fixa", "Prótese sobre implante", "Odontopediatria humanizada",
      "Consultoria de sorriso", "Avaliação digital do sorriso", "Plano de tratamento dental",
    ],
    trends: ["Smile design digital", "Alinhadores invisíveis", "Harmonização orofacial"],
  },

  nutricao: {
    aliases: ["nutricao", "nutrição", "nutricionista"],
    hashtags: [
      "#nutricao", "#nutricionista", "#alimentacaosaudavel", "#receitasaudavel", "#lowcarb",
      "#dieta", "#emagrecimentosaudavel", "#nutricaofuncional", "#nutricaoesportiva",
      "#reeducacaoalimentar", "#vidasaudavel", "#mealprep", "#comidadeverdade",
    ],
    keywords: [
      "Reeducação alimentar personalizada", "Nutrição esportiva", "Dieta low carb",
      "Plano alimentar para emagrecimento", "Nutrição funcional", "Consulta com nutricionista online",
      "Suplementação esportiva", "Avaliação corporal", "Bioimpedância", "Cardápio personalizado",
    ],
    trends: ["Nutrição comportamental", "Jejum intermitente", "Mindful eating"],
  },

  psicologia: {
    aliases: ["psico", "psicologia", "psicologo", "psicóloga", "terapia"],
    hashtags: [
      "#psicologia", "#terapia", "#saudemental", "#psicologa", "#psicologo",
      "#autoconhecimento", "#ansiedade", "#depressao", "#bemestaremocional", "#mindfulness",
      "#terapiaonline", "#tcc", "#psicanalise", "#psicoterapia",
    ],
    keywords: [
      "Terapia cognitivo comportamental", "Psicoterapia online", "Tratamento de ansiedade",
      "Tratamento de depressão", "Terapia de casal", "Atendimento psicológico humanizado",
      "Psicanálise clínica", "Acompanhamento de luto", "Saúde mental no trabalho",
    ],
    trends: ["Terapia online acessível", "Mindfulness corporativo", "Saúde mental no trabalho"],
  },

  advocacia: {
    aliases: ["advocacia", "advogado", "direito"],
    hashtags: [
      "#advocacia", "#advogado", "#direito", "#advogadabrasil", "#direitotrabalhista",
      "#direitocivil", "#direitodefamilia", "#direitotributario", "#direitoempresarial",
      "#consultoriajuridica", "#escritoriodeadvocacia", "#oab", "#previdenciario",
      "#direitoconsumidor", "#advogadoonline",
    ],
    keywords: [
      "Direito trabalhista consultivo", "Ação previdenciária", "Aposentadoria especial",
      "Direito do consumidor", "Inventário e partilha", "Divórcio consensual",
      "Pensão alimentícia", "Consultoria empresarial jurídica", "Planejamento tributário",
      "Recuperação judicial", "Assessoria jurídica para startups",
    ],
    trends: ["Advocacia 4.0", "Legal design", "Marketing jurídico ético"],
  },

  imobiliaria: {
    aliases: ["imobiliaria", "imobiliária", "imoveis", "imóveis", "corretor"],
    hashtags: [
      "#imobiliaria", "#imoveis", "#corretordeimoveis", "#casaavenda", "#apartamentoavenda",
      "#mercadoimobiliario", "#imoveisdeluxo", "#investimentoimobiliario", "#financiamento",
      "#decoradoimoveis", "#imovelnovo", "#imovelpronto", "#lancamentoimobiliario",
    ],
    keywords: [
      "Apartamento à venda na planta", "Casa de alto padrão", "Financiamento imobiliário",
      "Consórcio imobiliário", "Investimento em imóveis", "Imóvel para temporada",
      "Imóvel de luxo à venda", "Lançamento imobiliário", "Avaliação imobiliária",
      "Aluguel residencial", "Aluguel comercial", "Corretor especialista em alto padrão",
    ],
    trends: ["Imóveis prontos para morar", "Decorados entregues", "Smart homes"],
  },

  airbnb: {
    aliases: ["airbnb", "temporada", "aluguel temporada"],
    hashtags: [
      "#airbnb", "#aluguelportemporada", "#hospedagem", "#viagensbrasil", "#shorrental",
      "#anfitriaoairbnb", "#superhost", "#receptivoairbnb", "#decoracaoairbnb",
      "#estadiaperfeita", "#vivenciaslocais", "#airbnbhost",
    ],
    keywords: [
      "Aluguel por temporada premium", "Gestão de Airbnb completa", "Anfitrião profissional",
      "Decoração para hospedagem", "Receptivo de hóspedes", "Limpeza profissional Airbnb",
      "Fotografia para Airbnb", "Cama box hoteleira", "Enxoval de hotelaria",
      "Precificação dinâmica", "Channel manager hotelaria",
    ],
    trends: ["Slow travel", "Workation friendly", "Decor instagramável"],
  },

  hotelaria: {
    aliases: ["hotelaria", "hotel", "pousada"],
    hashtags: [
      "#hotelaria", "#hotel", "#pousada", "#turismo", "#hospitalidade", "#hotelboutique",
      "#hoteldeluxo", "#viagens", "#cafedamanhahotel", "#wellnesshotel",
    ],
    keywords: [
      "Hotel boutique premium", "Pousada charmosa", "Café da manhã hoteleiro",
      "Resort all inclusive", "Hotel para casais", "Hospedagem corporativa",
      "Spa em hotel", "Gestão hoteleira",
    ],
    trends: ["Hotelaria experiencial", "Wellness retreats", "Eco-friendly hotels"],
  },

  academia: {
    aliases: ["academia", "musculacao", "musculação", "fitness"],
    hashtags: [
      "#academia", "#musculacao", "#fitness", "#treino", "#bodybuilding", "#gym",
      "#projetoverao", "#hipertrofia", "#emagrecimento", "#vidafitness", "#dietaetreino",
      "#instafit", "#mulheresnamusculacao", "#nopainnogain", "#focotreino",
      "#academiabrasil", "#personaltrainer", "#crossfit", "#funcional", "#calistenia",
    ],
    keywords: [
      "Treino de hipertrofia", "Treino para emagrecimento", "Personal trainer online",
      "Avaliação física completa", "Treino funcional", "Musculação para iniciantes",
      "Treino de força para mulheres", "Plano de treino personalizado",
      "Suplementação para hipertrofia", "Mobilidade e flexibilidade",
    ],
    trends: ["Treino híbrido força+cardio", "Hyrox", "Zone 2 cardio"],
  },

  crossfit: {
    aliases: ["crossfit", "cross"],
    hashtags: [
      "#crossfit", "#crossfitbrasil", "#wod", "#boxcrossfit", "#crossfitter",
      "#crossfitlife", "#functionalfitness", "#fitnessfunctional", "#strengthtraining",
    ],
    keywords: [
      "Box de CrossFit", "WOD diário", "Aula experimental de CrossFit",
      "CrossFit para iniciantes", "Treino funcional avançado", "Equipe de CrossFit",
    ],
    trends: ["Hybrid athlete", "Hyrox", "Strength endurance"],
  },

  personal: {
    aliases: ["personal", "personal trainer"],
    hashtags: [
      "#personaltrainer", "#personalonline", "#treinopersonalizado", "#consultoriaonline",
      "#personalmaster", "#assessoriaesportiva",
    ],
    keywords: [
      "Personal trainer presencial", "Consultoria online de treino",
      "Treino personalizado para emagrecimento", "Plano de treino mensal",
      "Avaliação física personalizada", "Acompanhamento esportivo",
    ],
    trends: ["Coach híbrido online+presencial", "Treino baseado em dados", "Wearables"],
  },

  marketing: {
    aliases: ["marketing", "marketing digital", "digital", "agencia"],
    hashtags: [
      "#marketingdigital", "#marketing", "#trafegopago", "#socialmedia", "#instagrammarketing",
      "#facebookads", "#googleads", "#copywriting", "#funildevendas", "#empreendedorismo",
      "#agenciademarketing", "#crescimentonainternet", "#marketingdeconteudo",
      "#vendasonline", "#growthhacking", "#brandingdigital", "#estrategiadigital",
      "#performance", "#leads", "#conversao",
    ],
    keywords: [
      "Gestão de tráfego pago", "Consultoria de marketing digital", "Agência de performance",
      "Campanhas Facebook Ads", "Campanhas Google Ads", "Funil de vendas online",
      "Marketing de conteúdo estratégico", "Copywriting para conversão", "Branding digital",
      "Gestão de redes sociais", "Inbound marketing", "SEO técnico avançado",
      "Mídia paga performance", "Marketing para pequenas empresas",
    ],
    trends: ["Marketing com IA", "Performance criativa", "Branding com propósito"],
  },

  trafegopago: {
    aliases: ["trafego pago", "tráfego pago", "ads", "gestor de trafego"],
    hashtags: [
      "#trafegopago", "#gestordetrafego", "#facebookads", "#googleads", "#metaads",
      "#tiktokads", "#performancemarketing", "#vendasonline", "#campanhasdigitais",
    ],
    keywords: [
      "Gestor de tráfego pago", "Consultoria em Meta Ads", "Campanhas de conversão Google",
      "ROAS otimizado", "Criativos para anúncios", "Pixel da Meta configurado",
      "Remarketing avançado",
    ],
    trends: ["Creative-first ads", "IA generativa em criativos", "Advantage+ campaigns"],
  },

  socialmedia: {
    aliases: ["social media", "socialmedia", "redes sociais"],
    hashtags: [
      "#socialmedia", "#gestaoderedessociais", "#instagramestrategico", "#designdeposts",
      "#planejamentoeditorial", "#calendarioeditorial", "#contentcreator", "#reelsestrategico",
    ],
    keywords: [
      "Gestão de redes sociais profissional", "Planejamento editorial mensal",
      "Design de posts para Instagram", "Roteiros para Reels", "Estratégia de conteúdo",
      "Auditoria de redes sociais",
    ],
    trends: ["Carrosséis salvos", "Reels short form", "Comunidades no Instagram"],
  },

  ecommerce: {
    aliases: ["ecommerce", "e-commerce", "loja virtual"],
    hashtags: [
      "#ecommerce", "#lojavirtual", "#vendasonline", "#shopify", "#nuvemshop",
      "#dropshipping", "#empreendedorismodigital", "#lojaonline", "#produtosfisicos",
    ],
    keywords: [
      "Loja virtual completa", "Plataforma Shopify", "E-commerce Nuvemshop",
      "Dropshipping nacional", "Gestão de marketplace", "Anúncios para e-commerce",
      "Logística para e-commerce", "Checkout transparente",
    ],
    trends: ["Social commerce", "Live commerce", "Quick commerce"],
  },

  moda: {
    aliases: ["moda", "fashion", "roupa"],
    hashtags: [
      "#moda", "#fashion", "#lookdodia", "#modafeminina", "#modamasculina",
      "#estilo", "#tendencia", "#streetstyle", "#fashionblogger", "#ootd",
      "#modabrasileira", "#modaautoral", "#minimalstyle",
    ],
    keywords: [
      "Moda feminina autoral", "Coleção cápsula", "Tendências de inverno",
      "Consultoria de imagem e estilo", "Personal stylist", "Moda sustentável",
      "Slow fashion brasileira", "Loja multimarcas",
    ],
    trends: ["Quiet luxury", "Slow fashion", "Upcycling"],
  },

  restaurante: {
    aliases: ["restaurante", "gastronomia"],
    hashtags: [
      "#restaurante", "#gastronomia", "#foodie", "#instafood", "#culinaria",
      "#chefdecozinha", "#alta gastronomia", "#pratoexecutivo", "#bistro",
      "#cardapio", "#delivery", "#harmonizacao",
    ],
    keywords: [
      "Restaurante autoral", "Menu degustação", "Harmonização com vinhos",
      "Chef de cozinha consultor", "Cardápio sazonal", "Reserva online de restaurante",
      "Brunch no fim de semana",
    ],
    trends: ["Cozinha autoral local", "Fermentados naturais", "Zero waste kitchen"],
  },

  hamburgueria: {
    aliases: ["hamburgueria", "burger", "hamburguer"],
    hashtags: [
      "#hamburgueria", "#burger", "#smashburger", "#hamburgerartesanal", "#burgerlovers",
      "#hamburguercaseiro", "#deliveryhamburguer", "#burgerday",
    ],
    keywords: [
      "Hambúrguer artesanal premium", "Smash burger", "Combo de hambúrguer e batata",
      "Delivery de hambúrguer", "Hamburgueria gourmet", "Pão brioche artesanal",
    ],
    trends: ["Smash burger", "Detroit-style sides", "Pickles caseiros"],
  },

  pizzaria: {
    aliases: ["pizzaria", "pizza"],
    hashtags: [
      "#pizzaria", "#pizza", "#pizzanapolitana", "#pizzaartesanal", "#fornoalenha",
      "#pizzaria brasil", "#deliverypizza", "#pizzagourmet",
    ],
    keywords: [
      "Pizza napolitana autêntica", "Pizza artesanal forno a lenha", "Massa de fermentação natural",
      "Rodízio de pizza", "Delivery de pizza", "Pizza individual gourmet",
    ],
    trends: ["Fermentação longa", "Pizza romana al taglio", "Sourdough pizza"],
  },

  delivery: {
    aliases: ["delivery", "ifood"],
    hashtags: [
      "#delivery", "#ifood", "#comidanaporta", "#deliverybrasil", "#pedidonoifood",
      "#fooddelivery", "#telentrega",
    ],
    keywords: [
      "Cardápio para delivery", "Embalagem para delivery", "Gestão de delivery iFood",
      "Marketing para restaurantes delivery", "Operação dark kitchen",
    ],
    trends: ["Dark kitchens", "Marca própria delivery", "Embalagem sustentável"],
  },

  saude: {
    aliases: ["saude", "saúde", "clinica", "clínica", "medicina"],
    hashtags: [
      "#saude", "#clinicamedica", "#medicina", "#bemestar", "#qualidadedevida",
      "#prevencao", "#checkup", "#saudeintegrativa", "#medicinapreventiva",
      "#telemedicina", "#consultaonline",
    ],
    keywords: [
      "Check-up executivo completo", "Telemedicina consulta online", "Medicina preventiva",
      "Clínica integrativa", "Plano de saúde corporativo", "Exames laboratoriais",
      "Diagnóstico por imagem", "Vacinação adulto",
    ],
    trends: ["Medicina integrativa", "Healthtech brasileira", "Longevidade saudável"],
  },

  veterinaria: {
    aliases: ["veterinaria", "veterinária", "pet"],
    hashtags: [
      "#veterinaria", "#petlovers", "#cachorro", "#gato", "#clinicaveterinaria",
      "#petshop", "#banhoetosa", "#adoteumamigo", "#saudeanimal",
    ],
    keywords: [
      "Clínica veterinária 24h", "Banho e tosa profissional", "Consulta veterinária especializada",
      "Cardiologia veterinária", "Cirurgia veterinária", "Hotel para pets", "Adestramento positivo",
    ],
    trends: ["Pet humanização", "Petfood natural", "Telemedicina veterinária"],
  },

  construcao: {
    aliases: ["construcao", "construção", "obra", "construtora"],
    hashtags: [
      "#construcao", "#obra", "#construtora", "#engenhariacivil", "#reformas",
      "#construcaocivil", "#projetoexecutivo", "#gerenciamentodeobras", "#alvenaria",
      "#acabamento", "#construcaoaseco", "#steelframe",
    ],
    keywords: [
      "Gerenciamento de obras residenciais", "Projeto executivo de arquitetura",
      "Reforma de apartamentos", "Construção em steel frame", "Construção a seco",
      "Orçamento de obra detalhado", "Acompanhamento técnico de obra",
    ],
    trends: ["Steel frame residencial", "Construção sustentável", "BIM"],
  },

  marcenaria: {
    aliases: ["marcenaria", "moveis sob medida", "móveis"],
    hashtags: [
      "#marcenaria", "#moveissobmedida", "#marceneiro", "#design moveis", "#moveisplanejados",
      "#cozinhaplanejada", "#closetplanejado", "#marcenariaartesanal",
    ],
    keywords: [
      "Móveis planejados sob medida", "Cozinha planejada premium", "Closet planejado",
      "Marcenaria artesanal", "Móveis em madeira maciça", "Projeto de marcenaria 3D",
    ],
    trends: ["Madeira ripada", "Marcenaria autoral", "Móveis multifuncionais"],
  },

  engenharia: {
    aliases: ["engenharia", "engenheiro"],
    hashtags: [
      "#engenharia", "#engenhariacivil", "#engenhariaeletrica", "#engenhariamecanica",
      "#engenhariadeprodução", "#projetosdeengenharia", "#cadprojetos",
    ],
    keywords: [
      "Projeto estrutural completo", "Laudo técnico de engenharia", "Engenharia elétrica predial",
      "Projeto hidrossanitário", "Consultoria em engenharia", "ART de obra",
    ],
    trends: ["Engenharia 4.0", "BIM colaborativo", "Construções modulares"],
  },

  arquitetura: {
    aliases: ["arquitetura", "arquiteto", "arquiteta", "interiores"],
    hashtags: [
      "#arquitetura", "#designdeinteriores", "#arquiteto", "#arquiteta", "#projetoarquitetonico",
      "#decoracao", "#interiordesign", "#minimalismo", "#salaintegrada", "#cozinhagourmet",
      "#suitemaster", "#fachadasmodernas",
    ],
    keywords: [
      "Projeto de arquitetura residencial", "Design de interiores premium",
      "Reforma com arquiteto", "Arquitetura corporativa", "Projeto comercial",
      "Consultoria de decoração", "Render 3D fotorrealista",
    ],
    trends: ["Arquitetura biofílica", "Estilo japandi", "Quiet luxury interiores"],
  },

  tecnologia: {
    aliases: ["tecnologia", "tech", "ti"],
    hashtags: [
      "#tecnologia", "#inovacao", "#tech", "#tecnologiadainformacao", "#ti", "#startup",
      "#transformacaodigital", "#cloudcomputing", "#cibersegurança", "#inteligenciaartificial",
    ],
    keywords: [
      "Consultoria em transformação digital", "Cibersegurança corporativa", "Cloud computing AWS",
      "Inteligência artificial aplicada", "Automação de processos", "Suporte de TI gerenciado",
    ],
    trends: ["IA generativa", "Edge computing", "Zero trust security"],
  },

  programacao: {
    aliases: ["programacao", "programação", "dev", "desenvolvedor"],
    hashtags: [
      "#programacao", "#desenvolvedor", "#dev", "#webdev", "#frontend", "#backend",
      "#fullstack", "#javascript", "#typescript", "#react", "#nodejs", "#python",
    ],
    keywords: [
      "Desenvolvimento web sob medida", "Sistema interno empresarial", "App mobile React Native",
      "API REST personalizada", "Desenvolvimento Next.js", "Backend Node.js escalável",
      "Consultoria técnica software", "Code review profissional",
    ],
    trends: ["Edge functions", "AI pair programming", "Server components"],
  },

  educacao: {
    aliases: ["educacao", "educação", "cursos", "curso online", "ensino"],
    hashtags: [
      "#educacao", "#cursosonline", "#ensinoadistancia", "#ead", "#aprendizado",
      "#capacitacao", "#aulasparticulares", "#estudosonline", "#mentoria",
    ],
    keywords: [
      "Curso online profissionalizante", "Mentoria individual especializada",
      "Plataforma EAD própria", "Aulas particulares de inglês", "Reforço escolar",
      "Treinamento corporativo in company", "Curso preparatório",
    ],
    trends: ["Microcredenciais", "Aprendizagem assíncrona", "Cursos com IA"],
  },
};
