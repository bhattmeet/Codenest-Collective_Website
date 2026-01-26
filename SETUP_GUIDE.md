# Setup Guide for Codenest Collective Website

This guide will help you configure the necessary services for the website to function properly.

## Table of Contents
1. [EmailJS Setup](#emailjs-setup)
2. [Google Analytics Setup](#google-analytics-setup)
3. [Environment Variables](#environment-variables)

---

## EmailJS Setup

EmailJS is used for contact forms, job applications, and newsletter signups.

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Connect Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_lwz0j7r`)

### 3. Create Email Templates

You need to create 3 templates in EmailJS. For each template:

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Give it a name and Template ID
4. In the **Content** tab, switch to **HTML** mode
5. Copy and paste the HTML template provided below
6. Click **Save**

**Important Notes:**
- The HTML templates use inline CSS for maximum email client compatibility
- Variables like `{{from_name}}` will be automatically replaced when emails are sent
- Test each template using the "Test" button in EmailJS dashboard

#### A. Contact Form Template
**Template ID**: `template_fixl4lp` (already configured)

**Variables to include**:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name (optional)
- `{{phone}}` - Phone number (optional)
- `{{budget}}` - Project budget
- `{{message}}` - Project description
- `{{to_name}}` - Recipient name (Your company)

**HTML Email Template** (Copy and paste this into EmailJS template editor):
```html
<table style="background-color: #fafafa; padding: 20px 0;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td align="center">
<table style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); max-width: 100%; border: 1px solid #e5e7eb;" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 48px 40px 32px 40px; border-bottom: 1px solid #f3f4f6;">
<h1 style="margin: 0 0 8px 0; color: #111827; font-size: 24px; font-weight: 600; font-family: system-ui, -apple-system, Arial, sans-serif; letter-spacing: -0.02em;">New Contact Request</h1>
<p style="margin: 0; color: #6b7280; font-size: 14px; font-family: system-ui, Arial, sans-serif;">You have received a new inquiry</p>
</td>
</tr>
<tr>
<td style="padding: 40px;">
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">FULL NAME</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">{{from_name}}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">EMAIL</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;"><a style="color: #2563eb; text-decoration: none;" href="mailto:{{from_email}}">{{from_email}}</a></p>
</td>
</tr>
</tbody>
</table>
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="vertical-align: top;" width="48%">
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">COMPANY</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">{{company}}</p>
</td>
<td width="4%">&nbsp;</td>
<td style="vertical-align: top;" width="48%">
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">BUDGET</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">{{budget}}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin: 32px 0;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="border-top: 1px solid #f3f4f6;">&nbsp;</td>
</tr>
</tbody>
</table>
<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 12px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">PROJECT DESCRIPTION</p>
<p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; font-family: system-ui, Arial, sans-serif; white-space: pre-line;">{{message}}</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 32px 40px; background-color: #fafafa; border-top: 1px solid #f3f4f6; border-radius: 0 0 8px 8px;">
<p style="margin: 0; color: #9ca3af; font-size: 13px; font-family: system-ui, Arial, sans-serif; line-height: 1.6;">This is an automated notification from your contact form.</p>
<p style="margin: 16px 0 0 0; color: #111827; font-size: 14px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">The Codenest Collective Team</p>
</td>
</tr>
</tbody>
</table>
<table style="max-width: 100%; margin-top: 16px;" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="text-align: center; padding: 16px 20px;">
<p style="margin: 0; color: #9ca3af; font-size: 12px; font-family: system-ui, Arial, sans-serif;">&copy; 2025 Codenest Collective. All rights reserved.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<style type="text/css">
@media only screen and (max-width: 620px) {
    table[width="48%"] {
        width: 100% !important;
        display: block !important;
        margin-bottom: 24px !important;
    }
    td[width="4%"] {
        display: none !important;
    }
}
</style>
```

#### B. Job Application Template
**Template ID**: `template_fixl4lp` (currently using same as contact - create a new one)

**Variables to include**:
- `{{job_title}}` - Position applied for
- `{{from_name}}` - Applicant name
- `{{from_email}}` - Applicant email
- `{{phone}}` - Phone number
- `{{resume_link}}` - Resume link or file name
- `{{cover_letter}}` - Cover letter text

**HTML Email Template** (Copy and paste this into EmailJS template editor):
```html
<table style="background-color: #fafafa; padding: 20px 0;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td align="center">
<table style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); max-width: 100%; border: 1px solid #e5e7eb;" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 48px 40px 32px 40px; border-bottom: 1px solid #f3f4f6;">
<h1 style="margin: 0 0 8px 0; color: #111827; font-size: 24px; font-weight: 600; font-family: system-ui, -apple-system, Arial, sans-serif; letter-spacing: -0.02em;">New Job Application</h1>
<p style="margin: 0; color: #6b7280; font-size: 14px; font-family: system-ui, Arial, sans-serif;">A new candidate has applied for a position</p>
</td>
</tr>
<tr>
<td style="padding: 40px;">
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">POSITION</p>
<p style="margin: 0; color: #5088FA; font-size: 18px; font-weight: 600; font-family: system-ui, Arial, sans-serif;">{{job_title}}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin: 24px 0;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="border-top: 1px solid #f3f4f6;">&nbsp;</td>
</tr>
</tbody>
</table>
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">APPLICANT NAME</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">{{from_name}}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="vertical-align: top;" width="48%">
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">EMAIL</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;"><a style="color: #2563eb; text-decoration: none;" href="mailto:{{from_email}}">{{from_email}}</a></p>
</td>
<td width="4%">&nbsp;</td>
<td style="vertical-align: top;" width="48%">
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">PHONE</p>
<p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500; font-family: system-ui, Arial, sans-serif;"><a style="color: #2563eb; text-decoration: none;" href="tel:{{phone}}">{{phone}}</a></p>
</td>
</tr>
</tbody>
</table>
<table style="margin-bottom: 24px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">RESUME/CV</p>
<p style="margin: 0; color: #111827; font-size: 15px; font-family: system-ui, Arial, sans-serif;">{{resume_link}}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin: 32px 0;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="border-top: 1px solid #f3f4f6;">&nbsp;</td>
</tr>
</tbody>
</table>
<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0 0 12px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">COVER LETTER</p>
<p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; font-family: system-ui, Arial, sans-serif; white-space: pre-line;">{{cover_letter}}</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 32px 40px; background-color: #fafafa; border-top: 1px solid #f3f4f6; border-radius: 0 0 8px 8px;">
<p style="margin: 0; color: #9ca3af; font-size: 13px; font-family: system-ui, Arial, sans-serif; line-height: 1.6;">This is an automated notification from your careers page.</p>
<p style="margin: 16px 0 0 0; color: #111827; font-size: 14px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">The Codenest Collective Team</p>
</td>
</tr>
</tbody>
</table>
<table style="max-width: 100%; margin-top: 16px;" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="text-align: center; padding: 16px 20px;">
<p style="margin: 0; color: #9ca3af; font-size: 12px; font-family: system-ui, Arial, sans-serif;">&copy; 2025 Codenest Collective. All rights reserved.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<style type="text/css">
@media only screen and (max-width: 620px) {
    table[width="48%"] {
        width: 100% !important;
        display: block !important;
        margin-bottom: 24px !important;
    }
    td[width="4%"] {
        display: none !important;
    }
}
</style>
```

#### C. Newsletter Subscription Template
**Template ID**: `template_newsletter` (needs to be created)

**Variables to include**:
- `{{subscriber_email}}` - Email of subscriber
- `{{to_name}}` - Your company name
- `{{to_email}}` - Your email address

**HTML Email Template** (Copy and paste this into EmailJS template editor):
```html
<table style="background-color: #fafafa; padding: 20px 0;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td align="center">
<table style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); max-width: 100%; border: 1px solid #e5e7eb;" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 48px 40px 32px 40px; border-bottom: 1px solid #f3f4f6;">
<h1 style="margin: 0 0 8px 0; color: #111827; font-size: 24px; font-weight: 600; font-family: system-ui, -apple-system, Arial, sans-serif; letter-spacing: -0.02em;">New Newsletter Subscription</h1>
<p style="margin: 0; color: #6b7280; font-size: 14px; font-family: system-ui, Arial, sans-serif;">Someone has subscribed to your newsletter</p>
</td>
</tr>
<tr>
<td style="padding: 40px;">
<table style="margin-bottom: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="text-align: center;">
<p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">SUBSCRIBER EMAIL</p>
<p style="margin: 0; color: #5088FA; font-size: 20px; font-weight: 600; font-family: system-ui, Arial, sans-serif;"><a style="color: #5088FA; text-decoration: none;" href="mailto:{{subscriber_email}}">{{subscriber_email}}</a></p>
</td>
</tr>
</tbody>
</table>
<table style="margin-top: 32px; background-color: #eff6ff; border-left: 4px solid #5088FA; padding: 16px 20px; border-radius: 4px;" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin: 0; color: #1e40af; font-size: 14px; font-family: system-ui, Arial, sans-serif; line-height: 1.6;"><strong>Next Steps:</strong> Add this email to your newsletter mailing list or CRM system.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding: 32px 40px; background-color: #fafafa; border-top: 1px solid #f3f4f6; border-radius: 0 0 8px 8px;">
<p style="margin: 0; color: #9ca3af; font-size: 13px; font-family: system-ui, Arial, sans-serif; line-height: 1.6;">This is an automated notification from your newsletter signup form.</p>
<p style="margin: 16px 0 0 0; color: #111827; font-size: 14px; font-weight: 500; font-family: system-ui, Arial, sans-serif;">The Codenest Collective Team</p>
</td>
</tr>
</tbody>
</table>
<table style="max-width: 100%; margin-top: 16px;" border="0" width="600" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="text-align: center; padding: 16px 20px;">
<p style="margin: 0; color: #9ca3af; font-size: 12px; font-family: system-ui, Arial, sans-serif;">&copy; 2025 Codenest Collective. All rights reserved.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
```

### 4. Get Public Key
1. In EmailJS dashboard, go to **Account** > **General**
2. Find your **Public Key** (e.g., `YQIx5toB7RJ9MmWZ4`)
3. Copy this for the next step

### 5. Configure Environment Variables
All sensitive keys are now stored in a `.env` file (already created and configured).

The `.env` file contains:
```env
VITE_EMAILJS_SERVICE_ID=service_lwz0j7r
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_fixl4lp
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=template_newsletter
VITE_EMAILJS_PUBLIC_KEY=YQIx5toB7RJ9MmWZ4
VITE_GA_MEASUREMENT_ID=G-7M7V8GVZQ7
```

**Note**: The `.env` file is ignored by git to keep your keys secure. A `.env.example` file is provided as a template for other developers.

---

## Google Analytics Setup

Google Analytics is used to track website visitors and user behavior.

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Start measuring**
4. Set up a new property for your website

### 2. Get Measurement ID
1. In Google Analytics, go to **Admin**
2. Under **Property**, click **Data Streams**
3. Click **Add stream** > **Web**
4. Enter your website URL
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Configuration
Your Google Analytics Measurement ID is already configured in the `.env` file:

```env
VITE_GA_MEASUREMENT_ID=G-7M7V8GVZQ7
```

The application automatically reads this from the environment variables. No code changes needed!

### 4. Verify Installation
1. Run your website locally or deploy it
2. Visit your website
3. In Google Analytics, go to **Reports** > **Realtime**
4. You should see your visit tracked in real-time

---

## Environment Variables (Already Configured)

All sensitive keys are stored securely in environment variables:

- ✅ `.env` file created with all API keys
- ✅ `.env.example` file provided as template
- ✅ `.gitignore` configured to exclude `.env` from version control
- ✅ All code files updated to use environment variables

**Location**: `.env` file in project root

**Important**: Never commit the `.env` file to git. It contains sensitive API keys and is already gitignored.

---

## Testing

### Test Contact Form
1. Visit `/contact` page
2. Fill out the form
3. Submit and check your email inbox

### Test Newsletter
1. Scroll to footer on any page
2. Enter email in newsletter signup
3. Check your email inbox for subscription notification

### Test Job Application
1. Visit `/careers` page
2. Click "Apply Now" on any position
3. Fill out the application form
4. Submit and check your email inbox

### Test Analytics
1. Visit any page on your website
2. Check Google Analytics Real-time reports
3. Verify page views are being tracked

---

## Troubleshooting

### EmailJS Not Working
- Verify Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for error logs
- Ensure template variables match exactly
- Check browser console for errors

### Google Analytics Not Tracking
- Verify Measurement ID is correct
- Check if ad blockers are preventing tracking
- Look in browser console for gtag errors
- Visit GA Realtime reports to see if data is flowing

### Newsletter Template Not Found
- Create the `template_newsletter` in EmailJS dashboard
- Update the template ID in `src/components/NewsletterSignup.tsx`
- Test the subscription flow

---

## Support

For any issues or questions:
- Email: meet.bhatt@codenestcollective.net
- Check EmailJS documentation: https://www.emailjs.com/docs/
- Check Google Analytics documentation: https://support.google.com/analytics/
