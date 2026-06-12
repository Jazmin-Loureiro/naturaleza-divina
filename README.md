# 🌿 Naturaleza Divina - Landing Page

¡Bienvenidos a **Naturaleza Divina**! Este proyecto es una Landing Page moderna y optimizada desarrollada para un emprendimiento local de perfumes alquímicos. El sitio combina una interfaz visual elegante y mística con un chatbot inteligente interactivo.

---

## 🚀 Características del Proyecto

* **Maquetación Moderna:** Interfaz fluida y responsive adaptada para dispositivos móviles y escritorio usando **Tailwind CSS**.
* **Arquitectura Modular:** Separación limpia de componentes reutilizables y archivos de constantes independientes para facilitar la escalabilidad de los productos.
* **Asistente Virtual Integrado:** Chatbot interactivo conectado de forma segura a la **API de Google Gemini (modelo 1.5 Flash)**.
* **Enrutamiento Avanzado:** Implementación del sistema *App Router* de Next.js utilizando rutas optimizadas.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React, Next.js (App Router), TypeScript.
* **Estilos:** Tailwind CSS.
* **Backend & IA:** Node.js, API de Google Gemini (`@google/genai`).
* **Despliegue (Hosting):** Vercel (Funciones Serverless con costo de infraestructura en cero).

---

## 📂 Estructura del Proyecto

El proyecto sigue las mejores prácticas de organización recomendadas por la documentación oficial de Next.js:

* `app/page.tsx`: Pantalla principal y diseño visual de la Landing Page.
* `app/layout.tsx`: Estructura global compartida (marco contenedor del sitio).
* `app/components/`: Componentes modulares y reutilizables de React (como las tarjetas de los perfumes).
* `app/constants/`: Archivos de configuración estática y datos del catálogo de productos.
* `app/api/chat/route.ts`: Endpoint de backend seguro para procesar los mensajes del chat con la IA sin exponer credenciales.

---

## 💻 Instalación y Desarrollo Local

Si querés clonar este repositorio y ejecutarlo en tu computadora, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Jazmin-Loureiro/naturaleza-divina.git](https://github.com/Jazmin-Loureiro/naturaleza-divina.git)
   cd naturaleza-divina