function renderCatalogCard(product) {
  return `
    <a class="card card--product catalog-card" href="product.html?slug=${product.slug}">
      <div class="card-media">
        <img src="${product.image}" alt="${product.name} cover crop seed" width="640" height="480" loading="lazy">
      </div>
      <div class="card-body">
        <span class="product-tag">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <span class="card-link">View details →</span>
      </div>
    </a>
  `;
}

function initCatalog() {
  const grid = document.getElementById("catalog-grid");
  const filters = document.getElementById("catalog-filters");
  const count = document.getElementById("catalog-count");
  if (!grid || !filters) return;

  let activeCategory = "all";

  function renderFilters() {
    filters.innerHTML = PRODUCT_CATEGORIES.map(
      (cat) =>
        `<button type="button" class="filter-btn${cat.id === activeCategory ? " active" : ""}" data-category="${cat.id}">${cat.label}</button>`
    ).join("");

    filters.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.category;
        filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
        renderGrid();
      });
    });
  }

  function renderGrid() {
    const list =
      activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory);

    grid.innerHTML = list.map(renderCatalogCard).join("");

    if (count) {
      count.textContent =
        list.length === 1 ? "1 product" : `${list.length} products`;
    }
  }

  renderFilters();
  renderGrid();
}

document.addEventListener("DOMContentLoaded", initCatalog);
