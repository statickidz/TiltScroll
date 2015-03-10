;(function() {
    'use strict';

    /**
     * @preserve TiltScroll: Scroll webpage to top on device tilt.
     *
     * @codingstandard statickidz
     * @copyright Adrián Barrio Andrés https://statickidz.com [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */


    /**
     * Sensitivity when device tilt [0,-180]
     *
     * @type number
     */
    var eventSense;

    /**
     * Instantiate TiltScroll listeners.
     *
     * @constructor
     * @param {Object} [options={}] The options to override the defaults
     */
    function TiltScroll(options) {
        options = options || {};

        eventSense = options.eventSense || -15;

        //Attach all listeners
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", handleTilt, true);
        } else if (window.DeviceMotionEvent) {
            window.addEventListener("devicemotion", handleTilt, true);
        } else {
            window.addEventListener("MozOrientation", handleTilt, true);
        }
    }

    function handleTilt(event) {
        var x = event.beta; // In degree in the range [-180,180]
        var y = event.gamma; // In degree in the range [-90,90]

        if (x < eventSense && window.orientation == 0) {
            //Portrait devices
            doScroll(document.body, 0, 600);
        } else if (x < eventSense && (!window.orientation || window.orientation === 'undefined')) {
            //Apple MacBook or other devices without {window.orientation}
            doScroll(document.body, 0, 600);
        }
    };

    /**
     * Function to scroll body to top
     *
     * @type function
     */
    function doScroll(element, to, duration) {
        if (duration < 0) return;

        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        var timer = setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            doScroll(element, to, duration - 10);
        }, 10);

    };


    /**
     * Factory method for creating a TiltScroll object
     *
     * @param {Object} [options={}] The options to override the defaults
     */
    TiltScroll.attach = function(options) {
        return new TiltScroll(options);
    };


    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            return TiltScroll;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = TiltScroll.attach;
        module.exports.TiltScroll = TiltScroll;
    } else {
        window.TiltScroll = TiltScroll;
    }

}());