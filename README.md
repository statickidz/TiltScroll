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

To instantiate TiltScroll you only need to call the main function like this:

```js
	<script>
		TiltScroll();
	</script>
```

Or, if you're using jQuery:

```js
$(function() {
	TiltScroll();
});
```

## Options ##

You can change the tilt sensitivity that makes the scroll, by default -15, the posible values its 0 to -180.

```js
	<script>
		TiltScroll({
			deviceSense: -30
		});
	</script>
```


## Credits and collaboration ##

TiltScroll is maintained by [Adrián Barrio Andrés](https://statickidz.com) and the original idea was for [Eduardo Matias](https://twitter.com/Madwardan). All open source code released by StaticKidz is licenced under the MIT licence.
