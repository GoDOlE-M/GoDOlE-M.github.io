const head = document.head;

const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'utf-8');
head.appendChild(metaCharset);

const metaDesc = document.createElement('meta');
metaDesc.setAttribute('name', 'description');
metaDesc.setAttribute('content', 'Unreal Engine UI programmer');
head.appendChild(metaDesc);

const metaAuthor = document.createElement('meta');
metaAuthor.setAttribute('name', 'author');
metaAuthor.setAttribute('content', 'GodOlE');
head.appendChild(metaAuthor);

const metaFediverse = document.createElement('meta');
metaFediverse.setAttribute('name', 'fediverse:creator');
metaFediverse.setAttribute('content', 'GodOlE');
head.appendChild(metaFediverse);

const metaOGType = document.createElement('meta');
metaOGType.setAttribute('property', 'og:type');
metaOGType.setAttribute('content', 'website');
head.appendChild(metaOGType);

const metaOGLocale = document.createElement('meta');
metaOGLocale.setAttribute('property', 'og:locale');
metaOGLocale.setAttribute('content', 'en_US');
head.appendChild(metaOGLocale);

const metaOGSiteName = document.createElement('meta');
metaOGSiteName.setAttribute('property', 'og:site_name');
metaOGSiteName.setAttribute('content', 'GodOlE');
head.appendChild(metaOGSiteName);

const metaOGTitle = document.createElement('meta');
metaOGTitle.setAttribute('property', 'og:title');
metaOGTitle.setAttribute('content', 'Unreal Engine');
head.appendChild(metaOGTitle);

const metaOGUrl = document.createElement('meta');
metaOGUrl.setAttribute('property', 'og:url');
metaOGUrl.setAttribute('content', 'https://GodOlE/unreal/');
head.appendChild(metaOGUrl);

const metaOGDesc = document.createElement('meta');
metaOGDesc.setAttribute('property', 'og:description');
metaOGDesc.setAttribute('content', 'Unreal Engine UI programmer');
head.appendChild(metaOGDesc);

const metaOGImage = document.createElement('meta');
metaOGImage.setAttribute('property', 'og:image');
metaOGImage.setAttribute('content', '');
head.appendChild(metaOGImage);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

const metaRobots = document.createElement('meta');
metaRobots.setAttribute('name', 'robots');
metaRobots.setAttribute('content', 'noai, noimageai');
head.appendChild(metaRobots);

// Create and append <link> tags
const linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', '/root/assets/css/myStyles.css');
head.appendChild(linkStylesheet);

const linkIcon = document.createElement('link');
linkIcon.setAttribute('rel', 'icon');
linkIcon.setAttribute('type', 'image/png');
linkIcon.setAttribute('href', '/root/images/logo/logo32.png');
linkIcon.setAttribute('sizes', '32x32');
head.appendChild(linkIcon);

// Set theme color
const metaThemeColor = document.createElement('meta');
metaThemeColor.setAttribute('name', 'theme-color');
metaThemeColor.setAttribute('content', '#4efa82');
head.appendChild(metaThemeColor);