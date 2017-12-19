"use strict";

import AppDispatcher from "../_dispatcher/AppDispatcher";
import CalculatorConstants from "../_constants/CalculatorConstants";

var CalculatorActions = {
  typeKey: function(keyType, keyValue) {
    AppDispatcher.dispatch({
      type: CalculatorConstants.KEY_TYPED,
      keyType: keyType,
      keyValue: keyValue
    });
  },

  typeFormula: function(formula) {
    AppDispatcher.dispatch({
      type: CalculatorConstants.FORMULA_TYPED,
      formula: formula
    });
  }
};

module.exports = CalculatorActions;
