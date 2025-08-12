# Rick & Morty Microfrontend: Characters

Este proyecto es un microfrontend (MF) llamado **mf-character** que expone el componente principal de personajes de Rick & Morty usando Module Federation con Webpack.

## Características principales
- Microfrontend con Webpack Module Federation
- Exposición del componente `MfCharacters` desde `src/App.tsx`
- Compartición de dependencias `react` y `react-dom` como singletons
- Configuración de desarrollo con hot reload y apertura automática en el puerto 3001

## Estructura del proyecto
```
├── public/
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTest.ts
│   ├── __test__/
│   │   └── App.test.tsx
│   └── styles/
│       └── index.css
├── webpack.config.js
├── package.json
├── tsconfig.json
├── babel.config.json
├── jest.config.ts
├── postcss.config.js
└── coverage/
```

## Uso
### Instalación
```bash
npm install
```

### Ejecución en desarrollo
```bash
npm start
```
El microfrontend estará disponible en [http://localhost:3001](http://localhost:3001).

### Build de producción
```bash
npm run build
```

## Module Federation
Este MF expone el componente principal:
- **name:** `mfCharacters`
- **filename:** `re-mf-characters.js`
- **exposes:** `./MfCharacters` → `src/App.tsx`

## Compartición de dependencias
Las dependencias `react` y `react-dom` se comparten como singletons para evitar duplicados entre microfrontends.

## Testing
Las pruebas están ubicadas en `src/__test__/App.test.tsx` y se ejecutan con Jest.

## Autor
Stewie Mayer

---
Este README fue generado automáticamente.
