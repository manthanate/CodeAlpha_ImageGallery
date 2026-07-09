<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wanderlust Frames — Photo Gallery</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
  <p class="eyebrow">Vol. 01 — Places Worth Chasing</p>
  <h1 class="title">Wanderlust<span>Frames</span></h1>
  <p class="subtitle">A field journal of light, land and everything in between.</p>
</header>

<nav class="filters" id="filters">
  <button class="filter-chip active" data-filter="all">All</button>
  <button class="filter-chip" data-filter="mountains">Mountains</button>
  <button class="filter-chip" data-filter="cities">Cities</button>
  <button class="filter-chip" data-filter="coast">Coast</button>
  <button class="filter-chip" data-filter="desert">Desert</button>
</nav>

<main class="gallery" id="gallery"></main>

<div class="lightbox" id="lightbox">
  <button class="lb-close" id="lbClose" aria-label="Close">&times;</button>
  <button class="lb-nav lb-prev" id="lbPrev" aria-label="Previous">&#8249;</button>
  <figure class="lb-frame">
    <img id="lbImage" src="" alt="">
    <figcaption>
      <span id="lbCaption"></span>
      <span class="lb-count" id="lbCount"></span>
    </figcaption>
  </figure>
  <button class="lb-nav lb-next" id="lbNext" aria-label="Next">&#8250;</button>
</div>

<script src="script.js"></script>
</body>
</html>