document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".indicator li");
  const products = document.querySelectorAll(".box");
  const sortSelect = document.getElementById("select");
  const productContainer = document.querySelector(".box-container");

  // Filtering
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".indicator .active").classList.remove("active");
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      products.forEach((product) => {
        const category = product.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          product.style.display = "block";
          product.style.transform = "scale(1)";
        } else {
          product.style.display = "none";
          product.style.transform = "scale(0)";
        }
      });
    });
  });

  // Sorting
  sortSelect.addEventListener("change", () => {
    const sortType = sortSelect.value;
    const sorted = Array.from(products).sort((a, b) => {
      const priceA = parseFloat(a.getAttribute("data-price"));
      const priceB = parseFloat(b.getAttribute("data-price"));

      if (sortType === "LowToHigh") return priceA - priceB;
      if (sortType === "HighToLow") return priceB - priceA;
      return 0; // Default
    });

    // Clear container and re-append
    productContainer.innerHTML = "";
    sorted.forEach((product) => {
      productContainer.appendChild(product);
    });
  });
});
