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
        info: "🎫 Gratis | ⏰ 10:00-17:30 | 🚇 South Kensington" 
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