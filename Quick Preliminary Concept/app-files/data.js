var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom",
      "name": "Livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.49337165672231,
        "pitch": 0.039414375306201066,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": 2.0434267804844497,
          "pitch": 0.15394946932990905,
          "rotation": 0,
          "target": "2-presentation"
        },
        {
          "yaw": -2.4288510773425998,
          "pitch": 0.08475455640150997,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.549756746407711,
        "pitch": 0.3740346233749836,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": 0.9346410881920022,
          "pitch": 0.4337615473114411,
          "rotation": 0.7853981633974483,
          "target": "0-livingroom"
        },
        {
          "yaw": 2.054193944210242,
          "pitch": 0.2792352220456209,
          "rotation": 0,
          "target": "2-presentation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-presentation",
      "name": "Presentation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1553181119290272,
        "pitch": 0.34597949536282435,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": -1.848771163374714,
          "pitch": 0.2975775970530101,
          "rotation": 0,
          "target": "0-livingroom"
        },
        {
          "yaw": -2.3671046529807374,
          "pitch": 0.11957884575680566,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Chilewich Quick Preliminary Concept",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
