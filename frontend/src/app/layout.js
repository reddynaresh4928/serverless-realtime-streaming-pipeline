import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLayout from "../components/PageLayout";
import ThemeProvider from "../providers/ThemeProvider";
import { DashboardProvider } from "../context/DashboardContext";
import { AlertProvider } from "../context/AlertContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IoT Monitoring Dashboard",
  description: "Real-Time Serverless IoT Monitoring Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
      <body className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors">

    <ThemeProvider>
  <DashboardProvider>
    <AlertProvider>

      <PageLayout>
        {children}
      </PageLayout>

    </AlertProvider>
  </DashboardProvider>
</ThemeProvider>

</body>
    </html>
  );
}