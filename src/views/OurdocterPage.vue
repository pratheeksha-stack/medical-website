<template>
  <div class="contact-section">
    <div class="container-fluid p-0">
      <!-- Fullscreen Contact Banner -->
      <div class="contact-banner d-flex align-items-center">
        <div class="container">
          <h1 class="contact-title">Our Doctors</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- Doctor Categories -->
  <div class="container my-5">
    <div class="row g-4">
      <div class="col-md-4 col-sm-6" v-for="doctor in doctors" :key="doctor.id">
        <div class="card">
          <h5>{{ doctor.category }}</h5>
          <button class="btn view-btn" data-bs-toggle="modal" data-bs-target="#doctorModal"
                  @click="showDoctorProfile(doctor)">
            VIEW DOCTORS
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Doctor Profile Modal -->
  <div class="modal fade" id="doctorModal" tabindex="-1" aria-labelledby="doctorModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="doctorModalLabel">{{ selectedDoctor.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <img :src="selectedDoctor.image" class="doctor-img mb-3" alt="Doctor">
          <h6>{{ selectedDoctor.specialization }}</h6>
          <p>Expert in {{ selectedDoctor.specialization }} with over 10 years of experience.</p>
          <button class="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctors: [
        { id: 1, category: "CARDIOLOGY", name: "Dr. John Smith", specialization: "Cardiologist", image: require('@/assets/docter1.jpeg') },
        { id: 2, category: "PAEDIATRICS & NEONATOLOGY", name: "Dr. Lisa Ray", specialization: "Paediatrician", image: require('@/assets/docter2.jpeg') },
        { id: 3, category: "OBSTETRICS & GYNAECOLOGY", name: "Dr. Sophia Patel", specialization: "Gynecologist", image: require('@/assets/docter3.jpeg') },
        { id: 4, category: "ORTHOPAEDICS", name: "Dr. David Clark", specialization: "Orthopedic Surgeon", image: require('@/assets/docter4.jpeg') },
        { id: 5, category: "ENT, HEAD & NECK SURGERY", name: "Dr. Emily White", specialization: "ENT Specialist", image: require('@/assets/docter5.jpeg') },
        { id: 6, category: "ONCOLOGY", name: "Dr. Robert Williams", specialization: "Oncologist", image: require('@/assets/docter6.jpeg') },
        { id: 7, category: "GASTROENTEROLOGY", name: "Dr. Olivia Brown", specialization: "Gastroenterologist", image: require('@/assets/docter33.jpeg') },
        { id: 8, category: "RENAL SCIENCES", name: "Dr. Michael Johnson", specialization: "Nephrologist", image: require('@/assets/docter44.jpeg') },
      ],
      selectedDoctor: { name: "", specialization: "", image: "" },
    };
  },
  methods: {
    showDoctorProfile(doctor) {
      this.selectedDoctor = doctor;
    },
  },
};
</script>

<style scoped>
/* Contact Banner Styling */
.contact-banner {
  background: url('@/assets/docter44.jpeg') no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 5%;
}

/* Contact Title Styling */
.contact-title {
  color: #112244;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 100px;
}

/* Doctor Cards */
.card {
  border: 2px solid #007bff;
  text-align: center;
  padding: 20px;
  transition: 0.3s;
  height: 100%;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.03);
}

/* View Button */
.view-btn {
  background-color: #28a745 !important;
  color: white !important;
  border: none !important;
  padding: 10px 15px !important;
  font-weight: bold !important;
  border-radius: 5px !important;
  transition: all 0.3s ease-in-out !important;
}

/* Hover Effect on Button */
.view-btn:hover {
  background-color: #218838 !important;
  transform: scale(1.1) !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}

/* Doctor Image in Modal */
.doctor-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #007bff;
  object-fit: cover;
}
</style>
