# New Age Diamonds – Landing Page

React + Vite + Tailwind CSS 3, with framer-motion animations and lucide-react icons.
Source recovered from the production build at https://nad-landingpage.netlify.app/.

## Routes

| Path         | Component                  | Notes                                   |
| ------------ | -------------------------- | --------------------------------------- |
| `/`          | `src/LandingPage.jsx`      | Full landing page                       |
| `/thank-you` | `src/ThankYouPage.jsx`     | Shown after the booking form is submitted |

The booking form (`LeadForm` in `src/LandingPage.jsx`) validates the required
fields in the browser and then redirects to `/thank-you`, passing the chosen
mode (`home` or `video`) so the message reads "Home Trial" or "Video Call".

Each submission is emailed via [FormSubmit](https://formsubmit.co) to
`LEAD_EMAIL` (top of `LeadForm` in `src/LandingPage.jsx`) before the redirect.
If sending fails, the visitor stays on the form and sees an error.

**One-time setup:** the first submission makes FormSubmit send an activation
email to that address. Click the link in it; submissions are only delivered
after that.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Deploy (Netlify)

Build command `npm run build`, publish directory `dist`.
`public/_redirects` sends every path to `index.html`, so `/thank-you` works on refresh.
