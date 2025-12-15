// Inicializar mapa
    const map = L.map('map').setView([51.5074, -0.1278], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // ICONOS
    const markerNormalIcon = L.divIcon({
      html: '<div style="background: #667eea; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 10px rgba(102, 126, 234, 0.5);"><i class="fas fa-map-marker-alt"></i></div>',
      className: 'custom-marker',
      iconSize: [30,30]
    });

    const foodIcon = L.divIcon({
      html: '<div style="background: #ea6666; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 10px rgba(244, 162, 97, 0.5);"><i class="fas fa-utensils"></i></div>',
      className: 'custom-marker',
      iconSize: [30,30]
    });

    const nightIcon = L.divIcon({
      html: '<div style="background: #feee09ed; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 10px rgba(255, 213, 4, 0.88);"><i class="fas fa-champagne-glasses"></i></div>',
      className: 'custom-marker',
      iconSize: [30,30]
    });

    // Datos
    const pointsOfInterest = [
      { 
        name: "Palacio de Buckingham", 
        coords: [51.5014, -0.1419], 
        description: "La residencia oficial de la monarquía británica en Londres. Construido en 1703, ha sido el hogar de los reyes y reinas desde 1837.", 
        info: "🎫 Entrada: £30 | ⏰ Mejor hora: 10:30 AM | 🚇 Estación: Victoria" 
      },
      { 
        name: "Big Ben y el Parlamento", 
        coords: [51.5007, -0.1246], 
        description: "El reloj más famoso del mundo y sede del Parlamento británico. El nombre 'Big Ben' se refiere en realidad a la campana del reloj.", 
        info: "📸 Fotos: Mejor desde Westminster Bridge | 🚇 Estación: Westminster"
      },
      { 
        name: "Torre de Londres", 
        coords: [51.5081, -0.0759], 
        description: "Fortaleza histórica fundada por Guillermo el Conquistador en 1066. Hogar de las joyas de la corona y famosa prisión real.", 
        info: "🎫 £29.90 | 🚇 Tower Hill" 
      },
      { 
        name: "Tower Bridge", 
        coords: [51.5055, -0.0754], 
        description: "Puente levadizo construido entre 1886 y 1894. Ofrece vistas panorámicas del Támesis y una exposición sobre su historia.", 
        info: "📸 Fotos:Bajar escaleras final puente, ir izq y entrar por puerta escaleras arriba. | 🎫 Exhibition: £12.30 | 🚇 Tower Hill" 
      },
      { 
        name: "Museo Británico", 
        coords: [51.5194, -0.1270], 
        description: "Museo de historia y cultura con más de 8 millones de objetos. Hogar de la Piedra Rosetta y otros tesoros mundiales.", 
        info: "🎫 Gratis | ⏰ 10:00-17:00 | 🚇 Estación: Tottenham Court Road" 
      },
      { 
        name: "Harrods", 
        coords: [51.4994, -0.1634], 
        description: "Centro comercial de lujo fundado en 1834. Conocido por su decoración navideña y su sección de alimentos.", 
        info: "🛍️ Abierto: 10:00-21:00 | 🚇 Knightsbridge | 💳 Dress code smart casual" 
      },
      { 
        name: "Shakespeare's Globe", 
        coords: [51.5081, -0.0972], 
        description: "Teatro reconstruido al estilo isabelino donde se representan obras de Shakespeare como en su época.", 
        info: "🎫 Tours: £17 | 🎭 Obras: £5-£45 | 🚇 Estación: London Bridge" 
      },
      { 
        name: "London Eye", 
        coords: [51.5033, -0.1196], 
        description: "Noria gigante ofreciendo vistas panorámicas de Londres desde 135 metros de altura.", 
        info: "🎫 £31 | ⏰ 30 min | 🚇 Estación: Waterloo" 
      },
      { 
        name: "Catedral de San Pablo", 
        coords: [51.5138, -0.0983], 
        description: "Catedral anglicana diseñada por Sir Christopher Wren. Famosa por su cúpula y su Whispering Gallery.", 
        info: "🎫 £20 | ⏰ 8:30 - 16:00 | 🚇 Estación: St. Paul's" 
      },
      { 
        name: "Bridget Jones's Flat", 
        coords: [51.5054703,-0.0924481], 
        description: "Lugar de rodaje de la película Bridget Jones's Diary.", 
        info: "📍 Ubicación: 30 Southwark St, London SE1 1TU | 🚇 Estación: London Bridge" 
      },
      { 
        name: "Stay at Safestay London Elephant & Castle", 
        coords: [51.4907586,-0.0975], 
        description: "Nuestra casita por unos días en Londres, un hostal moderno y económico con buenas conexiones de transporte.", 
        info: "💰 Desde £25 | 🚇 Elephant & Castle" 
      },
      { 
        name: "Natural History Museum", 
        coords: [51.4967, -0.1764], 
        description: "Museo dedicado a la historia natural, famoso por su colección de dinosaurios y su arquitectura impresionante. ", 
        info: "🎫 Gratis: Entradas el 20 a las 12:15 | ⏰ 10:00-17:30 | 🚇 South Kensington" 
      },
      {
        name: "Portobello market",
        coords: [51.5175, -0.2080],
        description: "Famoso mercado callejero con antigüedades, moda y comida.",
        info: "🛍️ Sábados | 🚇 Notting Hill Gate"
      },
      {
        name: "Noting Hill",
        coords: [51.5095, -0.2060],
        description: "Barrio colorido conocido por su arquitectura y el carnaval anual.",
        info: "📸 Fotos: Calle Portobello | 🚇 Notting Hill Gate"
      },
      {
        name: "Green Park",
        coords: [51.5065, -0.1426],
        description: "Parque real tranquilo cerca del Palacio de Buckingham.",
        info: "🌳 Ideal para pasear | 🚇 Green Park"
      },
      {
        name: "St James",
        coords: [51.5020, -0.1340],
        description: "Área histórica con parques y edificios emblemáticos.",
        info: "📸 Fotos: St James Park | 🚇 St James's Park"
      },
      {
        name: "Westminster Abbey",
        coords: [51.4993, -0.1273],
        description: "Iglesia gótica famosa por coronaciones y bodas reales.",
        info: "🎫 £27 | ⏰ 9:30-15:00"
      },
      {
        name: "borough market",
        coords: [51.5055, -0.0910],
        description: "Mercado gastronómico con productos frescos y comida internacional.",
        info: "🍴 Abierto: Jue-Sáb | 🚇 London Bridge"
      },
      {
        name: "flea market",
        coords: [51.5194, -0.1400],
        description: "Mercado de pulgas con artículos vintage y únicos.",
        info: "🛍️ Domingos | 🚇 Camden Town"
      },
      {
        name: "Chinatown & Soho",
        coords: [51.5136, -0.1313],
        description: "Barrio vibrante conocido por su vida nocturna y restaurantes.",
        info: "🍜 Restaurantes asiáticos | 🚇 Leicester Square"
      },
      {
        name: "Leadenhall market",
        coords: [51.5121, -0.0839],
        description: "Mercado victoriano con tiendas y restaurantes elegantes.",
        info: "📸 Fotos: Arquitectura | 🚇 Monument"
      },
      {
        name: "Winter Wonderland",
        coords: [51.5080, -0.1667],
        description: "Evento navideño anual en Hyde Park con atracciones, mercados y espectáculos.",
        info: "🎟️ Entrada gratuita | ⏰ Nov-Dic | 🚇 Estación: Hyde Park Corner"
      },
      {
        name: "Covent Garden",
        coords: [51.5129, -0.1242],
        description: "Área popular con tiendas, restaurantes y artistas callejeros.",
        info: "🛍️ Tiendas y cafés | 🚇 Covent Garden"
      },
      {
        name: "Neal's Yard",
        coords: [51.5123, -0.1226],
        description: "Colorido rincón escondido con tiendas y cafés independientes.",
        info: "📸 Fotos: Callejón colorido | 🚇 Covent Garden"
      },
      {
        name: "Babylon Park Indoor Playground",
        coords: [51.5422906,-0.1505924],
        description: "Parque infantil cubierto ideal para niños pequeños.",
        info: "🎠 Juegos y actividades | 🚇 Westminster"
      },
      {
        name: "m&m's World London",
        coords: [51.5100, -0.1337],
        description: "Tienda temática de m&m's con una amplia variedad de productos y dulces.",
        info: "🍬 Dulces y productos temáticos | ⏰ Abierto 10:00 - 22:00 | 🚇 Estación: Leicester Square"
      },
      {
        name: "sky garden",
        coords: [51.5125, -0.0837],
        description: "Jardín público en la cima de un rascacielos con vistas panorámicas de Londres.",
        info: "🎫 Gratis (reserva previa) | ⏰ 10:00-18:00 | 🚇 Estación: Monument"
      },
      {
        name: "the garden at 120",
        coords: [51.5116, -0.0905],
        description: "Terraza jardín con vistas impresionantes de la ciudad.",
        info: "🎫 Desde £10 | ⏰ 10:00-22:00 | 🚇 Estación: Bank"
      },
      {
        name: "rooftop one new change",
        coords: [51.5133, -0.0983],
        description: "Terraza en la azotea con vistas a la Catedral de San Pablo y la ciudad.",
        info: "🍹 Bares y restaurantes | ⏰ 11:00-23:00 | 🚇 Estación: St. Paul's"
      },
      {
        name: "Platform 9 3/4",
        coords: [51.5313, -0.1246],
        description: "Lugar icónico para los fans de Harry Potter, con un carrito de equipaje que parece desaparecer en la pared.",
        info: "📸 Fotos: Gratis | 🎫 Tienda: Desde £10 | 🚇 Estación: King's Cross"
      },
      {
        name: "Greenwich Park",
        coords: [51.4769, -0.0005],
        description: "Parque histórico con vistas panorámicas de Londres y el meridiano cero.",
        info: "🌳 Ideal para pasear | 🚇 Estación: Cutty Sark"
      },
      {
        name: "University of greenwich",
        coords: [51.4820, 0.0052],
        description: "Campus universitario con arquitectura histórica y vistas al río Támesis.",
        info: "🎓 Campus histórico | 🚇 Estación: Cutty Sark"
      },
      {
        name: "Wood Wharf",
        coords: [51.4874918,-0.0586797],
        description: "Área moderna junto al río con restaurantes, tiendas y espacios verdes.",
        info: "🍽️ Restaurantes y cafés | 🚇 Estación: Canary Wharf"
      },
      {
        name: "York Road",
        coords: [51.5035, -0.1150],
        description: "Calle con vistas al río Támesis y al London Eye, ideal para pasear y tomar fotos.",
        info: "📸 Fotos: Vistas al río | 🚇 Estación: Waterloo"
      },
      {
        name: "Solane Square",
        coords: [51.5122, -0.0901],
        description: "Plaza moderna con arquitectura contemporánea y espacios verdes.",
        info: "📸 Fotos: Arquitectura moderna | 🚇 Estación: Monument"
      },
      {
        name: "87 christophers place",
        coords: [51.5164, -0.1507],
        description: "Callejón pintoresco con tiendas y cafés independientes.",
        info: "📸 Fotos: Callejón pintoresco | 🚇 Estación: Bond Street"
      },
      {
        name: "hampstead heath",
        coords: [51.5626771,-0.1655],
        description: "Gran parque urbano con colinas, estanques y vistas panorámicas de Londres.",
        info: "🌳 Ideal para pasear | 🚇 Estación: Hampstead"
      },
      {
        name: "St James's Park",
        coords: [51.5020, -0.1588],
        description: "Parque real con jardines bien cuidados, un lago y vistas al Palacio de Buckingham.",
        info: "🌳 Ideal para pasear | 🚇 Estación: St James's Park"
      },
      {
        name: "Horizon 22",
        coords: [51.5145, -0.0855],
        description: "Bar en la azotea con vistas panorámicas de Londres y una amplia selección de cócteles.",
        info: "🍹 Cócteles variados | ⏰ Abierto 17:00 - 01:00 | 🚇 Estación: Bank"
      },
      {
        name: "Somerset House",
        coords: [51.511059,-0.1197176],
        description: "Centro cultural con arquitectura neoclásica, exposiciones de arte y eventos al aire libre.",
        info: "🎨 Exposiciones y pista de hielo | 🚇 Estación: Temple"
      },
      {
        name: "new bond street",
        coords: [51.5125, -0.1420],
        description: "Calle comercial de lujo con tiendas de diseñadores y boutiques exclusivas.",
        info: "🛍️ Tiendas de lujo | 🚇 Estación: Bond Street"
      },
      {
        name: "Connaught village",
        coords: [51.5142, -0.1675],
        description: "Barrio elegante con tiendas independientes, restaurantes y un ambiente tranquilo.",
        info: "🛍️ Tiendas y cafés | 🚇 Estación: Marble Arch"
      },
      {
        name: "Burlington prade",
        coords: [51.5098, -0.1424],
        description: "Área comercial con tiendas de moda, galerías de arte y restaurantes.",
        info: "🛍️ Tiendas y galerías | 🚇 Estación: Green Park"
      },
      {
        name: "oxford street",
        coords: [51.5154, -0.1410],
        description: "Una de las calles comerciales más famosas del mundo, con una gran variedad de tiendas y grandes almacenes.",
        info: "🛍️ Tiendas para todos los gustos | 🚇 Estación: Oxford Circus"
      },
      {
        name: "knightsbridge",
        coords: [51.4995, -0.1632],
        description: "Barrio de lujo conocido por sus tiendas exclusivas y grandes almacenes como Harrods.",
        info: "🛍️ Tiendas de lujo | 🚇 Estación: Knightsbridge"
      },
      {
        name: "Selfridges",
        coords: [51.5145, -0.1534],
        description: "Grandes almacenes icónicos con una amplia gama de productos de moda, belleza y hogar.",
        info: "🛍️ Grandes almacenes | 🚇 Estación: Bond Street"
      },
      {
        name: "Bermondsey",
        coords: [51.4976, -0.0637],
        description: "Barrio al sureste del Támesis con mercado, cervecerías y calles tranquilas.",
        info: "🍺 Bermondsey Beer Mile | 🚇 Estación: Bermondsey"
      },
      {
        name: "Islington",
        coords: [51.5380, -0.0998],
        description: "Área animada con tiendas, teatros y restaurantes alrededor de Upper Street.",
        info: "🎭 Sadler's Wells y pubs | 🚇 Estación: Angel"
      },
      {
        name: "Hackney",
        coords: [51.5450, -0.0550],
        description: "Zona creativa con parques, cafés independientes y vida cultural.",
        info: "🎨 Mercados y cafés | 🚇 Estación: Hackney Central"
      },
      {
        name: "Stoke Newington",
        coords: [51.5615, -0.0741],
        description: "Barrio residencial con Church Street llena de bares y restaurantes.",
        info: "🌳 Clissold Park cercano | 🚇 Estación: Stoke Newington"
      }
    ];

    const eatingPlaces = [
      { 
        name: "Camden Market", 
        coords: [51.5416, -0.1420], 
        description: "Mercado vibrante con una gran variedad de puestos de comida internacional y opciones veganas.", 
        info: "🍴 Opciones veganas disponibles | ⏰ Abierto 10:00 - 18:00 | 🚇 Estación: Camden Town" 
      },
      { 
        name: "Kung Fu Burger", 
        coords: [51.5120, -0.0905], 
        description: "Restaurante de hamburguesas con opciones vegetarianas y veganas, ubicado cerca de la Torre de Londres.", 
        info: "Precios: £5-£10 | 🍔 Opciones veganas disponibles | ⏰ Abierto 12:00 - 22:00 | 🚇 Estación: Tower Hill" 
      },
      { 
        name: "JI chicken shop", 
        coords: [51.5133032,-0.1822979], 
        description: "Famoso por su pollo frito estilo coreano, con opciones vegetarianianas.", 
        info: "Precios: £7-£12 | 🍗 Opciones vegetarianas disponibles | ⏰ Abierto 12:00 - 22:00 | 🚇 Estación: London Bridge"
      },
      {
        name: "Lee's Fish & Chips",
        coords: [51.495638,-0.1386907],
        description: "Clásico fish and chips británico en el corazón de Londres.",
        info: "Precios: £6-£12 | 🍽️ Clásico británico | ⏰ Abierto 11:00 - 21:00 | 🚇 Estación: Charing Cross"
      },
      {
        name: "The black pig Borough market",
        coords: [51.5050, -0.0915],
        description: "Restaurante especializado en carnes y platos tradicionales británicos.",
        info: "Precios: £10-£20 | 🥩 Carnes de calidad | ⏰ Abierto 10:00 - 17:00 | 🚇 Estación: London Bridge"
      },
      {
        name: "Pastation",
        coords: [51.5176496,-0.1490542],
        description: "Restaurante italiano conocido por sus pastas frescas y salsas caseras.",
        info: "Precios: £8-£15 | 🍝 Pastas frescas | ⏰ Abierto 12:00 - 22:00 | 🚇 Estación: London Bridge"
      },
      {
        name: "It's bagels",
        coords: [51.5147229,-0.1385605],
        description: "Cafetería especializada en bagels con una variedad de rellenos y opciones vegetarianas.",
        info: "Precios: £3-£7 | 🥯 Opciones vegetarianas | ⏰ Abierto 07:00 - 15:00 | 🚇 Estación: Liverpool Street"
      },
      {
        name: "Bill's soho restaurant",
        coords: [51.5142, -0.1315],
        description: "Pancakes, brunch y comida británica moderna en un ambiente acogedor.",
        info: "Precios: £10-£20 | 🥗 Opciones veganas disponibles | ⏰ Abierto 09:00 - 22:00 | 🚇 Estación: Tottenham Court Road"
      },
      {
        name: "Bun House Chinatown",
        coords: [51.5129, -0.1310],
        description: "Restaurante especializado en dim sum y bollos al vapor, con opciones vegetarianas.",
        info: "Precios: £5-£15 | 🥟 Opciones vegetarianas | ⏰ Abierto 11:00 - 22:00 | 🚇 Estación: Leicester Square"
      }
    ];

    const nightPlaces = [
      {
        name: "Jazz Cafe Camden",
        coords: [51.5411, -0.1425],
        description: "Lugar emblemático para música en vivo, especialmente jazz y soul.",
        info: "🎶 Música en vivo | ⏰ Varía según el evento | 🚇 Estación: Camden Town"
      },
      {
        name: "sweeties",
        coords: [51.5127, -0.1339],
        description: "Bar de cócteles con ambiente acogedor y una amplia selección de bebidas.",
        info: "🍸 Cócteles variados | ⏰ Abierto 18:00 - 01:00 | 🚇 Estación: Leicester Square"
      },
      {
        name: "The Churchill Bar",
        coords: [51.4995, -0.1722],
        description: "Bar elegante con temática de Winston Churchill, conocido por sus cócteles clásicos.",
        info: "🍹 Cócteles clásicos | ⏰ Abierto 12:00 - 23:00 | 🚇 Estación: Hyde Park Corner"
      },
      {
        name: "Night tales loft",
        coords: [51.5120, -0.0910],
        description: "Bar en la azotea con vistas panorámicas de Londres y ambiente relajado.",
        info: "🍻 Vistas panorámicas | ⏰ Abierto 17:00 - 01:00 | 🚇 Estación: London Bridge"
      },
      {
        name: "Shoreditch Street",
        coords: [51.5245, -0.0786],
        description: "Zona vibrante con numerosos bares y clubes nocturnos.",
        info: "🍸 Variedad de bares | ⏰ Abierto hasta tarde | 🚇 Estación: Shoreditch High Street"
      },
      {
        name: "ministry of sound",
        coords: [51.4950, -0.0983],
        description: "Club nocturno icónico conocido por su música electrónica y ambiente animado.",
        info: "🎧 Música electrónica | ⏰ Abierto hasta las 06:00 | 🚇 Estación: Elephant & Castle"
      },
      {
        name: "Selene Nightclub",
        coords: [51.5127802,-0.1446605],
        description: "Club nocturno popular con una mezcla de música comercial y electrónica.",
        info: "🎶 Música variada | ⏰ Abierto hasta las 04:00 | 🚇 Estación: Leicester Square"
      },
      {
        name: "Soma nightjar",
        coords: [51.5135, -0.1280],
        description: "Bar de cócteles con ambiente íntimo y música en vivo.",
        info: "🍸 Cócteles artesanales | ⏰ Abierto 18:00 - 02:00 | 🚇 Estación: Covent Garden"
      },
      {
        name: "Tone central",
        coords: [51.5079, -0.0907],
        description: "Bar y club con una mezcla de música en vivo y DJ sets.",
        info: "🎤 Música en vivo | ⏰ Abierto hasta las 03:00 | 🚇 Estación: Bank"
      },
      {
        name: "Searcys at the Gherkin",
        coords: [51.5145, -0.0803],
        description: "Bar elegante en la cima del Gherkin con vistas impresionantes de Londres.",
        info: "🍾 Vistas panorámicas | ⏰ Abierto 12:00 - 23:00 | 🚇 Estación: Liverpool Street"
      },
      {
        name: "58th Street",
        coords: [51.5128, -0.0917],
        description: "Bar de cócteles con ambiente moderno y una amplia selección de bebidas.",
        info: "🍹 Cócteles variados | ⏰ Abierto 17:00 - 01:00 | 🚇 Estación: London Bridge"
      },
      {
        name: "Mile End tube",
        coords: [51.5255, -0.0333],
        description: "Bar y club con una mezcla de música en vivo y DJ sets.",
        info: "🎤 Música en vivo | ⏰ Abierto hasta las 03:00 | 🚇 Estación: Mile End"
      },
      {
        name: "Paradise Under the stars",
        coords: [51.5074, -0.1278],
        description: "Bar al aire libre con vistas panorámicas de Londres y ambiente relajado.",
        info: "🍻 Vistas panorámicas | ⏰ Abierto 17:00 - 01:00 | 🚇 Estación: Charing Cross"
      }
    ];

    // Arrays para almacenar marcadores
    const markers = [];
    const foodMarkers = [];
    const nightMarkers = [];

    // Añadir POIs
    pointsOfInterest.forEach((poi, idx) => {
      const mk = L.marker(poi.coords, { icon: markerNormalIcon }).addTo(map);
      mk.bindPopup(`<div class="popup-title">${poi.name}</div><div class="popup-description">${poi.description}</div><div class="popup-info">${poi.info}</div>`, { maxWidth: 300, className: 'custom-popup' });
      markers.push(mk);
    });

    // Añadir sitios de comida
    eatingPlaces.forEach((place, idx) => {
      const mk = L.marker(place.coords, { icon: foodIcon }).addTo(map);
      mk.bindPopup(`<div class="popup-title">${place.name}</div><div class="popup-description">${place.description}</div><div class="popup-info">${place.info}</div>`, { maxWidth: 300, className: 'custom-popup' });
      foodMarkers.push(mk);
    });

    nightPlaces.forEach((place, idx) => {
      const mk = L.marker(place.coords, { icon: nightIcon }).addTo(map);
      mk.bindPopup(`<div class="popup-title">${place.name}</div><div class="popup-description">${place.description}</div><div class="popup-info">${place.info}</div>`, { maxWidth: 300, className: 'custom-popup' });
      nightMarkers.push(mk);
    });

    restoreCheckboxState();

    // Zoom effect (ajusta iconos si quieres)
    map.on('zoomend', () => {
      const z = map.getZoom();
      // aquí podrías variar iconSize o clases si lo deseas
    });

    // Focus helpers
    function focusOnMarker(index) {
      const target = markers[index];
      if (!target) return;
      const latLng = target.getLatLng();
      map.setView(latLng, 16);
      target.openPopup();
      if (window.innerWidth <= 768) document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function focusOnFoodMarker(index) {
      const target = foodMarkers[index];
      if (!target) return;
      const latLng = target.getLatLng();
      map.setView(latLng, 16);
      target.openPopup();
      if (window.innerWidth <= 768) document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function focusOnNightMarker(index) {
      const target = nightMarkers[index];
      if (!target) return;
      const latLng = target.getLatLng();
      map.setView(latLng, 16);
      target.openPopup();
      if (window.innerWidth <= 768) document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Checkboxes: toggling de marcadores
    document.querySelectorAll('.check').forEach(chk => {
      // aseguramos que el checked inicial refleja el estado en el mapa (todos añadidos arriba)
      chk.addEventListener('change', (e) => {
        const marker = getMarkerFromCheckbox(chk);
        if (!marker) return;
        if (chk.checked) {
          map.removeLayer(marker);
        } else {
          map.addLayer(marker);
        }
        saveCheckboxState();
      });
    });
    
    function getMarkerFromCheckbox(chk) {
      const type = chk.dataset.type;
      const idx = Number(chk.dataset.index);
      if (type === 'poi') {
        return markers[idx];
      } else if (type === 'food') {
        return foodMarkers[idx];
      } else if (type === 'night') {
        return nightMarkers[idx];
      }
      return null;
    }

    // Control de geolocalización (control de Leaflet)
    if (navigator.geolocation) {
      const locationControl = L.control({ position: 'topright' });
      locationControl.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        div.style.background = '#fff'; div.style.padding = '6px'; div.style.borderRadius = '4px';
        div.style.boxShadow = '0 1px 5px rgba(0,0,0,0.15)';
        div.innerHTML = '<button title="Mi ubicación" style="background:none;border:none;cursor:pointer;"><i class="fas fa-location-arrow" style="color:#667eea;"></i></button>';
        L.DomEvent.disableClickPropagation(div);
        div.addEventListener('click', () => {
          navigator.geolocation.getCurrentPosition(pos => {
            const userLat = pos.coords.latitude;
            const userLng = pos.coords.longitude;
            // Comprobar aproximación a Londres
            if (userLat > 51.2 && userLat < 51.7 && userLng > -0.5 && userLng < 0.3) {
              map.setView([userLat, userLng], 15);
              const um = L.circleMarker([userLat, userLng], { radius:6, fillColor:'#2b9df4', fillOpacity:1, stroke:false }).addTo(map);
              um.bindPopup('📍 Tu ubicación actual').openPopup();
              setTimeout(() => { if (map.hasLayer(um)) map.removeLayer(um); }, 6000);
            } else {
              // Mensaje rápido
              const tempMsg = L.control({ position:'topright' });
              tempMsg.onAdd = () => {
                const d = L.DomUtil.create('div','leaflet-control leaflet-bar');
                d.innerHTML = '<div style="background:#fff;padding:8px;border-radius:4px;">No estás en Londres</div>';
                setTimeout(() => tempMsg.remove(), 2200);
                return d;
              };
              tempMsg.addTo(map);
              map.setView([51.5074, -0.1278], 12);
            }
          }, err => {
            alert('No se pudo acceder a la geolocalización: ' + (err.message || err));
          });
        });
        return div;
      };
      locationControl.addTo(map);
    }

    // Menu toggle
    const btnMenu = document.getElementById('btnMenu');
    const sidePanel = document.getElementById('sidebar');
    btnMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      sidePanel.classList.toggle('open');
    });
    // cerrar al tocar fuera
    document.addEventListener('click', e => {
      if (!sidePanel.contains(e.target) && e.target !== btnMenu) sidePanel.classList.remove('open');
    });

    // Guardar estado de checkboxes en localStorage
    function saveCheckboxState() {
      const states = {};
      document.querySelectorAll('.check').forEach(chk => {
        const key = `${chk.dataset.type}-${chk.dataset.index}`;
        states[key] = chk.checked;
      });
      localStorage.setItem('londonCheckboxes', JSON.stringify(states));
    }

    // Restaurar estado desde localStorage
    function restoreCheckboxState() {
      const saved = localStorage.getItem('londonCheckboxes');
      if (!saved) return;
      const states = JSON.parse(saved);
      document.querySelectorAll('.check').forEach(chk => {
        const key = `${chk.dataset.type}-${chk.dataset.index}`;
        if (states[key] !== undefined) {
          chk.checked = states[key];
          // Aplicar visibilidad del marcador
          const marker = getMarkerFromCheckbox(chk);
          if (marker) {
            if (chk.checked) {
              map.removeLayer(marker);
            } else {
              map.addLayer(marker);
            }
          }
        }
      });
    }