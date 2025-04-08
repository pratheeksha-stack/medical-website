<template>
  <div class="contact-section">
    <div class="container-fluid p-0">
      <!-- Fullscreen Contact Banner -->
      <div class="contact-banner d-flex align-items-center">
        <div class="container">
          <h1 class="contact-title">Our Specialities</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <h2 class="text-center mb-4">OUR SPECIALITIES</h2>

    <div class="row g-4">
      <div class="col-lg-3 col-md-4 col-sm-6 d-flex" v-for="specialty in specialties" :key="specialty.id">
        <div class="card text-center w-100 h-100 d-flex flex-column">
          <div class="card-body flex-grow-1 d-flex flex-column align-items-center">
            <img v-if="specialty.image" :src="specialty.image" class="specialty-icon" alt="Specialty">
            <i v-else :class="specialty.icon" class="specialty-icon"></i>
            <h5 class="card-title mt-2">{{ specialty.name }}</h5>
            <p class="card-text">{{ specialty.shortDesc }}</p>
          </div>
          <div class="card-footer bg-white">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#specialtyModal"
                    @click="showSpecialtyDetails(specialty)">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Specialty Details -->
    <div class="modal fade" id="specialtyModal" tabindex="-1" aria-labelledby="specialtyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="specialtyModalLabel">{{ selectedSpecialty.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img v-if="selectedSpecialty.image" :src="selectedSpecialty.image" class="specialty-img mb-3" alt="Specialty">
            <h6>{{ selectedSpecialty.name }}</h6>
            <p>{{ selectedSpecialty.longDesc }}</p>
            <button class="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialties: [
        { id: 1, name: "Accident and Emergency Care", shortDesc: "Quick emergency response and medical care.", longDesc: "We provide 24/7 emergency services...", image: require('@/assets/emergency.png') },
        { id: 2, name: "Interventional Radiology", shortDesc: "Advanced medical imaging & treatment.", longDesc: "Interventional radiology uses imaging...", icon: "fas fa-x-ray" },
        { id: 3, name: "Pacemaker", shortDesc: "Helps regulate heartbeat.", longDesc: "A pacemaker is a device recommended...", icon: "fas fa-heartbeat" },
        { id: 4, name: "Paediatric Orthopaedic", shortDesc: "Expert care for child bone disorders.", longDesc: "Paediatric orthopaedics focuses on...", icon: "fas fa-child" },
        { id: 5, name: "Angioplasty and Stenting", shortDesc: "Minimally invasive heart procedure.", longDesc: "Angioplasty is a procedure to open...", icon: "fas fa-heart" },
        { id: 6, name: "Neuro Surgery", shortDesc: "Advanced brain & spine surgery.", longDesc: "Neurosurgery deals with brain...", icon: "fas fa-brain" },
        { id: 7, name: "Neurology", shortDesc: "Deals with nervous system disorders.", longDesc: "Neurology studies and treats disorders...", icon: "fas fa-brain" },
        { id: 8, name: "Comprehensive Cardiac Care", shortDesc: "Expert heart care services.", longDesc: "Our cardiac center provides expert...", icon: "fas fa-heart" }
      ],
      selectedSpecialty: { name: "", longDesc: "", image: "" }
    };
  },
  methods: {
    showSpecialtyDetails(specialty) {
      this.selectedSpecialty = specialty;
    }
  }
};
</script>

<style>
/* Contact Banner Styling */
.contact-banner {
  background: url('@/assets/docter444.jpeg') no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 5%;
}

.contact-title {
  color: #112244;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 100px;
}

/* Specialty Card Styling */
.card {
  padding: 20px;
  border: 1px solid #ddd;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.card-body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-footer {
  border-top: none;
  margin-top: auto;
}

/* Button Styling */
.btn-success {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.btn-success:hover {
  background-color: #218838;
  transform: scale(1.1);
}

/* Specialty Icon */
.specialty-icon {
  font-size: 40px;
  color: #007bff;
  margin-bottom: 10px;
  max-width: 100%;
  height: auto;
}

/* Modal Image */
.specialty-img {
  width: 100%;
  border-radius: 5px;
}

/* Responsive Tweaks */
@media (max-width: 768px) {
  .contact-banner {
    height: 60vh;
    padding-left: 2%;
    justify-content: center;
    text-align: center;
  }

  .contact-title {
    font-size: 2rem;
    margin-top: 50px;
  }
}
</style>
