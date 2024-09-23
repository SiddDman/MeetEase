# MeetEase

MeetEase is an enterprise-ready video conferencing application built with Next.js, TypeScript, and Tailwind CSS. It provides functionalities for instant meetings, scheduled meetings, and recording, ensuring high-quality video communication. With user authentication and management powered by Clerk, MeetEase offers a secure and smooth user experience across all devices.

## Table of Contents
- [Features](#features)
- [Stream SDK](#stream-sdk)
- [Project Setup](#project-setup)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

## Features

- **Instant Meetings:** Host on-demand meetings with a single click.
- **Scheduled Meetings:** Create and manage scheduled meetings.
- **Recording Functionality:** Record meetings and access them for future use.
- **Meeting History:** View upcoming meetings, past meetings, and recorded sessions.
- **Personal Room:** Access your own dedicated meeting room.
- **User Authentication:** Secure sign-up, sign-in, and protected routes using Clerk.
- **Responsive Design:** Optimized for a seamless experience across mobile and desktop platforms.

## Stream SDK

MeetEase integrates Stream's SDK to handle video meetings and manage audio-video input. The Stream SDK ensures:
- **High-quality video and audio:** Provides reliable streaming capabilities for video conferencing.
- **Meeting Management:** Allows users to create, join, and manage video meetings seamlessly.
- **Audio-Video Control:** Manages various audio and video inputs, ensuring optimal quality for all participants.

For more details on the Stream SDK, visit the [official documentation](https://getstream.io/docs/).

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/SiddDman/meetease.git
    cd meetease
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the required environment variables:

    ```bash
    NEXT_PUBLIC_CLERK_FRONTEND_API= <your-clerk-api-key>
    CLERK_API_KEY= <your-backend-clerk-api-key>
    STREAM_API_KEY= <your-stream-api-key>
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be running on ```http://localhost:3000```.

## Deployment
You can view the live version of this project at [MeetEase](https://meet-ease-phi.vercel.app/).

## Future Improvements

- **Chat Integration:** Adding real-time messaging for participants during meetings.
- **Custom Backgrounds:** Allowing users to set custom video backgrounds.
- **Advanced Analytics:** Providing insights and statistics on meetings, including duration and participant feedback.
- **Enhanced Security:** Additional encryption for meeting recordings and content sharing.
