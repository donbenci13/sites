function renderRelatedCard(product) {
  return `
    <a class="card card--product" href="product.html?slug=${product.slug}">
      <div class="card-media">
        <img src="${product.image}" alt="${product.name}" width="480" height="360" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
      </div>
    </a>
  `;
}

function initProductDetail() {
  const root = document.getElementById("product-detail");
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const product = getProduct(slug);

  if (!product) {
    root.innerHTML = `
      <div class="container product-missing">
        <h1>Product not found</h1>
        <p>We could not find that seed variety. Browse our full catalog or contact us for availability.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="catalog.html">View Catalog</a>
          <a class="btn btn-secondary" href="contact.html">Contact Us</a>
        </div>
      </div>
    `;
    document.title = "Product Not Found | Cover Crop Partners";
    return;
  }

  document.title = `${product.name} | Cover Crop Partners`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", product.summary);

  const related = getRelatedProducts(product.slug);

  root.innerHTML = `
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        <span aria-hidden="true">/</span>
        <a href="catalog.html">Catalog</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">${product.name}</span>
      </nav>
      <div class="product-layout">
        <div class="product-gallery">
          <img src="${product.image}" alt="${product.name} seed" width="800" height="800">
        </div>
        <div class="product-info">
          <span class="product-tag">${product.categoryLabel}</span>
          <h1>${product.name}</h1>
          <p class="product-lead">${product.summary}</p>
          <p>${product.description}</p>
          <h2>Key Benefits</h2>
          <ul class="product-list">
            ${product.benefits.map((b) => `<li>${b}</li>`).join("")}
          </ul>
          <h2>Planting Notes</h2>
          <p>${product.planting}</p>
          <div class="product-cta">
            <a class="btn btn-primary" href="contact.html">Request a Quote</a>
            <a class="btn btn-secondary" href="catalog.html">Back to Catalog</a>
          </div>
          <p class="product-note">Per-pound pricing available. Custom blends and bulk load-out options — <a href="services.html">see services</a>.</p>
        </div>
      </div>
    </div>
    <section class="section-related">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">Related Products</p>
          <h2 class="section-title">You May Also Need</h2>
        </div>
        <div class="cards-3" id="related-products">
          ${related.map(renderRelatedCard).join("")}
        </div>
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", initProductDetail);
