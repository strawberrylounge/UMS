<template>
  <div class="landing-wrapper">
    <h2 class="sr-only">요금제 안내 페이지</h2>
    <Header />
    <main class="page-pricing landing-sub">
      <div class="sub-top">
        <PageHeader
          title="요금제 안내"
          subtitle="나에게 딱 맞는 요금제는?"
          imageName="pricing-header"
        />
        <TabNavigation :tabs="pricingSections" mode="scroll" />
      </div>
      <div class="sub-contents">
        <section
          v-for="section in pricingSections"
          :key="section.id"
          :class="`${section.target}`"
        >
          <div class="pricing-subject">
            <figure class="subject">
              <img
                :src="require(`@/${PATHS.IMAGE}pricing-${section.id}.png`)"
                :alt="section.label.slice(3)"
              />
              <figcaption>{{ section.label.slice(3) }}</figcaption>
            </figure>
            <small>*건별 요금 (VAT 별도)</small>
          </div>
          <div class="pricing-info">
            <dl
              v-for="(price, index) in getPricesByType(section.id)"
              :key="`${section.id}-${index}`"
              class="info"
            >
              <dt class="info-title">{{ price.type }}</dt>
              <dd>
                건별
                <b
                  ><strong>{{ price.amount }}</strong
                  >원</b
                >
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PageHeader from "../components/PageHeader.vue";
import TabNavigation from "../components/TabNavigation.vue";

import { PATHS } from "../constants/paths";

export default {
  name: "Pricing",
  components: { Header, Footer, PageHeader, TabNavigation },
  data() {
    return {
      PATHS,
      pricingSections: [
        {
          id: "sms",
          label: "1. 문자",
          desc: "SMS / LMS / MMS 템플릿과 이미지까지",
          target: "section-sms",
        },
        {
          id: "rcs",
          label: "2. RCS",
          desc: "감성있는 템플릿으로 센스있는 메세지 발송",
          target: "section-rcs",
        },
        {
          id: "kakao",
          label: "3. 카카오",
          desc: "고객사가 고객에게 알림톡 발송",
          target: "section-kakao",
        },
      ],
    };
  },
  methods: {
    getPricesByType(type) {
      const priceList = {
        sms: [
          { type: "SMS", amount: 9 },
          { type: "LMS", amount: 27 },
          { type: "MMS", amount: 85 },
        ],
        rcs: [
          { type: "RCS 템플릿", amount: 8 },
          { type: "RCS SMS", amount: 17 },
          { type: "RCS LMS", amount: 17 },
          { type: "RCS MMS", amount: 85 },
          { type: "RCS 미디어 템플릿", amount: 40 },
          { type: "RCS 챗봇", amount: 8 },
        ],
        kakao: [
          { type: "알림톡 Text", amount: 6.5 },
          { type: "알림톡 이미지", amount: 8 },
        ],
      };
      return priceList[type] || [];
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

.page-pricing {
  @include v.full {
    @include v.flex(column, null, center);
  }
  .sub-contents {
    padding: 60px 20px 0;
    @include v.tablet {
      padding-top: 130px;
    }
    @include v.desktop {
      padding: 210px 60px 0;
    }
    section {
      padding-bottom: 12px;
      border-bottom: 1px solid v.color(gray400);
      @include v.tablet {
        @include v.flex(row, space-between, null);
        padding-bottom: 20px;
      }
      &:not(:last-child) {
        margin-bottom: 40px;
        @include v.desktop {
          margin-bottom: 60px;
        }
      }
      .pricing-subject {
        @include v.flex-between;
        @include v.tablet {
          display: block;
        }
        .subject {
          @include v.flex-center;
          @include v.tablet {
            padding-bottom: 12px;
          }
          @include v.desktop {
            padding-bottom: 24px;
          }
          img {
            width: 24px;
            height: 24px;
            @include v.tablet {
              width: 40px;
              height: 40px;
            }
            @include v.desktop {
              width: 64px;
              height: 64px;
            }
          }
          figcaption {
            padding-left: 12px;
            font-weight: 700;
            font-size: 1.25rem;
            color: v.color(gray900);
            @include v.tablet {
              padding-left: 16px;
              font-size: 1.75rem;
              line-height: 140%;
            }
            @include v.desktop {
              padding-left: 24px;
              font-size: 3.75rem;
            }
          }
        }
        small {
          font-weight: 400;
          font-size: 0.75rem;
          color: v.color(red);
          @include v.tablet {
            padding-left: 16.5px;
          }
          @include v.desktop {
            padding-left: 37px;
            font-weight: 500;
            font-size: 1.25rem;
          }
        }
      }
      .pricing-info {
        width: 100%;
        @include v.tablet {
          width: clamp(412px, 66.667vw, 612px);
        }
        @include v.desktop {
          width: 712px;
        }
        .info {
          @include v.flex(row, space-between, null);
          padding: 28px 0;
          @include v.tablet {
            padding: 22px 0;
          }
          @include v.desktop {
            padding: 30px 0;
          }
          // 리스트 마지막 아이템 스타일 X
          &:not(:last-child) {
            margin-bottom: 12px;
            @include v.tablet {
              margin-bottom: 40px;
            }
            dd {
              padding-bottom: 20px;
              border-bottom: 1px solid v.color(gray400);
            }
          }
          .info-title {
            width: 122px;
            height: 28px;
            border-radius: 40px;
            border: 1px solid v.color(gray300);
            background: #eceff2;
            font-weight: 700;
            font-size: 0.875rem;
            color: v.color(gray700);
            text-align: center;
            @include v.tablet {
              width: 162px;
              height: 38px;
              border: 2px solid v.color(gray300);
              font-size: 1rem;
              line-height: 38px;
            }
            @include v.desktop {
              width: 238px;
              height: 50px;
              font-size: 1.5rem;
              line-height: 50px;
            }
          }
          dd {
            width: calc(100% - 142px);
            padding-left: 20px;
            color: v.color(gray900);
            font-weight: 500;
            font-size: 0.875rem;
            text-align: right;
            @include v.tablet {
              width: calc(100% - 202px);
              padding-left: 40px;
              font-size: 1.125rem;
            }
            @include v.desktop {
              width: calc(100% - 298px);
              padding-left: 60px;
              font-weight: 400;
              font-size: 1.5rem;
            }

            b {
              display: inline-block;
              padding-left: 4px;
              font-weight: 700;
              font-size: 1.25rem;
              @include v.tablet {
                font-size: 1.75rem;
              }
              @include v.desktop {
                padding-left: 8px;
                font-size: 2.5rem;
              }
              strong {
                padding-right: 4px;
                font-weight: 700;
                font-size: 2.5rem;
                color: v.color(primary300);
                @include v.tablet {
                  font-size: 3.75rem;
                }
                @include v.desktop {
                  padding-right: 8px;
                  font-weight: 800;
                  font-size: 5rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

/* 예외 */
.section-rcs {
  dl.info {
    &:nth-last-child(2) {
      dt.info-title {
        @include v.desktop {
          font-size: 18px !important;
        }
      }
    }
  }
}
</style>
