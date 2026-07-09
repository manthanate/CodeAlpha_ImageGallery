const photos = [
  { src: "https://picsum.photos/seed/peak1/600/800", label: "Ridge at Dawn", category: "mountains" },
  { src: "https://picsum.photos/seed/city1/600/450", label: "Glass & Steel", category: "cities" },
  { src: "https://picsum.photos/seed/coast1/600/700", label: "Low Tide", category: "coast" },
  { src: "https://picsum.photos/seed/dune1/600/750", label: "Shifting Sand", category: "desert" },
  { src: "https://picsum.photos/seed/peak2/600/500", label: "Alpine Fog", category: "mountains" },
  { src: "https://picsum.photos/seed/city2/600/800", label: "Night Grid", category: "cities" },
  { src: "https://picsum.photos/seed/coast2/600/500", label: "Salt Air", category: "coast" },
  { src: "https://picsum.photos/seed/dune2/600/650", label: "Heat Line", category: "desert" },
  { src: "https://picsum.photos/seed/peak3/600/700", label: "Snowfield", category: "mountains" },
  { src: "https://picsum.photos/seed/city3/600/500", label: "Corner Store", category: "cities" },
  { src: "https://picsum.photos/seed/coast3/600/750", label: "Cliffside", category: "coast" },
  { src: "https://picsum.photos/seed/dune3/600/500", label: "Dry Wind", category: "desert" },
];

const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
const lbCount = document.getElementById("lbCount");

let currentFilter = "all";
let currentIndex = 0;

function visiblePhotos() {
  return currentFilter === "all"
    ? photos
    : photos.filter(p => p.category === currentFilter);
}

function renderGallery() {
  gallery.innerHTML = "";
  photos.forEach((photo, i) => {
    const div = document.createElement("div");
    div.className = "g-item";
    div.dataset.category = photo.category;
    div.dataset.label = photo.label;
    if (currentFilter !== "all" && photo.category !== currentFilter) {
      div.classList.add("hide");
    }
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.label;
    img.loading = "lazy";
    div.appendChild(img);
    div.addEventListener("click", () => openLightbox(photo));
    gallery.appendChild(div);
  });
}

function openLightbox(photo) {
  const list = visiblePhotos();
  currentIndex = list.indexOf(photo);
  updateLightbox(list);
  lightbox.classList.add("open");
}

function updateLightbox(list) {
  const photo = list[currentIndex];
  lbImage.src = photo.src;
  lbImage.alt = photo.label;
  lbCaption.textContent = photo.label;
  lbCount.textContent = `${currentIndex + 1} / ${list.length}`;
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

document.getElementById("lbNext").addEventListener("click", () => {
  const list = visiblePhotos();
  currentIndex = (currentIndex + 1) % list.length;
  updateLightbox(list);
});
document.getElementById("lbPrev").addEventListener("click", () => {
  const list = visiblePhotos();
  currentIndex = (currentIndex - 1 + list.length) % list.length;
  updateLightbox(list);
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") document.getElementById("lbNext").click();
  if (e.key === "ArrowLeft") document.getElementById("lbPrev").click();
});

filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;
  currentFilter = btn.dataset.filter;
  [...filters.children].forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".g-item").forEach(item => {
    const match = currentFilter === "all" || item.dataset.category === currentFilter;
    item.classList.toggle("hide", !match);
  });
});

renderGallery();