import AdminJS from "adminjs";
import User from "../models/User.js";
import * as AdminJSMongoose from "@adminjs/mongoose";

AdminJS.registerAdapter(AdminJSMongoose);

export const adminOptions = {
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          email: {
            isVisible: { list: true, filter: true, show: true, edit: true },
          },
        },
        actions: {
          bulkDelete: {
            actionType: "record",
            handler: async (request, response, context) => {
              const { records } = context;
              return {
                redirectUrl: "/admin/users",
              };
            },
          },
        },
      },
    },
  ],
  branding: {
    companyName: "MERN Admin",
    logo: "/testing.png",
    favicon: "/favicon.ico",
    loginLogo: "/testing.png",
    softwareBrothers: false,
    theme: {
      colors: {
        primary100: "#2563EB",
        primary80: "#1D4ED8",
        primary60: "#1E40AF",
        primary40: "#1E3A8A",
        primary20: "#172554",
        accent: "#FACC15",
        love: "#E11D48",
        grey100: "#0F172A",
        grey80: "#1E293B",
        grey60: "#334155",
        grey40: "#475569",
        grey20: "#64748B",
        filterBg: "#1E293B",
        white: "#E5E7EB",
      },
      typography: {
        font: "Poppins, sans-serif",
        headings: {
          fontSize: "22px",
          fontWeight: "bold",
        },
      },
      buttons: {
        borderRadius: "8px",
        hoverEffect: "scale(1.05)",
      },
      layout: {
        sidebarWidth: "260px",
        pagePadding: "20px",
      },
    },
    customCss: "/adminStyles.css", // 
    customJs: "/scripts/adminCustom.js",
  },
  locale: {
    language: "en",
    translations: {
      labels: {
        loginWelcome: "Welcome to MERN Admin Panel",
      },
    },
  },
};
