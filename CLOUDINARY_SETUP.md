# Cloudinary Setup Guide for Resume Uploads

Your job application form now uses **Cloudinary** to handle resume uploads. When candidates upload their CV, it's stored securely in the cloud and you'll receive a direct download link via email.

## Why Cloudinary?

- ✅ **Free Tier**: 25GB storage, 25GB bandwidth/month
- ✅ **Secure**: HTTPS URLs with optional access controls
- ✅ **Reliable**: 99.9% uptime SLA
- ✅ **No Backend Needed**: Direct browser uploads

---

## Setup Steps (5-10 minutes)

### 1. Create Cloudinary Account

1. Go to [https://cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)
2. Sign up with your email (free account)
3. Verify your email address

### 2. Get Your Cloud Name

1. After logging in, you'll see your **Dashboard**
2. Find your **Cloud Name** at the top (e.g., "dxxxxxxxxxxxxx")
3. Copy this value

### 3. Create an Upload Preset

An "upload preset" allows unsigned uploads from your website without exposing API secrets.

1. Go to **Settings** (gear icon in top right)
2. Click on **Upload** tab
3. Scroll down to **Upload presets** section
4. Click **Add upload preset**
5. Configure the preset:
   - **Preset name**: `job_applications` (or any name you prefer)
   - **Signing Mode**: Select **"Unsigned"** (IMPORTANT!)
   - **Folder**: `job-applications` (optional, helps organize files)
   - **Access mode**: `public` (so you can download via link)
   - Leave other settings as default
6. Click **Save**
7. Copy the preset name

### 4. Add to Your .env File

Open your `.env` file and update these lines:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
VITE_CLOUDINARY_UPLOAD_PRESET=job_applications
```

**Example:**
```env
VITE_CLOUDINARY_CLOUD_NAME=dxxxxxxxxxxxxx
VITE_CLOUDINARY_UPLOAD_PRESET=job_applications
```

### 5. Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

---

## How It Works

1. **Candidate uploads resume** → File goes to Cloudinary
2. **Cloudinary returns URL** → Secure HTTPS link to the file
3. **EmailJS sends you email** → Contains the download link
4. **You click link** → Download and review the resume

---

## Email Format You'll Receive

```
Job Application for: Senior Full Stack Developer

Name: John Doe
Email: john@example.com
Phone: +1 234 567 8900

Resume: https://res.cloudinary.com/your-cloud/raw/upload/v1234567890/job-applications/resume.pdf

Cover Letter:
I am excited to apply for this position...
```

---

## Managing Uploaded Files

### View All Resumes

1. Go to [cloudinary.com](https://cloudinary.com)
2. Navigate to **Media Library**
3. Open `job-applications` folder
4. View, download, or delete files

### Set Expiration (Optional)

You can auto-delete old resumes after a certain time:

1. Go to **Settings** → **Upload** → **Upload presets**
2. Edit your preset
3. Add **Upload Timeout** or use Cloudinary's lifecycle policies

---

## Troubleshooting

### "Cloudinary configuration is missing"

**Problem**: Environment variables not set
**Solution**: Make sure `.env` file has both `VITE_CLOUDINARY_CLOUD_NAME` and `VITE_CLOUDINARY_UPLOAD_PRESET`, then restart dev server

### "Failed to upload file to cloud storage"

**Problem**: Upload preset might be "signed" instead of "unsigned"
**Solution**: Go to Cloudinary Settings → Upload → Edit preset → Change to "Unsigned"

### "Invalid file type"

**Problem**: Only PDF and Word docs are accepted
**Solution**: This is intentional. Candidates should upload PDF, DOC, or DOCX files only.

---

## Cost & Limits

**Free Tier includes:**
- 25 GB storage
- 25 GB bandwidth per month
- 25,000 transformations per month
- Unlimited uploads

**Estimated usage:**
- If average resume is 500KB
- You can store ~50,000 resumes
- You can receive ~50,000 applications/month

**Upgrade needed only if:**
- You receive 1000+ applications per month
- You need advanced features like AI tagging

---

## Security Notes

- ✅ Files are uploaded with HTTPS
- ✅ Upload preset is "unsigned" (no API secrets exposed)
- ✅ Files stored in dedicated folder (`job-applications`)
- ✅ You can set access controls in Cloudinary dashboard
- ✅ You can enable virus scanning (paid feature)

---

## Support

If you have issues setting up Cloudinary:

1. Check [Cloudinary Documentation](https://cloudinary.com/documentation)
2. Visit [Cloudinary Support](https://support.cloudinary.com/)
3. Or email me for help!

---

## Alternative: Resume Links Only

If you prefer not to use Cloudinary, you can remove the file upload feature:

1. Edit `src/components/JobApplicationModal.tsx`
2. Remove the file upload section (lines with "Upload CV" button)
3. Keep only the resume link input field
4. Candidates will paste links to Google Drive, Dropbox, LinkedIn, etc.

This works with your current setup (no Cloudinary needed).
