import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-datepicker/dist/react-datepicker.css'
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeetEase",
  description: "Video Calling platform to talk to your friends or have meetings with clients.",
  icons: {
    icon: "/icons/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/meet-ease-logo.png',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText: '#FFFFFF',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#FFFFFF'
          }
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
