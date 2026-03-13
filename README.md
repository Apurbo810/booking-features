
```
booking-ai-test
├─ api
│  └─ seed.ts
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ admin
│  │  └─ page.tsx
│  ├─ api
│  │  ├─ admin
│  │  │  └─ bookings
│  │  │     └─ route.ts
│  │  ├─ auth
│  │  │  ├─ login
│  │  │  │  └─ route.ts
│  │  │  └─ register
│  │  │     └─ route.ts
│  │  ├─ bookings
│  │  │  ├─ route.ts
│  │  │  └─ [roomId]
│  │  │     └─ route.ts
│  │  ├─ checkout
│  │  │  └─ route.ts
│  │  ├─ rooms
│  │  │  ├─ route.ts
│  │  │  └─ [id]
│  │  │     └─ route.ts
│  │  └─ seed
│  │     └─ route.ts
│  ├─ blog
│  │  └─ page.tsx
│  ├─ contact
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ gallery
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ login
│  │  └─ page.tsx
│  ├─ page.tsx
│  ├─ register
│  │  └─ page.tsx
│  ├─ rooms
│  │  ├─ page.tsx
│  │  └─ [id]
│  │     └─ page.tsx
│  └─ success
│     └─ page.tsx
├─ components
│  ├─ BookingCalendar.tsx
│  ├─ BookingForm.tsx
│  ├─ Footer.tsx
│  ├─ Navbar.tsx
│  └─ RoomCard.tsx
├─ eslint.config.mjs
├─ lib
│  ├─ auth.ts
│  ├─ cloudinary.ts
│  ├─ email.ts
│  ├─ jwt.ts
│  └─ mongodb.ts
├─ models
│  ├─ Booking.ts
│  ├─ Room.ts
│  └─ User.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ css
│  │  ├─ animate.min.css
│  │  ├─ bootstrap-grid.css
│  │  ├─ bootstrap-grid.css.map
│  │  ├─ bootstrap-grid.min.css
│  │  ├─ bootstrap-grid.min.css.map
│  │  ├─ bootstrap-reboot.css
│  │  ├─ bootstrap-reboot.css.map
│  │  ├─ bootstrap-reboot.min.css
│  │  ├─ bootstrap-reboot.min.css.map
│  │  ├─ bootstrap.css
│  │  ├─ bootstrap.css.map
│  │  ├─ bootstrap.min.css
│  │  ├─ bootstrap.min.css.map
│  │  ├─ default-skin.css
│  │  ├─ font-awesome.min.css
│  │  ├─ icomoon.css
│  │  ├─ jquery-ui.css
│  │  ├─ jquery.fancybox.min.css
│  │  ├─ jquery.mCustomScrollbar.min.css
│  │  ├─ meanmenu.css
│  │  ├─ nice-select.css
│  │  ├─ normalize.css
│  │  ├─ owl.carousel.min.css
│  │  ├─ responsive.css
│  │  ├─ slick.css
│  │  └─ style.css
│  ├─ deluxe.jpg
│  ├─ family.jpg
│  ├─ fonts
│  │  ├─ fontawesome-webfont.eot
│  │  ├─ fontawesome-webfont.svg
│  │  ├─ fontawesome-webfont.ttf
│  │  ├─ fontawesome-webfont.woff
│  │  ├─ fontawesome-webfont.woff2
│  │  ├─ FontAwesome.otf
│  │  ├─ IcoMoon-Free.ttf
│  │  ├─ Poppins-Black.ttf
│  │  ├─ Poppins-BlackItalic.ttf
│  │  ├─ Poppins-Bold.ttf
│  │  ├─ Poppins-BoldItalic.ttf
│  │  ├─ Poppins-ExtraBold.ttf
│  │  ├─ Poppins-ExtraBoldItalic.ttf
│  │  ├─ Poppins-ExtraLight.ttf
│  │  ├─ Poppins-ExtraLightItalic.ttf
│  │  ├─ Poppins-Italic.ttf
│  │  ├─ Poppins-Light.ttf
│  │  ├─ Poppins-LightItalic.ttf
│  │  ├─ Poppins-Medium.ttf
│  │  ├─ Poppins-MediumItalic.ttf
│  │  ├─ Poppins-Regular.ttf
│  │  ├─ Poppins-SemiBold.ttf
│  │  ├─ Poppins-SemiBoldItalic.ttf
│  │  ├─ Poppins-Thin.ttf
│  │  └─ Poppins-ThinItalic.ttf
│  ├─ images
│  │  ├─ about.png
│  │  ├─ banner1.jpg
│  │  ├─ banner2.jpg
│  │  ├─ banner3.jpg
│  │  ├─ blog1.jpg
│  │  ├─ blog2.jpg
│  │  ├─ blog3.jpg
│  │  ├─ blog_bg.jpg
│  │  ├─ date.png
│  │  ├─ gallery1.jpg
│  │  ├─ gallery2.jpg
│  │  ├─ gallery3.jpg
│  │  ├─ gallery4.jpg
│  │  ├─ gallery5.jpg
│  │  ├─ gallery6.jpg
│  │  ├─ gallery7.jpg
│  │  ├─ gallery8.jpg
│  │  ├─ loading.gif
│  │  ├─ logo.png
│  │  ├─ menu_icon.png
│  │  ├─ room1.jpg
│  │  ├─ room2.jpg
│  │  ├─ room3.jpg
│  │  ├─ room4.jpg
│  │  ├─ room5.jpg
│  │  └─ room6.jpg
│  ├─ js
│  │  ├─ bootstrap.bundle.js
│  │  ├─ bootstrap.bundle.js.map
│  │  ├─ bootstrap.bundle.min.js
│  │  ├─ bootstrap.bundle.min.js.map
│  │  ├─ bootstrap.js
│  │  ├─ bootstrap.js.map
│  │  ├─ bootstrap.min.js
│  │  ├─ bootstrap.min.js.map
│  │  ├─ custom.js
│  │  ├─ jquery-3.0.0.min.js
│  │  ├─ jquery.mCustomScrollbar.concat.min.js
│  │  ├─ jquery.min.js
│  │  ├─ jquery.validate.js
│  │  ├─ modernizer.js
│  │  ├─ plugin.js
│  │  ├─ popper.min.js
│  │  ├─ revolution
│  │  │  ├─ assets
│  │  │  │  ├─ coloredbg.png
│  │  │  │  ├─ gridtile.png
│  │  │  │  ├─ gridtile_3x3.png
│  │  │  │  ├─ gridtile_3x3_white.png
│  │  │  │  ├─ gridtile_white.png
│  │  │  │  └─ loader.gif
│  │  │  ├─ css
│  │  │  │  ├─ closedhand.html
│  │  │  │  ├─ layers.css
│  │  │  │  ├─ navigation.css
│  │  │  │  ├─ openhand.html
│  │  │  │  └─ settings.css
│  │  │  ├─ fonts
│  │  │  │  ├─ pe-icon-7-stroke
│  │  │  │  │  ├─ css
│  │  │  │  │  │  └─ pe-icon-7-stroke.css
│  │  │  │  │  └─ fonts
│  │  │  │  │     ├─ Pe-icon-7-strokebb1d.eot
│  │  │  │  │     ├─ Pe-icon-7-strokebb1d.svg
│  │  │  │  │     ├─ Pe-icon-7-strokebb1d.ttf
│  │  │  │  │     ├─ Pe-icon-7-strokebb1d.woff
│  │  │  │  │     └─ Pe-icon-7-stroked41d.eot
│  │  │  │  └─ revicons
│  │  │  │     ├─ revicons90c6.eot
│  │  │  │     ├─ revicons90c6.svg
│  │  │  │     ├─ revicons90c6.ttf
│  │  │  │     └─ revicons90c6.woff
│  │  │  └─ js
│  │  │     ├─ extensions
│  │  │     │  ├─ revolution.extension.actions.min.js
│  │  │     │  ├─ revolution.extension.carousel.min.js
│  │  │     │  ├─ revolution.extension.kenburn.min.js
│  │  │     │  ├─ revolution.extension.layeranimation.min.js
│  │  │     │  ├─ revolution.extension.migration.min.js
│  │  │     │  ├─ revolution.extension.navigation.min.js
│  │  │     │  ├─ revolution.extension.parallax.min.js
│  │  │     │  ├─ revolution.extension.slideanims.min.js
│  │  │     │  └─ revolution.extension.video.min.js
│  │  │     ├─ jquery.themepunch.revolution.min.js
│  │  │     └─ jquery.themepunch.tools.min.js
│  │  └─ slider-setting.js
│  └─ single.jpg
├─ README.md
└─ tsconfig.json

```