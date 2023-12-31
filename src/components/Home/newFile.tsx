import { ME_DESCRIPTION } from "@/consts";

<Fragment>
  <a href="/me" class="c-card">
    <div class="overlay">
      TODO
      <img
        width="120"
        height="120"
        src="/img/icon/android-chrome.png"
        alt="Profile Icon"
      />
      <h3>Akira HIRATA</h3>
      <p>{ME_DESCRIPTION}</p>
    </div>
  </a>

  <style lang="less">{`
  @import "@/styles/common.less";

  a {
    margin-top: 16px;
    width: 100%;
    background-color: rgba(@main, 0.2);
    background-image: url("/img/hirata-1.webp");
    background-size: 100%;
    background-position: center;
    @media (width < @xs) {
      background-size: auto 100%;
    }

    .overlay {
      display: grid;
      gap: 16px 32px;
      align-items: center;
      align-content: center;

      position: relative;
      height: 100%;
      padding: 64px 32px;
      border: 4px solid rgba(@main, 0.1);
      box-sizing: content-box;
      background-color: rgba(@base, 0.7);
      backdrop-filter: blur(3px) grayscale(0.4);
      color: rgba(@main, 1);
      border-radius: 12px;
      transition: @transition;
      @media (width < @lg) {
        gap: 8px 16px;
        padding: 32px 24px;
      }
      @media (width < @sm) {
        padding: 24px;
      }
      @media (width < @xs) {
        gap: 8px;
        text-align: center;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 800px;
        height: 1200px;
        transform-origin: left center;
        rotate: 45deg;
        background: rgba(@theme, 0.25);
        top: calc(50% - 600px);
        left: 50%;
      }

      img {
        grid-area: 1 / 1 / 3 / 2;
        justify-self: end;
        width: 96px;
        @media (width < @sm) {
          width: 64px;
        }
        @media (width < @xs) {
          grid-area: 1 / 1;
          justify-self: center;
          width: 80px;
        }
      }
      h3 {
        grid-area: 1 / 2 / 2 / 3;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.1em;
        @media (width < @xs) {
          grid-area: 2 / 1;
        }
      }
      p {
        grid-area: 2 / 2 / 3 / 3;
        max-width: 50em;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        @media (width < @xs) {
          grid-area: 3 / 1;
        }
      }
    }
  }

  a:hover,
  a:active {
    background-size: 105%;
    @media (width < @xs) {
      background-size: auto 105%;
    }
    .overlay {
      backdrop-filter: none;
      opacity: 0.5;
      filter: blur(4px);
    }
  }
`}</style>
</Fragment>;
