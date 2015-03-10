# TiltScroll #

TiltScroll is a simple, easy-to-use library to make your website sensitive event tilting the device and automatically move up.

TiltScroll is developed by [StaticKidz](https://statickidz.com/).

## Compatibility ##

I tried and tested on the following mobile browsers and devices:

* Mobile Safari on iOS 8
* Chrome on iOS 8
* Chrome on Android (ICS)
* MacBook (Early 2011) and Chrome 

## Usage ##

Include tiltscroll.js in your JavaScript bundle or add it to your HTML page like this:

```html
<script type="application/javascript" src="/path/to/tiltscroll.js"></script>
```

TiltScroll instantiates automatically, don't worry fot that. In addition, you can override default options.

## Options ##

Change the tilt sensitivity that makes the scroll, by default -15, the posible values its 0 to -180.

```js
TiltScroll({
	deviceSense: -30
});
```

Or change the scroll duration time in miliseconds:

```js
TiltScroll({
	scrollDuration: 5500
});
```


## Credits and collaboration ##

TiltScroll is maintained by [Adrián Barrio Andrés](https://statickidz.com) and the original idea was for [Eduardo Matias](https://twitter.com/Madwardan). All open source code released by StaticKidz is licenced under the MIT licence.
