### Demo Project Structure

```
Dragon-News/
│
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ ├── icons/
│ │ └── styles/
│ │
│ ├── components/
│ │ ├── common/ # Buttons, Inputs, Modals
│ │ ├── layout/ # Navbar, Footer, Sidebar
│ │ └── protected/ # ProtectedRoute, Loader
│ │
│ ├── contexts/
│ │ └── AuthContext/
│ │ ├── AuthContext.js
│ │ └── AuthProvider.jsx
│ │
│ ├── firebase/
│ │ ├── firebase.init.js
│ │ └── firebase.config.js
│ │
│ ├── hooks/
│ │ ├── useAuth.js
│ │ └── useFetch.js
│ │
│ ├── layouts/
│ │ ├── MainLayout.jsx
│ │ ├── DashboardLayout.jsx
│ │ └── AuthLayout.jsx
│ │
│ ├── pages/
│ │ ├── Home/
│ │ │ └── Home.jsx
│ │ ├── About/
│ │ │ └── About.jsx
│ │ ├── Dashboard/
│ │ │ └── Dashboard.jsx
│ │ ├── Auth/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── ForgotPassword.jsx
│ │ └── NotFound.jsx
│ │
│ ├── routes/
│ │ ├── AppRouter.jsx
│ │ └── ProtectedRoute.jsx
│ │
│ ├── services/
│ │ ├── authService.js
│ │ └── userService.js
│ │
│ ├── utils/
│ │ ├── constants.js
│ │ └── helpers.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```
