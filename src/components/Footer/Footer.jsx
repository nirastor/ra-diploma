import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer class="container bg-light footer">
        <div class="row">
          <div class="col">
            <section>
              <h3>Информация</h3>
              <ul class="nav flex-column">
                <li class="nav-item"><NavLink to="/about" exact className="nav-link" activeClassName="nav-link" >О магазине</NavLink></li>
                <li class="nav-item"><NavLink to="/catalog" exact className="nav-link" activeClassName="nav-link" >Каталог</NavLink></li>
                <li class="nav-item"><NavLink to="/contacts" exact className="nav-link" activeClassName="nav-link" >Контакты</NavLink></li>
              </ul>
            </section>
          </div>
            <div class="col">
              <section>
                <h3>Принимаем к оплате:</h3>
                  <div class="footer-pay">
                    <div class="footer-pay-systems footer-pay-systems-paypal"></div>
                    <div class="footer-pay-systems footer-pay-systems-master-card"></div>
                    <div class="footer-pay-systems footer-pay-systems-visa"></div>
                    <div class="footer-pay-systems footer-pay-systems-yandex"></div>
                    <div class="footer-pay-systems footer-pay-systems-webmoney"></div>
                    <div class="footer-pay-systems footer-pay-systems-qiwi"></div>
                  </div>
              </section>
              <section>
                <div class="footer-copyright">
                  2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.<br />
                  Доставка по всей России!
                </div>
              </section>
            </div>
            <div class="col text-right">
              <section class="footer-contacts">
                <h3>Контакты:</h3>
                <a class="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
                <span class="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
                <a class="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
                <div class="footer-social-links">
                  <div class="footer-social-link footer-social-link-twitter"></div>
                  <div class="footer-social-link footer-social-link-vk"></div>
                </div>
              </section>
            </div>
        </div>
      </footer>
    </>
  );
}