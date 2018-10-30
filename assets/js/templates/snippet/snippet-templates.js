define(function(require) {
  var formname               = require('text!templates/snippet/formname.html')
  , search                   = require('text!templates/snippet/searchinput.html')
  , appendedcheckbox         = require('text!templates/snippet/appendedcheckbox.html')
  , appendedtext             = require('text!templates/snippet/appendedtext.html')
  , image                    = require('text!templates/snippet/image.html')
  , video                    = require('text!templates/snippet/video.html')
  , button                   = require('text!templates/snippet/button.html')
  , buttondouble             = require('text!templates/snippet/buttondouble.html')
  , buttondropdown           = require('text!templates/snippet/buttondropdown.html')
  , multiplecheckboxes       = require('text!templates/snippet/multiplecheckboxes.html')
  , checkbox                 = require('text!templates/snippet/checkbox.html')
  , multiplecheckboxesinline = require('text!templates/snippet/multiplecheckboxesinline.html')
  , radios                   = require('text!templates/snippet/radios.html')
  , multipleradiosinline     = require('text!templates/snippet/multipleradiosinline.html')
  , numericinput             = require('text!templates/snippet/numericinput.html')
  , passwordinput            = require('text!templates/snippet/passwordinput.html')
  , prependedcheckbox        = require('text!templates/snippet/prependedcheckbox.html')
  , prependedtext            = require('text!templates/snippet/prependedtext.html')
  , searchinput              = require('text!templates/snippet/searchinput.html')
  , select                   = require('text!templates/snippet/select.html')
  , selectmultiple           = require('text!templates/snippet/selectmultiple.html')
  , textarea                 = require('text!templates/snippet/textarea.html')
  , textinput                = require('text!templates/snippet/textinput.html');

  return {
    formname                   : formname
    , search                   : search
    , appendedcheckbox         : appendedcheckbox
    , appendedtext             : appendedtext
    , image                    : image
    , video                    : video
    , singlebutton             : button
    , doublebutton             : buttondouble
    , buttondropdown           : buttondropdown
    , checkbox                 : checkbox
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , radios                   : radios
    , multipleradiosinline     : multipleradiosinline
    , numericinput             : numericinput
    , passwordinput            : passwordinput
    , prependedcheckbox        : prependedcheckbox
    , prependedtext            : prependedtext
    , searchinput              : searchinput
    , select                   : select
    , selectmultiple           : selectmultiple
    , textarea                 : textarea
    , textinput                : textinput
  }
});
