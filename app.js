const urunler = [
  { ad: "MacBook Pro 16", fiyat: 75000, resim: "img/macbook-pro.jpg" },
  { ad: "Microsoft Surface Laptop 5", fiyat: 29500, resim: "img/surface.jpg" },
  { ad: "HP Envy 14", fiyat: 24000, resim: "img/hp-envy.jpg" },
  { ad: "Asus ROG Strix G15", fiyat: 38500, resim: "img/rog.jpg" },
  { ad: "MSI Katana 15", fiyat: 31000, resim: "img/msi.jpg" },
  { ad: "Dell Inspiron 15", fiyat: 16500, resim: "img/dell.jpg" },
  { ad: "Lenovo Legion 5 Pro", fiyat: 35000, resim: "img/legion.jpg" },
  { ad: "Acer Predator Helios 300", fiyat: 33500, resim: "img/predator.jpg" },
  { ad: "Razer Blade 15", fiyat: 82000, resim: "img/blade.jpg" },
  { ad: "Gigabyte Aorus 15", fiyat: 37500, resim: "img/aorus.jpg" },
  { ad: "Samsung Galaxy Z Fold 5", fiyat: 89000, resim: "img/zfold.jpg" },
  { ad: "Google Pixel 8 Pro", fiyat: 52000, resim: "img/pixel.jpg" },
  { ad: "Oppo Find X6 Pro", fiyat: 44500, resim: "img/oppo.jpg" },
  { ad: "Huawei Mate 60 Pro", fiyat: 47000, resim: "img/huawei.jpg" },
  { ad: "iPhone 14 Pro Max", fiyat: 63000, resim: "img/iphone14.jpg" },
  { ad: "Samsung Galaxy S23 Ultra", fiyat: 56000, resim: "img/s23ultra.jpg" },
  { ad: "Xiaomi 13 Ultra", fiyat: 48500, resim: "img/xiaomi13.jpg" },
  { ad: "Nothing Phone 2", fiyat: 28500, resim: "img/nothing.jpg" },
  { ad: "Realme GT 5 Pro", fiyat: 26000, resim: "img/realme.jpg" },
  { ad: "Vivo X100 Pro", fiyat: 41000, resim: "img/vivo.jpg" },
  { ad: "Bose QuietComfort 45", fiyat: 15500, resim: "img/bose.jpg" },
  { ad: "JBL Quantum One", fiyat: 8900, resim: "img/jbl.jpg" },
  { ad: "Corsair Virtuoso RGB", fiyat: 9200, resim: "img/corsair.jpg" },
  { ad: "HyperX Cloud Alpha", fiyat: 4500, resim: "img/hyperx.jpg" },
  { ad: "Sennheiser HD 660S", fiyat: 21500, resim: "img/sennheiser.jpg" },
  {
    ad: "Audio-Technica ATH-M50x",
    fiyat: 7800,
    resim: "img/audiotechnica.jpg",
  },
  { ad: "Beyerdynamic DT 990 Pro", fiyat: 6900, resim: "img/beyerdynamic.jpg" },
  { ad: "AKG K371", fiyat: 5200, resim: "img/akg.jpg" },
  { ad: "Samsung Odyssey G7", fiyat: 19500, resim: "img/odyssey.jpg" },
  { ad: "BenQ MOBIUZ EX2710", fiyat: 12800, resim: "img/benq.jpg" },
  { ad: "LG UltraWide 34WP65C", fiyat: 16500, resim: "img/lg-ultra.jpg" },
  { ad: "Dell S2722DGM", fiyat: 11200, resim: "img/dell-monitor.jpg" },
  { ad: "ASUS TUF Gaming VG27AQ", fiyat: 15800, resim: "img/tuf.jpg" },
  { ad: "MSI Optix MAG274QRF", fiyat: 13900, resim: "img/optix.jpg" },
  { ad: "Acer Nitro XV272U", fiyat: 14200, resim: "img/nitro.jpg" },
  { ad: "ViewSonic Elite XG270", fiyat: 12500, resim: "img/viewsonic.jpg" },
  { ad: "Steam Deck OLED", fiyat: 24500, resim: "img/steamdeck.jpg" },
  { ad: "Meta Quest 3", fiyat: 21500, resim: "img/quest.jpg" },
  { ad: "PlayStation 5 Slim", fiyat: 26500, resim: "img/ps5-slim.jpg" },
  { ad: "Xbox Series S", fiyat: 15500, resim: "img/xbox-s.jpg" },
  { ad: "Nintendo Switch Lite", fiyat: 11500, resim: "img/switch-lite.jpg" },
  { ad: "ROG Ally", fiyat: 28500, resim: "img/rog-ally.jpg" },
  { ad: "Logitech MX Master 3S", fiyat: 4800, resim: "img/mx-master.jpg" },
  { ad: "Keychron K8 Pro", fiyat: 5500, resim: "img/keychron.jpg" },
  { ad: "Razer Viper V2 Pro", fiyat: 6200, resim: "img/viper.jpg" },
  { ad: "Logitech G Pro X Superlight", fiyat: 6800, resim: "img/gpro.jpg" },
  { ad: "Corsair K100 RGB", fiyat: 9500, resim: "img/k100.jpg" },
  { ad: "Ducky One 3", fiyat: 4900, resim: "img/ducky.jpg" },
  { ad: "SteelSeries Apex Pro", fiyat: 8200, resim: "img/apex.jpg" },
  { ad: "HyperX Alloy Origins", fiyat: 4200, resim: "img/alloy.jpg" },
];
let pahali_urunlimit = 10000;
let gosterilen_urunler = [];

function createCard() {
  let cardContainer = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  cardContainer.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  } else if (adet < 1) {
    adet = 1;
    console.warn("Geçersiz adet değeri. En az 1 ürün gösterilecektir.");
  }
  for (let i = 0; i < adet; i++) {
    gosterilen_urunler = urunler[i];

    if (gosterilen_urunler.fiyat > pahali_urunlimit) {
      cardContainer.innerHTML += `
      <div class="kart pahali">
        <img src="${gosterilen_urunler.resim}" />
        <h3>${gosterilen_urunler.ad}</h3>
        <p>Fiyat: ₺${gosterilen_urunler.fiyat}</p>
      </div>
    `;
    } else {
      cardContainer.innerHTML += `
      <div class="kart">
        <img src="${gosterilen_urunler.resim}" />
        <h3>${gosterilen_urunler.ad}</h3>
        <p>Fiyat: ₺${gosterilen_urunler.fiyat}</p>
      </div>
    `;
    }
  }
}

function expensiveCard() {
  let cardContainer = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  cardContainer.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }
  for (let i = 0; i < adet; i++) {
    gosterilen_urunler = urunler[i];

    if (gosterilen_urunler.fiyat > pahali_urunlimit) {
      cardContainer.innerHTML += `
      <div class="kart pahali">
        <img src="${gosterilen_urunler.resim}" />
        <h3>${gosterilen_urunler.ad}</h3>
        <p>Fiyat: ₺${gosterilen_urunler.fiyat}</p>
      </div>
    `;
    }
  }
}

function sortCard() {
  let cardContainer = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  cardContainer.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }

  let sirali_urunler = [...urunler].sort((a, b) => a.fiyat - b.fiyat);

  for (let i = 0; i < adet; i++) {
    let urun = sirali_urunler[i];

    if (urun.fiyat > pahali_urunlimit) {
      cardContainer.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    } else {
      cardContainer.innerHTML += `
      <div class="kart">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    }
  }
}

function showCard() {
  let cardContainer = document.getElementById("kartAlani");
  let aramaMetni = document.getElementById("arama").value.toLowerCase();
  cardContainer.innerHTML = "";

  let filtreliUrunler = urunler.filter((urun) =>
    urun.ad.toLowerCase().includes(aramaMetni)
  );

  for (let i = 0; i < filtreliUrunler.length; i++) {
    let urun = filtreliUrunler[i];

    if (urun.fiyat > pahali_urunlimit) {
      cardContainer.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    } else {
      cardContainer.innerHTML += `
      <div class="kart">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    }
  }
}
