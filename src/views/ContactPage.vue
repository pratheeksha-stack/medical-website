<template>
  <div class="contact-section">
    <div class="container-fluid p-0">
      <!-- Fullscreen Contact Banner -->
      <div class="contact-banner d-flex align-items-center">
        <div class="container">
          <h1 class="contact-title">CONTACT US</h1>
          
        </div>
      </div>
    </div>
  </div>

  <!---->


 
  <div class="container my-4">
    <div class="row justify-content-center">
      <!-- Emergency -->
      <div class="col-md-4 col-sm-12 d-flex align-items-center mb-3">
        <div class="icon-box emergency-icon">
          <img src="@/assets/emergency1.png" class="icon-img" alt="Emergency" />
        </div>
        <div class="info-box">
          <h6>EMERGENCY</h6>
          <a href="tel:+916362977715">+91 6362977715</a>
        </div>
      </div>

      <!-- Appointment -->
      <div class="col-md-4 col-sm-12 d-flex align-items-center mb-3">
        <div class="icon-box appointment-icon">
          <img src="@/assets/appointment.png" class="icon-img" alt="Appointment" />
        </div>
        <div class="info-box">
          <h6>APPOINTMENT</h6>
          <a href="tel:+917676000676">+91 7676000676</a> <br />
          <a href="tel:+919015115511">+91 9015115511</a>
        </div>
      </div>

      <!-- Email -->
      <div class="col-md-4 col-sm-12 d-flex align-items-center mb-3">
        <div class="icon-box email-icon">
          <img src="@/assets/email.png" class="icon-img" alt="Email" />
        </div>
        <div class="info-box">
          <h6>EMAIL</h6>
          <a href="mailto:pro@sanjeevinihospital.com">pro@sanjeevinihospital.com</a>
        </div>
      </div>
    </div>
  </div>

  <!---->
  <div class="container my-5">
    <div class="row">
        <!-- Contact Form Section -->
        <div class="col-lg-6">
            <div class="contact-container">
                <h4 class="contact-title mb-4">GET IN TOUCH</h4>
                <form>
                    <div class="mb-3">
                        <label class="form-label">First Name*</label>
                        <input type="text" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mobile No*</label>
                        <input type="tel" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Your Email*</label>
                        <input type="email" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Message</label>
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn-submit">SUBMIT</button>
                </form>
            </div>
        </div>

        <!-- Google Map Section -->
        <div class="col-lg-6 d-flex align-items-stretch">
            <div class="map-container w-100">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.764131599171!2d77.54842637507567!3d13.01527258727039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df5f9f1bb4d%3A0xc7d27b0f6a3b0ea4!2sSanjeevini%20Heart%20and%20Multi-Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1712240036471!5m2!1sen!2sin" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
/* Box and Layout Styling */
.icon-box {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.emergency-icon { background-color: #0072bc; } /* Blue */
.appointment-icon { background-color: #e6193c; } /* Red */
.email-icon { background-color: #2c9b42; } /* Green */

.icon-img {
  width: 50px; /* Keeps the image size similar to icons */
  height: 50px;
  object-fit: contain; /* Ensures the full image is visible without cropping */
}

.info-box {
  background: #f8f8f8;
  padding: 15px;
  flex: 1;
  min-width: 180px;
}

h6 {
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: #0033cc;
  font-weight: bold;
}
</style>


<style scoped>
/* Contact Banner Styling */
.contact-banner {
  background: url('@/assets/docter3.jpeg') no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 80vh; /* Adjust height */
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 5%;
}

/* Contact Title Styling */
.contact-title {
  color: #112244;  /* Dark navy blue */
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 100px;
}

/* Box and Layout Styling */
.icon-box {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
}

.emergency-icon { background-color: #0072bc; } /* Blue */
.appointment-icon { background-color: #e6193c; } /* Red */
.email-icon { background-color: #2c9b42; } /* Green */

.info-box {
  background: #f8f8f8;
  padding: 15px;
  flex: 1;
  min-width: 180px;
}

h6 {
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: #0033cc;
  font-weight: bold;
}

.icon {
  font-size: 5rem;
}

/*---*/
.contact-container {
            background: #f8f8f8;
            padding: 30px;
            border-radius: 8px;
            height: 100%;
        }

        .contact-title {
            font-weight: bold;
            color: #1d3557;
        }

        .form-control {
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        .btn-submit {
            background-color: #e6193c;
            color: #fff;
            font-weight: bold;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
        }

        .btn-submit:hover {
            background-color: #c2172e;
        }

        /* Full-screen map styling */
        .map-container {
            height: 100%;
            width: 100%;
            min-height: 500px;
            border-radius: 8px;
            overflow: hidden;
        }

        .map-container iframe {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 768px) {
            .map-container {
                height: 300px; /* Adjust height for smaller screens */
            }
        }
        </style>
