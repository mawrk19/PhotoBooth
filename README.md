Photobooth Website Documentation [Under dev]

Project Goals

Provide a web-based photobooth experience with real-time camera access.
Allow users to apply filters (e.g., sepia, grayscale) to captured photos.
Enable photo downloads and sharing via social media.
Ensure a responsive design for mobile and desktop devices.
Optimize for fast loading and SEO using Next.js features.


Tech Stack

Framework: Next.js 
Styling: Tailwind CSS 
Camera Access: WebRTC 
Image Processing: Canvas API 
Deployment: Vercel 
Version Control: Git 
Package Manager: npm 


Setup Instructions
Prerequisites

Node.js: Version 18.x or later
Git: For version control
Vercel CLI (optional): For deployment
A modern browser supporting WebRTC (e.g., Chrome, Firefox)


Install Dependencies:
npm install


Run the Development Server:
npm run dev

Open http://localhost:3000 in your browser to view the website.

Build for Production:
npm run build
npm run start



Configuration

Environment Variables: Create a .env.local file in the root directory for sensitive data (e.g., API keys for sharing services).NEXT_PUBLIC_SHARE_API_KEY=your-api-key


Tailwind CSS: Customize tailwind.config.js for colors, fonts, or other design tokens.
Next.js Config: Modify next.config.js for image optimization, rewrites, or other settings.


Key Features
1. Camera Integration

Uses WebRTC (getUserMedia) to access the user's camera.
Displays a live video feed in a <video> element.
Captures photos by drawing the video frame to a <canvas>.

2. Image Filters

Applies real-time filters (e.g., sepia, grayscale, invert) using the Canvas API.
Users can toggle filters via buttons in the FilterControls component.

3. Photo Download

Generates a downloadable PNG image from the canvas.
Includes a "Download" button to save the photo locally.

4. Social Sharing

Integrates with third-party APIs (e.g., Twitter, Instagram) for sharing photos.
Uses API routes (/pages/api/share) to handle server-side sharing logic.

5. Responsive Design

Tailwind CSS ensures a mobile-friendly layout.
Camera feed and controls adapt to different screen sizes.


Future Enhancements

Add support for video recording.
Integrate cloud storage (e.g., AWS S3) for saving photos.
Implement user authentication for personalized galleries.
Add more advanced filters (e.g., AI-based effects).


Troubleshooting

Camera Access Denied: Ensure the website is served over HTTPS, as WebRTC requires a secure context.
Tailwind CSS Not Working: Run npm run dev to rebuild styles.
API Errors: Check environment variables and API keys in .env.local.


Contributing

Fork the repository and create a feature branch.
Follow the coding style (ESLint and Prettier recommended).
Submit a pull request with a clear description of changes.


License
This project is licensed under the MIT License.
