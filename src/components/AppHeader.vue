<script>
export default{
    data() {
        return{
            headerLinks : [
                {
                    'name': 'home',
                    'label': 'Home'
                },
                {
                    'name': 'projects',
                    'label': 'Projects'
                },
                {
                    'name': 'about',
                    'label': 'About',
                }
            ],
        }
    }
}
</script>

<template>
    <ul class="d-flex justify-content-center list-unstyled align-items-center py-2 nav-links">
        <li v-for="link in headerLinks" class="me-5 nav-item">
            <router-link :to="{ name:link.name }" class="text-decoration-none nav-link">
                {{ link.label }}
            </router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.nav-links {
    background-color: #f8f9fa; /* Colore di sfondo leggero per contrasto */
    border-radius: 5px; /* Arrotonda gli angoli della barra di navigazione */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Aggiunge un'ombra delicata */
    padding: 10px 20px; /* Padding interno per migliorare l'aspetto */
}

.nav-item {
    position: relative; /* Necessario per il pseudo-elemento dell'animazione */
    transition: transform 0.2s ease-in-out;
}

.nav-link {
    color: #007bff; /* Colore principale per i link */
    font-weight: 500; /* Peso del font per rendere il testo più evidente */
    padding: 5px 10px; /* Spaziatura interna dei link */
    transition: color 0.3s ease, border-bottom 0.3s ease; /* Transizione fluida per il colore e il bordo inferiore */
}

.nav-link:hover {
    color: #0056b3; /* Colore del testo al passaggio del mouse */
    border-bottom: 2px solid #0056b3; /* Sottolinea il link al passaggio del mouse */
}

.nav-item:hover {
    transform: translateY(-2px); /* Leggera traslazione verso l'alto al passaggio del mouse */
}

.nav-link::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0056b3; /* Colore della barra di sottolineatura */
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
}

.nav-link:hover::before {
    visibility: visible;
    transform: scaleX(1);
}
</style>