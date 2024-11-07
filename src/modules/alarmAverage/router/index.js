import BmUserManage from "../views/bm-user-manage.vue";

export default [
  {
    path: "/ac/user/manage",
    name: "userManage",
    meta: { menu: "AC_USER" },
    component: BmUserManage,
    props: true,
  },
];
