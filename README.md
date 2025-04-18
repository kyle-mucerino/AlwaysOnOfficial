# AlwaysOn AI Educational Chatbot Website

## Overview

AlwaysOn is an educational platform featuring an AI-powered chatbot designed to assist users with their learning needs. This is a front-end only React application deployed on Heroku.

## Key Features

* **AI Chatbot:** An intelligent chatbot to answer questions and provide educational support.
* **Informational Pages:** Dedicated pages for platform details, company information, media, FAQs, contact options, and legal information (cookie policy, privacy policy, terms of service, acceptable use policy).
* **User Interface:** A clean and intuitive user interface built with React.
* **Client-Side Routing:** Utilizes `react-router-dom` for smooth navigation without full page reloads.
* **Analytics Integration:** Includes Google Tag Manager, Google Analytics, and Simple Analytics for tracking website usage and user behavior.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **React Router DOM:** For handling client-side routing.
* **CSS:** For styling the application.
* **Font Awesome:** For icons.
* **Google Fonts:** For custom typography.
* **Google Tag Manager:** For managing website tracking and analytics tags.
* **Google Analytics:** For website traffic analysis.
* **Simple Analytics:** A privacy-focused analytics tool.

## Deployment

This application is deployed as a front-end only app on Heroku.

## Known Issues

* **UTM Code Tracking:** There is a current issue where UTM parameters present in the initial URL are lost during a redirect from the root domain (`alwayson.ai`) to the `www` subdomain (`www.alwayson.ai`). This prevents accurate tracking of marketing campaign performance.

## Troubleshooting - UTM Code Loss

The loss of UTM parameters is likely due to a redirect configured at the domain registrar level for `alwayson.ai` to `www.alwayson.ai`. To resolve this, the following steps need to be taken:

1. **Check Domain Registrar Settings:** Log in to the control panel of your domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
2. **Locate URL Forwarding/Redirect Rules:** Find the section managing URL forwarding or redirects.
3. **Examine the Redirect for `alwayson.ai`:** Look for a rule that redirects the root domain to `www.alwayson.ai`.
4. **Ensure Query String Preservation:** Verify that the redirect rule has an option enabled to "Pass query string," "Preserve parameters," or similar. **This setting must be enabled to retain the UTM codes.**
5. **Update Redirect Settings:** If the query string preservation is not enabled, update the redirect rule accordingly.
6. **Test Thoroughly:** After making changes, test the ad link (`https://alwayson.ai/?utm_source=...`) to ensure it redirects to `https://www.alwayson.ai/?utm_source=...` with the UTM parameters intact.

## Getting Started (For Developers)

1. **Clone the repository:**
    bash
    git clone <repository_url>
    cd <repository_name>

2. **Install dependencies:**
    bash
    npm install
3. **Start the development server:**
    bash
    npm start
    This will run the app in development mode on `http://localhost:3000`.

## Build for Production

bash
`npm run build`
