@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.glassmorphism {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #dddddd;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #5c5c7b;
  border-radius: 50px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #7878a3;
}

@layer utilities {
  .input-class {
    @apply text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500;
  }

  .sheet-content button {
    @apply focus:ring-0 focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none !important;
  }

  .text14_padding10 {
    @apply text-14 px-4 py-2.5 font-semibold;
  }

  .flex-center {
    @apply flex items-center justify-center;
  }

  .header-2 {
    @apply text-18 font-semibold text-gray-900;
  }

  .text-10 {
    @apply text-[10px] leading-[14px];
  }

  .text-12 {
    @apply text-[12px] leading-[16px];
  }

  .text-14 {
    @apply text-[14px] leading-[20px];
  }

  .text-16 {
    @apply text-[16px] leading-[24px];
  }

  .text-18 {
    @apply text-[18px] leading-[22px];
  }

  .text-20 {
    @apply text-[20px] leading-[24px];
  }

  .text-24 {
    @apply text-[24px] leading-[30px];
  }

  .text-26 {
    @apply text-[26px] leading-[32px];
  }

  .text-30 {
    @apply text-[30px] leading-[38px];
  }

  .text-36 {
    @apply text-[36px] leading-[44px];
  }

  /* Home */
  .home {
    @apply no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll;
  }

  .home-content {
    @apply no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll;
  }

  .home-header {
    @apply flex flex-col justify-between gap-8;
  }

  .total-balance {
    @apply flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6;
  }

  .total-balance-chart {
    @apply flex size-full max-w-[100px] items-center sm:max-w-[120px];
  }

  .total-balance-label {
    @apply text-14 font-medium text-gray-600;
  }

  .total-balance-amount {
    @apply text-24 lg:text-30 flex-1 font-semibold text-gray-900;
  }

  .recent-transactions {
    @apply flex w-full flex-col gap-6;
  }

  .view-all-btn {
    @apply text-14 rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700;
  }

  .recent-transactions {
    @apply flex w-full flex-col gap-6;
  }

  .recent-transactions-label {
    @apply text-20 md:text-24 font-semibold text-gray-900;
  }

  .recent-transactions-tablist {
    @apply custom-scrollbar mb-8 flex w-full flex-nowrap;
  }

  /* Right sidebar */
  .right-sidebar {
    @apply no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important;
  }

  .profile-banner {
    @apply h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat;
  }

  .profile {
    @apply relative flex px-6 max-xl:justify-center;
  }

  .profile-img {
    @apply flex-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile;
  }

  .profile-details {
    @apply flex flex-col pt-24;
  }

  .profile-name {
    @apply text-24 font-semibold text-gray-900;
  }

  .profile-email {
    @apply text-16 font-normal text-gray-600;
  }

  .banks {
    @apply flex flex-col justify-between gap-8 px-6 py-8;
  }

  /* My Banks */
  .my-banks {
    @apply flex h-screen max-h-screen w-full flex-col gap-8 bg-gray-25 p-8 xl:py-12;
  }

  /* My Banks */
  .transactions {
    @apply flex max-h-screen w-full flex-col gap-8 overflow-y-scroll bg-gray-25 p-8 xl:py-12;
  }

  .transactions-header {
    @apply flex w-full flex-col items-start justify-between gap-8 md:flex-row;
  }

  .transactions-account {
    @apply flex flex-col justify-between gap-4 rounded-lg border-y bg-blue-600 px-4 py-5 md:flex-row;
  }

  .transactions-account-balance {
    @apply flex-center flex-col  gap-2 rounded-md bg-blue-25/20 px-4 py-2 text-white;
  }

  .header-box {
    @apply flex flex-col gap-1;
  }

  .header-box-title {
    @apply text-24 lg:text-30 font-semibold text-gray-900;
  }

  .header-box-subtext {
    @apply text-14 lg:text-16 font-normal text-gray-600;
  }

  /* Bank Card */
  .bank-card {
    @apply relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px];
  }

  .bank-card_content {
    @apply relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-bank-gradient px-5 pb-4 pt-5;
  }

  .bank-card_icon {
    @apply flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-bank-gradient bg-cover bg-center bg-no-repeat py-5 pr-5;
  }

  /* Bank Info */
  .bank-info {
    @apply gap-[18px] flex p-4 transition-all border bg-blue-25 border-transparent;
  }

  /* Category Badge */
  .category-badge {
    @apply flex-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2;
  }

  .banktab-item {
    @apply gap-[18px] border-b-2 flex px-2 sm:px-4 py-2 transition-all;
  }

  /* Mobile nav */
  .mobilenav-sheet {
    @apply flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto;
  }

  .mobilenav-sheet_close {
    @apply flex gap-3 items-center p-4 rounded-lg w-full max-w-60;
  }

  /* PlaidLink */
  .plaidlink-primary {
    @apply text-16 rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-white shadow-form;
  }

  .plaidlink-ghost {
    @apply flex cursor-pointer items-center justify-center gap-3 rounded-lg px-3 py-7 hover:bg-white lg:justify-start;
  }

  .plaidlink-default {
    @apply flex !justify-start cursor-pointer gap-3 rounded-lg !bg-transparent flex-row;
  }

  /* Auth */
  .auth-asset {
    @apply flex h-screen w-full sticky top-0 items-center justify-end bg-sky-1 max-lg:hidden;
  }

  /* Auth Form */
  .auth-form {
    @apply flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8;
  }

  .form-item {
    @apply flex flex-col gap-1.5;
  }

  .form-label {
    @apply text-14 w-full max-w-[280px] font-medium text-gray-700;
  }

  .form-message {
    @apply text-12 text-red-500;
  }

  .form-btn {
    @apply text-16 rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-white shadow-form;
  }

  .form-link {
    @apply text-14 cursor-pointer font-medium text-bankGradient;
  }

  /* Payment Transfer */
  .payment-transfer {
    @apply no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12;
  }

  .payment-transfer_form-item {
    @apply flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8;
  }

  .payment-transfer_form-content {
    @apply flex w-full max-w-[280px] flex-col gap-2;
  }

  .payment-transfer_form-details {
    @apply flex flex-col gap-1 border-t border-gray-200 pb-5 pt-6;
  }

  .payment-transfer_btn-box {
    @apply mt-5 flex w-full max-w-[850px] gap-3 border-gray-200 py-5;
  }

  .payment-transfer_btn {
    @apply text-14 w-full bg-bank-gradient font-semibold text-white shadow-form !important;
  }

  /* Root Layout */
  .root-layout {
    @apply flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden;
  }

  /* Bank Info */
  .bank-info_content {
    @apply flex flex-1 items-center justify-between gap-2 overflow-hidden;
  }

  /* Footer */
  .footer {
    @apply flex cursor-pointer items-center justify-between gap-2 py-6;
  }

  .footer_name {
    @apply flex size-10 items-center justify-center rounded-full bg-gray-200 max-xl:hidden;
  }

  .footer_email {
    @apply flex flex-1 flex-col justify-center max-xl:hidden;
  }

  .footer_name-mobile {
    @apply flex size-10 items-center justify-center rounded-full bg-gray-200;
  }

  .footer_email-mobile {
    @apply flex flex-1 flex-col justify-center;
  }

  .footer_image {
    @apply relative size-5 max-xl:w-full max-xl:flex max-xl:justify-center max-xl:items-center;
  }

  /* Sidebar */
  .sidebar {
    @apply sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px];
  }

  .sidebar-logo {
    @apply 2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden;
  }

  .sidebar-link {
    @apply flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start;
  }

  .sidebar-label {
    @apply text-16 font-semibold text-black-2 max-xl:hidden;
  }
}
