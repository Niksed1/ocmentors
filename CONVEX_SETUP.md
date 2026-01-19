# Convex Backend Setup Guide

This guide will help you set up the Convex backend with Google OAuth authentication.

## Prerequisites

1. You already have a Convex project on the Convex dashboard
2. Google Cloud Console account for OAuth credentials

## Setup Steps

### 1. Link Your Convex Project

Run the following command in your terminal:

```bash
npx convex dev
```

This will:
- Generate the `convex/_generated` folder with TypeScript types
- Link your local project to your Convex dashboard project
- Set up the `NEXT_PUBLIC_CONVEX_URL` environment variable

### 2. Set Up Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Configure the consent screen if prompted
6. Set application type to **Web application**
7. Add authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - Your production domain (e.g., `https://yourdomain.com`)
8. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/[...convex]` (for development)
   - `https://yourdomain.com/api/auth/[...convex]` (for production)
9. Copy the **Client ID** and **Client Secret**

### 3. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Convex Configuration (automatically set by `npx convex dev`)
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here

# Google OAuth Credentials
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

**Important:** Add `.env.local` to your `.gitignore` file to keep credentials secure.

### 4. Set Environment Variables in Convex Dashboard

1. Go to your Convex dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables:
   - `AUTH_GOOGLE_ID` - Your Google OAuth Client ID
   - `AUTH_GOOGLE_SECRET` - Your Google OAuth Client Secret

### 5. Deploy Your Convex Functions

After setting up everything, deploy your Convex functions:

```bash
npx convex deploy
```

## How It Works

1. **User clicks "Sign in with Google"** on the login page
2. **Google OAuth flow** redirects to Google's authentication page
3. **After successful authentication**, Google redirects back to your app
4. **Convex Auth** handles the OAuth callback and creates/updates the user session
5. **User data is stored** in the `users` table with:
   - Email
   - Name
   - Profile picture (if available)
   - Email verification status
   - Created timestamp
   - Last login timestamp

## Database Schema

The `users` table stores:
- `email` (string, indexed)
- `name` (string)
- `picture` (optional string)
- `emailVerified` (optional boolean)
- `createdAt` (number - timestamp)
- `lastLoginAt` (optional number - timestamp)

## Available Functions

- `api.users.getCurrentUser` - Get the currently authenticated user
- `api.users.syncUser` - Sync user data after authentication
- `api.users.getUserByEmail` - Get a user by email address

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/login`
3. Click "Sign in with Google"
4. Complete the Google authentication flow
5. You should be redirected to the home page
6. Check your Convex dashboard to see the user data in the `users` table

## Troubleshooting

- **"Not authenticated" errors**: Make sure you've completed the Google OAuth flow
- **Environment variables not found**: Ensure `.env.local` is set up and Convex dashboard has the variables
- **Redirect URI mismatch**: Verify your redirect URIs in Google Cloud Console match your app URLs
