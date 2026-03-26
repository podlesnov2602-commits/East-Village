const heroImage = document.getElementById('heroImage');
const propertyCards = document.getElementById('propertyCards');
const gallery = document.getElementById('gallery');

const heroImageUrl =
  'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&h=1100&q=80';

const properties = [
  {
    title: 'Full House',
    meta: '292 м² | 4.5 сотки | от 1 050 000 ₸/м²',
    description: 'Просторный дом с панорамной террасой и видами на город',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&h=760&q=80',
  },
  {
    title: 'Premium Duplex',
    meta: '230 м² | 3 сотки | от 1 000 000 ₸/м²',
    description: 'Три уровня, современная архитектура, идеален для семьи',
    image:
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&h=760&q=80',
  },
  {
    title: 'Standard Duplex',
    meta: '230 м² | 3 сотки | от 850 000 ₸/м²',
    description: 'Рациональная планировка и доступная цена',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&h=760&q=80',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&h=620&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&h=620&q=80',
];

heroImage.src = heroImageUrl;

propertyCards.innerHTML = properties
  .map(
    (property) => `
      <article class="card reveal">
        <img
          class="card__media"
          src="${property.image}"
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

gallery.innerHTML = galleryImages
  .map(
    (image, index) => `
      <div class="gallery__item reveal">
        <img
          src="${image}"
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
