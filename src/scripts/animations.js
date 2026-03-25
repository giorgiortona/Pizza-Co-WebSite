import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSpecialitaAnimation() {
  const cards = document.querySelectorAll("[data-specialita-card]");

  if (!cards.length) return;

  cards.forEach((card, index) => {
    if (index === cards.length - 1) return;

    const nextCard = cards[index + 1];

    gsap.to(card, {
      scale: 0.96,
      scrollTrigger: {
        trigger: nextCard,
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    });

    const shade = card.querySelector(".specialita-card__shade");

    if (shade) {
      gsap.to(shade, {
        backgroundColor: "rgba(10,10,10,0.3)",
        scrollTrigger: {
          trigger: nextCard,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      });
    }
  });
}