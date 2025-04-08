<template>
  <div class="hospital-header container-fluid px-0 sticky-header">
    <!-- Top Row (Logo + Hotline) -->
    <div class="top-row container-fluid py-2 border-bottom">
      <div class="row align-items-center">
        <!-- Logo Column -->
        <div class="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
          <img src="@/assets/Sanjeevini-logo.png" alt="Sanjeevini Hospital" class="logo-image" />
        </div>

        <!-- Hotline Column -->
        <div class="col-md-6 text-md-end text-center mt-2 mt-md-0">
          <div class="call-button d-inline-block">
            <span class="call-text d-block">CALL</span>
            <span class="helpline-text d-block">24/7 Helpline</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-1">
      <div class="container-fluid">
        <button class="navbar-toggler ms-auto" type="button" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': menuOpen }">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/our" class="nav-link">OUR SPECIALITIES</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ourdocter" class="nav-link">OUR DOCTORS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/health" class="nav-link">HEALTH CHECK PACKAGES</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">BLOGS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">CONTACT US</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Sticky Header */
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1050;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Push content down */
:global(body) {
  padding-top: 100px;
}

/* Logo Styling */
.logo-image {
  max-width: 220px;
  height: auto;
}

@media (max-width: 768px) {
  .logo-image {
    max-width: 160px;
  }
}

/* Call Button */
.call-button {
  background-color: #28a745;
  color: white;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 6px rgba(40, 167, 69, 0.2);
  position: relative;
  overflow: hidden;
  font-weight: 600;
}

.call-button:hover {
  background-color: #24913d;
  transform: scale(1.03);
  box-shadow: 0 0 10px 2px rgba(33, 136, 56, 0.25);
}

/* Gliding light effect (subtle) */
.call-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: skewX(-20deg);
  transition: 0.6s ease-in-out;
}

.call-button:hover::after {
  left: 130%;
}

/* Text Styling */
.call-text {
  font-size: 1.2rem;
  font-weight: bold;
}

.helpline-text {
  font-size: 0.9rem;
  color: #f8f9fa;
}

/* Responsive Padding */
@media (max-width: 576px) {
  .call-button {
    padding: 10px 20px;
    font-size: 0.95rem;
  }

  .call-text {
    font-size: 1rem;
  }

  .helpline-text {
    font-size: 0.85rem;
  }
}

/* Navbar Styles */
.bg-primary {
  background-color: #5077b0 !important;
}

.navbar-nav .nav-link {
  font-size: 15px;
  padding: 8px 14px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}

.navbar-nav .nav-link:hover {
  background-color: #004080;
  color: #ffdd57 !important;
  border-radius: 4px;
}

@media (max-width: 991.98px) {
  .navbar-nav .nav-link {
    font-size: 14px;
    padding: 10px 12px;
    text-align: center;
  }

  .call-button {
    margin-top: 8px;
  }
}
</style>
