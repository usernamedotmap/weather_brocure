AOS.init({ duration: 1000, once: false });

const destinations = {
  kyoto: {
    name: "Kyoto",
    lat: 35.01,
    lon: 135.76,
    currency: "JPY",
    currName: "Japanese Yen",
    food: "Kaiseki Dinner",
    foodPrice: 5000,
    dayVibe: "Peaceful temples and the scent of incense.",
    nightVibe: "Lanterns glowing in Gion. Magic is in the air.",
    quote: "Ancient whispers in cedar groves.",
    desc: "Kyoto is the cultural heart of Japan, where 2,000 temples meet neon-lit alleys. Home to the legendary Gion district and the golden Kinkaku-ji.",
    hero: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000",
    thumb1:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800",
    thumb2:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800",
    thumb3:
      "https://plus.unsplash.com/premium_photo-1673285285994-6bfff235db97?&auto=format&fit=crop&w=800",
    thumb4:
      "https://plus.unsplash.com/premium_photo-1749733078922-8f0a81fde7d0?&auto=format&fit=crop&w=800",
    attractions: [
      {
        name: "Kinkaku-ji",
        lat: 35.0394,
        lon: 135.7292,
        desc: "The Golden Pavilion.",
      },
      {
        name: "Fushimi Inari",
        lat: 34.9671,
        lon: 135.7727,
        desc: "Thousands of torii gates.",
      },
    ],
  },
  paris: {
    name: "Paris",
    lat: 48.85,
    lon: 2.35,
    currency: "EUR",
    currName: "Euro",
    food: "French Bistro Meal",
    foodPrice: 25,
    dayVibe: "Fresh croissants and art walks by the Seine.",
    nightVibe: "The Eiffel Tower is sparkling. Time for wine.",
    quote: "The city of light never fades.",
    desc: "Beyond the Eiffel Tower, Paris is a tapestry of hidden bistros and world-class art at the Louvre, and the romantic charm of Montmartre.",
    hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2000",
    thumb1:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800",
    thumb2:
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=800",
    thumb3:
      "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?auto=format&fit=crop&w=800",
    thumb4:
      "https://images.unsplash.com/photo-1581683703690-f2ee757c98bf?&auto=format&fit=crop&w=800",
    attractions: [
      {
        name: "Eiffel Tower",
        lat: 48.8584,
        lon: 2.2945,
        desc: "The Iron Lady.",
      },
      {
        name: "Louvre Museum",
        lat: 48.8606,
        lon: 2.3376,
        desc: "Home of the Mona Lisa.",
      },
    ],
  },
  palawan: {
    name: "Palawan",
    lat: 9.83,
    lon: 118.73,
    currency: "PHP",
    currName: "Philippine Peso",
    food: "Fresh Seafood Platter",
    foodPrice: 800,
    dayVibe: "Turquoise waters and hidden lagoons await.",
    nightVibe: "Starry skies and the sound of gentle waves.",
    quote: "Nature's last ecological frontier.",
    desc: "Voted the most beautiful island in the world, featuring limestone cliffs, crystal lagoons, and the famous underground river.",
    hero: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=2000",
    thumb1:
      "https://images.unsplash.com/photo-1584640161267-869f0aa03af6?auto=format&fit=crop&w=800",
    thumb2:
      "https://images.unsplash.com/photo-1567335991483-fc7088c63506?auto=format&fit=crop&w=800",
    thumb3:
      "https://images.unsplash.com/photo-1654846417877-9aa89d4b8365?auto=format&fit=crop&w-800",
    thumb4:
      " https://plus.unsplash.com/premium_photo-1692049123449-10ebfa8370cb?auto=format&fit=crop&w=800",
    attractions: [
      {
        name: "Puerto Princesa Subterranean River National Park",
        lat: 10.1667,
        lon: 118.9167,
        desc: "Famous underground river and caves.",
      },
      {
        name: "El Nido",
        lat: 11.19556,
        lon: 119.4075,
        desc: "Known for limestone cliffs and lagoons.",
      },
    ],
  },
  rovaniemi: {
    name: "Rovaniemi",
    lat: 66.5039,
    lon: 25.7294,
    currency: "EUR",
    currName: "Euro",
    food: "Reindeer Stew (Poronkäristys)",
    foodPrice: 18,
    dayVibe: "Snowy forests, husky rides, and Arctic charm.",
    nightVibe: "Aurora Borealis dances across the polar sky.",
    quote: "Gateway to the Arctic Circle.",
    desc: "Rovaniemi, the capital of Finnish Lapland, is known as the official hometown of Santa Claus and a prime destination for Northern Lights viewing. Surrounded by snowy wilderness, it offers Arctic adventures, cozy lodges, and magical aurora nights.",
    hero: "https://images.unsplash.com/photo-1735646915790-6071fecfb369?auto=format&fit=crop&w=2000",
    thumb1:
      "https://images.unsplash.com/photo-1735475184398-1b92e2f2c742?auto=format&fit=crop&w=800",
    thumb2:
      "https://plus.unsplash.com/premium_photo-1667969521628-1e87cecffd18?auto=format&fit=crop&w=800",
    thumb3:
      "https://images.unsplash.com/photo-1735475184407-514375a6537d?auto=format&fit=crop&w=800",
    thumb4:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800",
    attractions: [
      {
        name: "Santa Claus Village",
        lat: 66.543,
        lon: 25.8474,
        desc: "Meet Santa and cross the Arctic Circle.",
      },
      {
        name: "Arktikum Museum",
        lat: 66.503,
        lon: 25.726,
        desc: "Explore Arctic culture and science.",
      },
      {
        name: "Aurora Borealis Viewing Spots",
        lat: 66.5039,
        lon: 25.7294,
        desc: "Best places to witness the Northern Lights.",
      },
    ],
  },
  rome: {
    name: "Rome",
    lat: 41.9028,
    lon: 12.4964,
    currency: "EUR",
    currName: "Euro",
    food: "Carbonara",
    foodPrice: 12,
    dayVibe: "Ancient ruins, lively piazzas, and espresso-filled mornings.",
    nightVibe:
      "Golden-lit streets, buzzing trattorias, and late-night strolls.",
    quote: "The Eternal City.",
    desc: "Rome, the capital of Italy, is a city where ancient history meets vibrant modern life. Home to iconic landmarks like the Colosseum and Vatican City, it offers world-class cuisine, art, and timeless architecture at every corner.",
    hero: "https://images.unsplash.com/photo-1571100162672-904cc0332dbb?auto=format&fit=crop&w=2000",
    thumb1:
      "https://images.unsplash.com/photo-1672068683385-e72756e9bd46?auto=format&fit=crop&w=800",
    thumb2:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800",
    thumb3:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800",
    thumb4:
      "https://images.unsplash.com/photo-1646153848575-63bb0b9b78c0?auto=format&fit=crop&w=800",
    attractions: [
      {
        name: "Colosseum",
        lat: 41.8902,
        lon: 12.4922,
        desc: "Ancient Roman amphitheater and city icon.",
      },
      {
        name: "Vatican City",
        lat: 41.9029,
        lon: 12.4534,
        desc: "Home of the Pope and St. Peter’s Basilica.",
      },
      {
        name: "Trevi Fountain",
        lat: 41.9009,
        lon: 12.4833,
        desc: "Famous fountain where visitors toss coins.",
      },
    ],
  },
};

// out sidde the function to make it do once
let map = L.map("map", {
  zoomControl: false,
  attributionControl: false,
}).setView([9.83, 118.73], 13); // Default to Palawan

// Use a "Dark Mode" tile provider to match your UI (thank you)
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
).addTo(map);

const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: "<div style='background-color: #60a5fa; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #60a5fa;'></div>",
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

let marker = L.marker([9.83, 118.73], { icon: customIcon }).addTo(map);

async function changeDestination(cityKey) {
  const city = destinations[cityKey];

 if (!city) return;

   
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  document.getElementById("hero").style.backgroundImage = `url('${city.hero}')`;
  document.getElementById("mainTitle").innerText = city.name;
  document.getElementById("subTitle").innerText = `"${city.quote}"`;
  document.getElementById("description").innerText = city.desc;
  document.getElementById("img1").src = city.thumb1;
  document.getElementById("img2").src = city.thumb2;
  document.getElementById("img3").src = city.thumb3;
  document.getElementById("img4").src = city.thumb4;

  // Update Food info
  document.getElementById("foodName").innerText = city.food;

  // for transition ng image yah
  const imgElements = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
  ];

  imgElements.forEach((img) => (img.style.opacity = "0"));

  setTimeout(() => {
    const city = destinations[cityKey];
    imgElements[0].src = city.thumb1;
    imgElements[1].src = city.thumb2;
    imgElements[2].src = city.thumb3;
    imgElements[3].src = city.thumb4;

    imgElements.forEach((img) => (img.style.opacity = "1"));
  }, 500);

  // attractions
  const attractionsContainer = document.getElementById("attractionList");
  attractionsContainer.innerHTML = "";

  city.attractions.forEach((place) => {
    const buttonAttraction = document.createElement("button");
    buttonAttraction.className =
      "w-full text-left  glass-card p-3 rounded-xl hover:border-blue-400 transition flex justify-between items-center group";
    buttonAttraction.innerHTML = `
      <div>
      <p class="text-md font-bold text-white group-hover:text-blue-300">${place.name}</p>
      <p class="text-[12px] text-gray-400">${place.desc}</p>
      </div>
    `;

    buttonAttraction.onclick = () => {
      map.flyTo([place.lat, place.lon], 16, { duration: 2 });
      marker.setLatLng([place.lat, place.lon]);
    };

    attractionsContainer.appendChild(buttonAttraction);
  });

  map.flyTo([city.lat, city.lon], 10, {
    animation: true,
    duration: 1.5,
  });

  marker.setLatLng([city.lat, city.lon]);

  // Fetch Data
  fetchWeather(city.lat, city.lon);
  fetchCurrency(city.currency, city.currName, city.foodPrice);

  AOS.refresh();
}

async function fetchCurrency(targetCurrency, fullName, foodLocalPrice) {
  const rateDiv = document.getElementById("exchangeRate");
  const nameDiv = document.getElementById("currencyName");
  const foodDiv = document.getElementById("foodCostUSD");

  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=PHP&to=${targetCurrency}`,
    );
    const data = await response.json();

    if (targetCurrency === "PHP") {
      rateDiv.innerText = "1.00";
      nameDiv.innerText = "Philippine Peso";
      foodDiv.innerText = `₱${foodLocalPrice}`;
      return;
    }
    const rate = data.rates[targetCurrency];

    rateDiv.innerText = `${rate.toFixed(2)}`;
    nameDiv.innerText = fullName;

    // calulate the php to food to other calocohan
    const costInPHP = Math.round(foodLocalPrice / rate);
    foodDiv.innerText = `₱${costInPHP.toLocaleString()}`;
  } catch (err) {
    rateDiv.innerText = "N/A";
    foodDiv.innerText = "N/A";
  }
}

async function fetchWeather(lat, lon) {
  const tempDiv = document.getElementById("temp");
  const adviceDiv = document.getElementById("advice");
  const packDiv = document.getElementById("packingList");
  const sunsetDiv = document.getElementById("sunsetTime");
  const timeDiv = document.getElementById("localClock");

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=sunset&timezone=auto`,
    );
    const data = await response.json();

    // wall clock yah
    const destinationDate = new Date(
      new Date().toLocaleString("en-US", { timeZone: data.timezone }),
    );
    const currentHour = destinationDate.getHours();

    const localTimeDisplay = new Date().toLocaleTimeString("fil-PH", {
      timeZone: data.timezone,
      hour: "2-digit",
      minute: "2-digit",
    });

    timeDiv.innerText = `Local Time: ${localTimeDisplay}`;

    // night and other kolokoy theme

    const isNight = currentHour >= 18 || currentHour <= 6;

    const activeCityName = document
      .getElementById("mainTitle")
      .innerText.toLowerCase();
    const cityData = destinations[activeCityName];

    if (isNight) {
      document.body.classList.add("night-theme");
      adviceDiv.innerText = adviceDiv.innerText = cityData
        ? cityData.nightVibe
        : "Enjoy the evening glow.";
    } else {
      document.body.classList.remove("night-theme");
      adviceDiv.innerText = cityData
        ? cityData.dayVibe
        : "A beautiful day for discovery.";
    }

    // Weather Info sah
    const temp = Math.round(data.current_weather.temperature);
    const code = data.current_weather.weathercode;
    tempDiv.innerText = `${temp}°C`;

    // Sunset Info (Format to HH:MM)
    const sunsetRaw = data.daily.sunset[0];
    const sunsetDate = new Date(sunsetRaw);
    const goldenHourStart = new Date(sunsetDate.getTime() - 60 * 60 * 1000);

    const now = new Date();

    let statusText = "";
    if (now < goldenHourStart) {
      const diffMiliseconds = goldenHourStart - now;
      const diffHours = Math.floor(diffMiliseconds / (1000 * 60 * 60));
      const diffMinutes = Math.floor(
        (diffMiliseconds % (1000 * 60 * 60)) / (1000 * 60),
      );
      statusText = `Starts in ${diffHours}h ${diffMinutes}m`;
    } else if (now >= goldenHourStart && now <= sunsetDate) {
      statusText = "Sunset Now 📸";
    } else {
      statusText = "See you tomorrow";
    }

    document.getElementById("goldenHourStatus").innerText = statusText;

    sunsetDiv.innerText = sunsetDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Packing Logic hree hehehee
    let pack = "Essentials: Camera & Self";
    if (temp > 26) pack = "Pack: Sunscreen & Swimwear";
    if (temp < 15) pack = "Pack: Light Jacket & Scarf";
    if (code > 50) pack = "Pack: Umbrella & Raincoat";

    // adviceDiv.innerText =
    //   temp > 22
    //     ? "Nice weather for exploring urself."
    //     : "kinda cold today, perfect coffee for hypertension.";
    packDiv.innerText = pack;
  } catch (err) {
    tempDiv.innerText = "Error";
  }
}

window.onload = () => changeDestination("palawan");
