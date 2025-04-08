<template>
  <div class="contact-section">
    <div class="container-fluid p-0">
      <!-- Fullscreen Contact Banner -->
      <div class="contact-banner d-flex align-items-center">
        <div class="container">
          <h1 class="contact-title">BLOGS</h1>
          
        </div>
      </div>
    </div>
  </div>

  <!---->

  <div class="container my-5">
    <div class="row">
      <div v-for="(post, index) in blogPosts" :key="index" class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="post.image" class="card-img-top" alt="Blog Image">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <a href="#" class="text-primary fw-bold">
              ➜ Read More
            </a>
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
      blogPosts: [
        {
          image: require('@/assets/blog1.jpg'),
          title: "Cardiac Emergencies: Signs, First Aid, and Timely Treatment",
          description: "The number of people suffering from heart attacks has gotten up significantly..."
        },
        {
          image: require('@/assets/blog2.jpg'),
          title: "Cervical Pain: Causes, Treatment and Prevention",
          description: "Are you suffering from Cervical pain? Are you looking for details related to it..."
        },
        {
          image: require('@/assets/blog3.jpg'),
          title: "Varicose veins – Know about its treatment",
          description: "If you are thinking about varicose veins, we are here to help you with all the answers..."
        },
        {
          image: require('@/assets/blog4.jpg'),
          title: "5 Neurological Disorders You Can’t Afford to Ignore",
          description: "The human nervous system is a complex network that governs everything..."
        },
        {
          image: require('@/assets/blog5.jpg'),
          title: "Difference Between Heart Attack & Cardiac Arrest",
          description: "In today’s fast-paced world, heart health is paramount. Two terms that are often confused..."
        },
        {
          image: require('@/assets/blog6.jpg'),
          title: "Irregular Periods: Understanding the Causes and Solutions",
          description: "Irregular periods, also known as oligomenorrhea or menorrhagia, can be a source of concern..."
        },
        {
          image: require('@/assets/blog7.jpg'),
          title: "Minimal Access Surgery-The Most Practical Option for Various G...",
          description: "In the realm of gynecological healthcare, the advancement of medical technology..."
        },
        {
          image: require('@/assets/blog8.jpg'),
          title: "The Evolution of Advanced Brain Stroke Centers: Optimizing Str...",
          description: "In healthcare, advancements in stroke management have revolutionized patient outcomes..."
        },
        {
          image: require('@/assets/blog9.jpg'),
          title: "Heart Diseases That Require Surgery – Know about them",
          description: "In the realm of cardiovascular health, some conditions necessitate surgical interventions..."
        },
        {
          image: require('@/assets/blog10.jpg'),
          title: "Low Blood Pressure in Pregnancy and It’s Treatment",
          description: "Pregnancy is a miraculous journey filled with joy and anticipation, but it also comes with challenges..."
        },
        {
          image: require('@/assets/blog11.jpg'),
          title: "Navigating Life with Parkinson’s: Insights into Symptoms, Trea...",
          description: "Living with Parkinson’s disease can be challenging, both for individuals diagnosed with the condition..."
        },
        {
          image: require('@/assets/blog12.jpg'),
          title: "Common gynecological Disorders and Their treatments",
          description: "In the vibrant city of Bangalore, women's health takes center stage with a plethora of expert gynecologists..."
        }
      ]
    };
  }
};
      
</script>

<style scoped>
/* Contact Banner Styling */
.contact-banner {
  background: url('@/assets/docter33.jpeg') no-repeat center center;
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

/**/.card img {
  height: 200px; /* Adjust image height */
  object-fit: cover;
}

.card {
  border-radius: 8px;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.03);
}

.card-body a {
  text-decoration: none;
}

.card-body a:hover {
  text-decoration: underline;
}
</style>