// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of io.home-assistant
//
// Copyright 2019 Swee Kiat Lim <sweekiat@stanford.edu>
//
// See LICENSE for details
"use strict";

const HomeAssistantSensor = require('./sensor');

module.exports = class HomeAssistantCover extends HomeAssistantSensor {
    async do_set_openclose({ state }) {
        if (this.domain === 'cover') {
            if (state === 'open')
                await this._callService("cover", "open_cover");
            else
                await this._callService("cover", "close_cover");
        } else {
            // For Binary Sensor - Window
            throw new Error(`I regret to inform you that your device does not have an automated ${state} function. You have to open it yourself.`);
        }
    }
};
