'use strict';

import { NativeModules } from 'react-native';

export default module.exports = {
  pickDocument(mime = '*/*') {
    return NativeModules.FilePicker.pickDocument(mime);
  },
};
