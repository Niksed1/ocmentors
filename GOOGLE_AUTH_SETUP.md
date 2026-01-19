# Google OAuth Setup Guide

This guide will help you set up Google authentication for your OC Tutors application.

## Prerequisites

1. A Google Cloud Console account
2. Your Convex project is already linked

## Setup Steps

### 1. Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. If prompted, configure the OAuth consent screen:
   - Choose **External** (unless you have a Google Workspace)
   - Fill in the required information:
     - App name: OC Tutors
     - User support email: your email
     - Developer contact: your email
   - Click **Save and Continue**
   - Add scopes: `email`, `profile`, `openid`
   - Add test users (your email) if in testing mode
   - Click **Save and Continue**
6. Create OAuth Client ID:
   - Application type: **Web application**
   - Name: OC Tutors Web Client
   - Authorized JavaScript origins:
     - `http://localhost:3000` (for development)
     - Your production domain (e.g., `https://yourdomain.com`)
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)
   - Click **Create**
7. Copy the **Client ID** and **Client Secret**

### 2. Set Up Environment Variables

Create or update your `.env.local` file in the project root:

```env
# Convex Configuration
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Important:**
- `NEXTAUTH_SECRET`: Generate a random string. You can use:
  ```bash
  openssl rand -base64 32
  ```
  Or use an online generator: https://generate-secret.vercel.app/32
- For production, update `NEXTAUTH_URL` to your production domain
- Add `.env.local` to your `.gitignore` to keep credentials secure

### 3. How It Works

1. **User clicks "Sign in with Google"** on the login page
2. **NextAuth redirects** to Google's authentication page
3. **User authorizes** the application
4. **Google redirects back** to your app with authentication tokens
5. **NextAuth processes** the callback and creates a session
6. **User data is automatically stored** in Convex `users` table via the `storeGoogleUser` mutation:
   - Email
   - Name
   - Profile picture (if available)
   - Email verification status
   - Created timestamp (for new users)
   - Last login timestamp

### 4. User Data Storage

When a user signs in with Google, their information is automatically stored in your Convex `users` table:

- **New users**: A new record is created with all their Google profile information
- **Existing users**: Their last login time is updated, and profile info is refreshed

### 5. Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/login`
3. Click "Sign in with Google"
4. Complete the Google authentication flow
5. You should be redirected to the home page
6. Check your Convex dashboard to see the user data in the `users` table

### 6. Production Deployment

Before deploying to production:

1. Update Google OAuth credentials:
   - Add your production domain to authorized JavaScript origins
   - Add `https://yourdomain.com/api/auth/callback/google` to redirect URIs

2. Update environment variables:
   - Set `NEXTAUTH_URL` to your production URL
   - Ensure `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set in your hosting platform's environment variables

3. Deploy your application

## Troubleshooting

- **"Invalid client" error**: Check that your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct
- **Redirect URI mismatch**: Ensure the redirect URI in Google Console matches exactly (including http/https and trailing slashes)
- **User not stored in Convex**: Check the browser console and server logs for errors. The sign-in will still succeed even if Convex storage fails (to not block authentication)
- **Session not persisting**: Make sure `NEXTAUTH_SECRET` is set and consistent across deployments

## Available Functions

- `api.users.storeGoogleUser` - Automatically called during Google sign-in
- `api.users.getUserByEmail` - Query to get user by email
- `api.users.getUserById` - Query to get user by ID
- `api.users.getAllUsers` - Query to get all users
