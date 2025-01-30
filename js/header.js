// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear el header
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
        <div class="container">
            <div class="menu">
                <a href="inicio.html" class="contenedor-imagen">
                    <img src="../img/icon.png" alt="logo" class="imgLogo" width="180" height="auto"/>
                </a>
                <nav class="navbar" id="navbar">
                    <ul>
                        <li style="--item-index: 0"><a href="inicio.html">Inicio</a></li>
                        <li style="--item-index: 1"><a href="../html/nosotros.html">Servicios</a></li>
                        <li style="--item-index: 2"><a href="../html/contacto.html">Sobre Nosotros</a></li>
                        <li style="--item-index: 3"><a href="../html/redes.html">Noticias</a></li>
                        <li style="--item-index: 4"><a href="../html/redes.html">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    `;
  
    // Agregar el header al body
    document.body.prepend(header);
});