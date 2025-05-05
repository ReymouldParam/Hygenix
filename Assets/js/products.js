const seedData = {
    "Tomato": [
      {
        title: "IRA – HY 301",
        img: "https://via.placeholder.com/100x120?text=IRA+HY+301",
        habit: "Plant Habit: Semi Determinate",
        desc: [
          "Flat round fruits with uniform green colour to deep red when matured.",
          "Average fruit weight is 100–110 gms with excellent firmness."
        ]
      },
      {
        title: "BOXER – HY – 304",
        img: "https://via.placeholder.com/100x120?text=BOXER+HY+304",
        habit: "Plant Habit: Semi Determinate",
        desc: [
          "Flat round fruits with uniform green colour to deep red when matured.",
          "Average fruit weight is 100–110 gms with excellent firmness."
        ]
      }
    ],
    "Hot Pepper": [
      {
        title: "HOT PEPPER 101",
        img: "https://via.placeholder.com/100x120?text=HOT+PEPPER",
        habit: "Plant Habit: Upright",
        desc: [
          "Spicy long fruits ideal for pickling.",
          "Excellent yield with good disease tolerance."
        ]
      }
    ]
    // Add more if needed
  };

  const productList = document.getElementById("productList");
  const seedsContainer = document.getElementById("seedsContainer");

  function renderSeeds(type) {
    const seeds = seedData[type] || [];
    seedsContainer.innerHTML = seeds.map(seed => `
      <div class="seed-card">
        <img src="${seed.img}" alt="${seed.title}" />
        <div class="seed-info">
          <h3>${seed.title}</h3>
          <p><strong>${seed.habit}</strong></p>
          ${seed.desc.map(d => `<p>› ${d}</p>`).join("")}
          <div class="enquiry-btn">Enquiry</div>
        </div>
      </div>
    `).join('');
  }

  productList.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;
    document.querySelectorAll("#productList li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");
    const type = li.dataset.type;
    renderSeeds(type);
  });

  // Default load
  renderSeeds("Tomato");