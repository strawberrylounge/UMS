<template>  
  <b-modal id="search-address-modal" content-class="service-modal search-address-modal" hide-header-close centered size="lg">
    <template #modal-title>
      <h5 class="modal-title">수신 주소록 검색</h5>
      <p class="title-desc">* 조직 조회 후 체크된 사용자를 선택하면 수신자에 추가됩니다.</p>
    </template>

    <label id="search" class="mb-1 pb-2 f-body4 c-gray500">템플릿 검색</label>
    <div class="form-group">
      <b-dropdown id="search-type-dropdown" variant="secondary" class="search-type-dropdown">
        <template #button-content>
          <span>{{ searchType }}</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button :class="searchType == '수신자 명' ? 'active' : ''">수신자 명</b-dropdown-item-button>
        <b-dropdown-item-button :class="searchType == '휴대폰 번호' ? 'active' : ''">휴대폰 번호</b-dropdown-item-button>
      </b-dropdown>
      <b-input placeholder="검색"></b-input>
      <b-button variant="dark">검색</b-button>
    </div>

    <div class="card-wrap">
      <div class="card menu-tree">
        <ul class="tree-menu-list">
          <li v-for="(group, index) in groups" :key="index">
            <button type="button" @click="toggleGroup(index)" class="btn btn-icon p-0">
              <IconOn v-if="group.isOpen" />
              <IconOff v-else />
            </button>
            <span>{{ group.name }}</span>
            <b-collapse :visible="group.isOpen">
              <ul class="menu-list-sub">
                <li v-for="(item, itemIndex) in group.items" :key="itemIndex">
                  {{ item }}
                </li>
              </ul>
            </b-collapse>
          </li>
        </ul>
      </div>

      <div class="table-responsive sticky-header">
        <table class="table">
          <thead>
            <tr>
              <th>
                <b-form-checkbox
                  id="selectAll"
                  name="selectAll"
                  value="selectAll"
                  size="lg"
                ></b-form-checkbox>
              </th>
              <th>수신자 명</th>
              <th>휴대폰 번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b-form-checkbox
                  id="1"
                  name='id'
                  value='1'
                  size="lg"
                ></b-form-checkbox>
              </td>
              <td>test01</td>
              <td>010-1234-1234</td>
            </tr>
            <tr>
              <td>
                <b-form-checkbox
                  id="1"
                  name='id'
                  value='1'
                  size="lg"
                ></b-form-checkbox>
              </td>
              <td>test01</td>
              <td>010-1234-1234</td>
            </tr>
            <tr>
              <td>
                <b-form-checkbox
                  id="1"
                  name='id'
                  value='1'
                  size="lg"
                ></b-form-checkbox>
              </td>
              <td>test01</td>
              <td>010-1234-1234</td>
            </tr>
            <tr>
              <td>
                <b-form-checkbox
                  id="1"
                  name='id'
                  value='1'
                  size="lg"
                ></b-form-checkbox>
              </td>
              <td>test01</td>
              <td>010-1234-1234</td>
            </tr>
            <tr>
              <td>
                <b-form-checkbox
                  id="1"
                  name='id'
                  value='1'
                  size="lg"
                ></b-form-checkbox>
              </td>
              <td>test01</td>
              <td>010-1234-1234</td>
            </tr>
            <tr>
              <td>
                <b-form-checkbox
                  id="1"
                  name='id'
                  value='1'
                  size="lg"
                ></b-form-checkbox>
              </td>
              <td>test01</td>
              <td>010-1234-1234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <template #modal-footer>
      <b-button variant="primary" disabled>선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconOn from '@/components/service/icons/IconOn.vue';
import IconOff from '@/components/service/icons/IconOff.vue';

export default {
  components: { IconArrowDown, IconOn, IconOff },
  name: "SearchAddressModal",
  data() {
    return {
      searchType: '수신자 명',
      groups: [
        {
          name: '이커머스테크 (공용)',
          isOpen: true,
          items: ['테스트 폰', 'Testphone'],
        },
        {
          name: '이커머스테크 (공용)',
          isOpen: true,
          items: ['테스트'],
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('search-address-modal');
    },
    toggleGroup(index) {
      this.groups[index].isOpen = !this.groups[index].isOpen;
    },
  }
};
</script>

<style scoped lang="scss">
.form-group {
  display: flex;
  margin-bottom: 20px;
  .b-dropdown {
    width: 355px;
    margin-right: 20px;
  }
  .form-control {
    width: 368px;
    margin-right: 20px;
  }
  .btn {
    width: 88px;
  }
}
.card-wrap {
  display: flex;
  width: 100%;
  margin-top: 20px;
}
.menu-tree {
  width: 355px;
  height: 350px;
  padding: 20px;
  overflow: auto;
}
.sticky-header {
  width: calc(100% - 355px - 20px);
  max-height: 350px;
  margin-left: 20px;
  overflow-y: auto;
}
.tree-menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
  & > li {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 11px;
      left: 32px;
      width: 13px;
      height: 1px;
      background-color: var(--gray300);
    }
    &::after {
      content: '';
      position: absolute;
      top: 12px;
      left: 38px;
      width: 1px;
      height: 100%;
      background-color: var(--gray300);
    }
    .collapse {
      padding-left: 38px;
    }
  }
  .btn {
    border: none;
    line-height: 1;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .btn + span {
    padding-left: 29px;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray900);
  }
  .menu-list-sub {
    margin: 0;
    padding: 0;
    list-style: none;
    & > li {
      margin-top: 12px;
      padding-left: 35px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 26px;
        height: 1px;
        background-color: var(--gray300);
        transform: translateY(-50%);
      }
      &:last-child {
        padding-bottom: 12px;
      }
    }
  }
}
</style>
