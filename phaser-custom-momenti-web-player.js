require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

var Phaser = {
  Cache: require('cache'),
  Cameras: { Scene2D: require('cameras/2d') },
  Core: require('core'),
  Class: require('utils/Class'),
  Data: require('data'),
  Display: {
    Masks: require('display/mask'),
    Color: require('display/color'),
  },
  Events: require('events/EventEmitter'),
  Game: require('core/Game'),
  GameObjects: {
    DisplayList: require('gameobjects/DisplayList'),
    GameObjectCreator: require('gameobjects/GameObjectCreator'),
    GameObjectFactory: require('gameobjects/GameObjectFactory'),
    UpdateList: require('gameobjects/UpdateList'),
    GameObject: require('gameobjects/GameObject'),
    Graphics: require('gameobjects/graphics/Graphics.js'),
    Image: require('gameobjects/image/Image'),
    Factories: {
      Graphics: require('gameobjects/graphics/GraphicsFactory'),
      Image: require('gameobjects/image/ImageFactory'),
      Rectangle: require('gameobjects/shape/rectangle/RectangleFactory'),
      Arc: require('gameobjects/shape/arc/ArcFactory'),
    },
    Creators: {
      Graphics: require('gameobjects/graphics/GraphicsCreator'),
      Image: require('gameobjects/image/ImageCreator'),
    },
  },
  Input: {
    Events: require('input/events'),
    InputManager: require('input/InputManager'),
    InputPlugin: require('input/InputPlugin'),
    InputPluginCache: require('input/InputPluginCache'),
    Mouse: require('input/mouse'),
    Pointer: require('input/Pointer'),
    Touch: require('input/touch'),
  },
  Geom: require('geom'),
  Loader: {
    FileTypes: {
      HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
      ImageFile: require('loader/filetypes/ImageFile'),
    },
    File: require('loader/File'),
    FileTypesManager: require('loader/FileTypesManager'),
    GetURL: require('loader/GetURL'),
    LoaderPlugin: require('loader/LoaderPlugin'),
  },
  Math: {
    Angle: require('math/angle'),
    Between: require('math/Between'),
    Distance: require('math/distance'),
    RadToDeg: require('math/RadToDeg'),
    Vector2: require('math/Vector2'),
  },
  Curves: {
    Path: require('curves/path/Path'),
  },
  Scale: require('scale'),
  Scene: require('scene/Scene'),
  Scenes: require('scene'),
  Textures: require('textures'),
  Time: require('time'),
  Sound: require('sound'),
  Tweens: require('tweens'),
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
