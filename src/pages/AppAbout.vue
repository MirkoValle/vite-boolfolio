<script>
export default {
data() {
return {
    team: [
    { id: 1, name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Mike Johnson", role: "CFO", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Emily Davis", role: "COO", image: "https://via.placeholder.com/150" }
    ]
};
}
};
</script>

<template>
<div class="about-us-page">
    <!-- Header -->
    <header class="bg-primary text-white text-center py-5">
    <div class="container">
        <h1>About Us</h1>
        <p class="lead">Discover more about our journey and our mission.</p>
    </div>
    </header>

    <!-- Content Section -->
    <section class="container my-5">
    <div class="row">
        <!-- Our Story -->
        <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body">
            <h2 class="card-title">Our Story</h2>
            <p class="card-text">
                Founded in 2020, Your Company Name has grown from a small startup to a leading provider of innovative solutions. Our journey began with a passion for excellence and a commitment to making a difference.
            </p>
            <p class="card-text">
                We believe in the power of collaboration, and our success is a testament to the hard work and dedication of our diverse team.
            </p>
            </div>
        </div>
        </div>

        <!-- Our Mission -->
        <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body">
            <h2 class="card-title">Our Mission</h2>
            <p class="card-text">
                Our mission is to provide high-quality products that improve the lives of our customers. We are committed to innovation, sustainability, and creating value for our stakeholders.
            </p>
            <p class="card-text">
                We strive to be a leader in our industry, setting standards of excellence in everything we do.
            </p>
            </div>
        </div>
        </div>
    </div>

    <!-- Our Team Section -->
    <div class="team-section text-center mt-5">
        <h2 class="mb-4">Meet Our Team</h2>
        <div class="row">
        <div class="col-lg-3 col-md-6 mb-4" v-for="member in team" :key="member.id">
            <div class="card shadow-sm">
            <img :src="member.image" class="card-img-top" :alt="member.name">
            <div class="card-body">
                <h5 class="card-title">{{ member.name }}</h5>
                <p class="card-text">{{ member.role }}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</div>
</template>

<style lang="scss" scoped>
.about-us-page {
  font-family: 'Arial', sans-serif;
}

header {
  background-color: #007bff;
  color: white;
  padding: 50px 0;
}

.card {
  border: none;
  border-radius: 8px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.team-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}
</style>