<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_1174_48550)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.99 2.2868C13.3859 2.64963 13.4126 3.26462 13.0498 3.66043L5.71645 11.6604C5.5323 11.8613 5.27229 11.9757 4.99977 11.9757C4.72725 11.9757 4.46724 11.8613 4.28309 11.6604L0.949764 8.02406C0.586938 7.62825 0.613677 7.01326 1.00949 6.65043C1.4053 6.28761 2.02029 6.31434 2.38312 6.71015L4.99977 9.56468L11.6164 2.34652C11.9792 1.95071 12.5942 1.92397 12.99 2.2868Z" :fill="color"/>
    </g>
    <defs>
      <clipPath id="clip0_1174_48550">
        <rect width="13.3333" height="13.3333" fill="white" transform="translate(0.333374 0.335938)"/>
      </clipPath>
    </defs>
  </svg>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '#414296',
      }
    },
    name: 'IconColorCheck',
  };
</script>