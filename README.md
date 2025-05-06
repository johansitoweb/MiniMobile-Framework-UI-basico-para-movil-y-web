# MiniMobile-Framework
Aprende a crear un mini framework multiplataforma con HTML , CSS , JS Y MAS que te permite crear version movil y version web


**MiniMobile: Documentación Básica**

**Introducción:**

MiniMobile es un framework ligero para la creación de interfaces de usuario móviles sencillas y estilizadas, inspirado en la facilidad de uso de jQuery Mobile y los componentes visuales de Ionic. Se basa en HTML5, CSS3 y JavaScript vanilla, con el objetivo de proporcionar una forma rápida y eficiente de construir aplicaciones web móviles con componentes comunes como barras de aplicación, sistemas de rejilla, tarjetas y botones.

**Componentes:**

1.  **`<Joha-app>`**
    * **Descripción:** Contenedor principal de la aplicación. Debe envolver todos los demás componentes de MiniMobile.
    * **Estructura:** Es el elemento raíz de tu aplicación MiniMobile.
    * **Estilos:** Establece un `display: flex` en dirección de columna y ocupa toda la altura de la ventana (`height: 100vh`).
    * **Uso:**
        ```html
        <Joha-app>
          </Joha-app>
        ```

2.  **`<Joha-page>`**
    * **Descripción:** Representa una "página" o vista dentro de la aplicación. Contiene el encabezado, el contenido y el pie de página.
    * **Estructura:** Debe ser un hijo directo de `<Joha-app>`.
    * **Estilos:** Utiliza `display: flex` en dirección de columna y permite que el contenido principal crezca (`flex-grow: 1`).
    * **Uso:**
        ```html
        <Joha-app>
          <Joha-page>
            </Joha-page>
        </Joha-app>
        ```
    * **Nota:** La navegación entre páginas se puede implementar mostrando y ocultando elementos `<Joha-page>` mediante JavaScript.

3.  **`<Joha-header>`**
    * **Descripción:** Encabezado de la página, utilizado para mostrar el título y controles de navegación.
    * **Estructura:** Generalmente es el primer hijo dentro de `<Joha-page>`.
    * **Estilos:** Tiene un color de fondo claro, padding, borde inferior y utiliza `display: flex` para alinear sus elementos (título, botones).
    * **Uso:**
        ```html
        <Joha-page>
          <Joha-header>
            <h1>Título</h1>
          </Joha-header>
        </Joha-page>
        ```

4.  **`<Joha-content>`**
    * **Descripción:** Área principal de contenido de la página, donde se coloca la información y otros componentes.
    * **Estructura:** Generalmente se coloca después de `<Joha-header>` y antes de `<Joha-footer>` dentro de `<Joha-page>`.
    * **Estilos:** Permite que el contenido crezca (`flex-grow: 1`), tiene padding y habilita el scroll vertical (`overflow-y: auto`).
    * **Uso:**
        ```html
        <Joha-page>
          <Joha-content>
            Contenido de la página aquí.
          </Joha-content>
        </Joha-page>
        ```

5.  **`<Joha-footer>`**
    * **Descripción:** Pie de página de la página, útil para barras de herramientas o información adicional.
    * **Estructura:** Generalmente es el último hijo dentro de `<Joha-page>`.
    * **Estilos:** Tiene un color de fondo claro, padding y borde superior.
    * **Uso:**
        ```html
        <Joha-page>
          <Joha-footer>
            Barra de herramientas o información.
          </Joha-footer>
        </Joha-page>
        ```

6.  **`<Joha-button>`**
    * **Descripción:** Un botón interactivo con estilos básicos predefinidos.
    * **Estructura:** Se utiliza la etiqueta `<Joha-button>`. Puede contener texto y opcionalmente un atributo `icon`.
    * **Estilos:** Tiene estilos básicos para el padding, bordes, radio de borde y cursor. Se pueden definir clases CSS adicionales para estilos específicos (ej: `.primary`).
    * **Atributos:**
        * `icon`: (Opcional) Muestra un icono (actualmente el texto del atributo).
    * **Uso:**
        ```html
        <Joha-button>Texto del Botón</Joha-button>
        <Joha-button class="primary">Botón Primario</Joha-button>
        <Joha-button icon="menu">Menú</Joha-button>
        ```

7.  **`<Joha-card>`**
    * **Descripción:** Un contenedor para mostrar información relacionada de forma visualmente agrupada.
    * **Estructura:** Contiene otros elementos HTML para estructurar la información dentro de la tarjeta.
    * **Estilos:** Tiene un fondo blanco, bordes redondeados, sombra y un padding interno.
    * **Uso:**
        ```html
        <Joha-card>
          <h2>Título de la Card</h2>
          <p>Contenido de la card.</p>
        </Joha-card>
        ```

8.  **`<Joha-grid>`**
    * **Descripción:** Un contenedor para crear layouts basados en un sistema de rejilla flexible.
    * **Estructura:** Contiene elementos `<Joha-col>`.
    * **Estilos:** Utiliza `display: flex` y `flex-wrap: wrap` para organizar las columnas. Tiene márgenes negativos para compensar el padding de las columnas.
    * **Clases Opcionales:**
        * `.align-items-center`: Alinea verticalmente los elementos hijos al centro.
        * `.justify-content-center`: Centra horizontalmente los elementos hijos.
    * **Uso:**
        ```html
        <Joha-grid>
          <Joha-col size="6">Contenido 1</Joha-col>
          <Joha-col size="6">Contenido 2</Joha-col>
        </Joha-grid>
        ```

9.  **`<Joha-col>`**
    * **Descripción:** Representa una columna dentro de un `<Joha-grid>`.
    * **Estructura:** Contiene el contenido que se mostrará en esa columna.
    * **Estilos:** Tiene un padding horizontal y su ancho se define mediante el atributo `size`.
    * **Atributos:**
        * `size`: Un número del 1 al 12 que define el ancho de la columna como una fracción de 12 (ej: `size="6"` ocupa la mitad del ancho).
    * **Uso:**
        ```html
        <Joha-grid>
          <Joha-col size="4">Columna 1</Joha-col>
          <Joha-col size="8">Columna 2</Joha-col>
        </Joha-grid>
        ```

10. **`<Joha-appbar>`**
    * **Descripción:** Barra de aplicación fija en la parte superior de la ventana, utilizada para mostrar el título de la aplicación y controles.
    * **Estructura:** Generalmente es el primer hijo dentro de `<Joha-app>`. Puede contener `<span>` para el título y elementos `<Joha-button>`.
    * **Estilos:** Tiene un color de fondo primario, texto blanco, padding, `display: flex` para la alineación, sombra y `position: sticky` para permanecer en la parte superior.
    * **Uso:**
    * 
        ```html
        <Joha-app>
          <Joha-appbar>
            <span>Título de la App</span>
            <Joha-button icon="menu"></Joha-button>
          </Joha-appbar>
          <Joha-content>
            Contenido de la aplicación.
          </Joha-content>
        </Joha-app>
        ```

**Estilos Globales:**

Actualmente, los estilos para los componentes se definen directamente en la sección CSS. Se recomienda crear un archivo `styles.css` separado para gestionar los estilos de manera más organizada.

**JavaScript:**

La interactividad y la navegación entre páginas se implementan utilizando JavaScript vanilla. Se proporcionan ejemplos básicos en la documentación de `<Joha-page>` para la navegación.

