# Dinamik Ürün Kartları Projesi

Bu proje, JavaScript kullanarak dinamik olarak ürün kartları oluşturan bir web uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, filtreleyebilir ve sıralayabilir.

## 📋 Proje Hakkında

Bu proje, temel JavaScript kavramlarını (döngüler, koşullar, fonksiyonlar, DOM manipülasyonu) öğrenmek için geliştirilmiş bir eğitim projesidir. Proje, 50 farklı teknoloji ürününü (laptop, telefon, kulaklık, monitör, oyun konsolu vb.) içeren bir mock data ile çalışmaktadır.

## 🚀 Özellikler

- **Dinamik Ürün Listeleme**: Kullanıcı istediği kadar ürün görüntüleyebilir
- **Pahalı Ürün Filtresi**: 10.000 TL üzeri ürünleri özel stil ile gösterir
- **Fiyata Göre Sıralama**: Ürünleri fiyata göre düşükten yükseğe sıralar (Bubble Sort algoritması kullanılarak)
- **Ürün Arama**: Ürün ismine göre gerçek zamanlı arama/filtreleme
- **Responsive Tasarım**: Farklı ekran boyutlarına uyumlu kart düzeni

## 📁 Proje Yapısı

```
urun-kartlari-odev/
│
├── index.html          # Ana HTML dosyası
├── app.js             # JavaScript kodları (50 ürün verisi ve tüm fonksiyonlar)
├── style.css          # CSS stil dosyası
├── img/               # Ürün görselleri klasörü
└── README.md          # Proje dokümantasyonu | GitHub Copilot (Claude Sonnet 4.5) tarafından oluşturuldu
```

## 💻 Kullanılan Teknolojiler

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## 🎯 JavaScript Fonksiyonları

### 1. `createCard()`

Kullanıcının belirlediği sayıda ürün kartı oluşturur. 10.000 TL üzeri ürünlere otomatik olarak "pahali" sınıfı ekler.

### 2. `expensiveCard()`

Sadece 10.000 TL üzerindeki pahalı ürünleri filtreler ve gösterir.

### 3. `sortCard()`

Ürünleri fiyata göre düşükten yükseğe sıralar. Bubble Sort algoritması kullanılarak temel seviyede yazılmıştır.

### 4. `showCard()`

Arama kutusuna yazılan metne göre ürünleri filtreler ve gerçek zamanlı olarak sonuçları gösterir.

## 📊 Veri Yapısı

Ürünler aşağıdaki yapıda bir array içinde saklanmaktadır:

```javascript
const urunler = [
  { ad: "MacBook Pro 16", fiyat: 75000, resim: "img/macbook-pro.jpg" },
  { ad: "iPhone 14 Pro Max", fiyat: 63000, resim: "img/iphone14.jpg" },
  // ... 48 ürün daha
];
```

Her ürün objesi şu özelliklere sahiptir:

- `ad`: Ürünün ismi (string)
- `fiyat`: Ürünün fiyatı (number)
- `resim`: Ürün görselinin yolu (string)

## 🎨 Özellikler

- Pahalı ürünler (>10.000 TL) farklı renkle vurgulanır
- Kart tasarımı modern ve kullanıcı dostu
- Hover efektleri ile interaktif kullanıcı deneyimi
- Responsive grid layout ile mobil uyumlu tasarım

## 🔧 Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını herhangi bir modern web tarayıcısında açın
3. Ürünleri görüntülemek için adet girin ve "Oluştur" butonuna tıklayın

> **Not**: Proje statik bir web sitesidir ve herhangi bir sunucu veya framework gerektirmez.

## 📝 Öğrenme Hedefleri

Bu proje aşağıdaki konuları öğretmeyi amaçlamaktadır:

- ✅ JavaScript array manipülasyonu
- ✅ DOM manipülasyonu (getElementById, innerHTML)
- ✅ For döngüleri ve if koşulları
- ✅ String metodları (toLowerCase, indexOf)
- ✅ Temel sıralama algoritmaları (Bubble Sort)
- ✅ Template literals kullanımı
- ✅ Event handling (onclick, oninput)
- ✅ Dinamik HTML oluşturma

## 👨‍💻 Geliştirici Notu

Bu proje **GitHub Copilot (Claude Sonnet 4.5)** tarafından eğitim amaçlı olarak oluşturulmuştur. Kod, yeni başlayanlar için anlaşılır olması amacıyla kasıtlı olarak temel seviyede tutulmuştur. İleri seviye JavaScript özellikleri (spread operator, arrow functions, filter/map/reduce vb.) yerine temel döngüler ve koşullar kullanılmıştır.

## 📦 Ürün Kategorileri

Projede 50 farklı ürün bulunmaktadır:

- 🖥️ Laptoplar (10 adet)
- 📱 Akıllı Telefonlar (10 adet)
- 🎧 Kulaklıklar (8 adet)
- 🖥️ Monitörler (7 adet)
- 🎮 Oyun Konsolları (5 adet)
- ⌨️ Klavyeler (5 adet)
- 🖱️ Fareler (5 adet)
