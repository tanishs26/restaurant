import homepageimg from "./homepage.jpeg";
import ig1Img from "./ig1.jpeg";
import ig2Img from "./ig2.jpg";
import ig3Img from "./ig3.jpg";
import "./style.css";

export function homepageload() {
  const content = document.querySelector("#content");

  content.innerHTML = `
<div id="tan">
    <img src="${homepageimg}" style="text-align: center;" alt="no img" class="homepageimg">
    <h1 style="text-align: center;">Fine Dining Meets Industrial Cliché!</h1>
    <hr>
    <div class="t1">
        <img src="${ig1Img}" alt="">
        <div>
            <h2>The Dining</h2>
            <p>Tanish invites you to experience a culinary journey with us that is defined by the immediacy of
                handcraft and the luxury of freshness. Discover with us the endless possibilities of sophistication and let
                yourself be seduced by the pure joy of exquisite cuisine. In our ambience, elegance and comfort
                combine to create a place that touches not only the palate but also the soul. Every dish tells a story -
                shaped by the hands of our master chefs, who put not only their skill but also their heart to the dishes.
            </p>
        </div>
    </div>
    <div class="t2">
        <div>
            <h2>The Bar - Lounge</h2>
            <p>Leave the stress of everyday life behind you and take a seat in our comfortable velvet armchairs or
                sofas from where you can enjoy a wonderful view of the unique backdrop of the spectacular bar. In our
                relaxing Mediterranean ambience you can enjoy classic or personalized drinks. See for yourself and let us
                pamper you.</p>
        </div>
        <img src="${ig2Img}" alt="">
    </div>
    <div class="t3">
        <img src="${ig3Img}" alt="">
        <div>
            <h2>We look forward to visiting you</h2>
            <p>The Frostics is located in Delhi, at FabreCastle 4, a charming industrial building. You will find us
                on the 3rd floor. If you need to get there quickly, you can also take the elevator.</p>
        </div>
    </div>
    </div>
  `;
}
