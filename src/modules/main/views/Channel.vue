<template>
  <div class="landing-wrapper">
    <Header />
    <main class="page-channel landing-sub">
      <div class="sub-top">
        <PageHeader
          title="채널 소개"
          subtitle="어떤 채널을 사용하시나요?"
          imageName="channel-header"
        />
        <TabNavigation :tabs="channelSections" mode="scroll" />
      </div>
      <div class="sub-wrap">
        <section class="section-sms">
          <h3 class="section-title">
            문자
            <span>SMS / LMS / MMS</span>
          </h3>
          <!-- MOBILE -->
          <div class="contents mb">
            <div class="lms">
              <h4>
                LMS
                <p>
                  긴 내용의 정보, 광고 사이트 <br />
                  링크 첨부 시 추천
                </p>
              </h4>
              <div class="tags">
                <span class="tag">장문 : 1,000자 이내</span>
              </div>
            </div>
            <div class="mms">
              <h4>
                MMS
                <p>
                  긴 내용의 정보, 광고 사이트 <br />
                  링크 첨부 시 추천
                </p>
              </h4>
              <div class="tags">
                <span class="tag">1,000자 이내</span>
                <span class="tag">이미지 : 이미지 3장 포함,</span>
              </div>
            </div>
            <div class="sms">
              <h4>
                SMS
                <p>
                  간단한 알림<br />
                  문자, 공지 전달 시 추천
                </p>
              </h4>
              <div class="tags">
                <span class="tag">단문 : 45자 이내</span>
              </div>
            </div>
          </div>
          <!-- TABLET, PC -->
          <div class="contents-pc">
            <div class="card-lms">
              <h4>
                LMS
                <p>긴 내용의 정보, 광고 사이트 링크 첨부 시 추천</p>
              </h4>
              <div class="tags">
                <span class="tag">장문 : 1,000자 이내</span>
              </div>
            </div>
            <div class="cards">
              <div class="card-mms">
                <h4>
                  MMS
                  <p>
                    광고/홍보, 기프티콘,<br />
                    이미지 파일 전송이 필요한 경우 추천
                  </p>
                </h4>
                <div class="tags">
                  <span class="tag"
                    >이미지 : 이미지 3장 포함, 1,000자 이내</span
                  >
                </div>
              </div>
              <div class="card-sms">
                <h4>
                  SMS
                  <p>
                    간단한 알림<br />
                    문자, 공지 전달 시 추천
                  </p>
                </h4>
                <div class="tags">
                  <span class="tag">단문 : 45자 이내</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-rcs">
          <h3 class="section-title">
            RCS
            <span>SMS / LMS / MMS / 템플릿 / 이미지 템플릿 / 양방향</span>
          </h3>
          <!-- MOBILE -->
          <div class="contents mb">
            <div class="sms">
              <h4>
                RCS SMS
                <p>
                  브랜드 로고와 다양한 디자인 요소,<br />
                  바로가기 버튼 등 3세대 문자메시지
                </p>
              </h4>
              <div class="tags">
                <span class="tag">100자 이내</span>
                <span class="tag">버튼 1개</span>
              </div>
            </div>
            <div class="lms">
              <h4>
                RCS LMS
                <p>
                  브랜드 로고와 다양한 디자인 요소,<br />
                  바로가기 버튼 등 3세대 문자메시지
                </p>
              </h4>
              <div class="tags">
                <span class="tag">1,300자 이내</span>
                <span class="tag">버튼 3개</span>
              </div>
            </div>
            <div class="mms">
              <h4>
                RCS MMS
                <p>
                  브랜드 로고와 다양한 디자인<br />
                  요소, 바로가기 버튼 등 3세대<br />
                  문자메시지
                </p>
              </h4>
              <div class="tags">
                <span class="tag">2가지(가로/슬라이드) 이미지</span>
                <span class="tag">1,300자 이내 </span>
                <span class="tag">카드당 버튼 2개</span>
              </div>
            </div>
            <div class="template">
              <h4>
                RCS 템플릿
                <p>SMS보다 경제적인 정보성 메시지</p>
              </h4>
            </div>
            <div class="last-rcs">
              <div class="image-template">
                <h4>
                  RCS 이미지 템플릿
                  <p>
                    이미지와 텍스트를 사용하여<br />
                    MMS보다 경제적인 광고성<br />
                    메시지
                  </p>
                </h4>
              </div>
              <div class="rcs-bothways">
                <h4>
                  RCS 양방향
                  <p>
                    고객과 양방향 소통이 가능한<br />
                    광고성 메시지
                  </p>
                </h4>
              </div>
            </div>
          </div>
          <!-- TABLET -->
          <div class="contents-tablet">
            <div class="contents-top">
              <div class="card-sms">
                <h4>
                  RCS SMS
                  <p>
                    브랜드 로고와 다양한 디자인 요소,<br />
                    바로가기 버튼 등 3세대 문자메시지
                  </p>
                </h4>
                <div class="tags">
                  <span class="tag">100자 이내</span>
                  <span class="tag">버튼 1개</span>
                </div>
              </div>
              <div class="card-lms">
                <h4>
                  RCS LMS
                  <p>
                    브랜드 로고와 다양한 디자인 요소,<br />
                    바로가기 버튼 등 3세대 문자메시지
                  </p>
                </h4>
                <div class="tags">
                  <span class="tag">1,300자 이내</span>
                  <span class="tag">버튼 3개</span>
                </div>
              </div>
              <div class="card-mms">
                <h4>
                  RCS MMS
                  <p>
                    브랜드 로고와 다양한 디자인 요소,<br />
                    바로가기 버튼 등 3세대 문자메시지
                  </p>
                </h4>
                <div class="tags tags3">
                  <span class="tag">1,300자 이내</span>
                  <span class="tag">카드당 버튼 2개</span>
                  <span class="tag">2가지(가로/슬라이드) 이미지</span>
                </div>
              </div>
            </div>
            <div class="contents-bottom">
              <div class="left">
                <div class="card-template">
                  <h4>
                    RCS 템플릿
                    <p>SMS보다 경제적인 정보성 메시지</p>
                  </h4>
                </div>
                <div class="card-image">
                  <h4>
                    RCS 이미지 템플릿
                    <p>
                      이미지와 텍스트를 사용하여<br />
                      MMS보다 경제적인 광고성 메시지
                    </p>
                  </h4>
                </div>
              </div>
              <div class="right">
                <div class="card-bothways">
                  <h4>
                    RCS 양방향
                    <p>
                      고객과 양방향 소통이 가능한<br />
                      광고성 메시지
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="contents-pc">
            <div class="contents-left">
              <div class="top">
                <div class="card-sms">
                  <h4>
                    RCS SMS
                    <p>
                      브랜드 로고와 다양한 디자인 요소,<br />
                      바로가기 버튼 등 3세대 문자메시지
                    </p>
                  </h4>
                  <div class="tags">
                    <span class="tag">100자 이내</span>
                    <span class="tag">버튼 1개</span>
                  </div>
                </div>
                <div class="card-lms">
                  <h4>
                    RCS LMS
                    <p>
                      브랜드 로고와 다양한 디자인 요소,<br />
                      바로가기 버튼 등 3세대 문자메시지
                    </p>
                  </h4>
                  <div class="tags">
                    <span class="tag">1,300자 이내</span>
                    <span class="tag">버튼 3개</span>
                  </div>
                </div>
              </div>
              <div class="card-mms">
                <h4>
                  RCS MMS
                  <p>
                    브랜드 로고와 다양한 디자인 요소,<br />
                    바로가기 버튼 등 3세대 문자메시지
                  </p>
                </h4>
                <div class="tags">
                  <span class="tag">1,300자 이내</span>
                  <span class="tag">카드당 버튼 2개</span>
                  <span class="tag">2가지(가로/슬라이드) 이미지</span>
                </div>
              </div>
            </div>
            <div class="contents-right">
              <div class="card-template">
                <h4>
                  RCS 템플릿
                  <p>SMS보다 경제적인 정보성 메시지</p>
                </h4>
              </div>
              <div class="card-image">
                <h4>
                  RCS 이미지 템플릿
                  <p>
                    이미지와 텍스트를 사용하여<br />
                    MMS보다 경제적인 광고성 메시지
                  </p>
                </h4>
              </div>
              <div class="card-bothways">
                <h4>
                  RCS 양방향
                  <p>
                    고객과 양방향 소통이 가능한<br />
                    광고성 메시지
                  </p>
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section class="section-kakao">
          <h3 class="section-title">
            카카오
            <span>알림톡 Text / 알림톡 이미지</span>
          </h3>
          <!-- MOBILE -->
          <div class="contents mb">
            <div class="text">
              <h4>
                알림톡 Text
                <p>카카오 인증마크 노출</p>
              </h4>
              <div class="tags">
                <span class="tag">한/영 1,000자 이내</span>
                <span class="tag">버튼 5개</span>
              </div>
            </div>
            <div class="image">
              <h4>
                알림톡 이미지
                <p>카카오 인증마크 노출</p>
              </h4>
              <div class="tags">
                <span class="tag">한/영 1,000자 이내</span>
                <span class="tag">버튼 5개</span>
                <span class="tag">이미지 1장</span>
              </div>
            </div>
          </div>
          <!-- TABLET, PC -->
          <div class="contents-pc">
            <div class="card-text">
              <h4>
                알림톡 Text
                <p>카카오 인증마크 노출</p>
              </h4>
              <div class="tags">
                <span class="tag">한/영 1,000자 이내</span>
                <span class="tag">버튼 5개</span>
              </div>
            </div>
            <div class="card-image">
              <h4>
                알림톡 이미지
                <p>카카오 인증마크 노출</p>
              </h4>
              <div class="tags">
                <span class="tag">한/영 1,000자 이내</span>
                <span class="tag">버튼 5개</span>
                <span class="tag">이미지 1장</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import PageHeader from "../components/PageHeader.vue";
import TabNavigation from "../components/TabNavigation.vue";

export default {
  name: "Channel",
  components: { Header, Footer, PageHeader, TabNavigation },
  data() {
    return {
      channelSections: [
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
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

@mixin smsCardMobile(
  $bgColor,
  $txtColor,
  $subTxtColor,
  $tagBgColor: null,
  $tagTxtColor: null
) {
  @include v.flex(row, space-between, flex-start);
  width: 100%;
  min-height: 100px;
  padding: 14px 14px 18px 14px;
  border-radius: 12px;
  background: $bgColor;
  h4 {
    color: $txtColor;
    line-height: 140%;
    p {
      padding-top: 8px;
      font-weight: 400;
      font-size: 0.75rem;
      color: $subTxtColor;
      line-height: 160%;
    }
  }
  .tags {
    @if $tagBgColor and $tagTxtColor {
      @include v.flex(column, null, flex-end);
      gap: 6px;
      .tag {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 20px;
        background: $tagBgColor;
        font-weight: 700;
        font-size: 0.75rem;
        color: $tagTxtColor;
        white-space: nowrap;
      }
    }
  }
}
@mixin smsCard(
  $bgColor,
  $txtColor,
  $subTxtColor,
  $tagBgColor: null,
  $tagTxtColor: null
) {
  position: relative;
  padding: 16px;
  border-radius: 20px;
  background: $bgColor;
  overflow: hidden;
  h4 {
    z-index: 3;
    position: relative;
    font-size: 1.25rem;
    color: $txtColor;
    line-height: 140%;
    @include v.desktop {
      font-size: 1.5rem;
    }
    p {
      padding-top: 10px;
      font-weight: 500;
      font-size: 0.875rem;
      color: $subTxtColor;
      line-height: 140%;
      letter-spacing: -0.28px;
      @include v.desktop {
        padding-top: 12px;
        font-size: 1rem;
      }
    }
  }
  .tags {
    z-index: 3;
    @if $tagBgColor and $tagTxtColor {
      .tag {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        background: $tagBgColor;
        font-weight: 700;
        font-size: 0.75rem;
        color: $tagTxtColor;
        white-space: nowrap;
        @include v.desktop {
          padding: 8px 12px;
          font-size: 0.875rem;
        }
      }
    }
  }
}

/* 페이지 내 공통 */
.contents.mb,
.section-title,
.contents-pc {
  max-width: 375px;
  margin: 0 auto;
  @include v.tablet {
    max-width: 1024px;
  }
  @include v.desktop {
    max-width: 1320px;
  }
}

/* 페이지 */
.page-channel {
  .sub-wrap {
    width: 100%;
    padding-top: 80px;
    @include v.tablet {
      padding-top: 130px;
    }
    @include v.desktop {
      padding-top: 164px;
    }
    section {
      padding: 0 20px;
      @include v.tablet {
        padding: 0 60px;
      }
      @include v.desktop {
        //padding: 0 360px;
      }
      .section-title {
        @include v.flex(row, null, center);
        padding-bottom: 32px;
        font-size: 1.5rem;
        @include v.tablet {
          padding-bottom: 40px;
          font-size: 1.75rem;
        }
        > span {
          display: inline-block;
          padding-left: 8px;
          font-weight: 400;
          font-size: 0.75rem;
          color: v.color(gray500);
          @include v.tablet {
            padding-left: 12px;
            font-size: 1rem;
          }
          @include v.desktop {
            padding-left: 20px;
            font-size: 1.25rem;
          }
        }
      }
      // 문자 section
      &.section-sms {
        padding-bottom: 86px;
        background: v.color(white);
        @include v.tablet {
          padding-bottom: 82px;
        }
        @include v.desktop {
          padding-bottom: 137px;
        }
        // mobile
        .contents {
          .lms {
            @include smsCardMobile(
              rgba(1, 186, 119, 0.2),
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
            margin-bottom: 20px;
          }
          .mms {
            @include smsCardMobile(
              rgba(255, 89, 79, 0.2),
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
            margin-bottom: 20px;
            .tags {
              .tag {
                margin-bottom: 0 !important;
              }
            }
          }
          .sms {
            @include smsCardMobile(
              rgba(109, 110, 250, 0.3),
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
          }
        }
        // tablet, pc
        .contents-pc {
          display: none;
          @include v.tablet {
            display: flex;
          }
          .card-lms {
            @include smsCard(
              rgba(1, 186, 119, 0.2),
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
            position: relative;
            width: 30%;
            height: 440px;
            margin-right: 20px;

            h4 {
              padding-top: 8px;
              p {
                white-space: nowrap;
              }
            }
            .tags {
              position: absolute;
              top: 16px;
              right: 16px;
            }
            &::after {
              content: "";
              position: absolute;
              left: 55%;
              bottom: 0;
              width: 224px;
              height: 250px;
              background: url(v.$img + "channel-section01-object.png") no-repeat;
              background-size: contain;
              transform: translateX(-55%);
            }
          }
          .cards {
            @include v.flex-column;
            gap: 20px;
            width: 70%;
            height: 440px;
            .card-mms {
              @include smsCard(
                rgba(255, 89, 79, 0.2),
                v.color(gray900),
                v.color(gray600),
                #fff,
                v.color(gray600)
              );
              @include v.flex(column-reverse, space-between, null);
              position: relative;
              width: 100%;
              height: 50%;

              text-align: right;
              &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 56px;
                width: 242px;
                height: 100%;
                background: url(v.$img + "channel-section01-object2.png");
                background-size: contain;
                background-repeat: round;
              }
            }
            .card-sms {
              @include smsCard(
                rgba(109, 110, 250, 0.3),
                v.color(gray900),
                v.color(gray600),
                #fff,
                v.color(gray600)
              );
              @include v.flex(column-reverse, space-between, null);
              position: relative;
              width: 100%;
              height: 50%;

              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 50px;
                width: 242px;
                height: 186px;
                background: url(v.$img + "channel-section01-object3.png");
                background-size: contain;
                background-repeat: round;
              }
            }
          }
        }
      }
      // RCS section
      &.section-rcs {
        padding-top: 60px;
        padding-bottom: 55px;
        background: #dee4ea; // 임시
        @include v.tablet {
          padding-bottom: 80px;
        }
        @include v.desktop {
          padding-bottom: 137px;
        }
        // mobile
        .contents {
          .sms,
          .lms,
          .mms {
            margin-bottom: 20px;
            @include smsCardMobile(
              #fff,
              v.color(gray900),
              v.color(gray600),
              #e9e9fe,
              v.color(primary600)
            );
            box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
          }
          .template {
            margin-bottom: 20px;
            @include smsCardMobile(v.color(gray500), #fff, #fff);
          }
          .last-rcs {
            display: flex;
            width: 100%;
            .image-template {
              @include smsCardMobile(#fff, v.color(gray900), v.color(gray600));
              width: calc((100% - 20px) / 2);
              margin-right: 20px;
              box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
            }
            .rcs-bothways {
              @include smsCardMobile(v.color(gray400), #fff, #fff);
              width: calc((100% - 20px) / 2);
              box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
            }
          }
        }
        // tablet
        .contents-tablet {
          display: none;
          @include v.tablet {
            @include v.flex-column;
          }
          @include v.desktop {
            display: none;
          }
          .contents-top {
            display: flex;
            gap: 20px;
            .card-sms,
            .card-lms,
            .card-mms {
              @include smsCard(
                #fff,
                v.color(gray900),
                v.color(gray600),
                v.color(primary50),
                v.color(primary600)
              );
              @include v.flex(column, space-between, null);
              position: relative;
              width: 33.33%;
              height: 374px;
              box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
              .tags {
                .tag {
                  &:first-child {
                    margin-right: 4px;
                  }
                  @media (min-width: 1024px) {
                    &:last-child {
                      margin-top: 10px;
                    }
                  }
                }
                // 768px 시 태그 사이 간격
                &.tags3 {
                  .tag:not(:last-child) {
                    margin-bottom: 4px;
                  }
                }
              }
              &::after {
                content: "";
                z-index: 0;
                position: absolute;
                left: 50%;
                bottom: 0;
                width: 193px;
                height: 240px;
                background: url(v.$img + "channel-section02-object.png");
                background-size: 100%;
                background-repeat: round;
                transform: translateX(-50%);
              }
            }
          }
          .contents-bottom {
            display: flex;
            gap: 20px;
            height: 374px;
            padding-top: 20px;
            .left {
              @include v.flex-column;
              gap: 20px;
              width: 65%;
              height: 100%;
              .card-template {
                @include smsCard(v.color(gray500), #fff, #fff);
                position: relative;
                height: 50%;
                padding: 24px;
                box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
                text-align: right;
                &::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 15px;
                  width: 205px;
                  height: 100%;
                  background: url(v.$img + "channel-section02-object2.png");
                  background-size: 100%;
                  background-repeat: round;
                  @media (min-width: 1024px) {
                    left: 52px;
                  }
                }
              }
              .card-image {
                @include smsCard(#fff, v.color(gray900), v.color(gray600));
                position: relative;
                height: 50%;
                padding: 24px;
                box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
                &::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  right: 52px;
                  width: 205px;
                  height: 100%;
                  background: url(v.$img + "channel-section02-object3.png");
                  background-size: 100%;
                  background-repeat: round;
                }
              }
            }
            .right {
              width: 35%;
              height: 100%;
              .card-bothways {
                @include smsCard(v.color(gray400), #fff, #fff);
                position: relative;
                height: 100%;
                padding: 24px;
                box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
                &::after {
                  content: "";
                  position: absolute;
                  left: 50%;
                  bottom: 0;
                  width: 210px;
                  height: 230px;
                  background: url(v.$img + "channel-section02-object4.png");
                  background-size: 100%;
                  background-repeat: round;
                  transform: translateX(-50%);
                }
              }
            }
          }
        }
        // pc
        .contents-pc {
          display: none;
          @include v.desktop {
            display: flex;
            gap: 30px;
            height: 738px;
          }
          .contents-left {
            @include v.flex-column;
            gap: 20px;
            width: 50%;
            height: 100%;
            [class^="card-"] {
              @include smsCard(
                #fff,
                v.color(gray900),
                v.color(gray500),
                v.color(primary50),
                v.color(primary600)
              );
              padding: 24px;
              box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
            }
            .top {
              display: flex;
              gap: 20px;
              height: calc(100% - 294px);
              [class^="card-"] {
                @include v.flex(column, space-between, null);
                width: 50%;
                &::after {
                  content: "";
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  width: 183px;
                  height: 271px;
                  background: url(v.$img + "channel-section02-object5.png");
                  background-size: 100%;
                  background-repeat: round;
                }
              }
            }
            .card-mms {
              @include v.flex(column, space-between, null);
              width: 100%;
              height: 294px;
              &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 30px;
                width: 220px;
                height: 294px;
                background: url(v.$img + "channel-section02-object6.png");
                background-size: 100%;
                background-repeat: round;
              }
            }
          }
          .contents-right {
            @include v.flex-column;
            gap: 20px;
            width: 50%;
            height: 100%;
            .card-template {
              @include smsCard(v.color(gray500), #fff, #fff);
              height: 294px;
              padding: 24px;
              text-align: right;
              &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 52px;
                width: 322px;
                height: 100%;
                background: url(v.$img + "channel-section02-object7.png");
                background-size: 100%;
                background-repeat: round;
              }
            }
            .card-image {
              @include smsCard(#fff, v.color(gray900), v.color(gray600));
              height: calc((100% - 294px) / 2);
              padding: 24px;
              &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 48px;
                width: 279px;
                height: 206px;
                background: url(v.$img + "channel-section02-object8.png");
                background-size: 100%;
                background-repeat: round;
              }
            }
            .card-bothways {
              @include smsCard(v.color(gray400), #fff, #fff);
              height: calc((100% - 294px) / 2);
              padding: 24px;
              text-align: right;
              &::after {
                content: "";
                position: absolute;
                left: 56px;
                bottom: 0;
                width: 240px;
                height: 184px;
                background: url(v.$img + "channel-section02-object9.png");
                background-size: 100%;
                background-repeat: round;
              }
            }
          }
        }
      }
      // 카카오 section
      &.section-kakao {
        padding-top: 60px;
        // mobile
        .contents {
          .text {
            @include smsCardMobile(
              #fff5d0,
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
            margin-bottom: 20px;
          }
          .image {
            @include smsCardMobile(
              v.color(gray100),
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
          }
        }
        // tablet, pc
        .contents-pc {
          display: none;
          @include v.tablet {
            display: flex;
            gap: 20px;
            height: 320px;
          }
          .tags {
            .tag:first-child {
              margin-right: 4px;
            }
          }
          .card-text {
            @include smsCard(
              #fff5d0,
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
            @include v.flex(row, space-between, null);
            position: relative;
            width: 50%;
            height: 100%;

            white-space: nowrap;
            &::after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 268px;
              height: 244px;
              background: url(v.$img + "channel-section03-object.png");
              background-size: 100%;
              background-repeat: round;
              transform: translateX(-50%);
            }
          }
          .card-image {
            @include smsCard(
              v.color(gray100),
              v.color(gray900),
              v.color(gray600),
              #fff,
              v.color(gray600)
            );
            @include v.flex(column, space-between, null);
            position: relative;
            width: 50%;
            height: 100%;

            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              width: 260px;
              height: 100%;
              background: url(v.$img + "channel-section03-object2.png");
              background-size: 100%;
              background-repeat: round;
              @media (min-width: 1024px) {
                right: 24px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
