<template>
  <div class="kt-grid kt-grid--hor kt-grid--root">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
      <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
        <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed " data-ktheader-minimize="on">
          <div class="kt-container">
            <div class="kt-header__brand " id="kt_header_brand">
              <div class="kt-header__brand-logo">
                <a href="">
                  <img alt="Logo" src="@/assets/isuzu-logo-compressor.png" height="30" />
                </a>
              </div>
            </div>
            <!-- begin:: Header Topbar -->
            <div class="kt-header__topbar">

              <div class="kt-header__topbar-item" 
                data-toggle="kt-tooltip" 
                :title="$route.path == '/login' ? 'REGISTER' : 'LOGIN'" 
                data-placement="top"
              >
                <div class="kt-header__topbar-wrapper">
                  <span 
                    class="kt-header__topbar-icon" 
                    id="kt_quick_panel_toggler_btn"
                    @click="$router.push($route.path == '/login' ? '/register' : '/login')"
                  >
                    <i class="flaticon2-user"></i>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthNavigation'
}
</script>

