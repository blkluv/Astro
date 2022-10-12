import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "co.alkemyst.mobile",
  appName: "alkemyst-app",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.0.116:3000",
    cleartext: true,
  },
};

export default config;
