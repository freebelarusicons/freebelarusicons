<template>
  <div class="container">
    <header class="header">
      <div class="header__logo">#FreeBelarusIcons</div>
      <div class="header__button" @click="modal = !modal">Donate Crypto</div>
      <a
        class="header__button"
        href="https://www.buymeacoffee.com/freebelicons"
        target="_blank"
        >By me a Coffee</a
      >
    </header>
    <div class="main">
      <div class="main__logo" :class="icon ? 'hidden' : ''">
        #FreeBelarusIcons
      </div>
      <img
        class="main__click"
        :class="icon ? 'hidden' : ''"
        src="@/assets/img/click.png"
        alt=""
      />
      <div class="main__top" :class="icon ? 'main__top_active' : ''">
        <div class="main__left">
          <h1 class="main__title">Inspired by the free people of Belarus.</h1>
          <p class="main__text">
            Grab Liberty icon pack for free. Customize your desktop and support
            Belarus people struggling for FREEDOM.
          </p>
          <p class="main__text">
            Follow us on
            <a
              class="main__link"
              target="_blank"
              href="https://www.patreon.com/freebelarusicons"
              >Patreon</a
            >
            to get the freshest news about our new products!
          </p>
        </div>
        <img
          class="main__iphone"
          src="~/assets/img/iphone.png"
          alt="iPhone"
          @click="icon = !icon"
        />
      </div>
      <a
        href="https://github.com/freebelarusicons/freebelarusicons/releases/download/1.0.0/FreeBelarusIcons.zip"
        target="_blank"
        class="button"
        >Get pack for free</a
      >
    </div>
    <div class="guide">
      <h2 class="guide__title">How to change app icons on iOS 14?</h2>
      <div class="guide__grid">
        <div class="guide__item">
          <img src="~/assets/img/1.png" alt="" />
          <div class="guide__descr">Open Shortcuts app</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/2.png" alt="" />
          <div class="guide__descr">Add new shortcut</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/3.png" alt="" />
          <div class="guide__descr">Add action: Open App</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/4.png" alt="" />
          <div class="guide__descr">Choose to Shortcut App</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/5.png" alt="" />
          <div class="guide__descr">Click to edit</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/6.png" alt="" />
          <div class="guide__descr">Add to Home screen</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/7.png" alt="" />
          <div class="guide__descr">Click to icon</div>
        </div>
        <div class="guide__item">
          <img src="~/assets/img/8.png" alt="" />
          <div class="guide__descr">Select your icons</div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__item">
        <h2 class="footer__title">Free Belarus</h2>
        <div class="footer__text">Get our pack and support Belarus!</div>
      </div>

      <div class="footer__item">
        <h2 class="footer__title">{{ count }}</h2>
        <div class="footer__text">People received our pack</div>
      </div>

      <div class="footer__item">
        <h2 class="footer__title">Follow Us!</h2>
        <div class="footer__text">And subscribe for freshest news</div>
      </div>
      <div class="socials">
        <a
          class="socials__item"
          href="https://twitter.com/BelarusIcons"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          class="socials__item"
          href="https://github.com/freebelarusicons"
          target="_blank"
        >
          <Github />
        </a>
        <a
          class="socials__item"
          href="https://www.producthunt.com/@belarusiconss"
          target="_blank"
        >
          <Ph />
        </a>
        <a
          class="socials__item"
          href="https://www.buymeacoffee.com/freebelicons"
          target="_blank"
        >
          <Coffee />
        </a>
      </div>
    </footer>
    <div class="wrapper" :class="modal ? 'wrapper_open' : ''">
      <div class="modal">
        <div class="modal__top">
          <div class="modal__text">
            We are a small but very friendly and creative team!<br />
            We are very motivated by your support!<br />
            Support us with a donation of over $ 0.99, and we will continue to
            release a great product!<br />
            You can copy the wallet addresses below!
          </div>
          <Close class="modal__close" @click="modal = false" />
          <img class="modal__gerb" src="@/assets/img/gerb.png" alt="" />
        </div>

        <div class="modal__item">
          <div class="modal__title">Ethereum address</div>
          <div class="modal__input">
            <div class="modal__address">
              0x7Bda87a813075ff9aD03b12dC7a3EE4629AE910c
            </div>
            <button
              class="modal__button"
              @click="copyText('0x7Bda87a813075ff9aD03b12dC7a3EE4629AE910c')"
            >
              Copy
            </button>
          </div>
        </div>
        <div class="modal__item">
          <div class="modal__title">Bitcoin address</div>
          <div class="modal__input">
            <div class="modal__address">3CAehszcbZLX2McJTSQ41f96nj1gFMg3tX</div>
            <button
              class="modal__button"
              @click="copyText('3CAehszcbZLX2McJTSQ41f96nj1gFMg3tX')"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
    <a
      class="producthunt"
      href="https://www.producthunt.com/posts/freebelarusicons?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-freebelarusicons"
      target="_blank"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=269410&theme=light"
        alt="#FreeBelarusIcons - Free liberty icon pack made with love from Belarus. | Product Hunt"
        style="width: 250px; height: 54px"
        width="250"
        height="54"
    /></a>
  </div>
</template>

<script>
import Close from '@/assets/img/Close.svg'
import Twitter from '@/assets/img/Twitter.svg'
import Github from '@/assets/img/Github.svg'
import Ph from '@/assets/img/Ph.svg'
import Coffee from '@/assets/img/Coffee.svg'

export default {
  components: { Close, Twitter, Github, Ph, Coffee },
  data: () => {
    return {
      icon: false,
      modal: false,
      count: 0,
    }
  },
  created() {},
  mounted() {
    this.getDownloadsCount()

    setInterval(this.getDownloadsCount, 300000)
  },
  methods: {
    async copyText(text) {
      try {
        await this.$copyText(text)
      } catch (e) {
        console.error(e)
      }
    },
    getDownloadsCount() {
      this.$axios
        .$get(
          'https://api.github.com/repos/freebelarusicons/freebelarusicons/releases/assets/26508810'
        )
        .then((data) => {
          this.count = data.download_count
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
