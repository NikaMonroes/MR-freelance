document.addEventListener('DOMContentLoaded', function() {
    // Mapeo de botones a contenedores de tablas
    var tables = {
        aboutMeButton: document.getElementById('tableContainer1'),
        identidadButton: document.getElementById('tableContainer2'),
        impresosButton: document.getElementById('tableContainer3'),
        webButton: document.getElementById('tableContainer4'),
        editorialButton: document.getElementById('tableContainer5')
    };

    // Contenidos de las tablas para cada botón
    var tableContents = {
        aboutMeButton: `
        <div class="iso-section wow fadeInUp" data-wow-delay="0.2s">
             <table width="80%" border="0" align="center" cellspacing="0" cellpadding="0">
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: center;">Ofrezco soluciones de diseño gráfico que impulsan la identidad de marcas y negocios, brindando servicios efectivos y personalizados para ayudarte a destacar en el mercado.</span> </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: left; font-size: medium"><br> <blockquote>
        Desde 2008, he trabajado como freelance ayudando a emprendedores a impulsar sus negocios mediante el diseño de logotipos, empaques, material promocional y la creación de una sólida imagen de marca. Además, he colaborado con diversos profesionales en la elaboración de publicaciones editoriales y en el desarrollo de páginas web que destacan sus logros y proyectos. Mi objetivo es proporcionar soluciones de diseño que reflejen fielmente la identidad de cada cliente y maximicen su impacto en el mercado.
    </blockquote></td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
            
        `,
        identidadButton: `
        <div class="iso-section wow fadeInUp" data-wow-delay="0.2s">
            <table width="80%" border="0" align="center" cellspacing="0" cellpadding="0">
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: center;">Diseño tu identidad corporativa, incluyendo logotipos, papelería y elementos visuales que refuercen tu presencia en el mercado.</span> </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: left; font-size: medium;"><br><blockquote><strong>Logotipo: </strong>

                        Diseño logotipos únicos y personalizados, entregados en formatos vectorizados para impresión de cualquier tamaño, desde tarjetas hasta vallas publicitarias.<br>
                        <strong>Rediseño de Logo: </strong>
                        Actualizo logotipos existentes para mejorar su estética y funcionalidad, adaptándolos a las nuevas tendencias y necesidades de tu marca.<br>
                        <strong>Manual de Identidad Visual: </strong>
                        Elaboro guías completas de identidad visual para asegurar una comunicación consistente en todos los materiales de tu marca.<br>
                        <strong>Diseño de Papelería: </strong>
                        Desarrollo elementos de papelería profesional como tarjetas de presentación, hojas membretadas y sobres para reforzar tu imagen corporativa.
                        </blockquote>
                        </td>
				<td>&nbsp;</td>

                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        `,
		webButton: `
        <div class="iso-section wow fadeInUp" data-wow-delay="0.2s">
            <table width="80%" border="0" align="center" cellspacing="0" cellpadding="0">
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: center;">Desarrollo sitios web y landing pages a medida para tu marca, creando interfaces intuitivas y experiencias de usuario excepcionales que destacan en el mercado.<td>&nbsp;</td> 
                </tr>
                   <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: left; font-size: medium;"><br><blockquote><strong>Landing Page: </strong>
                        Desarrollo de páginas de aterrizaje optimizadas para convertir visitas en clientes.<br>
                        <strong>Diseño Web Personal y Corporativo: </strong>
                        Creación de sitios web que reflejan tu identidad o la identidad de tu empresa y comunican tu mensaje de manera efectiva.<br>
                        <strong>Ecommerce: </strong>
                        Diseño de tiendas en línea con interfaces intuitivas para facilitar las compras y aumentar las ventas.<br>
                        <strong>Web Master: </strong>
                        Servicios de mantenimiento y actualización para asegurar el buen funcionamiento de tu sitio web.<br>
                        <strong>SEO: </strong>
                        Optimización de motores de búsqueda para mejorar la visibilidad de tu sitio web y aumentar su ranking.<br>
                        <strong>Redes Sociales: </strong>
                        Diseño de publicidad visual para redes sociales, que incluyen la creación de flyers y banners llamativos, así como la edición de videos impactantes y para promocionar tu negocio en plataformas sociales.
                        </blockquote>
                        </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        `,
		impresosButton: `
        <div class="iso-section wow fadeInUp" data-wow-delay="0.2s">
      	   <table width="80%" border="0" align="center" cellspacing="0" cellpadding="0">
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: center;">Servicios de diseño para impresos, como folletos, tarjetas de presentación, banners y otros materiales físicos para tu negocio.</span></td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: left; font-size: medium;"><br><blockquote><strong>Material Promocional: </strong>
                    Diseño de folletos, volantes, afiches y pósters para comunicar eficazmente los valores y servicios de tu empresa, además de campañas publicitarias y eventos especiales.<br>
                    <strong>Papelería Corporativa: </strong>
                    Diseño de tarjetas de presentación personalizadas, invitaciones elegantes para eventos corporativos y sociales, y etiquetas para productos, asegurando una presentación profesional.<br>
                    <strong>Empaques y Mockups: </strong>
                    Creación de empaques innovadores y presentaciones visuales realistas para productos.<br>
                    <strong>Material POP: </strong>
                    Desarrollo de material de punto de venta, incluyendo exhibidores, banners y displays, para atraer la atención en el lugar de venta.<br>
                    <strong>Catálogos: </strong>
                    Diseño de catálogos detallados para presentar tus productos o servicios de manera profesional.
                    </blockquote>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        `,
        editorialButton: `
         <div class="iso-section wow fadeInUp" data-wow-delay="0.2s">
            <table width="80%" border="0" align="center" cellspacing="0" cellpadding="0">
                <tr>
                    <td>&nbsp;</td>
                    <td style="text-align: center;">Maquetación para publicaciones, incluyendo revistas, libros, y otros materiales impresos con un enfoque en diseño atractivo y funcional.</span> </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        `
    };

    // Función para ocultar todas las tablas
    function hideAllTables() {
        Object.values(tables).forEach(table => {
            table.style.display = 'none';
        });
    }

    // Asignar eventos a los botones
    Object.keys(tables).forEach(buttonId => {
        var button = document.getElementById(buttonId);
        var tableContainer = tables[buttonId];

        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace haga scroll a la parte superior de la página

            // Ocultar todas las tablas
            hideAllTables();

            // Si la tabla está vacía, cargar el contenido y mostrarla
            if (tableContainer.innerHTML === '') {
                tableContainer.innerHTML = tableContents[buttonId];
            }
            // Mostrar o esconder la tabla según su estado actual
            tableContainer.style.display = tableContainer.style.display === 'none' || tableContainer.style.display === '' ? 'block' : 'none';
        });
    });
});

// tabs servicios
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const serviceItems = document.querySelectorAll(".service-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remover la clase 'active' de todas las pestañas y secciones
            tabs.forEach(t => t.classList.remove("active"));
            serviceItems.forEach(s => {
                s.style.display = "none";  // Ocultar el contenido inmediatamente
                s.classList.remove("active");
            });

            // Agregar la clase 'active' solo a la pestaña seleccionada
            this.classList.add("active");
            const targetContent = document.getElementById(this.dataset.target);

            // Mostrar el contenido primero, luego aplicar la animación
            targetContent.style.display = "block";

            setTimeout(() => {
                targetContent.classList.add("active");
            }, 10);  // Pequeño retraso para que el navegador procese el cambio
        });
    });
});


// formulario truco para permanecer en la pagina
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita la redirección

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          alert("¡Mensaje enviado con éxito!"); // Puedes personalizarlo mejor
          form.reset(); // Limpia el formulario
        } else {
          alert("Hubo un error, intenta de nuevo.");
        }
      } catch (error) {
        alert("Error al enviar el mensaje.");
      }
    });
  });