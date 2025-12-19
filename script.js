const albums = {
  "BangHieuLED": ["1.jpg","2.mp4"],
  "LogoQuangCao": ["sp1.jpg"]
};

const content = document.getElementById("content");
content.className = "grid";

// hiển thị media
for (const album in albums) {
  albums[album].forEach(file => {
    const card = document.createElement("div");
    card.className = "card";

    if (file.endsWith(".mp4")) {
      card.innerHTML = `<video controls src="albums/${album}/${file}"></video>`;
    } else {
      card.innerHTML = `<img src="albums/${album}/${file}">`;
    }
    content.appendChild(card);
  });
}

// cursor luxury
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top  = e.clientY + "px";
});
