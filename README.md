# Tierra Querida - Guía Técnica del Proyecto

Este documento contiene toda la información técnica necesaria para comprender, instalar y ejecutar el frontend web del catálogo interactivo del negocio de hamburguesas "Tierra Querida".

## 1. Tecnologías Base
El proyecto ha sido desarrollado utilizando un stack web moderno y altamente optimizado:

* **Framework Principal:** [Next.js (App Router)](https://nextjs.org/) - Proporciona renderizado rápido, optimización automática y una estructura de carpetas fácil de escalar.
* **Librería UI:** [React](https://react.dev/) - Utilizado para construir los componentes interactivos del catálogo.
* **Estilos:** CSS puro (`App.css` y `globals.css`) implementando técnicas avanzadas como variables css (CSS Custom Properties), diseño responsive con Flexbox/Grid y efectos Glassmorphism para la caja de ingredientes.
* **Tipografías:** Fuentes importadas directamente de Google Fonts (`Pacifico` para logotipos y `Inter` para legibilidad técnica).

## 2. Estructura de Directorios Clave
La arquitectura del proyecto sigue los estándares de Next.js:

```
tierraQuerida/
├── src/
│   ├── app/
│   │   ├── globals.css  # Estilos globales (reseteo CSS, variables base)
│   │   ├── layout.jsx   # Envoltura principal de la app (Importación de fuentes)
│   │   ├── page.jsx     # Componente principal de la interfaz visual (Menú, Footer)
│   │   └── App.css      # Estilos específicos de los componentes, diseño neón y catálogo
│   └── assets/          # Imágenes y recursos estáticos
├── public/              # Archivos públicos estáticos accesibles directamente
├── jsconfig.json        # Configuración de resolución de rutas de JS
├── package.json         # Dependencias y scripts de inicialización
└── .gitignore           # Archivos ignorados por Git (ej. node_modules, .env)
```

## 3. Instalación de Dependencias
Para ejecutar este proyecto en tu computadora local por primera vez, necesitarás tener instalado [Node.js](https://nodejs.org/) (recomendado en su versión LTS).

Clona el repositorio e instala las dependencias usando la terminal:

```bash
# 1. Clona el repositorio desde GitHub
git clone https://github.com/Brandon0304/tierraQueridaArmenia.git

# 2. Entra en la carpeta del proyecto
cd tierraQueridaArmenia

# 3. Descarga e instala todas las librerías necesarias
npm install
```

## 4. Ejecución del Servidor Local
Una vez que las dependencias estén completamente instaladas (`node_modules` creado), puedes inicializar el servidor de desarrollo para empezar a trabajar:

```bash
# Inicia el entorno local
npm run dev
```

El proyecto estará corriendo y lo podrás visualizar abriendo un navegador web en: **`http://localhost:3000`**. Cualquier ciclo de guardado (Ctrl+S) en el código actualizará la página automáticamente (Hot Reloading).

## 5. Scripts Útiles
Los comandos principales definidos en el `package.json` son:

* `npm run dev`: Inicia el servidor de desarrollo, ideal para estar escribiendo código localmente.
* `npm run build`: Construye la versión final optimizada del proyecto, preparándola para cuando se decida subir a un servidor público (Producción).
* `npm start`: Inicia el servidor en modo de producción una vez ha sido construido con el comando anterior.
* `npm run lint`: Busca y repara posibles errores en las reglas sintácticas del código.
