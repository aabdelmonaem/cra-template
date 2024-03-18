import React from "react";

// Importing local roles and configuration data.
import localRoles from "./roles.json";
import ConfigLocal from "./config.json";

// React Router for handling client-side routing.
import { BrowserRouter } from "react-router-dom";

// RecoilRoot provides the state management context for Recoil.
import { RecoilRoot } from "recoil";

// react-i18next for internationalization and translation.
import { useTranslation } from "react-i18next";

// Services for authentication and configuration.
import ConfigService from "./services/config.service";
import AuthService from "./services/auth.service";

// Your application routes are defined in AppRoutes.
import AppRoutes from "./AppRoutes";

/**
 * Importing components and utilities from Core-lib
 */
import { AuthProvider, useAuthContext, ThemeProvider, Languages, ConfigProvider, LanguageProvider } from "@aabdelmonaem/core-lib";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
       {/* AuthProvider manages user authentication state. */}
        <AuthProvider
          localRoles={localRoles}
          signinService={AuthService.signin}
          signoutService={AuthService.signout}>
          <AuthConfigWrapper />
        </AuthProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

function AuthConfigWrapper() {
  const auth = useAuthContext();
  const { i18n, t } = useTranslation();
  return (
    <ConfigProvider
     // Set isAuth based on whether a user is authenticated.
      isAuth={auth.user !== null}
      configLocal={ConfigLocal}
      configService={ConfigService.getAllConfig}>
      <LanguageProvider
        module={i18n}
        translator={t}
        defaultLang={Languages.en}>
        <ThemeProvider>
           {/* Render your application routes here. */}
          <AppRoutes />
        </ThemeProvider>
      </LanguageProvider>
    </ConfigProvider>
  );
}