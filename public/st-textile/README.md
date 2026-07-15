# ST Global Textile — Web Sitesi

Saf HTML/CSS/JS ile yapılmıştır. Build adımı yoktur, Node.js gerektirmez —
Turhost gibi paylaşımlı hosting'lere olduğu gibi yüklenir.

## Dosya yapısı
```
index.html          Ana sayfa
corporate.html      Kurumsal (Hakkımızda, Vizyon, Değerler, Kalite)
products.html       Ürünler
customers.html      Müşteriler
operations.html     Operasyon
contact.html        İletişim
assets/
  css/style.css     Özel stiller
  js/i18n-data.js   TR/EN metinleri (tüm site içeriği burada)
  js/main.js        Dil değişimi, menü, animasyonlar
  img/logo.jpeg     Logo
```

## Turhost'a yükleme
1. cPanel > Dosya Yöneticisi > `public_html` klasörünü açın.
2. Bu klasördeki TÜM dosyaları (`assets` klasörü dahil) `public_html` içine yükleyin.
   (Zip'leyip yükleyip cPanel'de "Extract" yapmak en hızlısıdır.)
3. `stglobaltextile.com` adresinden site açılır. Giriş sayfası `index.html`'dir.

## İçerik / metin değiştirme
Tüm yazılar `assets/js/i18n-data.js` içindedir. İngilizce için `en: { ... }`,
Türkçe için `tr: { ... }` bloğunu düzenleyin. Anahtarlar (örn. `home.hero.title`)
her iki dilde aynı olmalıdır.

## Görseller
Şu an hero ve ürün görselleri Unsplash'tan örnek olarak çekiliyor. Kendi
fotoğraflarınızı `assets/img/` içine koyup HTML'deki `src="https://images.unsplash.com/..."`
adreslerini `src="assets/img/kendi-foto.jpg"` ile değiştirin.

## Yeni dil ekleme
1. `i18n-data.js` içine `tr` bloğunun yanına yeni dil ekleyin, örn. `de: { ... }`.
2. Header'daki dil butonlarının yanına ekleyin:
   `<button class="lang-btn" data-lang="de">DE</button>`
Varsayılan dil İngilizce'dir (`main.js` içinde `DEFAULT_LANG`).

## İletişim formu
Form şu an demo (e-posta göndermez). Turhost PHP destekler; göndermek için
basit bir `gonder.php` (PHP `mail()`) dosyası ekleyip formun `action`'ını ona
yönlendirebilirsiniz. İsterseniz hazırlayabilirim.
```
