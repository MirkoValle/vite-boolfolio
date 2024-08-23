<script>

export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Web Development",
          description: "We build responsive and modern websites.",
          image: "https://via.placeholder.com/350x150",
          link: "/services/web-development"
        },
        {
          id: 2,
          title: "Digital Marketing",
          description: "Boost your business with our digital marketing services.",
          image: "https://via.placeholder.com/350x150",
          link: "/services/digital-marketing"
        },
        {
          id: 3,
          title: "SEO Optimization",
          description: "Improve your search engine ranking with our SEO services.",
          image: "https://via.placeholder.com/350x150",
          link: "/services/seo-optimization"
        }
      ]
    };
  }
};
</script>

<template>
 <div class="home-page">
    <!-- Hero Section -->
    <header class="hero-section bg-primary text-white text-center py-5">
      <div class="container">
        <h1 class="display-4">Welcome to Our Website</h1>
        <p class="lead">We provide high-quality solutions to help you achieve your goals.</p>
        <router-link to="/about" class="btn btn-light btn-lg mt-3">Learn More About Us</router-link>
      </div>
    </header>

    <!-- Services Section -->
    <section class="services-section py-5">
      <div class="container">
        <h2 class="text-center mb-4">Our Services</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="service in services" :key="service.id">
            <div class="card h-100 shadow-sm">
              <img :src="service.image" class="card-img-top" :alt="service.title">
              <div class="card-body text-center">
                <h5 class="card-title">{{ service.title }}</h5>
                <p class="card-text">{{ service.description }}</p>
                <router-link :to="service.link" class="btn btn-primary">Learn More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section bg-light py-5">
      <div class="container text-center">
        <h2 class="mb-4">Get in Touch</h2>
        <p class="lead">Have any questions? We’d love to hear from you.</p>
        <router-link to="/contact" class="btn btn-primary btn-lg mt-3">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  font-family: 'Arial', sans-serif;
}

.hero-section {
  background-image: url('https://via.placeholder.com/1920x600');
  background-size: cover;
  background-position: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.services-section {
  background-color: #f8f9fa;
}

.card {
  border: none;
  border-radius: 8px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.contact-section {
  background-color: #e9ecef;
}

.contact-section h2 {
  font-size: 2rem;
}
</style>