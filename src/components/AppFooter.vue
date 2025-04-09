<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- Your main content goes here -->
    </div>

    <footer class="footer bg-light border-top">
      <div class="container py-3">
        <div class="row">
          <!-- Contact Section -->
          <div class="col-md-3 col-12 mb-4">
            <h6 class="fw-bold">Contact</h6>
            <p class="mb-1">Sanjeevini Super Speciality Hospital</p>
            <p class="mb-1">Mahalakshmi Layout, Bengaluru - 560086</p>
            <p class="mb-1 fw-semibold text-success">+91 9015115511</p>
            <p class="mb-1">pro@sanjeevinihospital.com</p>
            <p class="mb-2">www.sanjeevinihospital.com</p>
            <div>
              <a href="#" class="me-2"><i class="fab fa-facebook fa-lg text-success"></i></a>
              <a href="#" class="me-2"><i class="fab fa-instagram fa-lg text-success"></i></a>
              <a href="#" class="me-2"><i class="fab fa-twitter fa-lg text-success"></i></a>
              <a href="#"><i class="fab fa-youtube fa-lg text-success"></i></a>
            </div>
          </div>

          <!-- Specialities -->
          <div class="col-md-3 col-6 mb-4">
            <h6 class="fw-bold">Specialities</h6>
            <ul class="list-unstyled">
              <li><i class="fas fa-heartbeat me-2"></i>Cardiology</li>
              <li><i class="fas fa-brain me-2"></i>Neurology</li>
              <li><i class="fas fa-procedures me-2"></i>Neuro Surgery</li>
              <li><i class="fas fa-dna me-2"></i>Oncology</li>
              <li><i class="fas fa-stethoscope me-2"></i>Vascular Surgery</li>
              <li><i class="fas fa-plus me-2"></i>More Specialities</li>
            </ul>
          </div>

          <!-- Quick Links -->
          <div class="col-md-3 col-6 mb-4">
            <h6 class="fw-bold">Quick Links</h6>
            <ul class="list-unstyled">
              <li><i class="fas fa-info-circle me-2"></i>About Us</li>
              <li><i class="fas fa-phone-alt me-2"></i>Contact Us</li>
              <li><i class="fas fa-images me-2"></i>Gallery</li>
              <li><i class="fas fa-calendar-check me-2"></i>Appointment</li>
              <li><i class="fas fa-shield-alt me-2"></i>Insurance</li>
            </ul>
          </div>

          <!-- About & Legal -->
          <div class="col-md-3 col-12">
            <h6 class="fw-bold">About</h6>
            <ul class="list-unstyled">
              <li><i class="fas fa-user-tie me-2"></i>CEO Message</li>
              <li><i class="fas fa-user-md me-2"></i>Our Doctors</li>
            </ul>
            <h6 class="fw-bold mt-3">Legal</h6>
            <ul class="list-unstyled">
              <li><i class="fas fa-receipt me-2"></i>Return Policy</li>
              <li><i class="fas fa-file-contract me-2"></i>Terms & Conditions</li>
              <li><i class="fas fa-lock me-2"></i>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom bg-danger text-white text-center py-2">
        <p class="mb-1 small">
          &copy; 2025 Sanjeevini Hospital. All Rights Reserved |
          <a href="#" class="text-white text-decoration-underline">Terms & Conditions</a> |
          <a href="#" class="text-white text-decoration-underline">Privacy Policy</a>
        </p>
        <p class="mb-0 small">Design & Develop by VM Softsys LLP</p>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1;
}

.footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
}

.footer ul {
  padding-left: 0;
}

.footer ul li {
  list-style: none;
  margin-bottom: 6px;
}

.footer a {
  text-decoration: none;
  color: inherit;
}

.footer a:hover {
  color: #1976d2;
}

.footer-bottom {
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer .row {
    text-align: center;
  }

  .footer .col-6,
  .footer .col-12 {
    text-align: center;
  }
}
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1;
}

.footer {
  width: 100%;
  background-color: #f8f9fa;
  margin-top: auto; /* Pushes footer to bottom only when content is less */
}


</style>
