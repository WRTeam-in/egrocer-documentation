---
sidebar_position: 19
---

# Google Maps & Firebase API Integration Guide

This document explains how to integrate Google Maps & Firebase APIs for:
- **Mobile App** (Android & iOS)
- **Web**
- **Admin Panel**
- Key restrictions & security best practices
- Quota & alert setup

---

## 1. APP API INTEGRATION

### **Android**
Required APIs:
1. Maps SDK for Android  
2. Places API (NEW)  
3. Places API  
4. Geocoding API  

**Key Generation & Restriction:**
- Generate **Android API Key** (auto-generated from Firebase project).
- Restrict with:
  - **Package Name**: `com.example.app`
  - **SHA-1 Fingerprint** (from Firebase settings)
- Restrict Libraries:
  - Maps SDK for Android
  - Places API (NEW)
  - Places API
  - Geocoding API
- **Platform Identification**: Android
![Android API Key Restriction Screenshot](/img/admin-panel/map-key-app-android.webp)

---

### **iOS**
Required APIs:
1. Maps SDK for iOS  
2. Identity Toolkit API  
3. Firebase Installations API  
4. Firebase Cloud Messaging API  
5. FCM Registration API  
6. Firebase App Check API  

**Key Generation & Restriction:**
- Generate **iOS API Key** (auto-generated from Firebase project).
- Restrict with:
  - **Bundle ID**: `com.example.iosapp`
- Enable required APIs:
  - Maps SDK for iOS
  - Identity Toolkit API
  - Firebase Installations API
  - Firebase Cloud Messaging API
  - FCM Registration API
  - Firebase App Check API

![ios API Key Restriction Screenshot](/img/admin-panel/map-key-app-ios.webp)

---

## 2. WEB API INTEGRATION

Required APIs:
1. Maps JavaScript API  
2. Places API  
3. Places API (NEW)  
4. Geocoding API  

**Key Generation & Restriction:**
- Use **Browser API Key** (auto-generated from Firebase project).
- Restrict with:
  - **Firebase Auth Domain**: `https://firebaseappid.firebaseapp.com/*`
  - Additional custom domains if needed: `https://example.com/*`
- Enable required APIs:
  - Maps JavaScript API
  - Places API
  - Places API (NEW)
  - Geocoding API
  - FCM Registration API
  - Firebase Management API
  - Firebase App Check API
  - Firebase In-App Messaging API
  - Firebase Installations API
  - Firebase Remote Config API
  - Firebase Remote Config Realtime API
  - Cloud Storage for Firebase API
  - Identity Toolkit API
  - Token Service API
  - Cloud Logging API

![Web API Key Restriction Screenshot](/img/admin-panel/map-key-web.webp)

---

## 3. ADMIN PANEL API INTEGRATION

Required APIs:
1. Geocoding API  
2. Places API  
3. Places API (NEW)  
4. Maps JavaScript API  

**Key Generation & Restriction:**
- Create **two API Keys** from Google Cloud Console → "Create Credentials" → API Key.

### 3.1 Place API Key
- Restrict by:
  - **IP Address**: `XXX.XXX.XXX.XXX` (Server IP)
- Enable Libraries:
  - Places API
  - Places API (NEW)
  - Distance Matrix API

![Penal API Key Restriction Screenshot](/img/admin-panel/map-key-penal-place-suggestion.webp)

### 3.2 Map API Key
- Restrict by:
  - **Domain**: `admin.example.com` and subdomains
- Enable Libraries:
  - Maps JavaScript API
  - Places API
  - Places API (NEW)

![Penal API Key Restriction Screenshot](/img/admin-panel/map-key-penal-map-render.webp)

![Penal API Key Restriction Screenshot](/img/admin-panel/map-key-penal-setting.webp)

---

## 4. QUOTA & ALERT SETUP

### **Quota Setup**
- Go to **Google Cloud Console → APIs & Services → Quotas**.
- Set limits for:
  - Requests per day
- Recommended quota limits:
    - **Maps JavaScript API**: 1000 requests/day  
    - **For Places API**: set limit to 225 requests/day.
    - **For other APIs (Maps, Distance, etc.)**: set limit to 1000, if not setting based on actual usage.
    - **Do not exceed 1000 for any API unless necessary.**

### **Alert Setup**
- Go to **Google Cloud Console → Billing → Budgets & alerts**.
- Create budget alerts at:
  - **50% usage**
  - **75% usage**
  - **90% usage**
- Email alerts to the dev & admin team.

- **💡 Set up Budget and Quota Notifications**
    - [Budget & Alert Setup Guide](https://drive.google.com/file/d/1bbDnAUpHPuF5xhkGuAe6FBrO8nwoKRNb/view?usp=sharing)
    - [Quota Setup Guide](https://drive.google.com/file/d/1_1zJSNMRnBfrXXYoCm9S4AMqmyTECV6E/view?usp=sharing)

---

## 5. REFERENCE LINKS
- [Google Cloud Console](https://console.cloud.google.com/)
- [Restricting API Keys](https://cloud.google.com/docs/authentication/api-keys#api_key_restrictions)
- [Firebase Project Settings](https://console.firebase.google.com/)

---

**📌 NOTE:** Always restrict your API keys to avoid unauthorized usage and unexpected billing.
