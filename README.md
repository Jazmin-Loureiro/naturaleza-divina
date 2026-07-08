# 🌿 Naturaleza Divina - Landing Page

¡Bienvenidos a **Naturaleza Divina**! Este proyecto es una Landing Page moderna, elegante y optimizada, desarrollada para un emprendimiento local de perfumes alquímicos. El sitio combina una interfaz visual mística con un chatbot inteligente interactivo con el que los usuarios pueden conversar en tiempo real.

## 🚀 Características del Proyecto

* **Maquetación Premium & Responsiva:** Interfaz fluida y adaptada milimétricamente para dispositivos móviles y escritorio usando Tailwind CSS.
* **Componentes Magnéticos Avanzados:** Botones flotantes táctiles (Chatbot y WhatsApp) con físicas elásticas y efecto de arrastre magnético (*snap-to-edges*) desarrollados de forma nativa.
* **Asistente Virtual Integrado:** Chatbot interactivo conectado a través de un endpoint seguro a la API de Google Gemini (modelo **gemini-2.5-flash**), configurado con voseo local e instrucciones de contexto de la marca.
* **Arquitectura Modular:** Separación limpia de componentes reutilizables, hooks personalizados y archivos de constantes para facilitar la escalabilidad del catálogo de productos.
* **Cero Exposición de Credenciales:** Toda la comunicación con la IA se realiza en el lado del servidor, protegiendo las variables de entorno de forma estricta.

## 🛠️ Tecnologías Utilizadas

* **Framework:** React, Next.js (App Router), TypeScript.
* **Estilos:** Tailwind CSS.
* **Backend & IA:** Next.js Route Handlers (API Routes), SDK Oficial de Google Gen AI (`@google/genai`).
* **Despliegue (Hosting):** Vercel (Infraestructura Serverless con costo cero).

## 📂 Estructura del Proyecto

El proyecto sigue las mejores prácticas de organización recomendadas por el ecosistema de Next.js:

* `app/page.tsx`: Pantalla principal y diseño visual de la Landing Page.
* `app/layout.tsx`: Estructura global compartida (marco contenedor del sitio).
* `app/components/`: Componentes modulares y reutilizables de React (tarjetas de perfumes, modales responsivos).
* `app/hooks/`: Lógica matemática y listeners globales reutilizables (como el hook de arrastre de los botones flotantes).
* `app/constants/`: Archivos de configuración estática y datos del catálogo de productos.
* `app/api/chat/route.ts`: Endpoint de backend seguro que procesa y limita las respuestas de la IA.

## 💻 Instalación y Desarrollo Local

Si querés clonar este repositorio y ejecutarlo en tu computadora, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Jazmin-Loureiro/naturaleza-divina.git](https://github.com/Jazmin-Loureiro/naturaleza-divina.git)
   cd naturaleza-divina