
 <template>
 
  <div class="contact-section">
    <div class="container-fluid p-0">
      <!-- Fullscreen Contact Banner -->
      <div class="contact-banner d-flex align-items-center">
        <div class="container">
          <h1 class="contact-title">Health Checkup</h1>
        </div>
      </div>
    </div>
  </div>

  <!---->
  <div class="container my-5">
    <div class="row">
        <!-- Loop through all 8 cards -->
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health1.jpeg" class="card-img-top" alt="Cancer Screening">
                    <span class="price-badge">₹4,800.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Cancer Screening Profile – Female</h6>
                    
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health2.jpeg" class="card-img-top" alt="Cancer Checkup">
                    <span class="price-badge">₹3,500.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Cancer Checkup Male</h6>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health3.jpeg" class="card-img-top" alt="Cardiac Checkup">
                    <span class="price-badge">₹2,999.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Comprehensive Cardiac Health Checkup</h6>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health4.jpeg" class="card-img-top" alt="Comprehensive Checkup">
                    <span class="price-badge">₹4,800.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Comprehensive Check-Up</h6>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health5.jpeg" class="card-img-top" alt="Core Fitness Advance">
                    <span class="price-badge">₹3,000.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Core Fitness Advance</h6>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health6.jpeg" class="card-img-top" alt="Core Fitness Basic">
                    <span class="price-badge">₹999.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Core Fitness Basic</h6>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health7.jpeg" class="card-img-top" alt="Core Fitness Pro">
                    <span class="price-badge">₹3,499.00</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Core Fitness Professional</h6>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow h-100">
                <div class="position-relative">
                    <img src="@/assets/health8.jpeg" class="card-img-top" alt="Diabetes Checkup">
                    <span class="price-badge">₹4,999</span>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title">Diabetes Checkup</h6>
                </div>
            </div>
        </div>

    </div>
</div>

    <!-- Pagination -->
    <nav>
        <ul class="pagination justify-content-center">
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>


  </template>

  <style>
  /* Contact Banner Styling */
.contact-banner {
  background: url('@/assets/docter66.jpeg') no-repeat center center;
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

/**/
.card {
            border: none;
            transition: 0.3s;
            height: 100%; /* Ensures all cards have equal height */
        }

        .card:hover {
            transform: scale(1.03);
        }

        .card-img-top {
            object-fit: cover;
            height: 200px; /* Ensures all images have the same height */
        }

        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .price-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: #28a745;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-weight: bold;
        }

        .view-btn {
            background-color: #28a745;
            color: white;
            border-radius: 5px;
            padding: 5px 15px;
            font-weight: bold;
        }

  </style>