🎉 Calculadora de Propinas y Consumo

Una aplicación web sencilla para calcular el consumo de un pedido y la propina asociada, construida con **React**, **TypeScript**, **Vite** y **Tailwind CSS**. Este proyecto forma parte de un curso de Udemy y demuestra el manejo de estado con `useReducer`, componentes reutilizables y estilos con Tailwind.

---

🛠️ Características

- 🍽️ **Selección de productos**: Añade elementos del menú al pedido con un solo clic.
- 🧾 **Gestión de pedido**: Visualiza el detalle del consumo, cantidad por artículo y elimina ítems según se necesite.
- 💸 **Propinas dinámicas**: Elige entre varias opciones de porcentaje (10%, 20%, 50%) y calcula automáticamente el importe de la propina.
- 📊 **Cálculo de totales**: Muestra el subtotal, el monto de la propina y el total a pagar en tiempo real.
- 🔄 **Reinicio rápido**: Botón para limpiar el pedido y restablecer la propina. citeturn19view0turn21view0

---

🛠️ Tecnologías Utilizadas

- ⚛️ **React 19** + **React DOM** para la interfaz de usuario. citeturn25view0
- 🔷 **TypeScript** para tipado estático y seguridad de tipos. citeturn25view0
- 🚀 **Vite** como bundler rápido y entorno de desarrollo con HMR. citeturn1view0
- 🎨 **Tailwind CSS** + **@tailwindcss/vite** para estilos utilitarios y configuración simple. citeturn25view0
- 🛡️ **ESLint** y **eslint-plugin-react-hooks** para garantizar calidad y consistencia en el código. citeturn25view0

---

📂 Estructura de Directorios

```markdown
public/
├─ index.html

src/
├─ components/
│ ├─ Header.tsx
│ ├─ MenuItem.tsx
│ ├─ OrderContents.tsx
│ ├─ OrderTotals.tsx
│ └─ TipPorcentageForm.tsx
├─ data/
│ └─ menuItems.ts
├─ helpers/
│ └─ formatCurrency.ts
├─ model/
│ ├─ MenuItemsI.ts
│ └─ OrderI.ts
├─ reducers/
│ └─ orderReducer.ts
├─ App.tsx
├─ main.tsx
└─ index.css

package.json
tsconfig.json
vite.config.ts
eslint.config.js
```

---

🚀 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone git@github.com:b4dow/calculadora-propinas.git
   cd calculadora-propinas
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o con Bun
   bun install
   ```

3. **Levantar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Vista previa de producción**

   ```bash
   npm run preview
   ```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una mejora, abre un **issue** o envía un **pull request**.

---

## 🎖️ Créditos

- **Autor**: b4dow
- **Curso base**: Udemy - React y TypeScript - La Guía Completa Creando +10 Proyectos

---

📄 Licencia
Este proyecto está bajo la licencia MIT.
