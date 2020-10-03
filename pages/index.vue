<template>
  <div class="container">
    <div class="main">
      <img class="main__click" src="@/assets/img/click.png" alt="" />
      <div class="main__top" :class="icon ? 'main__top_active' : ''">
        <div class="main__left">
          <h1 class="main__title">Inspired by the free people of Belarus.</h1>
          <p class="main__text">
            Grab Liberty icon pack for free. Customise your desktop and support
            Belarus people struggling for FREEDOM. <br />
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
      <div class="donate">
        <div
          class="donate__link donate__link_theme_crypto"
          @click="modal = !modal"
        >
          Donate Crypto
        </div>
        <a
          class="donate__link donate__link_theme_coffee"
          href="https://www.buymeacoffee.com/freebelicons"
          target="_blank"
          >By me a Coffee</a
        >
      </div>
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
      <h2 class="footer__title">Free Belarus</h2>
      <div class="footer__text">Get our pack and support Belarus!</div>
      <div class="footer__stats">
        <div class="footer__item">
          <div class="footer__item-num">{{ count }}</div>
          <div class="footer__item-text">People received our pack</div>
        </div>
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
  </div>
</template>

<script>
import Close from '@/assets/img/Close.svg'

export default {
  components: { Close },
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

    setInterval(this.getDownloadsCount, 60000)
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
          'https://api.github.com/repos/freebelarusicons/freebelarusicons/releases/assets/26508140'
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
