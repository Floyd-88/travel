// Имитируем базу данных мест и маршрутов
const places = [
    { id: 1, name: 'Крепость Корела', image: 'images/travel.jpg', category: 'береговая линия' },
    { id: 2, name: 'Вуокса', image: 'images/travel.jpg', category: 'на природе' },
    { id: 3, name: 'Пудожские шхеры', image: 'images/travel.jpg', category: 'на природе' },
    { id: 4, name: 'Озеро Ястребиное', image: 'images/travel.jpg', category: 'на природе' },
  ];
  
  const routes = [
    { id: 1, name: 'Линия Маннергейма', image: 'images/travel.jpg', category: 'история' },
    { id: 2, name: 'Заповедник Монрепо', image: 'images/travel.jpg', category: 'природа' },
    { id: 3, name: 'Линия Маннергейма', image: 'images/travel.jpg', category: 'история' },
    { id: 4, name: 'Заповедник Монрепо', image: 'images/travel.jpg', category: 'природа' },
  ];
  
  // Функция отображения мест
  function displayPlaces(placesList) {
    const placesContainer = document.getElementById('places');
    placesContainer.innerHTML = ''; // Очищаем контейнер
    placesList.forEach(place => {
      const placeCard = document.createElement('div');
      placeCard.style.backgroundImage = `url(${place.image})`;
      placeCard.innerHTML = `<span>${place.name}</span>`;
      placesContainer.appendChild(placeCard);
    });
  }
  
  // Функция отображения маршрутов
  function displayRoutes(routesList) {
    const routesContainer = document.getElementById('routes');
    routesContainer.innerHTML = ''; // Очищаем контейнер
    routesList.forEach(route => {
      const routeCard = document.createElement('div');
      routeCard.style.backgroundImage = `url(${route.image})`;
      routeCard.innerHTML = `<span>${route.name}</span>`;
      routesContainer.appendChild(routeCard);
    });
  }
  
  // Фильтр по категориям
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const category = event.target.getAttribute('data-category');
      document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
  
      if (category === 'all') {
        displayPlaces(places); // Показать все
      } else {
        const filteredPlaces = places.filter(place => place.category === category);
        displayPlaces(filteredPlaces); // Показать только по категории
      }
    });
  });
  
  // Поиск по именам
  document.getElementById('search-btn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchQuery));
    displayPlaces(filteredPlaces);
  });
  
  // Инициализация страницы
  window.onload = () => {
    displayPlaces(places);
    displayRoutes(routes);
  };
  