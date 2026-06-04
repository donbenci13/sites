const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "cereals", label: "Cereals" },
  { id: "legumes", label: "Legumes" },
  { id: "brassicas", label: "Brassicas" },
  { id: "other", label: "Other Species" },
  { id: "mixes", label: "Mixes & Blends" },
];

const PRODUCTS = [
  {
    slug: "cereal-rye",
    name: "Cereal Rye",
    category: "cereals",
    categoryLabel: "Cereals",
    image: "assets/images/products/cereal-rye.png",
    summary:
      "Fast-growing winter hardy cereal with excellent biomass, weed suppression, and erosion control.",
    description:
      "Cereal rye is one of the most widely used winter cover crops in the Midwest. It establishes quickly in fall, provides durable ground cover through winter, and produces strong spring biomass for weed suppression and soil protection.",
    benefits: [
      "Excellent winter hardiness and early fall growth",
      "Strong weed suppression and erosion control",
      "Pairs well with legumes in spring termination mixes",
    ],
    planting: "Fall-seeded; drill or broadcast with good seed-to-soil contact.",
  },
  {
    slug: "oats",
    name: "Oats",
    category: "cereals",
    categoryLabel: "Cereals",
    image: "assets/images/products/oats.png",
    summary:
      "Fast-establishing spring or fall cereal for quick ground cover and reliable winter kill.",
    description:
      "Oats are a flexible cover crop for growers who want rapid fall cover or a spring-planted option ahead of summer crops. They build biomass quickly and typically winter-kill in colder regions, simplifying spring management.",
    benefits: [
      "Rapid establishment and ground cover",
      "Reliable winter termination in many regions",
      "Good fit for nutrient scavenging ahead of corn or soybeans",
    ],
    planting: "Spring or fall seeding depending on rotation goals and geography.",
  },
  {
    slug: "crimson-clover",
    name: "Crimson Clover",
    category: "legumes",
    categoryLabel: "Legumes",
    image: "assets/images/products/crimson-clover.png",
    summary:
      "Winter annual legume that fixes nitrogen and supports pollinators with vibrant spring blooms.",
    description:
      "Crimson clover is a proven nitrogen-fixing cover crop with strong fall establishment and attractive spring flowering. It works well in mixes with small grains and supports soil health goals in corn and soybean rotations.",
    benefits: [
      "Nitrogen fixation and green manure potential",
      "Pollinator-friendly spring blooms",
      "Strong fit in small grain and legume blends",
    ],
    planting: "Fall-seeded; best results with early planting and good seed depth.",
  },
  {
    slug: "hairy-vetch",
    name: "Hairy Vetch",
    category: "legumes",
    categoryLabel: "Legumes",
    image: "assets/images/products/hairy-vetch.png",
    summary:
      "Cold-tolerant legume that fixes significant nitrogen for following cash crops.",
    description:
      "Hairy vetch is valued for its cold tolerance and high nitrogen contribution when terminated in spring. It is commonly paired with cereal rye or other small grains in proven cover crop systems.",
    benefits: [
      "High nitrogen fixation potential",
      "Cold-tolerant fall establishment",
      "Excellent companion in rye-vetch mixes",
    ],
    planting: "Fall-seeded; allow adequate growth before spring termination.",
  },
  {
    slug: "red-clover",
    name: "Red Clover",
    category: "legumes",
    categoryLabel: "Legumes",
    image: "assets/images/products/red-clover.png",
    summary:
      "Versatile legume for nitrogen fixation, soil building, and multi-year cover systems.",
    description:
      "Red clover is a dependable legume for growers building soil nitrogen and organic matter. It can fit short-term cover rotations or longer-term forage and soil health programs depending on your management plan.",
    benefits: [
      "Reliable nitrogen fixation",
      "Flexible use in annual or perennial systems",
      "Good option for soil building between cash crops",
    ],
    planting: "Spring or fall seeding based on rotation and termination timing.",
  },
  {
    slug: "soybeans",
    name: "Soybeans (Cover Crop)",
    category: "legumes",
    categoryLabel: "Legumes",
    image: "assets/images/products/soybeans.png",
    summary:
      "Legume cover option for nitrogen contribution and biomass in select rotations.",
    description:
      "Soybeans can serve as a legume cover crop in specific late-planted or double-crop scenarios. We help you determine whether soybeans fit your window, seeding method, and termination plan.",
    benefits: [
      "Legume nitrogen contribution",
      "Familiar management for many growers",
      "Useful in targeted double-crop windows",
    ],
    planting: "Planting window and rates depend on your rotation and geography.",
  },
  {
    slug: "radish",
    name: "Radish",
    category: "brassicas",
    categoryLabel: "Brassicas",
    image: "assets/images/products/radish.png",
    summary:
      "Deep-tapping brassica for compaction relief, nutrient scavenging, and fall biomass.",
    description:
      "Cover crop radish develops a deep taproot that can break through compaction layers while scavenging nutrients from the soil profile. It establishes quickly in fall and winter-kills in most northern climates.",
    benefits: [
      "Bio-drilling action in compacted soils",
      "Nutrient scavenging ahead of spring crops",
      "Fast fall biomass production",
    ],
    planting: "Late summer to early fall; allow adequate growth before hard freeze.",
  },
  {
    slug: "buckwheat",
    name: "Buckwheat",
    category: "other",
    categoryLabel: "Other Species",
    image: "assets/images/products/buckwheat.png",
    summary:
      "Quick summer cover for weed suppression, pollinators, and short planting windows.",
    description:
      "Buckwheat is a fast-growing summer cover crop that fills short gaps between cash crops. It suppresses weeds, supports pollinators, and can improve soil condition when terminated before seed set.",
    benefits: [
      "Rapid summer establishment",
      "Weed suppression in short windows",
      "Pollinator-friendly blooms",
    ],
    planting: "Summer-seeded after wheat or other early-harvested crops.",
  },
  {
    slug: "custom-mix",
    name: "Custom Seed Mixes",
    category: "mixes",
    categoryLabel: "Mixes & Blends",
    image: "assets/images/products/custom-mix.png",
    summary:
      "Bespoke multi-species blends tailored to your soil, rotation, and farm goals.",
    description:
      "We design custom cover crop mixes around your planting window, equipment, and objectives — from simple two-species blends to complex multi-species cocktails. Bulk blending and bagging options are available.",
    benefits: [
      "Built around your rotation and soil goals",
      "60+ species available to source",
      "Bulk tote, 50 lb bag, ProBox, and tender load-out",
    ],
    planting: "Seeding method and timing customized to your mix design.",
  },
];

function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

function getRelatedProducts(slug, limit = 3) {
  const product = getProduct(slug);
  if (!product) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(
    (p) => p.slug !== slug && (p.category === product.category || p.category === "mixes")
  ).slice(0, limit);
}
