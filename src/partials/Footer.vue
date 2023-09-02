<script setup>
import InstagramIcon from '@/components/icons/Instagram.vue'
import TwitterIcon from '@/components/icons/Twitter.vue'
import TelegramIcon from '@/components/icons/Telegram.vue'
import WhatsappIcon from '@/components/icons/Whatsapp.vue'
</script>

<template>
  <footer class="bg py-5">
    <div class="container-lg">
      <div class="row pt-4">
        <!-- Logo & Desc -->
        <div class="col-lg-4 col-sm-6 mb-5">
          <div class="logo-section">
            <img class="img-fluid" src="../assets/images/logo-dark.png" alt="" />
            <p class="text_gray mt-3 mb-0">
              ملابس فريدة تعكس شخصية المرتدين. تتميز مجموعتنا بجودة عالية واهتمام دقيق بالتفاصيل
            </p>
          </div>
        </div>

        <!-- commercial address -->
        <div class="col-lg-2 col-sm-6 mb-5">
          <div class="d-flex flex-column gap-2">
            <p class="text-white fs-5 mb-2">العنوان التجاري</p>
            <span class="fs-7 text_gray">السعودية</span>
            <span class="fs-7 text_gray">جدة شارع مكة</span>
            <span class="fs-7 text_gray">الرمز البريدي 55544</span>
          </div>
        </div>

        <!-- Useful Links -->
        <div class="col-lg-3 col-sm-6 mb-5">
          <div class="d-flex flex-column gap-2">
            <p class="text-white fs-5 mb-2">روابط مفيدة</p>
            <ul class="d-flex flex-column gap-2 m-0">
              <li>
                <a class="fs-7 text_gray">الشحن والتوصيل</a>
              </li>
              <li>
                <a class="fs-7 text_gray"> سياسة الخصوصية</a>
              </li>
              <li>
                <a class="fs-7 text_gray">الأسئلة المتكررة </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Social Media -->
        <div class="col-lg-3 col-sm-6 mb-3">
          <div class="d-flex flex-column gap-2">
            <p class="text-white fs-5 mb-2">تواصل معنا عبر وسسائل التواصل الإجتماعي</p>
            <span class="fs-7 text_gray">يمكنك مراسلتنا عبر</span>

            <!-- Social Media -->
            <div class="d-flex gap-3">
              <a href="" class="social">
                <InstagramIcon />
              </a>
              <a href="" class="social">
                <TwitterIcon />
              </a>
              <a href="" class="social">
                <TelegramIcon />
              </a>
              <a href="" class="social">
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg {
  background-color: var(--primary-base);
}

.logo-section {
  padding-inline-end: 2rem;
}

ul li {
  list-style-type: disc !important;
  color: var(--gray-light);
  cursor: pointer;
}

ul li,
ul li a {
  transition: all 0.4s ease-in-out;
}

ul li:hover,
ul li:hover a {
  color: white;
}
</style>
