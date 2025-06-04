# geotechshop

---

## Índice

- [Descripción](#descripción)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación Frontend](#instalación-frontend)
- [Variables de Entorno Frontend](#variables-de-entorno-frontend)
- [Ejecución Frontend](#ejecución-frontend)
- [Instalación Backend](#instalación-backend)
- [Variables de Entorno Backend](#variables-de-entorno-backend)
- [Ejecución Backend](#ejecución-backend)
- [Contacto](#contacto)

---

## Descripción

Proyecto Ecommerce llamado **geotechshop**.  
Frontend con React, TailwindCSS, Vite, DaisyUI.  
Backend con Node.js, Express, Prisma y Stripe para pagos.

---

## Estructura de Carpetas  

```
geotechshop/
├── backend/
│   ├── prisma/             # Contiene el esquema de Prisma y migraciones de la base de datos
│   └── src/
│       ├── controllers/    # Lógica para manejar las rutas y peticiones
│       ├── middlewares/    # Funciones middleware para autenticación y manejo de errores
│       ├── routes/         # Definición de rutas API del backend
│       ├── uploads/        # Carpeta para almacenar archivos subidos (imágenes, etc.)
│       └── app.js          # Archivo principal que inicia el servidor Express
├── frontend/
│   ├── public/             # Archivos estáticos públicos (favicon, index.html, etc.)
│   └── src/
│       ├── assets/         # Recursos estáticos usados en la app (imágenes, íconos, etc.)
│       ├── components/     # Componentes React reutilizables
│       ├── context/        # Contextos para manejo global de estado con React Context API
│       ├── pages/          # Componentes que representan las páginas de la aplicación
│       ├── app.jsx         # Componente raíz de React
│       ├── index.css       # Estilos globales
│       └── main.jsx        # Punto de entrada para renderizar React en el DOM
```

---

## Tecnologías usadas  

- **Frontend:** React, Vite, TailwindCSS, DaisyUI  
- **Backend:** Node.js, Express, Prisma, Stripe  
- **Base de datos:** (la que uses con Prisma)  
- **Otros:** JWT para autenticación, manejo de variables de entorno  

---

## Requisitos  

- Node.js >= 16  
- npm o yarn  
- Base de datos (según `DATABASE_URL`)  

---

## Instalación Frontend  

```bash
cd frontend
npm install
# o
yarn install
```

---

## Variables de Entorno Frontend  

Archivo `.env` en `frontend` con:  
```
VITE_BACKEND_API_URL=http://localhost:4000/api
```

---

## Ejecución Frontend  

```bash
npm run dev
# o
yarn dev
```

Construir para producción:  

```bash
npm run build
```

---

## Instalación Backend  

```bash
cd backend
npm install
```

---

## Variables de Entorno Backend  

Archivo `.env` en `backend` con las siguientes variables:  

```
DATABASE_URL=tu_string_de_conexion
JWT_SECRET=tu_secreto_jwt
STRIPE_KEY=tu_clave_stripe
FRONTEND_URL=http://localhost:3000
SERVER_URL=http://localhost:4000
STRIPE_WEBHOOK_SECRET=tu_clave_webhook
```

---

## Ejecución Backend  

```bash
npm run dev
# o
node src/app.js
```

---

## Contacto  

- Email: wilfredopintomata@gmail.com
- GitHub: https://github.com/DevWilfredo/
- Web: https://wilfredodev.com
