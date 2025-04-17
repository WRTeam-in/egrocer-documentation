---
sidebar_position: 7
---

# Google Map Api Keys

Set here Google place API key. You can get full tutorial from the Flutter App documentation.

![Google Place API Keys](/img/admin-panel/google_place_api_keys.webp)

## Google Maps Integration

Learn how to set up and configure Google Maps API for your eGrocer store.

### Getting Started

1. **Create Google Cloud Project**

   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable billing for the project

2. **Enable Required APIs**
   - Maps JavaScript API
   - Places API
   - Geocoding API
   - Distance Matrix API
   - Directions API

### Generate API Key

1. **Create Credentials**

   - Go to Credentials page
   - Click "Create Credentials"
   - Select "API Key"

2. **Restrict API Key**
   - Set application restrictions
   - Add HTTP referrers
   - Limit to specific APIs

### Configure in Admin Panel

1. **Access Settings**

   - Login to admin panel
   - Go to Settings > Google Maps
   - Enter API key

2. **Additional Settings**
   - Default map center
   - Default zoom level
   - Map style options

### Testing Configuration

1. **Verify Map Display**

   - Check map loading
   - Test location search
   - Verify geocoding

2. **Test Features**
   - Address autocomplete
   - Distance calculation
   - Route planning

## API Usage

### Store Location

```javascript
// Example map initialization
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: YOUR_LAT, lng: YOUR_LNG },
    zoom: 15,
  });
}
```

### Delivery Zone

```javascript
// Example delivery zone circle
const deliveryZone = new google.maps.Circle({
  map: map,
  center: storeLocation,
  radius: deliveryRadius,
});
```

### Address Autocomplete

```javascript
// Example autocomplete implementation
const autocomplete = new google.maps.places.Autocomplete(
  document.getElementById("address-input"),
  { types: ["address"] }
);
```

## Best Practices

1. **API Key Security**

   - Restrict API key usage
   - Monitor API usage
   - Regular key rotation

2. **Performance**

   - Load APIs asynchronously
   - Use lazy loading
   - Implement caching

3. **Error Handling**
   - Handle API load failures
   - Implement fallbacks
   - Monitor errors

## Troubleshooting

### Common Issues

1. **Map Not Loading**

   - Check API key
   - Verify domain restrictions
   - Console for errors

2. **Geocoding Failures**

   - Check API quota
   - Verify address format
   - Test API access

3. **Billing Issues**
   - Check billing status
   - Monitor usage
   - Set budget alerts

## Important Notes

1. **Usage Limits**

   - Monitor API usage
   - Set up alerts
   - Check pricing

2. **Updates**

   - Keep APIs updated
   - Check deprecations
   - Follow changes

3. **Support**
   - Google Maps support
   - Documentation
   - Community forums
