<template>
  <div class="landing-wrapper">
    <Header />
    <main id="landingMain" class="landing-main">
      <h2 class="sr-only">서비스 소개 페이지</h2>
      <div class="sections">
        <section class="section01">
          <MainCarousel />
          <div class="btn-area">
            <button
              type="button"
              class="btn-detail"
              @click="scrollToSection('section02')"
            >
              자세히 알아보기
            </button>
            <BtnInquiry :is-landing="true" :current-section="currentSection" />
          </div>
        </section>
        <section class="section02">
          <div class="inner">
            <div class="title-area">
              <h3 class="sub-title">다양한 <b>메세징</b> 서비스</h3>
              <p>
                문자, RCS, 카카오톡, 원스텝 발송까지!<br />
                다양한 방법으로 한번에 대량 메세지 전송을 이용해보세요.
              </p>
            </div>
            <!-- PC/TABLET -->
            <div class="feature-area">
              <div class="features">
                <dl class="feature" data-type="sms">
                  <dt>문자</dt>
                  <dd>
                    <i class="icon"></i>
                    <p>
                      SMS / LMS / MMS<br />
                      템플릿과 이미지까지
                    </p>
                  </dd>
                </dl>
                <dl class="feature" data-type="rcs">
                  <dt>RCS</dt>
                  <dd>
                    <i class="icon"></i>
                    <p>
                      감성있는 템플릿으로<br />
                      센스있는 메세지 발송
                    </p>
                  </dd>
                </dl>
                <dl class="feature" data-type="kakao">
                  <dt>카카오</dt>
                  <dd>
                    <i class="icon"></i>
                    <p>
                      고객사가 고객에게<br />
                      알림톡 발송
                    </p>
                  </dd>
                </dl>
              </div>
              <dl class="feature" data-type="onestep">
                <dt>원스텝 발송</dt>
                <dd>
                  <i class="icon"></i>
                  <p>
                    문자, RCS, 카카오톡까지<br />
                    모든 방식을 몽땅 모아 간편하게 한번에
                  </p>
                </dd>
              </dl>
            </div>
            <!-- MOBILE -->
            <div class="feature-area-m">
              <div class="features">
                <dl class="feature" data-type="sms">
                  <dt>문자</dt>
                  <dd>
                    <i class="icon"></i>
                    <p>
                      SMS / LMS / MMS<br />
                      템플릿과 이미지까지
                    </p>
                  </dd>
                </dl>
                <dl class="feature" data-type="rcs">
                  <dt>RCS</dt>
                  <dd>
                    <i class="icon"></i>
                    <p>
                      감성있는 템플릿으로<br />
                      센스있는 메세지 발송
                    </p>
                  </dd>
                </dl>
              </div>
              <dl class="feature" data-type="kakao">
                <dt>카카오</dt>
                <dd>
                  <i class="icon"></i>
                  <p>
                    고객사가 고객에게<br />
                    알림톡 발송
                  </p>
                </dd>
              </dl>
              <dl class="feature" data-type="onestep">
                <dt>원스텝 발송</dt>
                <dd>
                  <i class="icon"></i>
                  <p>
                    문자, RCS, 카카오톡까지<br />
                    모든 방식을 몽땅 모아 간편하게 한번에
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <!-- TODO: bg 이미지 받은 후, 적용 -->
        <section class="section03">
          <h3 class="sub-title">
            <b
              ><i class="circle">원</i><i class="circle">스</i
              ><i class="circle">텝</i> 발송</b
            >으로 방식 구분없이<br />
            메세지 전송을 간편하게!
          </h3>
          <p>
            원스텝 발송으로 SMS, MMS, LMS, 카카오, RCS를<br />
            한번에 보낼수 있어요
          </p>
        </section>
        <section class="section04">
          <div class="inner">
            <div class="title-area">
              <span>EC-톡톡만의</span>
              <h3 class="sub-title"><b>합리적인</b> 요금</h3>
              <p class="pc">
                EC-톡톡에서 제공하는 다양한 서비스를 저렴한 요금으로
                이용해보세요!
              </p>
              <p class="mb">
                EC-톡톡에서 제공하는 다양한 서비스를<br />
                저렴한 요금으로 이용해보세요!
              </p>
            </div>
            <!-- PC/TABLET -->
            <div class="price-area">
              <dl class="price">
                <dt>문자</dt>
                <dd>최저 <strong>9</strong>원 부터</dd>
                <dd>
                  <span class="label">#SMS</span>
                  <span class="label">#LMS</span>
                </dd>
              </dl>
              <dl class="price">
                <dt>RCS</dt>
                <dd>최저 <strong>17</strong>원 부터</dd>
                <dd>
                  <span class="label">#템플릿</span>
                  <span class="label">#양방향</span>
                  <span class="label">#SMS</span>
                  <span class="label">#LMS</span>
                  <span class="label">#MMS</span>
                </dd>
              </dl>
              <dl class="price">
                <dt>카카오</dt>
                <dd>최저 <strong>9</strong>원 부터</dd>
                <dd>
                  <span class="label">#알림톡</span>
                  <span class="label">#TEXT</span>
                  <span class="label">#이미지</span>
                </dd>
              </dl>
            </div>
            <!-- MOBILE -->
            <div class="price-area-m">
              <div class="prices">
                <dl class="price">
                  <dt>문자</dt>
                  <dd>최저 <strong>9</strong>원 부터</dd>
                  <dd>
                    <span class="label">#SMS</span>
                    <span class="label">#LMS</span>
                  </dd>
                </dl>
                <dl class="price">
                  <dt>RCS</dt>
                  <dd>최저 <strong>17</strong>원 부터</dd>
                  <dd>
                    <span class="label">#템플릿</span>
                    <span class="label">#양방향</span>
                    <span class="label">#SMS</span>
                    <span class="label">#LMS</span>
                    <span class="label">#MMS</span>
                  </dd>
                </dl>
              </div>
              <dl class="price">
                <dt>카카오</dt>
                <dd>최저 <strong>9</strong>원 부터</dd>
                <dd>
                  <span class="label">#알림톡</span>
                  <span class="label">#TEXT</span>
                  <span class="label">#이미지</span>
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <!-- TODO: bg 이미지 받은 후, 적용 -->
        <section class="section05">
          <div class="inner">
            <h3 class="sub-title"><b>다양</b>하고 <b>편리</b>한 템플릿</h3>
            <p>
              단순한 일반 문자에서 벗어나고 싶으신가요?<br />
              RCS 템플릿 &amp; 각 채널의 템플릿을 커스텀해 메세지를 보낼 수
              있어요.<br />
              이미지, 영상, 버튼 등 다양한 기능을 이용해 나만의 개성 넘치는
              템플릿을 생성해보세요!
            </p>
          </div>
        </section>
        <section class="section06">
          <figure>
            <img
              :src="require(`@/${PATHS.IMAGE}main-section06-object.png`)"
              alt="자, 이제 EC-톡톡와 함께 소식을 전해볼까요?"
            />
          </figure>
          <h3 class="sub-title">
            자, 이제 EC-톡톡와 함께<br />
            소식을 전해볼까요?
          </h3>
          <div class="links">
            <a href="#">회원가입</a>
            <a href="#">이용 가이드</a>
            <a href="#">고객안내</a>
          </div>
        </section>
      </div>
      <Footer class="footer-section" />
    </main>
    <BtnTop :is-landing="true" :current-section="currentSection" />
    <router-view></router-view>
  </div>
</template>
<script>
import { PATHS } from "../constants/paths";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BtnTop from "../components/buttons/BtnTop.vue";
import MainCarousel from "../components/MainCarousel.vue";
import BtnInquiry from "../components/buttons/BtnInquiry.vue";

export default {
  name: "Home",
  components: { Header, Footer, BtnTop, BtnInquiry, MainCarousel },
  data() {
    return {
      PATHS,
      currentSection: 0,
    };
  },
  mounted() {
    // 스크롤 이벤트 감지
    const container = document.querySelector(".landing-main");
    container.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const container = event.target;
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const totalHeight = container.scrollHeight;

      // 현재 섹션 계산
      this.currentSection = Math.floor(scrollPosition / windowHeight);
      console.log("Current Section:", this.currentSection); // 추가

      const lastSection = document.querySelector(".section06");
      if (lastSection) {
        const lastSectionTop = lastSection.offsetTop;

        if (scrollPosition >= lastSectionTop) {
          container.style.scrollSnapType = "none";
        } else {
          container.style.scrollSnapType = "y mandatory";
        }
      }
    },
    scrollToSection(sectionClass) {
      const container = document.querySelector(".landing-main");
      const section = document.querySelector(`.${sectionClass}`);
      if (container && section) {
        const sectionTop = section.offsetTop;
        container.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    },
  },
  beforeDestroy() {
    // 이벤트 리스너 제거
    const container = document.querySelector(".landing-main");
    container.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

/* section02 내 아이콘 */
$feature-icons: (
  "sms": (
    file: "ico-sms.png",
    width: 40px,
    height: 40px,
    widthMobile: 24px,
    heightMobile: 24px,
  ),
  "rcs": (
    file: "ico-rcs.png",
    width: 40px,
    height: 40px,
    widthMobile: 24px,
    heightMobile: 24px,
  ),
  "kakao": (
    file: "ico-kakao.png",
    width: 40px,
    height: 40px,
    widthMobile: 24px,
    heightMobile: 24px,
  ),
  "onestep": (
    file: "ico-onestep.png",
    width: 232px,
    height: 40px,
    widthMobile: 174px,
    heightMobile: 24px,
  ),
);

/* 메인 내 공통 */
.sub-title {
  font-size: 1.75rem;
  line-height: 140%;
  b {
    color: v.color(primary300);
  }
  @include v.tablet {
    font-size: 2.5rem;
  }
  @include v.desktop {
    font-size: 3.75rem;
  }
}
.inner {
  padding: 0 20px;
  @include v.tablet {
    @include v.flex-column;
    width: 100%;
    padding: 0 60px;
  }
  @include v.desktop {
    width: 1200px;
    max-width: 1200px;
  }
}
.feature,
.price {
  @include v.tablet {
    width: calc((100% - 60px) / 3);
  }
  &:not(:last-child) {
    margin-right: 16px;
    @include v.tablet {
      margin-right: 20px;
    }
    @include v.desktop {
      margin-right: 30px;
    }
  }
  dt {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba($color: v.color(black), $alpha: 0.5);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 140%;
    @include v.tablet {
      font-size: 1.75rem;
    }
    @include v.desktop {
      font-weight: 800;
      font-size: 2rem;
      line-height: 160%;
    }
  }
  dd:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba($color: v.color(black), $alpha: 0.5);
  }
}
.feature {
  &[data-type] {
    dd {
      padding-top: 20px;
      @include v.tablet {
        padding-top: 40px;
      }
      i.icon {
        display: block;
        margin-bottom: 8px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
      }
      p {
        font-size: 0.875rem;
        @include v.tablet {
          font-size: 1rem;
        }
        @include v.desktop {
          font-size: 1.25rem;
        }
      }
    }
  }
  @each $type, $config in $feature-icons {
    &[data-type="#{$type}"] {
      dd i.icon {
        width: map-get($config, widthMobile);
        height: map-get($config, heightMobile);
        @include v.tablet {
          width: map-get($config, width);
          height: map-get($config, height);
        }
        background-image: url(v.$icon + map-get($config, file));
      }
    }
  }
}
.label {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(88, 89, 255, 0.1);
  font-weight: 700;
  font-size: 0.75rem;
  color: v.color(primary300);
  line-height: 160%;
  @include v.tablet {
    padding: 4px 16px;
    font-size: 1rem;
    line-height: 140%;
  }
  @include v.desktop {
    font-size: 1.25rem;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
    margin-right: 12px;
    @include v.tablet {
      margin-right: 8px;
    }
  }
}

/* 메인 페이지 */
.landing-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  #landingMain {
    position: relative;
    height: calc(100vh - 36px);
    margin-top: 36px;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @include v.tablet {
      height: calc(100vh - 68px);
      margin-top: 68px;
    }
    .sections {
      section {
        position: relative;
        width: 100%;
        height: 100vh;
        min-height: 100vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        overflow: hidden;

        /* section 1 */
        &.section01 {
          position: relative;
          height: calc(100vh - 36px);
          min-height: calc(100vh - 36px);
          background: v.color(gray100); // 임시
          @include v.tablet {
            height: calc(100vh - 68px);
            min-height: calc(100vh - 68px);
          }

          .btn-area {
            text-align: center;
            .btn-detail {
              position: relative;
              display: none;
              width: 136px;
              height: 36px;
              padding-right: 26px;
              border-radius: 8px;
              background: v.color(gray700);
              font-weight: 700;
              font-size: 0.875rem;
              color: v.color(white);
              @include v.tablet {
                position: absolute;
                bottom: 130px;
                right: 60px;
                display: inline-block;
                width: 192px;
                height: 56px;
                padding-right: 30px;
                font-size: 1.25rem;
              }
              @include v.desktop {
                bottom: 120px;
                right: 160px;
                width: 260px;
                height: 78px;
                border-radius: 12px;
                font-size: 1.5rem;
              }
              &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 16px;
                width: 16px;
                height: 16px;
                background: url(v.$icon + "ico-down.png");
                background-size: 100%;
                transform: translateY(-50%);
                @include v.tablet {
                  width: 20px;
                  height: 20px;
                  right: 20px;
                }
                @include v.desktop {
                  right: 40px;
                }
              }
            }
          }
        }
        /* section 2 */
        &.section02 {
          position: relative;
          padding-top: 80px;
          @include v.desktop {
            @include v.flex-center;
            padding-top: 0;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: -100px;
            width: 648px;
            height: 648px;
            background: url(v.$img + "main-section02-object.png") right
              no-repeat;
            background-size: contain;
            @include v.tablet {
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
            }
          }
          .inner {
            .title-area {
              padding-bottom: 12px;
              @include v.tablet {
                padding-bottom: 20px;
              }
              @include v.desktop {
                padding-bottom: 80px;
              }
              p {
                font-size: 0.875rem;
                color: v.color(gray600);
                @include v.tablet {
                  font-size: 1rem;
                }
                @include v.desktop {
                  font-size: 1.25rem;
                }
              }
            }
            .feature-area {
              display: none;
              @include v.tablet {
                display: block;
              }
              .features {
                @include v.tablet {
                  @include v.flex-center;
                  padding-bottom: 60px;
                }
              }
              dl {
                width: 100%;
              }
            }
            .feature-area-m {
              @include v.tablet {
                display: none;
              }
              .features {
                @include v.flex-center;
                padding-top: 28px;
                padding-bottom: 20px;
                .feature {
                  width: calc((100% - 16px) / 2);
                }
              }
              > .feature {
                width: 100%;
                &:last-child {
                  padding-top: 40px;
                }
              }
            }
          }
        }
        /* section 3 */
        &.section03 {
          background: v.color(gray100); // 임시
          @include v.flex-column-center;
          h3 {
            padding-bottom: 20px;
            text-align: center;
            @include v.tablet {
              padding-bottom: 40px;
            }
            b {
              .circle {
                position: relative;
                display: inline-block;
                &::after {
                  content: "";
                  position: absolute;
                  top: -5px;
                  left: 50%;
                  width: 4px;
                  height: 4px;
                  border-radius: 50%;
                  background: v.color(primary300);
                  transform: translateX(-50%);
                  @include v.tablet {
                    width: 7px;
                    height: 7px;
                  }
                  @include v.desktop {
                    top: -10px;
                    width: 10px;
                    height: 10px;
                  }
                }
              }
            }
          }
          p {
            font-weight: 500;
            font-size: 0.875rem;
            color: v.color(gray900);
            text-align: center;
            @include v.tablet {
              font-size: 1.25rem;
            }
            @include v.desktop {
              font-weight: 400;
              font-size: 1.5rem;
            }
          }
        }
        /* section 4 */
        &.section04 {
          padding-top: 80px;
          @include v.tablet {
            @include v.flex-column-center;
            padding-top: 0;
          }
          .title-area {
            padding-bottom: 80px;
            @include v.desktop {
              padding-bottom: 120px;
            }
            span {
              font-weight: 700;
              font-size: 1.25rem;
              line-height: 140%;
              @include v.desktop {
                font-size: 2.5rem;
              }
            }
            p {
              padding-top: 12px;
              font-weight: 400;
              font-size: 0.875rem;
              line-height: 180%;
              @include v.desktop {
                padding-top: 24px;
                font-size: 1.5rem;
              }
            }
          }
          .price-area {
            display: none;
            @include v.tablet {
              @include v.flex(row, center, null);
            }
            .price {
              dd {
                &:nth-child(2) {
                  padding-top: 40px;
                  font-weight: 700;
                  font-size: 1.125rem;
                  line-height: 140%;
                  color: v.color(black);
                  @include v.desktop {
                    padding-top: 80px;
                    font-weight: 800;
                    font-size: 2.5rem;
                  }
                  strong {
                    font-size: 3.75rem;
                    color: v.color(primary300);
                    @include v.desktop {
                      font-size: 6.25rem;
                    }
                  }
                }
                &:last-child {
                  padding-top: 20px;
                }
              }
            }
          }
          .price-area-m {
            @include v.tablet {
              display: none;
            }
            .prices {
              @include v.flex(row, center, null);
              .price {
                width: calc((100% - 20px) / 2);
                &:first-child {
                  margin-right: 20px;
                }
              }
            }
            .price {
              dd {
                &:nth-child(2) {
                  padding-top: 30px;
                  font-size: 1rem;
                  strong {
                    font-size: 2.5rem;
                    color: #5859ff;
                  }
                }
                &:last-child {
                  padding-top: 12px;
                }
              }
            }
          }
        }
        /* section 5 */
        &.section05 {
          padding-top: 80px;
          background: url(v.$img + "main-section05-bg-375.png") center center
            no-repeat;
          @include v.tablet {
            @include v.flex(row, center, null);
            padding-top: 0;
            background: url(v.$img + "main-section05-bg-1024.png") top center
              no-repeat;
          }
          @include v.desktop {
            background: url(v.$img + "main-section05-bg.png") top center
              no-repeat;
            background-size: cover;
          }
          .inner {
            @include v.tablet {
              padding-top: 200px;
            }
            p {
              padding-top: 20px;
              font-weight: 400;
              font-size: 0.75rem;
              @include v.tablet {
                font-size: 1rem;
              }
              @include v.desktop {
                font-size: 1.5rem;
              }
            }
          }
        }
        /* section 6 */
        &.section06 {
          position: relative;
          @include v.flex-column-center;
          min-height: 100vh;
          //margin-bottom: 155px;
          scroll-snap-align: start;
          text-align: center;
          @include v.tablet {
            margin-bottom: 330px;
          }
          figure {
            height: 120px;
            margin-bottom: 80px;
            @include v.tablet {
              height: 144px;
            }
            @include v.desktop {
              height: 240px;
            }
            img {
              height: 100%;
            }
          }
          .links {
            @include v.flex-center;
            padding-top: 80px;
            a {
              position: relative;
              width: 106px;
              height: 36px;
              padding-right: 16px;
              border-radius: 12px;
              background: #eef3ff;
              font-weight: 700;
              font-size: 0.875rem;
              color: #5859ff;
              line-height: 36px;
              @include v.tablet {
                width: 200px;
                height: 68px;
                padding-right: 30px;
                font-size: 1.5rem;
                line-height: 68px;
              }
              @include v.desktop {
                width: 380px;
                height: 120px;
                padding-right: 50px;
                font-size: 2.5rem;
                line-height: 120px;
              }
              &:not(:last-child) {
                margin-right: 8px;
                @include v.tablet {
                  margin-right: 20px;
                }
                @include v.desktop {
                  margin-right: 30px;
                }
              }
              &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 10px;
                width: 16px;
                height: 16px;
                background: url(v.$icon + "ico-link2.png");
                background-size: 100%;
                transform: translateY(-50%);
                @include v.tablet {
                  right: 30px;
                  width: 20px;
                  height: 20px;
                }
                @include v.desktop {
                  right: 50px;
                  width: 40px;
                  height: 40px;
                }
              }
            }
          }
        }
      }
    }
  }
}

.footer-section {
  scroll-snap-align: none;
  height: 155px;
  margin-top: auto;
  @include v.tablet {
    height: 330px;
  }
}
</style>
