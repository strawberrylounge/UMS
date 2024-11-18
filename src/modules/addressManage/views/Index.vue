<template>
  <div class="address-manage list-view">
    <AddressTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>주소록은 수신자를 묶는 집합으로 메시지 발송 시 수신자를 쉽고 편하게 선택하여 메시지를 보내실 수 있습니다.</li>
          <li>주소록을 생성하시고 주소록 하위에 그룹을 추가하여 선택하신 후 우측 구성원의 [추가] 버튼을 이용하면 수신자를 추가 하실 수 있습니다.<br />(수신자 생성은 수신자 메뉴에서 하실 수 있습니다)</li>
        </ul>
      </div>

      <!-- 주소록 선택 Start -->
      <div class="card">
        <div class="d-flex align-items-center flex-wrap mb-1">
          <label class="mb-0 mr-3">주소록 선택</label>
          <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown mr-1">
            <template #button-content>
              <span>{{ address }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button :class="{active: address === '이커머스테크'}" @click="setAddress('이커머스테크')">이커머스테크</b-dropdown-item-button>
          </b-dropdown>
          <b-button variant="outline-primary" class="ml-3" v-b-modal.add-address-modal>등록</b-button>
          <b-button variant="outline-primary" class="mx-2" v-b-modal.update-address-modal>수정</b-button>
          <b-button variant="outline-primary" @click="openDeleteAddressModal">삭제</b-button>
        </div>
        <p class="mt-3 mb-0 f-body5 c-gray500">이커머스테크 주소록에 대한 설명이 노출되는 곳입니다. 이커머스테크 주소록에 대한 설명이 노출되는 곳입니다.</p>
      </div>
      <!-- 주소록 선택 End -->

      <div class="d-flex mt-1 pt-3">
        <!-- 주소록 트리 Start -->
        <div class="card menu-tree mr-1">
          <div class="d-flex">
            <p class="m-0 mr-auto f-title1 c-gray700">이커머스테크</p>
            <b-button variant="secondary" class="btn-svg btn-svg-right" v-b-modal.add-category-modal>
              <span>그룹추가</span>
              <IconPlus />
            </b-button>
            <b-button variant="outline-primary" class="mx-2" v-b-modal.update-category-modal>수정</b-button>
            <b-button variant="outline-primary" @click="openDeleteCategoryModal">삭제</b-button>
          </div>

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
        <!-- 주소록 트리 End -->

        <!-- 구성원 테이블 Start -->
        <div class="flex-fill card ml-3">
          <div class="d-flex align-items-center">
            <p class="title m-0 f-title1 c-gray700">구성원</p>
            <div class="table-search flex-fill">
              <div class="table-search-input">
                <SearchInput placeholder="구성원 명, 휴대폰 번호 또는 앱 로그인 ID로 검색이 가능합니다." />
              </div>
              <b-button variant="dark" class="ml-3">검색</b-button>
            </div>
          </div>

          <hr class="hr" />

          <div class="d-flex align-items-center table-section mt-0 mb-1 p-0">
            <p class="list-count">전체 <span class="text-primary">10건</span></p>
            <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
              <template #button-content>
                <span>{{ pageCount }}개씩 보기</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button @click="setPageCount(10)" :class="pageCount == 10 ? 'active' : ''">10개씩 보기</b-dropdown-item-button>
              <b-dropdown-item-button @click="setPageCount(20)" :class="pageCount == 20 ? 'active' : ''">20개씩 보기</b-dropdown-item-button>
              <b-dropdown-item-button @click="setPageCount(30)" :class="pageCount == 30 ? 'active' : ''">30개씩 보기</b-dropdown-item-button>
            </b-dropdown>

            <b-form-checkbox value="all" class="ml-auto">전체 선택</b-form-checkbox>
            <i class="vertical-divider"></i>
            <b-button variant="secondary" class="btn-svg btn-svg-right mr-2" v-b-modal.add-user-modal>
              <span>추가</span>
              <IconPlus />
            </b-button>
            <b-button variant="outline-primary">삭제</b-button>
          </div>

          <div class="table-responsive sticky-header mt-3">
            <table class="table">
              <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="30%" />
                <col width="30%" />
              </colgroup>
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
                  <th>그룹</th>
                  <th>수신자명</th>
                  <th>휴대폰 번호</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :key="index">
                  <td>
                    <b-form-checkbox
                      :id="item"
                      name='id'
                      :value="item"
                      size="lg"
                    ></b-form-checkbox>
                  </td>
                  <td>테스트폰</td>
                  <td>test05</td>
                  <td>010-1234-1234</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 구성원 테이블 End -->
      </div>
    </div>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="confirmSubmit" />

    <p>모달 예시입니다.<br/>모달이 오픈되는 조건이 달라서 예시로 버튼 넣었습니다.</p>
    <div class="d-flex align-items-center">
      <b-button variant="outline-primary" class="mr-2" @click="updateAddressInfoModal">주소록 수정(주소록 미입력시)</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="deleteAddressInfoModal">주소록 삭제(주소록 미입력시)</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="selectCategoryModal">주소 카테고리 선택 모달</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="deleteUserInfoModal">구성원 먼저 삭제</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="deleteGroupInfoModal">최상위 그룹 수정 삭제 불가 모달</b-button>
      <b-button variant="outline-primary" @click="selectDeleteUserInfoModal">구성원 선택 요청 모달</b-button>
    </div>

    <AddCategoryModal :openSaveCategoryModal="openSaveCategoryModal" />
    <UpdateCategoryModal :openSaveCategoryModal="openSaveCategoryModal" />
    <AddAddressModal :addAddress="addAddress" />
    <UpdateAddressModal :updateAddress="updateAddress" />
    <AddUserModal :addUser="addUser" />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import AddressTabs from '@/components/service/address/AddressTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconOn from '@/components/service/icons/IconOn.vue'
import IconOff from '@/components/service/icons/IconOff.vue'
import AddCategoryModal from '@/modules/addressManage/components/modal/AddCategoryModal.vue'
import UpdateCategoryModal from '@/modules/addressManage/components/modal/UpdateCategoryModal.vue'
import AddAddressModal from '@/modules/addressManage/components/modal/AddAddressModal.vue'
import UpdateAddressModal from '@/modules/addressManage/components/modal/UpdateAddressModal.vue'
import AddUserModal from '@/modules/addressManage/components/modal/AddUserModal.vue'

export default {
  components: { AddUserModal, UpdateCategoryModal, AddCategoryModal, AddAddressModal, UpdateAddressModal, IconPlus, IconArrowDown, SearchInput, AddressTabs,  AlertModal, ConfirmModal, IconOn, IconOff },
  name: "AddressManage",
  data() {
    return {
      address: '이커머스테크',
      pageCount: 10,
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
        {
          name: '이커머스테크 (공용)22',
          isOpen: true,
          items: ['테스트1', '테스트22', '테스트333'],
        },
      ],
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
      alertTitle: '',
      alertDesc: '',
    }
  },
  methods: {
    setAddress(value) {
      this.address = value;
    },
    setPageCount(value) {
      this.pageCount = value
    },
    toggleGroup(index) {
      this.groups[index].isOpen = !this.groups[index].isOpen;
    },
    deleteAddressModal() {
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '주소록 삭제'
      this.alertDesc = '삭제에 성공했습니다.'
      this.$bvModal.show('alert-modal')
    },
    openDeleteAddressModal() {
      this.confirmTitle = '주소록 삭제'
      this.confirmDesc = '해당 주소록을 삭제하시겠습니까?'
      this.confirmSubmit = this.deleteAddressModal
      this.$bvModal.show('confirm-modal')
    },
    updateAddressInfoModal() {
      this.alertTitle = '주소록 관리'
      this.alertDesc = '주소록을 선택해주세요.'
      this.$bvModal.show('alert-modal')
    },
    deleteAddressInfoModal() {
      this.alertTitle = '주소록 삭제'
      this.alertDesc = '삭제할 주소록을 선택해주세요.'
      this.$bvModal.show('alert-modal')
    },
    selectCategoryModal() {
      this.alertTitle = '주소 카테고리 선택'
      this.alertDesc = '주소 카테고리를 선택해주세요.'
      this.$bvModal.show('alert-modal')
    },
    deleteUserInfoModal() {
      this.alertTitle = '구성원 삭제'
      this.alertDesc = '구성원에 포함되어 있는 수신자 입니다.\n구성원에서 먼저 삭제해주세요.'
      this.$bvModal.show('alert-modal')
    },
    deleteGroupInfoModal() {
      this.alertTitle = '삭제 불가'
      this.alertDesc = '최상위 카테고리명은 삭제할 수 없습니다.'
      this.$bvModal.show('alert-modal')
    },
    selectDeleteUserInfoModal() {
      this.alertTitle = '구성원 삭제'
      this.alertDesc = '구성원을 선택해주세요.'
      this.$bvModal.show('alert-modal')
    },
    addAddress() {
      this.alertTitle = '주소록 등록'
      this.alertDesc = '주소록 등록을 성공했습니다.'
      this.$bvModal.show('alert-modal')
    },
    updateAddress() {
      this.alertTitle = '주소록 등록'
      this.alertDesc = '주소록 수정을 성공했습니다.'
      this.$bvModal.show('alert-modal')
    },
    saveCategory() {
      this.$bvModal.hide('add-category-modal')
      this.$bvModal.hide('update-category-modal')
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '카테고리 등록/수정'
      this.alertDesc = '저장에 성공했습니다.'
      this.$bvModal.show('alert-modal')
    },
    openSaveCategoryModal() {
      this.confirmTitle = '카테고리 등록/수정'
      this.confirmDesc = '저장하시겠습니까?'
      this.confirmSubmit = this.saveCategory
      this.$bvModal.show('confirm-modal')
    },
    deleteCategory() {
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '카테고리 삭제'
      this.alertDesc = '삭제에 성공했습니다.'
      this.$bvModal.show('alert-modal')
    },
    openDeleteCategoryModal() {
      this.confirmTitle = '[주소록 그룹 명] 카테고리 삭제'
      this.confirmDesc = '주소록 그룹명을 포함한 하위 카테고리 및 구성원이 삭제됩니다.\n삭제하시겠습니까?'
      this.confirmSubmit = this.deleteCategory
      this.$bvModal.show('confirm-modal')
    },
    addUser() {
      this.$bvModal.hide('add-user-modal')
      this.alertTitle = '구성원 추가'
      this.alertDesc = '구성원 등록을 성공했습니다.'
      this.$bvModal.show('alert-modal')
    },
    deleteUser() {
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '구성원 삭제'
      this.alertDesc = '구성원을 삭제했습니다.'
      this.$bvModal.show('alert-modal')
    },
    openDeleteUserModal() {
      this.confirmTitle = '구성원 삭제'
      this.confirmDesc = '삭제하시겠습니까?'
      this.confirmSubmit = this.deleteUser
      this.$bvModal.show('confirm-modal')
    },

  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.card:not(.info) {
  padding: 28px;
  box-shadow: none;
}
.template-dropdown {
  min-width: 335px;
}
.search-section {
  .btn {
    min-width: 75px;
  }
  p:last-child {
    margin-left: 80px;
  }
}
.table-search {
  display: flex;
  align-items: center;
  justify-content: center;
  &-input {
    width: 540px;
  }
  .btn {
    min-width: 120px;
  }
}
.sticky-header {
  max-height: 650px;
  overflow: auto;
}
.table td {
  vertical-align: middle;
}
.menu-tree {
  width: 480px;
  overflow: auto;
}
.tree-menu-list {
  height: 100%;
  margin: 20px 0 0;
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
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
    &:last-child::after {
      display: none;
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
    @include typography.font-style(14px, 400, 140%, -0.28px);
    color: var(--gray900);
  }
  .menu-list-sub {
    margin: 0;
    padding: 0;
    list-style: none;
    & > li {
      margin-top: 12px;
      padding-left: 35px;
      margin-left: 21px;
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
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: calc(25px + 12px);
        background-color: var(--gray300);
      }
      &:last-child {
        padding-bottom: 12px;
        &::after {
          height: 17px;
        }
      }
    }
  }
}
</style>
