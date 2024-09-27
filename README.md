**PLANTPAL** is a platform develop to identify the plant by simply uploading it's picture or by clicking picture.
This platfor integrate Google gemini API to process image.
For more you may visit to the given URL: **https://plant-pal-ebon.vercel.app/**

UI:
![Screenshot 2024-09-27 160652](https://github.com/user-attachments/assets/2478fc88-4a10-408b-964f-f1e24bbde1c7)

![WhatsApp Image 2024-09-27 at 16 12 46_03a5ee88](https://github.com/user-attachments/assets/163c9e23-c0a6-4577-a3db-71d9823a7b9f)
![Screenshot 2024-09-27 160850](https://github.com/user-attachments/assets/5dd0a607-86ca-46d6-a48c-a124b1593406)
![Screenshot 2024-09-27 161309](https://github.com/user-attachments/assets/bf42d60b-69b5-4665-b00c-b09017260a6d)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


**1.Set up the project:**
First, create a new Next.js project with Tailwind CSS:
npx create-next-app@latest plant-identifier --typescript --tailwind --eslint
cd plant-identifier

**2.Install necessary dependencies:**
We'll need to install the Google AI SDK for Node.js to use the Gemini API:
npm install @google/generative-ai

**3.Set up the Google Gemini API:**
Create a .env.local file in the root of your project and add your Google API key:
GOOGLE_API_KEY=your_api_key_here

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
