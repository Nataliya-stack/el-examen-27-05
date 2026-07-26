const quizData = [
  {
    id: 1,
    image: 'img/ramen.jpg',
    pregunta: '¿A qué país asiático pertenece este icónico plato de fideos tradicionales llamado Ramen, servido en caldo con carne y huevo?',
    opciones: ['China', 'Japón', 'Corea del Sur', 'Tailandia'],
    correcta: 1, // Japón
    respuesta: '',
    explicacion: 'El Ramen es el gran símbolo culinario de Japón. Aunque sus raíces son chinas, los cocineros japoneses lo convirtieron en una obra maestra de su gastronomía.'
  },
  {
    id: 2,
    image: 'img/pizza_margarita.jpg',
    pregunta: '¿De qué país europeo es originaria esta famosa pizza Margarita tradicional, decorada con albahaca, mozzarella y salsa de tomate?',
    opciones: ['Francia', 'España', 'Italia', 'Grecia'],
    correcta: 2, // Italia
    respuesta: '',
    explicacion: 'Es de Italia. La auténtica pizza Margarita nació en Nápoles y sus ingredientes representan los colores de la bandera italiana.'
  },
  {
    id: 3,
    image: 'img/carne_de_argentina.jpg',
    pregunta: '¿Qué país sudamericano es mundialmente famoso por su cultura del "Asado" y la excelente calidad de sus carnes cocinadas a las brasas?',
    opciones: ['Argentina', 'Brasil', 'Chile', 'Colombia'],
    correcta: 0, // Argentina
    respuesta: '',
    explicacion: 'Es Argentina. En este país, el asado es el motivo principal para reunir a toda la familia cada fin de semana.'
  },
  {
    id: 4,
    image: 'img/tacos.jpg',
    pregunta: '¿De qué país norteamericano son originarios los auténticos Tacos servidos en tortillas de maíz con carne, cebolla y cilantro fresco?',
    opciones: ['México', 'Perú', 'Cuba', 'Colombia'],
    correcta: 0, // México
    respuesta: '',
    explicacion: 'Los tacos pertenecen a México. Su gastronomía tradicional está tan llena de historia que está protegida por la UNESCO.'
  },
  {
    id: 5,
    image: 'img/paella.jpg',
    pregunta: '¿En qué país europeo nació la Paella original, un plato a base de arroz, mariscos, verduras y un toque de azafrán cocinado en sartén ancha?',
    opciones: ['Portugal', 'Italia', 'Francia', 'España'],
    correcta: 3, // España
    respuesta: '',
    explicacion: 'La paella es originaria de España, específicamente de la región de Valencia, y es conocida en todo el mundo.'
  },
  {
    id: 6,
    image: 'img/macarron.jpg',
    pregunta: '¿En qué país se inventó el elegante Macarrón (Macaron), el famoso postre redondo y colorful hecho con harina de almendras?',
    opciones: ['Bélgica', 'Suiza', 'Francia', 'Reino Unido'],
    correcta: 2, // Francia
    respuesta: '',
    explicacion: 'Pertenece a Francia. Este delicado dulce se convirtió en un ícono de la alta repostería parisina.'
  },
  {
    id: 7,
    image: 'img/hamburgesa.jpg',
    pregunta: '¿Qué país popularizó a nivel mundial la Hamburguesa clásica como el elemento rey de su comida rápida y cultura pop?',
    opciones: ['Alemania', 'Estados Unidos', 'Canadá', 'Australia'],
    correcta: 1, // Estados Unidos
    respuesta: '',
    explicacion: 'Aunque el concepto llegó desde Hamburgo (Alemania), fue en los Estados Unidos donde se transformó en el fenómeno mundial actual.'
  },
  {
    id: 8,
    image: 'img/pollo_tikka_masala.jpg',
    pregunta: '¿De qué país asiático proviene el cremoso Pollo Tikka Masala, cocinado a base de ricas especias aromáticas, tomate y curry?',
    opciones: ['India', 'Pakistán', 'Tailandia', 'Indonesia'],
    correcta: 0, // India
    respuesta: '',
    explicacion: 'Es originario de la India. Sus especias únicas le otorgan ese aroma y sabor inconfundibles que conquistaron el mundo.'
  },
  {
    id: 9,
    image: 'img/putin.jpg', 
    pregunta: '¿A qué país pertenece el "Poutine", un famoso plato reconfortante hecho de patatas fritas, trozos de queso cuajado fresco y salsa de carne caliente?',
    opciones: ['Estados Unidos', 'Canadá', 'Irlanda', 'Australia'],
    correcta: 1, // Canadá
    respuesta: '',
    explicacion: 'El Poutine nació en la provincia de Quebec, en Canadá, a finales de la década de 1950 y hoy es un símbolo de su cocina nacional.'
  },
  {
    id: 10,
    image: 'img/draniki.jpg', 
    pregunta: '¿De qué país de Europa del Este son originarios los "Draniki", unos deliciosos panqueques crujientes hechos tradicionalmente de patata rallada y servidos con crema agria?',
    opciones: ['Polonia', 'Ucrania', 'Bielorrusia', 'Lituania'],
    correcta: 2, // Bielorrusia
    respuesta: '',
    explicacion: 'Los Draniki son el orgullo de Bielorrusia. Los secretos de su preparación con patatas locales ricas en almidón se transmiten de generación en generación.'
  },
  {
    id: 11,
    image: 'img/croissant.jpg', 
    pregunta: '¿En qué país europeo centro-oriental nació originalmente el antepasado del croissant (el Kipferl), antes de que los pasteleros franceses lo hicieran famoso con masa de hojaldre?',
    opciones: ['Austria', 'Alemania', 'Hungría', 'Suiza'],
    correcta: 0, // Austria
    respuesta: '',
    explicacion: 'El origen del croissant se remonta a Viena, Austria. Llegó a Francia en el siglo XVIII gracias a la reina María Antonieta.'
  },
  {
    id: 12,
    image: 'img/feijoada.jpg',
    pregunta: '¿De qué gran país sudamericano es plato nacional la "Feijoada", un guiso contundente de frijoles negros cocinados con una gran variedad de carnes de cerdo y res?',
    opciones: ['Colombia', 'Venezuela', 'Brasil', 'Perú'],
    correcta: 2, // Brasil
    respuesta: '',
    explicacion: 'Pertenece a Brasil. Es un plato lleno de historia y sabor, que tradicionalmente se sirve los fines de semana acompañado de arroz, farofa y gajos de naranja.'
  },
  {
    id: 13,
    image: 'img/pad_thai.jpg', 
    pregunta: '¿A qué país del sudeste asiático representa el "Pad Thai", un plato de fideos de arroz salteados al wok con huevos, tofu, brotes de soja y cacahuetes?',
    opciones: ['Vietnam', 'Tailandia', 'Malasia', 'Filipinas'],
    correcta: 1, // Tailandia
    respuesta: '',
    explicacion: 'Es el plato estrella de Tailandia. Combina de forma magistral los cuatro sabores esenciales: dulce, salado, ácido y picante.'
  },
  {
    id: 14,
    image: 'img/waffles_de_lieja.jpg', 
    pregunta: '¿Qué país europeo es mundialmente famoso por sus gofres crujientes y gruesos, conocidos como "Waffles de Lieja", cubiertos de azúcar perlado caramelizado?',
    opciones: ['Países Bajos', 'Bélgica', 'Dinamarca', 'Luxemburgo'],
    correcta: 1, // Bélgica
    respuesta: '',
    explicacion: 'Son de Bélgica. A diferencia de otras masas, la receta belga auténtica lleva levadura y un azúcar especial que se carameliza al hornearse.'
  },
  {
    id: 15,
    image: 'img/maussaka.jpg', 
    pregunta: '¿De qué país mediterráneo es típica la "Moussaka", un plato horneado en capas que lleva berenjenas, carne picada de cordero y una cremosa salsa bechamel?',
    opciones: ['Turquía', 'Egipto', 'Líbano', 'Grecia'],
    correcta: 3, // Grecia
    respuesta: '',
    explicacion: 'Es de Grecia. Es uno de los pilares de la cocina griega tradicional, un plato reconfortante e ideal para las grandes mesas mediterráneas.'
  },
    {
    id: 16,
    image: 'img/wagashi_nerikiri.jpg', 
    pregunta: '¿A qué país pertenecen estos hermosos dulces tradicionales llamados Wagashi (Nerikiri), elaborados artesanalmente con pasta de judías dulces y servidos en la ceremonia del té?',
    opciones: ['China', 'Japón', 'Corea del Sur', 'Tailandia'],
    correcta: 1, // Japón
    respuesta: '',
    explicacion: 'Estos dulces pertenecen a Japón. Se modelan completamente a mano inspirándose en la naturaleza y las estaciones del año, reflejando la estética de la sofisticación japonesa.'
  }, 
    {
    id: 17,
    image: 'img/borscht.jpg', 
    pregunta: '¿A qué país de Europa del Este pertenece el "Borsch", la famosa sopa tradicional de color rojo intenso hecha a base de remolacha y servida con crema agria?',
    opciones: ['Polonia', 'Ucrania', 'Rumanía', 'Hungría'],
    correcta: 1, // Ucrania
    respuesta: '',
    explicacion: 'El borsch es el plato estrella de Ucrania. Esta sopa de remolacha es tan icónica que su cultura de preparación ha sido declarada Patrimonio Cultural Inmaterial por la UNESCO.'
  },
  {
    id: 18,
    image: 'img/fish_and_chips.jpg', 
    pregunta: '¿Qué país insular europeo es famoso por su "Fish and Chips", un plato clásico de comida callejera que consiste en pescado rebozado frito acompañado de patatas fritas?',
    opciones: ['Irlanda', 'Reino Unido', 'Islandia', 'Noruega'],
    correcta: 1, // Reino Unido
    respuesta: '',
    explicacion: 'El Fish and Chips es el plato de comida rápida más tradicional del Reino Unido, popularizado desde el siglo XIX entre la clase obrera.'
  },
  {
    id: 19,
    image: 'img/peking_duck.jpg', 
    pregunta: '¿De qué enorme país asiático es originario el "Pato de Pekín", un plato imperial famoso por la piel crujiente y fina del pato, que se sirve con crepas finas y salsa dulce?',
    opciones: ['Japón', 'Vietnam', 'China', 'Corea del Sur'],
    correcta: 2, // China
    respuesta: '',
    explicacion: 'Pertenece a China. Es uno de los platos más célebres de la cocina china internacional, cuya preparación tradicional en hornos especiales requiere una gran maestría.'
  },
  {
    id: 20,
    image: 'img/goulash.jpg', 
    pregunta: '¿En qué país de Europa Central nació el "Goulash", un estofado abundante de carne y verduras, sazonado intensamente con pimentón (paprika)?',
    opciones: ['Hungría', 'Austria', 'República Checa', 'Eslovaquia'],
    correcta: 0, // Hungría
    respuesta: '',
    explicacion: 'El goulash es el plato nacional de Hungría. Su ingrediente clave es la auténtica paprika húngara, que le da ese color rojo profundo y sabor especiado.'
  },
  {
    id: 21,
    image: 'img/kimchi.jpg', 
    pregunta: '¿De qué país asiático es originario el "Kimchi", un plato tradicional de vegetales fermentados, principalmente col asiática y rábano, con mucho chile y ajo?',
    opciones: ['Japón', 'China', 'Corea del Sur', 'Tailandia'],
    correcta: 2, // Corea del Sur
    respuesta: '',
    explicacion: 'Es de Corea del Sur. El kimchi es indispensable en la mesa coreana y se consume diariamente en casi todas las comidas por sus grandes propiedades saludables.'
  },
    {
    id: 22,
    image: 'img/khuushuur.jpg', 
    pregunta: '¿A qué país de Asia Central pertenecen los "Khuushuur", unas deliciosas y crujientes empanadas fritas rellenas de carne picada sazonada con cebolla y ajo, indispensables en su fiesta nacional del Naadam?',
    opciones: ['Kazajistán', 'Mongolia', 'Uzbekistán', 'Kirguistán'],
    correcta: 1, // Mongolia
    respuesta: '',
    explicacion: 'Los Khuushuur pertenecen a Mongolia. Son el plato festivo más popular del país, ideal para la vida nómada por ser nutritivo, rápido de preparar y fácil de comer con las manos.'
  },
  {
    id: 23,
    image: 'img/stroopwafel.jpg', 
    pregunta: '¿A qué país europeo pertenecen las "Stroopwafels", unas galletas de waffle finas rellenas de un cremoso y dulce jarabe de caramelo en el medio?',
    opciones: ['Bélgica', 'Países Bajos', 'Alemania', 'Dinamarca'],
    correcta: 1, // Países Bajos
    respuesta: '',
    explicacion: 'Las stroopwafels son originarias de los Países Bajos (Holanda). Tradicionalmente se colocan sobre una taza de café o té caliente para que el vapor derrita el caramelo interior.'
  },
  {
    id: 24,
    image: 'img/ceviche.jpg', 
    pregunta: '¿Qué país sudamericano es la cuna del auténtico "Ceviche", un plato fresco de pescado crudo curado en jugos cítricos de limón, sazonado con ají, cebolla y cilantro?',
    opciones: ['Perú', 'Chile', 'Ecuador', 'Colombia'],
    correcta: 0, // Perú
    respuesta: '',
    explicacion: 'El ceviche es el orgullo nacional de Perú. Es considerado Patrimonio Cultural de la Nación y destaca por el perfecto equilibrio de frescura y picante.'
  }, 
    {
    id: 25,
    image: 'img/blini.jpg', 
    pregunta: '¿A qué país de Europa del Este pertenecen los "Blini", los famosos crepes finos y redondos que simbolizan el sol y se sirven con caviar, mantequilla o crema agria?',
    opciones: ['Polonia', 'Rusia', 'Rumanía', 'Bulgaria'],
    correcta: 1, // Rusia
    respuesta: '',
    explicacion: 'Los blini son un elemento fundamental de la cocina rusa, tradicionales especialmente durante la festividad de Maslenitsa para celebrar el fin del invierno.'
  },
  {
    id: 26,
    image: 'img/pavlova.jpg', 
    pregunta: '¿Qué país de Oceanía disputa con Australia el origen de la "Tarta Pavlova", un crujiente merengue cubierto de crema y frutas frescas, creado en honor a una bailarina rusa?',
    opciones: ['Nueva Zelanda', 'Fiyi', 'Samoa', 'Tonga'],
    correcta: 0, // Nueva Zelanda
    respuesta: '',
    explicacion: 'Aunque ambos países lo debaten, la mayoría de las investigaciones apuntan a que la Pavlova se creó en Nueva Zelanda durante la gira de la bailarina Anna Pávlova en los años 1920.'
  },
  {
    id: 27,
    image: 'img/meat_pie.jpg', 
    pregunta: '¿En qué país de Oceanía el "Meat Pie" (pastel de carne individual relleno de carne picada y salsa gravy) es un icono cultural absoluto y se consume masivamente en eventos deportivos?',
    opciones: ['Australia', 'Fiyi', 'Vanuatu', 'Nueva Zelanda'],
    correcta: 0, // Australia
    respuesta: '',
    explicacion: 'Pertenece a Australia. El pastel de carne australiano es considerado el "plato nacional de la comida rápida" y se acompaña tradicionalmente con salsa de tomate por encima.'
  },
  {
    id: 28,
    image: 'img/knedliky.jpg', 
    pregunta: '¿De qué país de Europa Central son típicos los "Knedlíky", unos dumplings de masa de pan o patata cocidos al vapor, indispensables para acompañar platos de carne con abundante salsa?',
    opciones: ['Austria', 'República Checa', 'Polonia', 'Eslovaquia'],
    correcta: 1, // República Checa
    respuesta: '',
    explicacion: 'Los Knedlíky son el acompañamiento estrella de la República Checa. Absorben perfectamente las salsas pesadas de platos tradicionales como el Goulash o el Svíčková.'
  },
  {
    id: 29,
    image: 'img/bratwurst.jpg', 
    pregunta: '¿Qué país europeo es famoso mundialmente por su "Bratwurst", una salchicha tradicional hecha de carne de cerdo o ternera que se cocina a la parrilla y se sirve con mostaza y chucrut?',
    opciones: ['Austria', 'Alemania', 'Suiza', 'Dinamarca'],
    correcta: 1, // Alemania
    respuesta: '',
    explicacion: 'Es de Alemania. El país cuenta con más de 1,500 variedades de salchichas, pero la Bratwurst alemana es una de las más antiguas y populares en todas las regiones.'
  },
  {
    id: 30,
    image: 'img/plov.jpg', 
    pregunta: '¿A qué país del Cáucaso pertenece el "Plov", un plato festivo y aromático de arroz cocinado con azafrán, cordero, castañas, frutos secos y una crujiente base de masa llamada Qazmaq?',
    opciones: ['Azerbaiyán', 'Georgia', 'Armenia', 'Turquía'],
    correcta: 0, // Azerbaiyán
    respuesta: '',
    explicacion: 'El Plov de Azerbaiyán destaca por cocinarse con una técnica única donde el arroz aromático se sirve separado de los acompañamientos y la costra crujiente de masa.'
  },
  {
    id: 31,
    image: 'img/dolma.jpg', 
    pregunta: '¿En qué país del Cáucaso la preparación de la "Tolma" o "Dolma" (hojas de parra rellenas de carne picada sazonada con hierbas) es una tradición ancestral declarada Patrimonio de la Humanidad?',
    opciones: ['Georgia', 'Armenia', 'Irán', 'Grecia'],
    correcta: 1, // Armenia
    respuesta: '',
    explicacion: 'En Armenia, la Tolma es un plato sagrado de la mesa familiar, y cada año se celebra un festival nacional dedicado exclusivamente a sus decenas de variedades.'
  },
  {
    id: 32,
    image: 'img/khachapuri.jpg', 
    pregunta: '¿De qué país del Cáucaso es originario el "Khachapuri", un delicioso pan horneado con forma de barco relleno de abundante queso fundido y coronado con un huevo crudo y mantequilla?',
    opciones: ['Armenia', 'Azerbaiyán', 'Georgia', 'Rusia'],
    correcta: 2, // Georgia
    respuesta: '',
    explicacion: 'Es el famoso Jachapuri de Georgia (específicamente la variante de Adjara). Es el plato más querido del país y se come rompiendo los bordes del pan para untarlos en el queso y el huevo.'
  },
  {
    id: 33,
    image: 'img/pastel_de_nata.jpg', 
    pregunta: '¿Qué país ibérico es la cuna de los "Pastéis de Nata", unas deliciosas tartaletas de hojaldre crujiente rellenas de una suave crema pastelera horneada y espolvoreadas con canela?',
    opciones: ['España', 'Portugal', 'Francia', 'Italia'],
    correcta: 1, // Portugal
    respuesta: '',
    explicacion: 'Los Pastéis de Nata pertenecen a Portugal. Fueron creados en el siglo XIX por los monjes del Monasterio de los Jerónimos en Lisboa y su receta secreta original sigue intacta.'
  },
  {
    id: 34,
    image: 'img/meatballs.jpg', 
    pregunta: '¿De qué país escandinavo son típicas estas famosas albóndigas de carne ("Köttbullar"), servidas tradicionalmente con puré de patatas, salsa cremosa de carne y mermelada de arándanos rojos?',
    opciones: ['Noruega', 'Dinamarca', 'Finlandia', 'Suecia'],
    correcta: 3, // Suecia
    respuesta: '',
    explicacion: 'Las Köttbullar son el plato nacional de Suecia. El contraste dulce de la mermelada de arándanos con la salsa salada de la carne es la firma clásica de su gastronomía.'
  },
  {
    id: 35,
    image: 'img/fondue.jpg', 
    pregunta: '¿En qué país alpino nació la "Fondue", un plato comunal y social que consiste en sumergir trozos de pan en una cazuela de cerámica con una mezcla de quesos locales fundidos y vino blanco?',
    opciones: ['Francia', 'Austria', 'Suiza', 'Alemania'],
    correcta: 2, // Suiza
    respuesta: '',
    explicacion: 'La fondue pertenece a Suiza. Nació como una forma ingeniosa de aprovechar el queso y el pan duro durante los fríos inviernos en las montañas alpinas.'
  }
];


