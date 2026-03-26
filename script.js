const heroImage = document.getElementById('heroImage');
const propertyCards = document.getElementById('propertyCards');
const gallery = document.getElementById('gallery');

const heroPrompt =
  'photorealistic premium european townhouse community in almaty foothills, brick glass metal architecture, green courtyards, mountain background, daylight, soft light, ultra realistic';
heroImage.src = `https://image.pollinations.ai/prompt/${encodeURIComponent(heroPrompt)}?width=1800&height=1100&seed=11&model=flux`;

const properties = [
  {
    title: 'Full House',
    meta: '292 м² | 4.5 сотки | от 1 050 000 ₸/м²',
    description: 'Просторный дом с панорамной террасой и видами на город',
    prompt:
      'photorealistic spacious premium standalone house, modern european townhouse style, brick facade and panoramic terrace, mountain view, landscaped green yard, daylight',
  },
  {
    title: 'Premium Duplex',
    meta: '230 м² | 3 сотки | от 1 000 000 ₸/м²',
    description: 'Три уровня, современная архитектура, идеален для семьи',
    prompt:
      'photorealistic premium duplex house, three levels, contemporary architecture with brick and glass, clean private courtyard, mountain backdrop, daytime',
  },
  {
    title: 'Standard Duplex',
    meta: '230 м² | 3 сотки | от 850 000 ₸/м²',
    description: 'Рациональная планировка и доступная цена',
    prompt:
      'photorealistic modern duplex home, practical layout, european architecture, green landscaping, comfortable private yard, almaty mountains in background, natural light',
  },
];

const galleryPrompts = [
  'photorealistic townhouse facades, premium residential village in almaty, brick and glass, daylight',
  'photorealistic green private courtyards of modern townhouse village, soft daylight',
  'photorealistic clean street inside premium cottage community, trees, modern architecture',
  'photorealistic scenic mountain view behind residential community in almaty, clear air',
  'photorealistic european townhouse entrance groups with minimalist landscaping',
  'photorealistic neighborhood lane with modern duplexes and greenery, bright day',
  'photorealistic family friendly courtyard with pathways and lawns in cottage settlement',
  'photorealistic panoramic shot of premium village and mountain skyline, soft light',
];

propertyCards.innerHTML = properties
  .map(
    (property, index) => `
      <article class="card reveal">
        <img
          class="card__media"
          src="https://image.pollinations.ai/prompt/${encodeURIComponent(property.prompt)}?width=1000&height=760&seed=${index + 101}&model=flux"
          alt="${property.title} — East Village"
          loading="lazy"
        />
        <div class="card__body">
          <h3>${property.title}</h3>
          <p class="meta">${property.meta}</p>
          <p class="desc">${property.description}</p>
          <a class="btn btn--primary" href="https://wa.me/77000000000?text=${encodeURIComponent(
            `Здравствуйте! Хочу подробнее по ${property.title} в East Village`
          )}" target="_blank" rel="noopener noreferrer">Подробнее</a>
        </div>
      </article>
    `
  )
  .join('');

gallery.innerHTML = galleryPrompts
  .map(
    (prompt, index) => `
      <div class="gallery__item reveal">
        <img
          src="https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=900&height=620&seed=${index + 210}&model=flux"
          alt="Галерея East Village ${index + 1}"
          loading="lazy"
        />
      </div>
    `
  )
  .join('');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

const observeReveals = () => {
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
};

observeReveals();
