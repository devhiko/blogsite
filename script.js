"use strict"; // Güvenli js yazmak için
// dosya yüklenince olacaklar...
window.addEventListener("load", () => {
  // buton tanımı
  const add = document.getElementById("add-blog-btn");
  // buton tıklama olayı
  add.addEventListener("click", (e) => {
    // yönlendirmeyi engellemek için
    e.preventDefault();
    // dosyadan veri almak için fonksiyon tanımı
    // eklenecek baslık
    const topic = document.createElement("a");
    // eklenecek içerik
    const content = document.createElement("p");
    // yazılan konu
    const topicval = document.getElementById("blog-topic").value;
    // içeriğin metni
    const contentval = document.getElementById("blog-content").value;
    // eger içerisi boşsa...
    if (!topicval || !contentval) {
      alert("Lütfen bir konu ve içerik girin: ");
    } else {
      // bir üst element belirle ki altına yeni node koyabilsin.
      const parent = document.getElementById("main-blog");
      // formu tanımla
      const form = document.getElementById("add-blog-form");
      // bir blog tanımladık.
      const blog = document.createElement("div");
      // diger bloglar gibi olması için
      blog.className = "blog";
      // içerik stilleri
      content.className = "blog-content-text";
      // baslik stilleri
      topic.className = "blog-header";
      // link haline getirmek için
      topic.href = "./" + topicval;
      // içeriye yazılanı p nin içine yazdır
      topic.textContent = topicval;
      // içeriği p nin içine yazdır
      content.textContent = contentval;
      // uygun elementin altına p leri yazdır.
      blog.appendChild(topic);
      blog.appendChild(content);
      parent.appendChild(blog);
      // her seferinde yeni bilgi girmek için formu sıfırla.
      form.reset();
    }

    // arama fonksiyonu ekle (search & regex)

  })

































})



// devam...