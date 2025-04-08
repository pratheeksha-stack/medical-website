
<template>
  <section class="women-care-hero">
    <!-- Full Screen Image Slides -->
    <div class="slides-container">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="slide"
        :class="{ 'active': currentSlide === index }"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="slide-overlay"></div>
      </div>
    </div>

    <!-- Content Overlay -->
    <div class="content-container">
      <div class="hero-content text-center">
        <h1 class="hero-title">
          <span class="d-block"></span>
          <span class="fw-light"></span>
        </h1>
        <p class="hero-subtitle">
        </p>
        <div class="button-container">
          <button class="btn btn-primary btn-lg appointment-btn">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>

    <!-- Dotted Navigation -->
    <div class="dotted-nav">
      <button 
        v-for="(dot, index) in slides" 
        :key="index"
        class="dot" 
        :class="{ 'active': currentSlide === index }"
        @click="goToSlide(index)"
      ></button>
    </div>
    
      </section>
<!--3 flex-->
<section class="hospital-services container my-4">
    <div class="row g-3 text-center justify-content-center">
        <!-- Service Box 1 -->
        <div class="col-12 col-md-4">
            <div class="service-box">
                <img src="@/assets/icon1.png" alt="Advanced Technology" class="service-icon">
                <h6 class="fw-bold">ADVANCED & LATEST TECHNOLOGY</h6>
            </div>
        </div>

        <!-- Service Box 2 -->
        <div class="col-12 col-md-4">
            <div class="service-box">
                <img src="@/assets/icon2.png" alt="Best Healthcare" class="service-icon">
                <h6 class="fw-bold">BEST HEALTHCARE SOLUTION</h6>
            </div>
        </div>

        <!-- Service Box 3 -->
        <div class="col-12 col-md-4">
            <div class="service-box">
                <img src="@/assets/icon3.png" alt="Emergency Cases" class="service-icon">
                <h6 class="fw-bold">FOR EMERGENCY CASES<br>+91 90151 1551</h6>
            </div>
        </div>
    </div>
</section>



  <!--Welcome to
Sanjeevini Hospitals-->
<section class="hospital-intro container my-5">
  <div class="row align-items-center">
    <!-- Image Column -->
    <div class="col-lg-6">
      <img src="@/assets/hospital.jpg" alt="Sanjeevini Hospital" class="hospital-img img-fluid rounded">
    </div>

    <!-- Text Column -->
    <div class="col-lg-6">
      <h5 class="hospital-subtitle">Welcome to</h5>
      <h2 class="hospital-title text-primary">Sanjeevini Hospitals</h2>
      <p class="hospital-text">
        Sanjeevini Hospital, rated as the best hospital in Bangalore, is a Multispeciality 
        and super speciality hospital conceived with an aim to deliver advanced and 
        affordable healthcare to the community at large. Its deep-rooted commitment to 
        imparting quality service at every stage continues to be its strong point in 
        achieving success.
      </p>
      <p class="hospital-text">
        The hospital adds a new dimension to healthcare with a state-of-the-art facility, 
        specially designed to ensure the comfort of our patients and their families. 
        Because your life is most important to us, we at Sanjeevini have taken all the 
        requisite steps to ensure that our medical and administrative staffs serve you 
        with attention to every minute detail.
      </p>
      
      <!-- Buttons -->
      <div class="hospital-btn-container mt-4">
        <a href="#" class="btn btn-primary me-2">BOOK AN APPOINTMENT</a>
        <a href="#" class="btn btn-success">READ MORE</a>
      </div>
    </div>
  </div>
</section>

<section class="container my-4">
  <div class="row">
    <div class="col-6 col-md-4 col-lg-2">
      <img src="@/assets/image1.jpg" class="img-fluid rounded shadow-sm" alt="Gallery Image 1">
    </div>
    <div class="col-6 col-md-4 col-lg-2">
      <img src="@/assets/image2.jpg" class="img-fluid rounded shadow-sm" alt="Gallery Image 2">
    </div>
    <div class="col-6 col-md-4 col-lg-2">
      <img src="@/assets/image3.jpg" class="img-fluid rounded shadow-sm" alt="Gallery Image 3">
    </div>
    <div class="col-6 col-md-4 col-lg-2">
      <img src="@/assets/image4.jpg" class="img-fluid rounded shadow-sm" alt="Gallery Image 4">
    </div>
    <div class="col-6 col-md-4 col-lg-2">
      <img src="@/assets/image5.jpg" class="img-fluid rounded shadow-sm" alt="Gallery Image 5">
    </div>
    <div class="col-6 col-md-4 col-lg-2">
      <img src="@/assets/image6.jpg" class="img-fluid rounded shadow-sm" alt="Gallery Image 6">
    </div>
  </div>
</section>

<!-- blue blocks-->

<section class="specialities-section text-center my-5">
    <div class="overlay"></div>
    <div class="container position-relative">
        <h2 class="fw-bold text-white">OUR TOP SPECIALITIES</h2>
        <div class="row mt-4">
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue1.png" alt="Cardiology" class="mb-3">
                    <h5 class="fw-bold">Cardiology and Cardiothoracic Surgery</h5>
                    <p>Some of the very best cardiologists and cardiothoracic surgeons form an elite team.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue2.png" alt="Oncology" class="mb-3">
                    <h5 class="fw-bold">Oncology</h5>
                    <p>The Department of Oncology is regarded as one of the best in Bangalore.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue3.png" alt="Vascular Surgery" class="mb-3">
                    <h5 class="fw-bold">Vascular Surgery</h5>
                    <p>Specializing in vascular system management, arteries, veins, and lymphatics.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue4.png" alt="Neurointerventional Radiology" class="mb-3">
                    <h5 class="fw-bold">Neurointerventional Radiology</h5>
                    <p>An endovascular approach to treating vascular diseases.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue5.png" alt="General Medicine" class="mb-3">
                    <h5 class="fw-bold">General Medicine</h5>
                    <p>Focusing on a holistic recovery approach for all patients.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue6.png" alt="Paediatrics & Neonatology" class="mb-3">
                    <h5 class="fw-bold">Paediatrics & Neonatology</h5>
                    <p>Providing compassionate pediatric healthcare.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue7.png" alt="Obstetrics & Gynecology" class="mb-3">
                    <h5 class="fw-bold">Obstetrics & Gynecology</h5>
                    <p>Delivering top-class maternity and gynecology services.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="p-3 text-white">
                    <img src="@/assets/blue8.png" alt="Orthopaedics" class="mb-3">
                    <h5 class="fw-bold">Orthopaedics</h5>
                    <p>Comprehensive treatments for orthopedic issues and joint replacement.</p>
                    <button class="btn btn-warning">Read More</button>
                </div>
            </div>
        </div>
        <button class="btn btn-success">View All</button>
    </div>
</section>

<!----->

<section class="container my-5">
    <!-- OUR JOURNEY -->
    <h2 class="text-center mb-4">OUR JOURNEY</h2>
    <img src="@/assets/time.png" alt="Our Journey" class="journey-image">
    

    <!-- VIDEO SECTION -->
    <h3 class="text-center mt-5">VIDEOS</h3>
    <div class="video-container text-center">
      <div class="video-box">
        <button class="play-btn" @click="playVideo">
          ▶
        </button>
        <p>Watch Our Latest Video Events</p>
      </div>
    </div>

    
  </section>
<!--emergengy-->



  <section class="container my-5">
    <h2 class="text-center fw-bold mb-4">Facilities</h2>

    <!-- Responsive Image Slider with Buttons -->
    <div class="position-relative image-slider rounded-4 overflow-hidden mx-auto">
      <img :src="currentImage" class="img-fluid w-100 h-100 object-cover" alt="Hospital View" />

      <!-- Navigation Buttons -->
      <button class="nav-btn btn btn-dark position-absolute start-0 top-50 translate-middle-y" @click="prevImage">
        &#10094;
      </button>
      <button class="nav-btn btn btn-dark position-absolute end-0 top-50 translate-middle-y" @click="nextImage">
        &#10095;
      </button>
    </div>
  </section>


 


  <!---manegment message--->

  <section class="container my-5">
    <h2 class="text-center fw-bold mb-4">MANAGEMENT MESSAGE</h2>
    
    <div class="row align-items-center mb-4">
        <div class="col-md-3 text-center">
            <img src="@/assets/CEO.jpg" alt="CEO" class="img-fluid rounded">
        </div>
        <div class="col-md-9">
            <div class="bg-light p-4 rounded shadow-sm">
                <h4 class="text-danger fw-bold">CEO</h4>
                <h5>Message</h5>
                <p>
                    As a Director of Sanjeevini Hospital, it is my pleasure to welcome you on behalf of all our dedicated 
                    physicians, surgeons, associate healthcare professionals, and support staff who work together to 
                    provide essential health care services to help you achieve optimum long-term health.
                </p>
                <button class="btn btn-success">READ MORE</button>
            </div>
        </div>
    </div>

    <div class="row align-items-center flex-md-row-reverse">
        <div class="col-md-3 text-center">
            <img src="@/assets/director.jpg" alt="Director" class="img-fluid rounded">
        </div>
        <div class="col-md-9">
            <div class="bg-light p-4 rounded shadow-sm">
                <h4 class="text-danger fw-bold">Director</h4>
                <h5>Message</h5>
                <p>
                    As a Director of Sanjeevini Hospital, it is my pleasure to welcome you on behalf of all our distinguished 
                    doctors and healthcare support professionals. The healthcare provided at Sanjeevini Hospital is all about 
                    people, namely you, our valued customers. From primary and 
                    specialty care to long-term care, Sanjeevini delivers compassionate medical care for every stage of life.
                </p>
                <button class="btn btn-success">READ MORE</button>
            </div>
        </div>
    </div>
</section>

</template>



<script>


export default {
  name: 'HomePage',
  data() {
    return {
      // Carousel Data
      currentSlide: 0,
      slides: [
        { image: require('@/assets/banner.png') },
        { image: require('@/assets/banner2.png') },
        { image: require('@/assets/banner3.png') }
      ],
      interval: null,

      // Emergency Info
      emergencyNumber: '+91 90151 1551',
      hospitalInfo: {
        name: 'Sanjeevini Hospitals',
        tagline1: 'ADVANCED & LATEST TECHNOLOGY',
        tagline2: 'BEST HEALTHCARE SOLUTION'
      },

      // Doctor Categories
      activeCategory: 'cardiology',
      doctorCategories: {
        cardiology: [
          { name: "Dr. Giridhar Kamalapurkar", specialty: "Chief Cardiothoracic Surgeon", image: require('@/assets/docter1.jpeg') },
          { name: "Dr. Ramesh H.C", specialty: "Cardiothoracic Surgeon", image: require('@/assets/docter2.jpeg') }
        ],
        paediatrics: [
          { name: "Dr. Anjali Rao", specialty: "Senior Paediatrician", image: require('@/assets/docter3.jpeg') }
        ],
        obstetrics: [
          { name: "Dr. Sangeetha K", specialty: "Senior Obstetrician", image: require('@/assets/docter4.jpeg') }
        ],
        orthopaedics: [
          { name: "Dr. Prakash Naik", specialty: "Senior Orthopaedic Surgeon", image: require('@/assets/docter5.jpeg') }
        ],
        gastroenterology: [
          { name: "Dr. Shankar Iyer", specialty: "Senior Gastroenterologist", image: require('@/assets/docter6.jpeg') }
        ]
      },

      // Facilities Fullscreen Image Slider
      images: [
        require('@/assets/image3.jpg'),
        require('@/assets/image4.jpg'),
        require('@/assets/image5.jpg')
      ],
      currentIndex: 0
    };
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    // Carousel Functions
    goToSlide(index) {
      this.currentSlide = index;
      this.resetAutoScroll();
    },
    startAutoScroll() {
      this.interval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
    resetAutoScroll() {
      clearInterval(this.interval);
      this.startAutoScroll();
    },

    // General Hospital Interactions
    bookAppointment() {
      alert('Redirecting to appointment booking...');
    },
    readMore() {
      alert('Showing more information...');
    },
    playVideo() {
      alert("Playing video...");
    },

    // Doctor Category Interaction
    setActiveCategory(category) {
      this.activeCategory = category;
    },

    // Facilities Fullscreen Image Slider
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>




<style scoped>
.women-care-hero {
  position: relative;
  height: 80vh;
  overflow: hidden;
  color: white;
}

.slides-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide-overlay {
  position: absolute;
  width: 100%;
  height: 100%;

}

.content-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.hero-title .fw-light {
  font-weight: 300;
  text-transform: none;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.button-container {
  margin-top: 10rem;
}

.appointment-btn {
  background-color:rgb(46, 131, 235);
  border: none;
  padding: 15px 40px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.appointment-btn:hover {
  background-color: #c1121f;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(237, 231, 231, 0.2);
}

/* Dotted Navigation */
.dotted-nav {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(102, 101, 101, 0.5);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: white;
  transform: scale(1.2);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .appointment-btn {
    padding: 12px 30px;
  }
}

@media (max-width: 768px) {
  .women-care-hero {
    height: 80vh;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .appointment-btn {
    padding: 10px 25px;
    font-size: 1rem;
  }
  
  .dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .appointment-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

.hospital-intro {
  background-color: #f8f9fa;
}

.hospital-image {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.emergency-badge {
  position: absolute;
  bottom: -20px;
  right: 20px;
  max-width: 250px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.hospital-content h2 {
  font-size: 2rem;
}

.hospital-content .lead {
  font-size: 1.25rem;
  color: #333;
}

.btn-danger {
  background-color: #e63946;
  border-color: #e63946;
  transition: all 0.3s ease;
}

.btn-danger:hover {
  background-color: #c1121f;
  border-color: #c1121f;
  transform: translateY(-2px);
}

.btn-outline-primary {
  color: #005baa;
  border-color: #005baa;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: #005baa;
  color: white;
  transform: translateY(-2px);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hospital-content h2 {
    font-size: 1.75rem;
  }
  
  .hospital-content .lead {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .emergency-badge {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 20px;
    max-width: 100%;
  }
  
  .button-group {
    flex-direction: column;
    gap: 10px !important;
  }
  
  .btn {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .hospital-content h2 {
    font-size: 1.5rem;
  }
  
  .hospital-description {
    font-size: 0.9rem;
  }
}


.hero-slider {
  background-color: #000;
}

.slide {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.dot {
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
}

.dot.active {
  background-color: white;
  transform: scale(1.2);
}

/* Hospital Info Styles */
.hospital-image {
  transition: transform 0.3s ease;
}

.hospital-image:hover {
  transform: scale(1.02);
}

.emergency-badge {
  position: absolute;
  bottom: -20px;
  right: 20px;
  max-width: 250px;
}

.btn-danger {
  background-color: #e63946;
  border-color: #e63946;
  transition: all 0.3s ease;
}

.btn-danger:hover {
  background-color: #c1121f;
  border-color: #c1121f;
  transform: translateY(-2px);
}

.btn-outline-primary {
  color: #005baa;
  border-color: #005baa;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: #005baa;
  color: white;
  transform: translateY(-2px);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hero-slider h1 {
    font-size: 2.5rem;
  }
  
  .emergency-badge {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 20px;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-slider {
    height: 80vh;
  }
  
  .hero-slider h1 {
    font-size: 2rem;
  }
  
  .button-group {
    flex-direction: column;
    gap: 10px !important;
  }
  
  .btn {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .hero-slider h1 {
    font-size: 1.8rem;
  }
  
  .hospital-description {
    font-size: 0.9rem;
  }
}

.hospital-intro {
  padding: 50px 0;
}

.hospital-img {
  border-radius: 10px;
}

.hospital-title {
  font-weight: bold;
}

.hospital-text {
  color: #555;
  line-height: 1.6;
}
.service-box {
    background: #2196F3; /* Light Blue */
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 5px;
    height: 180px; /* Square shape */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
}

.service-box:hover {
    background: #1976D2; /* Darker Blue */
    transform: scale(1.05);
}

.service-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .service-box {
        height: auto;
        padding: 20px;
    }
}

/*blue blocks*/
.specialities-section {
        position: relative;
        background: url('@/assets/bg.jpg') no-repeat center center/cover;
        padding: 60px 0;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(35, 93, 93, 0.79); /* Light blue transparent overlay */
    }
    
    .specialities-section .container {
        position: relative;
        z-index: 2;
    }

    .specialities-section img {
        width: 50px;
    }

    .specialities-section h5 {
        font-size: 1.2rem;
    }

    .specialities-section p {
        font-size: 0.9rem;
    }


/* Center the image */
    .journey-image {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto; /* Centers the image */
    }

    /* Responsive Styling */
    @media (max-width: 768px) {
        .journey-image {
            width: 90%; /* Adjusts image size for small screens */
        }
    }

/* VIDEO SECTION */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: url('@/assets/bg.jpg') no-repeat center center;
  background-size: cover;
}

.video-box {
  background: rgba(17, 17, 17, 0.8);
  padding: 100px;
  color: white;
  border-radius: 10px;
  text-align: center;
}

.play-btn {
  background: red;
  color: white;
  border: none;
  font-size: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .video-box {
    padding: 80px;
  }

  .play-btn {
    font-size: 16px;
    width: 40px;
    height: 40px;
  }
}

/*emergency*/
.image-slider {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #f8f9fa;
}

/* Make image cover and responsive */
.object-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Navigation Buttons */
.nav-btn {
  font-size: 2rem;
  opacity: 0.6;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 10px 15px;
  z-index: 10;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

/* Responsive Enhancements */
@media (max-width: 768px) {
  .image-slider {
    aspect-ratio: 4 / 3;
  }

  .nav-btn {
    font-size: 1.5rem;
    padding: 8px 12px;
  }
}
</style>